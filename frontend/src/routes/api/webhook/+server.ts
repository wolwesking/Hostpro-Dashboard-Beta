import { stripe_webhook } from "$env/static/private";
import stripe from "$lib/server/stripeInit";
import { json } from '@sveltejs/kit';
import { buffer } from 'node:stream/consumers';

export async function POST ({request}){
    let event;

    try {
        // Get the raw body from the request to verify Stripe signature
        const body:any = await buffer(request.body);
        const sig:any = request.headers.get('stripe-signature');

        // Verify webhook signature
        event = stripe.webhooks.constructEvent(body, sig, stripe_webhook);
    } catch (err:any) {
        console.error('Webhook signature verification failed.', err.message);
        return json({ error: 'Webhook signature verification failed.' }, { status: 400 });
    }

    // Handle the event based on the type
    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                console.log('Payment was successful!', session);
                // Handle successful payment, such as updating your database
                
                break;
            }

            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return a response to acknowledge receipt of the event
        return json({ received: true });
    } catch (error) {
        console.error(`Error processing event ${event.type}:`, error);
        return json({ error: `Error processing event ${event.type}` }, { status: 500 });
    }
};

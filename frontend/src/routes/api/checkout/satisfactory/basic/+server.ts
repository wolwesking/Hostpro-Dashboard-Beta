import { cancel_callback, success_callback } from '$env/static/private';
import stripe from '$lib/server/stripeInit';
import { json } from '@sveltejs/kit';

export async function POST() {
    try {
        // Create a Checkout Session for the basic plan
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: "price_1PxPnqAX9iTkR4P4RQLOnARR",
                    quantity: 1,
                },
            ],
            success_url: success_callback,
            cancel_url: cancel_callback,
        });

        return json({ url: session.url });
    } catch (error) {
        console.error('Error creating Stripe Checkout session:', error);
        return json({ error: 'Failed to create session' }, { status: 500 });
    }
}

import { cancel_callback, success_callback } from '$env/static/private';
import stripe from '$lib/server/stripeInit';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    try {
        const { clientId } = await request.json();

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
            client_reference_id: clientId,
        });

        return json({ url: session.url });
    } catch (error) {
        console.error('Error creating Stripe Checkout session:', error);
        return json({ error: 'Failed to create session' }, { status: 500 });
    }
}

import { stripe_secret_key } from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(stripe_secret_key);

export default stripe;
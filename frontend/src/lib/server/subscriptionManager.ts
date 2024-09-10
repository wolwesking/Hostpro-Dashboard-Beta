import { activateSatisfactoryBasic } from "./actiavte/satisfactory";
import stripe from "./stripeInit";

// Satisfactory subscriptions
const satisfactory_basic_id = "price_1PxPnqAX9iTkR4P4RQLOnARR"

export async function activateSubscription(session: any, lineItems: any) {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 1);

    lineItems.data.forEach(lineItem => {
        if (lineItem.price.id === satisfactory_basic_id) {
            const data = {
                "Payment_ID": session.id,
                "CustomerName": session.customer_details.name,
                "CustomerEmail": session.customer_details.email,
                "Owner": session.client_reference_id,
                "Service": "satisfactory_basic",
                "Amount": session.amount_total,
                "Valid": futureDate,
            };
            activateSatisfactoryBasic(data);
        }
    })




}

export async function renewSubscription(userId: string, subscriptionId: string) {

}
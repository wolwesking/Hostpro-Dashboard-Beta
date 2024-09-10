import { getUserData } from "./AuthHandler";

export default async function satisfactoryBasic() {
    const userdata:any = await getUserData();
    
    try {
        const response = await fetch('/api/checkout/satisfactory/basic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clientId: userdata.id, // Ensure `userdata.id` is valid
            })
        });

        const data = await response.json();

        if (data.url) {
            window.location.href = data.url; // Redirect to the checkout URL
        } else {
            console.error('Failed to get the checkout URL');
        }
    } catch (error) {
        console.error('Error during checkout:', error);
    }
}

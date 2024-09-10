export default async function satisfactoryBasic() {
    try {
        const response = await fetch('/api/checkout/satisfactory/basic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if (data.url) {
            window.location = data.url;
        } else {
            console.error('Failed to get the checkout URL');
        }
    } catch (error) {
        console.error('Error during checkout:', error);
    }
}
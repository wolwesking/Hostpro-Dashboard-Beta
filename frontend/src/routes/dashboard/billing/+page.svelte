<script>
	import ServiceOverview from '$lib/components/Billing/ServiceOverview.svelte';
	import BillingOverview from '$lib/components/Billing/SubscriptionView.svelte';
	import satisfactoryBasic from '$lib/Subscription';
	const currentSubscriptions = [
		{ name: 'Basic Plan', status: 'Active', renewDate: 'June 15, 2024' },
		{ name: 'Pro Plan', status: 'Expired', renewDate: 'March 31, 2023' },
		{ name: 'Enterprise Plan', status: 'Active', renewDate: 'December 1, 2024' }
	];

	const services = [
		{
			name: 'Basic',
			description: ['2gb ram', '1 vcore', '10gb ssd'],
			price: '4.00',
			available: true,
			handlePurchase: async()=>await satisfactoryBasic()
		},
		{
			name: 'Recomended',
			description: ['4gb ram', '2 vcore', '20gb ssd'],
			price: '8.00',
			available: true
		},
		{
			name: 'Performance',
			description: ['12gb ram', '4 vcore', '40gb ssd'],
			price: '18.00',
			available: true
		}
	];
	
</script>

<BillingOverview plans={currentSubscriptions} />
<ServiceOverview {services} />

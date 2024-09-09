<script lang="ts">
	import BillingCard from './SubscriptionCard.svelte';

	// Sample plans data
	export let plans;
</script>

<div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
	<h1 class="text-2xl font-bold mb-6 text-white">Billing Overview</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each plans as plan}
			<BillingCard {plan} />
		{/each}
	</div>
</div>

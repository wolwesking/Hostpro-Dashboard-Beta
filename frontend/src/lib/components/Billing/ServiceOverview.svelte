<script lang="ts">
	import ServicesCard from './ServicesCard.svelte';

	// Sample services data
	export let services;
</script>

<div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
	<h1 class="text-2xl font-bold mb-6 text-white dark:text-white">Available Services</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each services as service}
			<ServicesCard {service} />
		{/each}
	</div>
</div>

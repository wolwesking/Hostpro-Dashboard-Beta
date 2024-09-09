<script lang="ts">
	import ServerManager from './ServerManager.svelte';

    export let servers;
</script>

<div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-gray-100">
	<h1 class="text-2xl font-bold mb-6">Server Management</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		{#each servers as server}
			<ServerManager {server} />
		{/each}
	</div>
</div>

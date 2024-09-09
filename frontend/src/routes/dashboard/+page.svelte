<script lang="ts">
	import { goto } from '$app/navigation';
	import { isAuthenticated } from '$lib/AuthHandler';
	import { onMount } from 'svelte';
	onMount(async () => {
		const res: any = await isAuthenticated();
		if (res === true) {
			goto('dashboard/servers');
		}
		else
		{
			goto("/");
		}
	});
</script>

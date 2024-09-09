<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { getUserData, LogoutUser } from '$lib/AuthHandler';
	import { onMount } from 'svelte';

	let username = 'username';

	// Fetch user data on component mount
	onMount(async () => {
		try {
			// Assuming getUserData is a function that fetches user data
			const res: any = await getUserData();
			// Update the reactive variable
			username = res.username;
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	});

	// Derive the current path to highlight the active link
	const currentPath = derived(page, ($page) => $page.url.pathname);

	// Navigation handling function
	function navigate(path: string) {
		goto(path);
	}

	// Logout function (you can implement the actual logout logic here)
	function logout() {
		LogoutUser();
		goto('/'); // Redirect to login page after logout
	}
</script>

<!-- Sidebar Container -->
<aside class="fixed z-10 flex h-screen w-64 flex-col rounded-r-2xl bg-black text-white">
	<!-- Header -->
	<div class="flex h-16 items-center justify-center border-b border-gray-700">
		<h2 class="text-2xl font-bold">Game Dashboard</h2>
	</div>
	<!-- Navigation Links -->
	<nav class="flex-1 space-y-2 py-6">
		<!-- Servers Link -->
		<button
			class={`flex w-full items-center gap-3 px-6 py-3 text-lg font-medium transition-colors rounded-r-3xl 
		${$currentPath === '/dashboard/servers' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
			on:click={() => navigate('/dashboard/servers')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			>
				<rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
				<rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
				<line x1="6" x2="6.01" y1="6" y2="6" />
				<line x1="6" x2="6.01" y1="18" y2="18" />
			</svg>
			Servers
		</button>

		<!-- Billing Link -->
		<button
			class={`flex w-full items-center gap-3 px-6 py-3 text-lg font-medium transition-colors rounded-r-3xl 
		${$currentPath === '/dashboard/billing' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
			on:click={() => navigate('/dashboard/billing')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			>
				<rect width="20" height="14" x="2" y="5" rx="2" />
				<line x1="2" x2="22" y1="10" y2="10" />
			</svg>
			Billing
		</button>
	</nav>

	<!-- Logout Button at the Bottom -->
	<div class="mb-6 px-6">
		<p class="text-center">{username}</p>
		<br />
		<button
			class="flex w-full items-center gap-3 px-6 py-3 text-lg font-medium transition-colors rounded-3xl bg-red-600 hover:bg-red-700"
			on:click={logout}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-5 w-5"
			>
				<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
				<polyline points="16 17 21 12 16 7" />
				<line x1="21" x2="9" y1="12" y2="12" />
			</svg>
			Logout
		</button>
	</div>
</aside>

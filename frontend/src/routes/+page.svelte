<script lang="ts">
	import { getUserData } from "$lib/AuthHandler";
	import { onMount } from "svelte";


	let isRegistering = false;
	let email = '';
	let username = '';
	let password = '';
	let confirmPassword = '';
	let errorMessage = '';

	onMount(async()=>{
		await getUserData();
	})

	const toggleRegistering = () => {
		isRegistering = !isRegistering;
		errorMessage = '';
	};

	const handleSubmit = ()=>{}
</script>

<!-- Main Container -->
<div class="flex min-h-screen items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-6">
		<!-- Error Message Display -->
		{#if errorMessage}
			<div class="rounded-md bg-red-900 px-4 py-3 text-red-200 border border-red-700">
				<p>{errorMessage}</p>
			</div>
		{/if}

		<!-- Form Container -->
		<div class="rounded-lg bg-gray-900 p-8 shadow-md border border-gray-800">
			<h2 class="text-2xl font-bold text-white mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
			<form class="space-y-4" on:submit={handleSubmit}>
				<!-- Email Input -->
				<div>
					<label for="email" class="block text-sm font-medium text-gray-300">Email</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm px-3"
						placeholder="you@example.com"
					/>
				</div>

				<!-- Username Input (only for registration) -->
				{#if isRegistering}
					<div>
						<label for="username" class="block text-sm font-medium text-gray-300">Username</label>
						<input
							id="username"
							type="text"
							bind:value={username}
							required
							class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm px-3"
							placeholder="Your username"
						/>
					</div>
				{/if}

				<!-- Password Input -->
				<div>
					<label for="password" class="block text-sm font-medium text-gray-300">Password</label>
					<input
						id="password"
						type="password"
						bind:value={password}
						required
						class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm px-3"
						placeholder="********"
					/>
				</div>

				<!-- Confirm Password Input (only for registration) -->
				{#if isRegistering}
					<div>
						<label for="confirm-password" class="block text-sm font-medium text-gray-300"
							>Confirm Password</label
						>
						<input
							id="confirm-password"
							type="password"
							bind:value={confirmPassword}
							required
							class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-white focus:ring-white sm:text-sm px-3"
							placeholder="********"
						/>
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					class="w-full flex justify-center rounded-md bg-white px-4 py-2 text-black font-semibold shadow hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
				>
					{isRegistering ? 'Register' : 'Login'}
				</button>
			</form>

			<!-- Toggle Login/Register -->
			<div class="mt-4 text-center text-sm">
				<button
					type="button"
					class="font-medium text-gray-400 hover:text-gray-200"
					on:click={toggleRegistering}
				>
					{isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
				</button>
			</div>
		</div>
	</div>
</div>

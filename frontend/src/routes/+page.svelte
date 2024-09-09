<script lang="ts">
	import { goto } from '$app/navigation';
	import { registerUser, loginUser, isAuthenticated, LogoutUser } from '$lib/AuthHandler';
	import { onMount } from 'svelte';

	let isRegistering = false;
	let email = '';
	let username = '';
	let password = '';
	let confirmPassword = '';
	let errorMessage = '';
	let successMessage = '';

	// Check if user is loged in

	onMount(async () => {
		const res: any = await isAuthenticated();
		if (res === true) {
			goto("/dashboard")
		}
	});

	const toggleRegistering = () => {
		isRegistering = !isRegistering;
		errorMessage = '';
		successMessage = '';
	};

	const validateEmail = (email: string) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		// Basic validation
		if (!validateEmail(email)) {
			errorMessage = 'Please enter a valid email address.';
			return;
		}

		if (password.length < 8) {
			errorMessage = 'Password must be at least 8 characters long.';
			return;
		}

		if (isRegistering) {
			if (password !== confirmPassword) {
				errorMessage = 'Passwords do not match.';
				return;
			}
			const res = await registerUser(username, email, password, confirmPassword);
			if (res.error) {
				errorMessage = res.error;
			} else {
				const loginRes: any = await loginUser(email, password);
				if (loginRes.error) {
					errorMessage = loginRes.error;
				} else {
					successMessage = 'Registration and login successful!';
					isRegistering = false;
					email = '';
					username = '';
					password = '';
					confirmPassword = '';
					goto('/dashboard');
				}
			}
		} else {
			const res: any = await loginUser(email, password);
			if (res.error) {
				errorMessage = res.error;
			} else {
				successMessage = 'Login successful!';
				goto('/dashboard');
			}
		}
	};
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

		<!-- Success Message Display -->
		{#if successMessage}
			<div class="rounded-md bg-green-900 px-4 py-3 text-green-200 border border-green-700">
				<p>{successMessage}</p>
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
						class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3"
						placeholder="you@example.com"
					/>
					{#if !validateEmail(email) && email}
						<p class="mt-2 text-sm text-red-500">Invalid email format.</p>
					{/if}
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
							class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3"
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
						class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3"
						placeholder="********"
					/>
					{#if password.length < 8 && password}
						<p class="mt-2 text-sm text-red-500">Password must be at least 8 characters long.</p>
					{/if}
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
							class="mt-1 block w-full h-12 rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3"
							placeholder="********"
						/>
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					class="w-full flex justify-center rounded-md bg-white px-4 py-2 text-black font-semibold shadow hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

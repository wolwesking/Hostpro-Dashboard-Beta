<script lang="ts">
	import { CheckCircle, ArrowRight } from 'lucide-svelte'; // Ensure lucide-svelte is installed
	import { goto } from '$app/navigation';

	const handleReturnToDashboard = () => {
		goto('/dashboard');
	};
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
	<div class="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-xl shadow-2xl">
		<div class="text-center">
			<CheckCircle class="mx-auto h-16 w-16 text-green-500" />
			<h2 class="mt-6 text-3xl font-extrabold">Payment Successful!</h2>
			<p class="mt-2 text-sm text-gray-400">Your transaction has been processed successfully.</p>
		</div>

		<div class="mt-10">
			<button
				on:click={handleReturnToDashboard}
				class="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
			>
				Return to Dashboard
				<ArrowRight class="ml-2 -mr-1 h-4 w-4" />
			</button>
		</div>
	</div>
</div>

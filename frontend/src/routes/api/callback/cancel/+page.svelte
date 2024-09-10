<script lang="ts">
	import { XCircle, RefreshCcw, ArrowLeft } from 'lucide-svelte'; // Ensure lucide-svelte is installed
	import { goto } from '$app/navigation';

	// Handle the "Try Again" button click

	// Handle the "Return to Checkout" button click
	const handleReturnToCheckout = () => {
		goto('/dashboard'); // Update this to the correct URL for your checkout page
	};
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
	<div class="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-xl shadow-2xl">
		<div class="text-center">
			<XCircle class="mx-auto h-16 w-16 text-red-500 animate-pulse" />
			<h2 class="mt-6 text-3xl font-extrabold">Payment Unsuccessful</h2>
			<p class="mt-2 text-sm text-gray-400">
				We're sorry, but your payment could not be processed.
			</p>
		</div>

		<div class="mt-10 space-y-4">
			<button
				on:click={handleReturnToCheckout}
				class="w-full flex items-center justify-center py-3 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-transparent hover:bg-gray-700 transition-colors duration-200"
			>
				Return to Checkout
				<ArrowLeft class="ml-2 -mr-1 h-4 w-4" />
			</button>
		</div>
	</div>
</div>

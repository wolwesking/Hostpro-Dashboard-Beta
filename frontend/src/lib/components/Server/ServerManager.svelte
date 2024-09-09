<script lang="ts">
	export let server: {
		name: string;
		status: string;
		ip: string;
		port: number;
        url: string;
	};

	// Function to copy text to clipboard
	const copyToClipboard = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				alert('Copied to clipboard: ' + text);
			})
			.catch((err) => {
				console.error('Failed to copy: ', err);
			});
	};
</script>

<div class="bg-gray-800 rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 noselect">
	<div class="p-4">
		<h2 class="text-lg font-semibold mb-2">{server.name}</h2>
		<div class="flex items-center mb-2">
			<span
				class={`w-3 h-3 rounded-full mr-2 ${server.status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`}
			/>
			<span class="text-gray-400 dark:text-gray-500">{server.status}</span>
		</div>
		<p class="text-gray-400 mb-4 dark:text-gray-500">
			<button
				class="hover:underline cursor-pointer"
				on:click={() => copyToClipboard(server.ip)}
				title="Click to copy IP"
			>
				IP: {server.ip}
			</button>
			|
			<button
				class="hover:underline cursor-pointer"
				on:click={() => copyToClipboard(server.port.toString())}
				title="Click to copy Port"
			>
				Port: {server.port}
			</button>
		</p>
		<div class="flex justify-end">
			<a
				href={server.url}
				class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
			>
				Go to panel
			</a>
		</div>
	</div>
</div>

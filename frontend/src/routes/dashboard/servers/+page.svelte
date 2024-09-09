<script lang="ts">
	import ServerView from '$lib/components/Server/ServerView.svelte';

    const servers = [
		{ name: 'Game Server 1', status: 'Online', ip: '192.168.1.100', port: 25565, url:"asd" },
		{ name: 'Game Server 2', status: 'Offline', ip: '192.168.1.101', port: 25565, url:"asd" },
		{ name: 'Game Server 3', status: 'Online', ip: '192.168.1.102', port: 25565, url:"asd" },
		{ name: 'Game Server 4', status: 'Offline', ip: '192.168.1.103', port: 25565, url:"asd" },
		{ name: 'Game Server 5', status: 'Online', ip: '192.168.1.104', port: 25565, url:"asd" },
		{ name: 'Game Server 6', status: 'Offline', ip: '192.168.1.105', port: 25565, url:"asd" },
	];

</script>

<!-- Main Container -->
<div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8 text-gray-100">
	<ServerView {servers}/>
</div>

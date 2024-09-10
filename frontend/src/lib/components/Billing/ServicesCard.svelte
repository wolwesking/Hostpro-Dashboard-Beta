<script lang="ts">
  export let service: {
    name: string;
    description: Array<string>;
    price: string;
    available: boolean;
    handlePurchase:any
  };
</script>

<!-- Component Layout -->
<div class="bg-gray-800 p-6 rounded-lg shadow-md text-gray-100">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-lg font-semibold text-gray-300">{service.name}</h2>
    {#if service.available}
      <div class="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
        Available
      </div>
    {:else}
      <div class="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
        Unavailable
      </div>
    {/if}
  </div>

  <ul class="list-inside list-none text-left space-y-2 mb-5 text-gray-400">
    {#each service.description as point}
      <li class="flex items-start">
        <span class="text-yellow-400 mr-2">•</span> {point}
      </li>
    {/each}
  </ul>

  <!-- Price and Buy Button -->
  <p class="text-white mb-4">Price: <span class="text-yellow-500 font-semibold">{service.price}</span></p>
  <button
    on:click={service.handlePurchase}
    class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
    disabled={!service.available}
  >
    Buy Service
  </button>
</div>

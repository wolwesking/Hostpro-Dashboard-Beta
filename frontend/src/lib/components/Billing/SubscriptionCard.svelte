<script lang="ts">
    export let plan: {
      name: string;
      status: string;
      renewDate: string;
    };
  
    // Determines the status color based on the plan status
    let statusColor = plan.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600';
  
    // Handler for cancel subscription click
    const handleCancel = () => {
      alert(`Cancelled subscription for ${plan.name}`);
    };
  </script>
  
  <div class="bg-gray-800 p-6 rounded-lg shadow-md text-gray-100">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">{plan.name}</h2>
      <div class={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>{plan.status}</div>
    </div>
    <p class="text-gray-400 mb-4">{plan.status === 'Active' ? `Renews on ${plan.renewDate}` : `Expired on ${plan.renewDate}`}</p>
    <button
      on:click={handleCancel}
      class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
    >
      Cancel Subscription
    </button>
  </div>
  
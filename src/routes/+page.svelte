<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import MainContainer from '$lib/components/MainContainer.svelte';
  
  export let data;
  $: ({ stats, transactions, categories, categoryTotals, filters } = data);

  async function handleAction(name: string, body: any) {
    const response = await fetch(`?/${name}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'x-sveltekit-action': 'true'
      }
    });
    if (response.ok) {
      await invalidateAll();
    }
  }

  function handleFilterChange() {
    const url = new URL(window.location.href);
    if (filters.startDate) url.searchParams.set('start', filters.startDate);
    else url.searchParams.delete('start');
    
    if (filters.endDate) url.searchParams.set('end', filters.endDate);
    else url.searchParams.delete('end');
    
    if (filters.categoryId) url.searchParams.set('cat', filters.categoryId.toString());
    else url.searchParams.delete('cat');
    
    if (filters.personName) url.searchParams.set('person', filters.personName);
    else url.searchParams.delete('person');

    window.history.replaceState({}, '', url);
    invalidateAll();
  }
</script>

<MainContainer 
  {stats} 
  {transactions} 
  {categories} 
  {categoryTotals}
  bind:filters
  onFilterChange={handleFilterChange}
  onAddTransaction={(data) => handleAction('addTransaction', data)}
  onDeleteTransaction={(id) => handleAction('deleteTransaction', { id })}
  onAddCategory={(name, type) => handleAction('addCategory', { name, type })}
  onDeleteCategory={(id) => handleAction('deleteCategory', { id })}
/>

<script lang="ts">
  export let totals: { name: string; total: number; type: string }[];

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  $: incomeTotals = totals.filter(t => t.type === 'income');
  $: expenseTotals = totals.filter(t => t.type === 'expense');

  $: maxExpense = Math.max(...expenseTotals.map(t => t.total), 1);
  $: maxIncome = Math.max(...incomeTotals.map(t => t.total), 1);
</script>

<div class="grid-container">
  <div class="glass-card">
    <h3 class="card-title">Pengeluaran per Kategori</h3>
    <div class="list-container">
      {#if expenseTotals.length === 0}
        <p class="text-muted">Belum ada data pengeluaran.</p>
      {:else}
        {#each expenseTotals as item}
          <div class="list-item">
            <div class="item-header">
              <span>{item.name}</span>
              <span class="amount-expense">{formatCurrency(item.total)}</span>
            </div>
            <div class="progress-bg">
              <div class="progress-bar expense" style="width: {(item.total / maxExpense) * 100}%"></div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>

  <div class="glass-card">
    <h3 class="card-title">Pemasukan per Kategori</h3>
    <div class="list-container">
      {#if incomeTotals.length === 0}
        <p class="text-muted">Belum ada data pemasukan.</p>
      {:else}
        {#each incomeTotals as item}
          <div class="list-item">
            <div class="item-header">
              <span>{item.name}</span>
              <span class="amount-income">{formatCurrency(item.total)}</span>
            </div>
            <div class="progress-bg">
              <div class="progress-bar income" style="width: {(item.total / maxIncome) * 100}%"></div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media (min-width: 768px) {
    .grid-container { grid-template-columns: 1fr 1fr; }
  }
  .card-title {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  .list-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .list-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }
  .progress-bg {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    overflow: hidden;
  }
  .progress-bar {
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
  }
  .progress-bar.expense {
    background: var(--expense);
    box-shadow: 0 0 10px rgba(244, 63, 94, 0.3);
  }
  .progress-bar.income {
    background: var(--income);
    box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
  }
</style>

<script lang="ts">
  import { TrendingUp, TrendingDown, Wallet } from 'lucide-svelte';

  export let stats: { income: number; expense: number; balance: number };

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
</script>

<div class="stats-grid">
  <div class="glass-card stat-card">
    <div class="stat-header">
      <span class="text-muted">Total Pemasukan</span>
      <div class="icon-circle income">
        <TrendingUp size={18} />
      </div>
    </div>
    <p class="stat-amount income">{formatCurrency(stats.income)}</p>
  </div>

  <div class="glass-card stat-card">
    <div class="stat-header">
      <span class="text-muted">Total Pengeluaran</span>
      <div class="icon-circle expense">
        <TrendingDown size={18} />
      </div>
    </div>
    <p class="stat-amount expense">{formatCurrency(stats.expense)}</p>
  </div>

  <div class="glass-card stat-card">
    <div class="stat-header">
      <span class="text-muted">Saldo Saat Ini</span>
      <div class="icon-circle balance">
        <Wallet size={18} />
      </div>
    </div>
    <p class="stat-amount balance">{formatCurrency(stats.balance)}</p>
  </div>
</div>

<style>
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .stat-card {
    padding: 1.5rem;
  }
  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  .icon-circle {
    padding: 0.5rem;
    border-radius: 50%;
  }
  .icon-circle.income { background: rgba(16, 185, 129, 0.1); color: var(--income); }
  .icon-circle.expense { background: rgba(244, 63, 94, 0.1); color: var(--expense); }
  .icon-circle.balance { background: rgba(59, 130, 246, 0.1); color: var(--primary); }
  
  .stat-amount {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
  }
</style>

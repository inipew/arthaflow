<script lang="ts">
  import { LayoutDashboard, ReceiptText, Settings2 } from 'lucide-svelte';
  import StatsOverview from './StatsOverview.svelte';
  import TransactionTable from './TransactionTable.svelte';
  import TransactionFilters from './TransactionFilters.svelte';
  import AddTransactionModal from './AddTransactionModal.svelte';
  import CategoryManager from './CategoryManager.svelte';
  import CategoryStats from './CategoryStats.svelte';
  import type { Transaction, Category } from '../../types';

  export let stats: { income: number; expense: number; balance: number };
  export let transactions: Transaction[];
  export let categories: Category[];
  export let categoryTotals: { name: string; total: number; type: string }[];
  export let filters: any;
  
  // Actions
  export let onFilterChange: () => void;
  export let onAddTransaction: (data: any) => void;
  export let onDeleteTransaction: (id: string) => void;
  export let onAddCategory: (name: string, type: 'income' | 'expense') => void;
  export let onDeleteCategory: (id: number) => void;

  let activeTab: 'summary' | 'transactions' | 'settings' = 'summary';
</script>

<div class="main-layout">
  <!-- Tabs Navigation -->
  <nav class="glass-card tab-nav">
    <button 
      class="tab-btn {activeTab === 'summary' ? 'active' : ''}" 
      on:click={() => activeTab = 'summary'}
    >
      <LayoutDashboard size={18} />
      <span>Ringkasan</span>
    </button>
    <button 
      class="tab-btn {activeTab === 'transactions' ? 'active' : ''}" 
      on:click={() => activeTab = 'transactions'}
    >
      <ReceiptText size={18} />
      <span>Transaksi</span>
    </button>
    <button 
      class="tab-btn {activeTab === 'settings' ? 'active' : ''}" 
      on:click={() => activeTab = 'settings'}
    >
      <Settings2 size={18} />
      <span>Pengaturan</span>
    </button>
  </nav>

  <!-- Header Action Button (Desktop/Mobile) -->
  <div class="header-actions">
    <AddTransactionModal 
      variant="header" 
      {categories} 
      onSave={onAddTransaction} 
    />
  </div>

  <!-- Tab Content -->
  <div class="tab-content" style="animation: fadeIn 0.3s ease;">
    {#if activeTab === 'summary'}
      <div class="grid gap-6">
        <StatsOverview {stats} />
        <CategoryStats totals={categoryTotals} />
        <div class="glass-card welcome-card">
          <h3 style="margin-bottom: 0.5rem;">Selamat Datang di ArthaFlow</h3>
          <p class="text-muted" style="font-size: 0.9rem;">Gunakan tombol <b>+ Transaksi</b> di atas untuk mencatat data baru.</p>
        </div>
      </div>
    {:else if activeTab === 'transactions'}
      <div class="grid gap-6">
        <TransactionFilters {categories} bind:filters onFilterChange={onFilterChange} />
        <TransactionTable {transactions} onDelete={onDeleteTransaction} />
      </div>
    {:else if activeTab === 'settings'}
      <CategoryManager {categories} onAdd={onAddCategory} onDelete={onDeleteCategory} />
    {/if}
  </div>
</div>

<!-- Floating Action Button -->
<AddTransactionModal 
  variant="fab" 
  {categories} 
  onSave={onAddTransaction} 
/>

<style>
  .main-layout {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .tab-nav {
    display: flex;
    padding: 0.5rem;
    gap: 0.5rem;
    position: sticky;
    top: 1rem;
    z-index: 50;
  }
  .tab-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem;
    border: none;
    background: none;
    color: var(--text-secondary);
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.2s;
  }
  .tab-btn:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }
  .tab-btn.active {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }
  @media (max-width: 640px) {
    .tab-btn span { display: none; }
    .tab-btn { padding: 1rem; }
  }
  .header-actions {
    display: flex;
    justify-content: flex-end;
  }
  .welcome-card {
    text-align: center;
    padding: 2.5rem;
  }
  .grid {
    display: grid;
  }
  .gap-6 {
    gap: 1.5rem;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

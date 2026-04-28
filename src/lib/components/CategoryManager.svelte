<script lang="ts">
  import { Plus, Trash2, Tag, ArrowUpCircle, ArrowDownCircle } from 'lucide-svelte';
  import type { Category } from '../../types';

  export let categories: Category[];
  export let onAdd: (name: string, type: 'income' | 'expense') => void;
  export let onDelete: (id: number) => void;

  let newName = '';
  let newType: 'income' | 'expense' = 'expense';

  $: incomeCategories = categories.filter(c => c.type === 'income');
  $: expenseCategories = categories.filter(c => c.type === 'expense');

  function handleAdd() {
    if (newName.trim()) {
      onAdd(newName, newType);
      newName = '';
    }
  }
</script>

<div class="glass-card" style="margin-bottom: 2rem;">
  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
    <Tag size={18} class="text-muted" />
    <h3 style="font-size: 1.1rem; margin: 0;">Kelola Kategori</h3>
  </div>

  <div class="add-category-form">
    <div style="flex: 1;">
      <input 
        type="text" 
        placeholder="Nama kategori baru..." 
        bind:value={newName}
      />
    </div>
    <div style="width: 140px;">
      <select bind:value={newType}>
        <option value="expense">Pengeluaran</option>
        <option value="income">Pemasukan</option>
      </select>
    </div>
    <button class="btn-primary" on:click={handleAdd} style="padding: 0 1.5rem;">
      <Plus size={18} /> Tambah
    </button>
  </div>

  <div class="categories-grid">
    <div class="category-list-box">
      <div class="list-header income">
        <ArrowUpCircle size={16} />
        <span>Kategori Pemasukan</span>
      </div>
      <div class="list-content">
        {#each incomeCategories as cat}
          <div class="category-item">
            <span>{cat.name}</span>
            <button class="delete-btn" on:click={() => onDelete(cat.id)}>
              <Trash2 size={14} />
            </button>
          </div>
        {/each}
      </div>
    </div>

    <div class="category-list-box">
      <div class="list-header expense">
        <ArrowDownCircle size={16} />
        <span>Kategori Pengeluaran</span>
      </div>
      <div class="list-content">
        {#each expenseCategories as cat}
          <div class="category-item">
            <span>{cat.name}</span>
            <button class="delete-btn" on:click={() => onDelete(cat.id)}>
              <Trash2 size={14} />
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .add-category-form {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.03);
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  @media (max-width: 640px) {
    .add-category-form { flex-direction: column; }
    .add-category-form div { width: 100% !important; }
  }
  .categories-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media (min-width: 768px) {
    .categories-grid { grid-template-columns: 1fr 1fr; }
  }
  .category-list-box {
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    overflow: hidden;
  }
  .list-header {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .list-header.income { background: rgba(16, 185, 129, 0.1); color: var(--income); }
  .list-header.expense { background: rgba(244, 63, 94, 0.1); color: var(--expense); }
  
  .list-content {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    max-height: 300px;
    overflow-y: auto;
  }
  .category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.75rem;
    border-radius: 8px;
    font-size: 0.9rem;
  }
  .category-item:hover {
    background: rgba(255, 255, 255, 0.03);
  }
  .delete-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  .delete-btn:hover {
    background: rgba(244, 63, 94, 0.1);
    color: var(--expense);
  }
</style>

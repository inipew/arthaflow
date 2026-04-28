<script lang="ts">
  import { Search, Filter, X } from 'lucide-svelte';
  import type { Category } from '../../types';

  export let categories: Category[];
  export let filters: {
    startDate?: string;
    endDate?: string;
    categoryId?: number;
    personName?: string;
  };
  export let onFilterChange: () => void;
</script>

<div class="glass-card" style="margin-bottom: 2rem; padding: 1.25rem;">
  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;">
    <Filter size={18} class="text-muted" />
    <h3 style="font-size: 1rem; margin: 0;">Filter & Pencarian</h3>
  </div>

  <div class="filter-grid">
    <div class="filter-group">
      <label for="search_name">Nama Orang</label>
      <div style="position: relative;">
        <input 
          type="text" 
          id="search_name"
          placeholder="Cari nama..." 
          bind:value={filters.personName}
          on:change={onFilterChange}
        />
        <Search size={16} class="input-icon" />
      </div>
    </div>

    <div class="filter-group">
      <label for="filter_category">Kategori</label>
      <select 
        id="filter_category"
        bind:value={filters.categoryId}
        on:change={onFilterChange}
      >
        <option value={undefined}>Semua Kategori</option>
        {#each categories as cat}
          <option value={cat.id}>{cat.name}</option>
        {/each}
      </select>
    </div>

    <div class="filter-group">
      <label for="start_date">Dari Tanggal</label>
      <input 
        type="date" 
        id="start_date"
        bind:value={filters.startDate}
        on:change={onFilterChange}
      />
    </div>

    <div class="filter-group">
      <label for="end_date">Sampai Tanggal</label>
      <input 
        type="date" 
        id="end_date"
        bind:value={filters.endDate}
        on:change={onFilterChange}
      />
    </div>
  </div>

  {#if filters.startDate || filters.endDate || filters.categoryId || filters.personName}
    <div style="margin-top: 1.25rem; display: flex; justify-content: flex-end;">
      <button 
        class="btn-text" 
        style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem;"
        on:click={() => {
          filters = { startDate: undefined, endDate: undefined, categoryId: undefined, personName: undefined };
          onFilterChange();
        }}
      >
        <X size={14} /> Bersihkan Filter
      </button>
    </div>
  {/if}
</div>

<style>
  .filter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.25rem;
  }
  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .filter-group label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  :global(.input-icon) {
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
    pointer-events: none;
  }
  .btn-text {
    background: none;
    border: none;
    color: var(--expense);
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  .btn-text:hover {
    opacity: 1;
    text-decoration: underline;
  }
</style>

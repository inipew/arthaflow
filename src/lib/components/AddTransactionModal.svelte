<script lang="ts">
  import { X, Plus, User, FileText, Calendar, Tag, ChevronDown } from 'lucide-svelte';
  import type { Category } from '../../types';

  export let isOpen = false;
  export let variant: 'default' | 'header' | 'fab' = 'default';
  export let categories: Category[];
  export let onSave: (data: any) => void;
  export let onClose: () => void;

  let type: 'income' | 'expense' = 'expense';
  let amount: number | null = null;
  let category_id: number | null = null;
  let date = new Date().toISOString().split('T')[0];
  let person_name = '';
  let description = '';

  $: filteredCategories = categories.filter(c => c.type === type);

  function resetForm() {
    type = 'expense';
    amount = null;
    category_id = null;
    date = new Date().toISOString().split('T')[0];
    person_name = '';
    description = '';
  }

  function handleSave() {
    if (amount && category_id && date) {
      onSave({ type, amount, category_id, date, person_name, description });
      resetForm();
      onClose();
    }
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-backdrop" on:click={handleBackdropClick}>
    <div class="modal-content glass-card animate-modal">
      <div class="modal-header">
        <h2 style="font-size: 1.25rem; margin: 0;">Tambah Transaksi</h2>
        <button class="btn-icon" on:click={onClose}>
          <X size={20} />
        </button>
      </div>

      <div class="form-container">
        <!-- Type Switcher -->
        <div class="type-switcher">
          <button 
            class="type-btn {type === 'expense' ? 'active expense' : ''}" 
            on:click={() => type = 'expense'}
          >
            Pengeluaran
          </button>
          <button 
            class="type-btn {type === 'income' ? 'active income' : ''}" 
            on:click={() => type = 'income'}
          >
            Pemasukan
          </button>
        </div>

        <div class="form-grid">
          <!-- Amount -->
          <div class="form-group full">
            <label for="amount">Jumlah (IDR)</label>
            <div class="input-wrapper">
              <span class="currency-prefix">Rp</span>
              <input 
                type="number" 
                id="amount"
                placeholder="0" 
                style="padding-left: 2.8rem; font-size: 1.25rem; font-weight: 700;" 
                bind:value={amount}
              />
            </div>
          </div>

          <!-- Category -->
          <div class="form-group half">
            <label for="category">Kategori</label>
            <div class="input-wrapper">
              <select id="category" bind:value={category_id}>
                <option value={null}>Pilih Kategori</option>
                {#each filteredCategories as cat}
                  <option value={cat.id}>{cat.name}</option>
                {/each}
              </select>
              <Tag size={16} class="input-icon-left" />
              <ChevronDown size={16} class="input-icon-right" />
            </div>
          </div>

          <!-- Date -->
          <div class="form-group half">
            <label for="date">Tanggal</label>
            <div class="input-wrapper">
              <input type="date" id="date" bind:value={date} />
              <Calendar size={16} class="input-icon-left" />
            </div>
          </div>

          <!-- Conditional Person Name -->
          {#if category_id === 12}
            <div class="form-group full animate-slide">
              <label for="person">Nama Orang (Pemberi/Penerima Utang)</label>
              <div class="input-wrapper">
                <input 
                  type="text" 
                  id="person"
                  placeholder="Masukkan nama..." 
                  bind:value={person_name}
                />
                <User size={16} class="input-icon-left" />
              </div>
            </div>
          {/if}

          <!-- Description -->
          <div class="form-group full">
            <label for="desc">Keterangan</label>
            <div class="input-wrapper">
              <textarea 
                id="desc"
                placeholder="Catatan tambahan..." 
                style="height: 60px; resize: none;"
                bind:value={description}
              ></textarea>
              <FileText size={16} class="input-icon-left" style="top: 1rem; transform: none;" />
            </div>
          </div>
        </div>

        <button 
          class="btn-primary" 
          style="width: 100%; padding: 0.9rem; margin-top: 1rem; font-weight: 600;"
          disabled={!amount || !category_id}
          on:click={handleSave}
        >
          Simpan Transaksi
        </button>
      </div>
    </div>
  </div>
{/if}

{#if variant === 'header'}
  <button class="btn-primary" on:click={() => isOpen = true}>
    <Plus size={18} /> Transaksi
  </button>
{:else if variant === 'fab'}
  <button class="fab-btn" on:click={() => isOpen = true} title="Tambah Transaksi">
    <Plus size={28} />
  </button>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .modal-content {
    width: 100%;
    max-width: 480px;
    max-height: 95vh;
    padding: 1.5rem;
    overflow-y: auto;
    position: relative;
  }
  .animate-modal {
    animation: modalFadeIn 0.3s ease-out;
  }
  @keyframes modalFadeIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .type-switcher {
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    padding: 4px;
    border-radius: 12px;
    gap: 4px;
  }
  .type-btn {
    flex: 1;
    padding: 0.6rem;
    border: none;
    background: none;
    color: var(--text-secondary);
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.2s;
  }
  .type-btn.active.expense { background: var(--expense); color: white; }
  .type-btn.active.income { background: var(--income); color: white; }
  
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .form-group.full { grid-column: span 2; }
  .form-group label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 0.4rem;
    text-transform: uppercase;
  }
  .input-wrapper {
    position: relative;
  }
  .currency-prefix {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 700;
    color: var(--text-secondary);
  }
  :global(.input-icon-left) {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
  }
  :global(.input-icon-right) {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
    pointer-events: none;
  }
  select, input, textarea {
    padding-left: 2.8rem;
  }
  .btn-icon {
    background: rgba(255, 255, 255, 0.05);
    border: none;
    color: white;
    padding: 0.4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .fab-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    border: none;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 100;
  }
  .fab-btn:hover {
    transform: scale(1.1) rotate(90deg);
  }
  .animate-slide {
    animation: slideDown 0.3s ease-out;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

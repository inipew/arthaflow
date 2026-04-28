<script lang="ts">
  import { Trash2, User, Calendar, Tag } from 'lucide-svelte';
  import type { Transaction } from '../../types';

  export let transactions: Transaction[];
  export let onDelete: (id: string) => void;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
</script>

<div class="glass-card" style="padding: 0; overflow: hidden;">
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Kategori</th>
          <th>Keterangan</th>
          <th>Jumlah</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {#each transactions as t}
          <tr>
            <td>
              <div style="display: flex; flex-direction: column; gap: 0.2rem;">
                <span style="font-size: 0.85rem; display: flex; align-items: center; gap: 0.3rem;">
                  <Calendar size={12} class="text-muted" />
                  {formatDate(t.date)}
                </span>
              </div>
            </td>
            <td>
              <div style="display: flex; flex-direction: column; gap: 0.2rem;">
                <span style="font-weight: 500; font-size: 0.9rem; display: flex; align-items: center; gap: 0.3rem;">
                  <Tag size={12} class="text-muted" />
                  {t.category_name}
                </span>
                {#if t.person_name}
                  <span style="font-size: 0.75rem; color: var(--primary); display: flex; align-items: center; gap: 0.2rem;">
                    <User size={10} /> {t.person_name}
                  </span>
                {/if}
              </div>
            </td>
            <td>
              <span class="text-muted" style="font-size: 0.85rem;">{t.description || '-'}</span>
            </td>
            <td>
              <span class={t.type === 'income' ? 'amount-income' : 'amount-expense'} style="font-weight: 600; font-size: 0.95rem;">
                {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
              </span>
            </td>
            <td>
              <button 
                class="btn-icon" 
                on:click={() => onDelete(t.id)}
                title="Hapus"
              >
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        {/each}
        {#if transactions.length === 0}
          <tr>
            <td colspan="5" style="text-align: center; padding: 3rem;" class="text-muted">
              Belum ada transaksi.
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>

<style>
  .table-container {
    overflow-x: auto;
    width: 100%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }
  th {
    text-align: left;
    padding: 1rem 1.5rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    vertical-align: middle;
  }
  tr:last-child td {
    border-bottom: none;
  }
  tr:hover td {
    background: rgba(255, 255, 255, 0.02);
  }
  .btn-icon {
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-icon:hover {
    background: rgba(244, 63, 94, 0.1);
    color: var(--expense);
  }
</style>

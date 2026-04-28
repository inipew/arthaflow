'use client';

import { Transaction } from '@/lib/types';
import { Trash2, User } from 'lucide-react';
import { deleteTransaction } from '@/lib/actions';

export default function TransactionTable({ transactions }: { transactions: Transaction[] }) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  const handleDelete = async (id: string) => {
    if (confirm('Hapus transaksi ini?')) {
      await deleteTransaction(id);
    }
  };

  return (
    <div style={{ overflowX: 'auto', margin: '0 -1.75rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', background: 'var(--glass)' }}>
            <th style={{ padding: '1rem 1.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-muted">Tanggal</th>
            <th style={{ padding: '1rem 1.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-muted">Kategori</th>
            <th style={{ padding: '1rem 1.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-muted">Keterangan</th>
            <th style={{ padding: '1rem 1.75rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }} className="text-muted">Jumlah</th>
            <th style={{ padding: '1rem 1.75rem', width: '50px' }}></th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ padding: '2rem', textAlign: 'center' }} className="text-muted">
                Belum ada transaksi.
              </td>
            </tr>
          ) : (
            transactions.map((t) => (
              <tr key={t.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem 1.75rem' }}>{t.date}</td>
                <td style={{ padding: '1rem 1.75rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    background: t.type === 'income' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: t.type === 'income' ? 'var(--income)' : 'var(--expense)'
                  }}>
                    {t.category_name}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.75rem' }}>
                  {t.description}
                  {t.person_name && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem', fontSize: '0.8rem' }} className="text-muted">
                      <User size={12} /> {t.person_name}
                    </div>
                  )}
                </td>
                <td style={{ padding: '1rem 1.75rem', textAlign: 'right' }} className={t.type === 'income' ? 'amount-income' : 'amount-expense'}>
                  {t.type === 'income' ? '+' : '-'} {formatCurrency(t.amount)}
                </td>
                <td style={{ padding: '1rem 1.75rem' }}>
                  <button 
                    onClick={() => handleDelete(t.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

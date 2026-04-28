'use client';

import { useState, useTransition } from 'react';
import { Category } from '@/lib/types';
import { addCategory, deleteCategory } from '@/lib/actions';
import { Settings, Plus, X } from 'lucide-react';

export default function CategoryManager({ categories }: { categories: Category[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [newCat, setNewCat] = useState({ name: '', type: 'expense' as 'income' | 'expense' });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCat.name) return;
    startTransition(async () => {
      await addCategory(newCat.name, newCat.type);
      setNewCat({ ...newCat, name: '' });
    });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Hapus kategori ini? Semua transaksi terkait mungkin terpengaruh.')) {
      startTransition(async () => {
        await deleteCategory(id);
      });
    }
  };

  if (!isOpen) return (
    <button className="glass-card" style={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer' }} onClick={() => setIsOpen(true)}>
      <Settings size={24} className="text-muted" />
      Kelola Kategori
    </button>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '2rem', maxHeight: '80vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>Kelola Kategori</h2>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleAdd} style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Kategori baru..." 
            value={newCat.name}
            onChange={e => setNewCat({...newCat, name: e.target.value})}
          />
          <select 
            value={newCat.type}
            onChange={e => setNewCat({...newCat, type: e.target.value as any})}
            style={{ width: 'auto' }}
          >
            <option value="expense">Pengeluaran</option>
            <option value="income">Pendapatan</option>
          </select>
          <button type="submit" disabled={isPending} className="btn-primary" style={{ padding: '0.75rem' }}>
            <Plus size={20} />
          </button>
        </form>

        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-muted" style={{ marginBottom: '1rem' }}>Pendapatan</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {categories.filter(c => c.type === 'income').map(c => (
                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: 'var(--glass)', borderRadius: '6px' }}>
                  <span>{c.name}</span>
                  <button onClick={() => handleDelete(c.id)} style={{ background: 'none', border: 'none', color: 'var(--expense)', cursor: 'pointer' }}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-muted" style={{ marginBottom: '1rem' }}>Pengeluaran</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {categories.filter(c => c.type === 'expense').map(c => (
                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0.75rem', background: 'var(--glass)', borderRadius: '6px' }}>
                  <span>{c.name}</span>
                  <button onClick={() => handleDelete(c.id)} style={{ background: 'none', border: 'none', color: 'var(--expense)', cursor: 'pointer' }}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

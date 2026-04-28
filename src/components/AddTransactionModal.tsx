'use client';

import { useState, useTransition } from 'react';
import { Category } from '@/lib/types';
import { addTransaction } from '@/lib/actions';
import { Plus } from 'lucide-react';

export default function AddTransactionModal({ 
  categories, 
  variant = 'default' 
}: { 
  categories: Category[], 
  variant?: 'default' | 'header' | 'fab' 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    amount: '',
    category_id: '',
    description: '',
    person_name: '',
    date: new Date().toISOString().split('T')[0],
  });

  const selectedCategory = categories.find(c => c.id === parseInt(formData.category_id));
  const isLoanCategory = selectedCategory?.name.toLowerCase().includes('utang ke orang');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await addTransaction({
        type,
        amount: parseFloat(formData.amount),
        category_id: parseInt(formData.category_id),
        description: formData.description,
        person_name: isLoanCategory ? formData.person_name : undefined,
        date: formData.date,
      });
      setIsOpen(false);
      setFormData({
        amount: '',
        category_id: '',
        description: '',
        person_name: '',
        date: new Date().toISOString().split('T')[0],
      });
    });
  };

  if (!isOpen) {
    if (variant === 'header') return (
      <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', padding: '0.6rem 0.8rem' }} onClick={() => setIsOpen(true)}>
        <Plus size={18} /> <span className="hide-mobile">Transaksi</span>
      </button>
    );

    if (variant === 'fab') return (
      <button 
        onClick={() => setIsOpen(true)}
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          background: 'var(--primary)', 
          color: '#fff', 
          border: 'none', 
          cursor: 'pointer', 
          boxShadow: '0 10px 25px var(--primary-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Plus size={32} />
      </button>
    );

    return (
      <div className="glass-card" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '1rem', 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        borderStyle: 'dashed',
        borderColor: 'var(--card-border)'
      }}>
        <div style={{ background: 'var(--primary)', padding: '0.75rem', borderRadius: '50%' }}>
          <Plus size={24} color="white" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '0.25rem' }}>Catat Transaksi</h3>
          <p className="text-muted">Tambah pendapatan atau pengeluaran baru</p>
        </div>
        <button className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }} onClick={() => setIsOpen(true)}>
          Buka Formulir
        </button>
      </div>
    );
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div className="glass-card" style={{ 
        width: '100%', 
        maxWidth: '480px', 
        padding: '1.5rem 1.75rem', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        maxHeight: '95vh',
        overflowY: 'auto',
        animation: 'modalFadeIn 0.3s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Tambah Transaksi</h2>
          <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '0.25rem' }}>
            <Plus size={24} style={{ transform: 'rotate(45deg)' }} />
          </button>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', padding: '0.2rem', background: 'var(--glass)', borderRadius: '10px' }}>
          <button 
            type="button"
            onClick={() => setType('expense')}
            style={{ 
              flex: 1, 
              padding: '0.6rem', 
              borderRadius: '8px', 
              border: 'none', 
              background: type === 'expense' ? 'var(--expense)' : 'transparent', 
              color: '#fff', 
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s',
              fontSize: '0.9rem'
            }}
          >
            Pengeluaran
          </button>
          <button 
            type="button"
            onClick={() => setType('income')}
            style={{ 
              flex: 1, 
              padding: '0.6rem', 
              borderRadius: '8px', 
              border: 'none', 
              background: type === 'income' ? 'var(--income)' : 'transparent', 
              color: '#fff', 
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s',
              fontSize: '0.9rem'
            }}
          >
            Pendapatan
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <label className="text-muted" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.8rem' }}>Tanggal</label>
            <input 
              type="date" 
              required
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
            />
          </div>

          <div>
            <label className="text-muted" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.8rem' }}>Kategori</label>
            <select 
              required
              value={formData.category_id}
              onChange={e => setFormData({...formData, category_id: e.target.value})}
            >
              <option value="">Pilih Kategori</option>
              {categories.filter(c => c.type === type).map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {isLoanCategory && (
            <div style={{ animation: 'modalFadeIn 0.3s ease' }}>
              <label className="text-muted" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.8rem' }}>Nama Orang</label>
              <input 
                type="text" 
                placeholder="Siapa yang diberi utang?"
                required
                value={formData.person_name}
                onChange={e => setFormData({...formData, person_name: e.target.value})}
              />
            </div>
          )}

          <div>
            <label className="text-muted" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.8rem' }}>Jumlah (IDR)</label>
            <input 
              type="number" 
              placeholder="0"
              required
              value={formData.amount}
              onChange={e => setFormData({...formData, amount: e.target.value})}
            />
          </div>

          <div>
            <label className="text-muted" style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.8rem' }}>Keterangan</label>
            <textarea 
              placeholder="Catatan tambahan..."
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              style={{ minHeight: '60px' }} 
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button type="button" onClick={() => setIsOpen(false)} style={{ flex: 1, padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--card-border)', background: 'transparent', color: '#fff', cursor: 'pointer', fontSize: '0.9rem' }}>
              Batal
            </button>
            <button type="submit" disabled={isPending} className="btn-primary" style={{ flex: 1, fontSize: '0.9rem' }}>
              {isPending ? 'Menyimpan...' : 'Simpan Transaksi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

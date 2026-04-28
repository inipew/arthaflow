'use client';

import { useState } from 'react';
import { Transaction, Category } from '@/lib/types';
import StatsOverview from './StatsOverview';
import TransactionTable from './TransactionTable';
import TransactionFilters from './TransactionFilters';
import AddTransactionModal from './AddTransactionModal';
import CategoryManager from './CategoryManager';
import CategoryStats from './CategoryStats';
import { LayoutDashboard, ReceiptText, Settings2 } from 'lucide-react';

interface MainContainerProps {
  stats: { income: number; expense: number; balance: number };
  transactions: Transaction[];
  categories: Category[];
  categoryTotals: any[];
}

export default function MainContainer({ stats, transactions, categories, categoryTotals }: MainContainerProps) {
  const [activeTab, setActiveTab] = useState<'summary' | 'transactions' | 'settings'>('summary');

  return (
    <div>
      {/* Tab Navigation & Global Action */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ flex: 1, padding: '0.4rem', display: 'flex', gap: '0.4rem', borderRadius: '12px' }}>
          <button 
            onClick={() => setActiveTab('summary')}
            className={`tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
          >
            <LayoutDashboard size={18} /> Ringkasan
          </button>
          <button 
            onClick={() => setActiveTab('transactions')}
            className={`tab-btn ${activeTab === 'transactions' ? 'active' : ''}`}
          >
            <ReceiptText size={18} /> Transaksi
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          >
            <Settings2 size={18} /> Pengaturan
          </button>
        </div>
        
        {/* Quick Action Button in Header */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AddTransactionModal categories={categories} variant="header" />
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content" style={{ animation: 'fadeIn 0.3s ease' }}>
        {activeTab === 'summary' && (
          <div className="grid grid-cols-1 gap-6">
            <StatsOverview stats={stats} />
            
            {/* Analisis per Kategori */}
            <CategoryStats totals={categoryTotals} />

            <div className="glass-card" style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Selamat Datang di ArthaFlow</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>Gunakan tombol <b>+ Transaksi</b> di atas untuk mencatat data baru.</p>
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="grid grid-cols-1 gap-6">
            <TransactionFilters categories={categories} />
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.25rem' }}>Riwayat Transaksi</h2>
              </div>
              <TransactionTable transactions={transactions} />
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 gap-6">
            <CategoryManager categories={categories} />
          </div>
        )}
      </div>

      {/* Floating Action Button for Mobile/Desktop Quick Access */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 90 }}>
        <AddTransactionModal categories={categories} variant="fab" />
      </div>

      <style jsx>{`
        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 0.5rem;
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.2s ease;
          font-size: 0.9rem;
        }
        @media (max-width: 640px) {
          .tab-btn {
            font-size: 0.8rem;
            gap: 0.25rem;
            padding: 0.6rem 0.25rem;
          }
          .tab-btn :global(svg) {
            width: 16px;
            height: 16px;
          }
        }
        .tab-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .tab-btn.active {
          color: #fff;
          background: var(--primary);
          box-shadow: 0 4px 12px var(--primary-glow);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

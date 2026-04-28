import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatsOverview({ stats }: { stats: { income: number, expense: number, balance: number } }) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Saldo Card */}
      <div className="glass-card" style={{ 
        background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(0, 0, 0, 0) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.05 }}>
          <Wallet size={120} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '10px' }}>
            <Wallet size={20} color="white" />
          </div>
          <span className="text-muted" style={{ fontWeight: 600 }}>Total Saldo</span>
        </div>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>{formatCurrency(stats.balance)}</h2>
      </div>

      {/* Income Card */}
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p className="text-muted" style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <TrendingUp size={14} color="var(--income)" /> Pendapatan
            </p>
            <h3 className="amount-income" style={{ fontSize: '1.5rem' }}>{formatCurrency(stats.income)}</h3>
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem', borderRadius: '50%' }}>
            <ArrowUpRight size={20} color="var(--income)" />
          </div>
        </div>
      </div>

      {/* Expense Card */}
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p className="text-muted" style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <TrendingDown size={14} color="var(--expense)" /> Pengeluaran
            </p>
            <h3 className="amount-expense" style={{ fontSize: '1.5rem' }}>{formatCurrency(stats.expense)}</h3>
          </div>
          <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '0.5rem', borderRadius: '50%' }}>
            <ArrowDownRight size={20} color="var(--expense)" />
          </div>
        </div>
      </div>
    </div>
  );
}

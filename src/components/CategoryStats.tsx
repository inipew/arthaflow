import { Category } from '@/lib/types';

interface CategoryTotal {
  name: string;
  total: number;
  type: string;
}

export default function CategoryStats({ totals }: { totals: CategoryTotal[] }) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  const incomeTotals = totals.filter(t => t.type === 'income');
  const expenseTotals = totals.filter(t => t.type === 'expense');

  const maxExpense = Math.max(...expenseTotals.map(t => t.total), 1);
  const maxIncome = Math.max(...incomeTotals.map(t => t.total), 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pengeluaran per Kategori */}
      <div className="glass-card">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Pengeluaran per Kategori</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {expenseTotals.length === 0 ? (
            <p className="text-muted">Belum ada data pengeluaran.</p>
          ) : (
            expenseTotals.map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>{item.name}</span>
                  <span className="amount-expense">{formatCurrency(item.total)}</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ 
                    width: `${(item.total / maxExpense) * 100}%`, 
                    height: '100%', 
                    background: 'var(--expense)',
                    boxShadow: '0 0 10px rgba(244, 63, 94, 0.3)',
                    borderRadius: '10px'
                  }} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pemasukan per Kategori */}
      <div className="glass-card">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Pemasukan per Kategori</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {incomeTotals.length === 0 ? (
            <p className="text-muted">Belum ada data pemasukan.</p>
          ) : (
            incomeTotals.map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span>{item.name}</span>
                  <span className="amount-income">{formatCurrency(item.total)}</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ 
                    width: `${(item.total / maxIncome) * 100}%`, 
                    height: '100%', 
                    background: 'var(--income)',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
                    borderRadius: '10px'
                  }} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

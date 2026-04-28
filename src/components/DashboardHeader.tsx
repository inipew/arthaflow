import { Wallet } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ background: 'var(--primary)', padding: '0.4rem', borderRadius: '8px' }}>
          <Wallet size={20} color="white" />
        </div>
        <h1 style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ArthaFlow
        </h1>
      </div>
      <p className="text-muted" style={{ fontSize: '0.75rem' }}>Digital Finance Sawah & Gabah</p>
    </header>
  );
}

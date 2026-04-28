'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Category } from '@/lib/types';
import { Search, Calendar, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TransactionFilters({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    start: searchParams.get('start') || '',
    end: searchParams.get('end') || '',
    cat: searchParams.get('cat') || '',
    person: searchParams.get('person') || '',
  });

  const updateFilters = () => {
    const params = new URLSearchParams();
    if (filters.start) params.set('start', filters.start);
    if (filters.end) params.set('end', filters.end);
    if (filters.cat) params.set('cat', filters.cat);
    if (filters.person) params.set('person', filters.person);
    
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="glass-card" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', padding: '1rem' }}>
      <div>
        <label className="text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem' }}>
          <Calendar size={12} /> Dari
        </label>
        <input 
          type="date" 
          value={filters.start}
          onChange={e => setFilters({...filters, start: e.target.value})}
          onBlur={updateFilters}
        />
      </div>
      <div>
        <label className="text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem' }}>
          <Calendar size={12} /> Sampai
        </label>
        <input 
          type="date" 
          value={filters.end}
          onChange={e => setFilters({...filters, end: e.target.value})}
          onBlur={updateFilters}
        />
      </div>
      <div>
        <label className="text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem' }}>
          <Tag size={12} /> Kategori
        </label>
        <select 
          value={filters.cat}
          onChange={e => {
            const val = e.target.value;
            setFilters({...filters, cat: val});
            // Manual trigger for select
            const params = new URLSearchParams(window.location.search);
            if (val) params.set('cat', val); else params.delete('cat');
            router.push(`?${params.toString()}`);
          }}
        >
          <option value="">Semua</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem' }}>
          <Search size={12} /> Nama Orang
        </label>
        <input 
          type="text" 
          placeholder="Cari nama..."
          value={filters.person}
          onChange={e => setFilters({...filters, person: e.target.value})}
          onKeyDown={e => e.key === 'Enter' && updateFilters()}
          onBlur={updateFilters}
        />
      </div>
    </div>
  );
}

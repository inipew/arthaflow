'use server';

import { revalidatePath } from 'next/cache';
import { Transaction, Category } from './types';

// Helper to get DB from env (Cloudflare D1)
const getDB = () => {
  if (!process.env.DB) {
    console.warn('⚠️ Database D1 tidak terdeteksi. Menggunakan mode simulasi (Local Mock).');
    return {
      prepare: (sql: string) => ({
        bind: (...params: any[]) => ({
          all: async () => ({ results: [] }),
          run: async () => ({ success: true }),
          first: async () => null,
        }),
        all: async () => ({ results: [] }),
        run: async () => ({ success: true }),
        first: async () => null,
      }),
    } as any;
  }
  return process.env.DB;
};

export async function getCategories(type?: 'income' | 'expense') {
  const db = getDB();
  
  // Mock data for local development if D1 is missing
  if (!process.env.DB) {
    const mockCategories = [
      // Pemasukan
      { id: 101, name: 'Bon / Utang ke Bos', type: 'income' },
      { id: 102, name: 'Hasil Jual Beras PK', type: 'income' },
      { id: 103, name: 'Uang Kembalian Beli Gabah', type: 'income' },
      
      // Pengeluaran
      { id: 1, name: 'Beli Gabah', type: 'expense' },
      { id: 2, name: 'DP / Panjer', type: 'expense' },
      { id: 3, name: 'Listrik', type: 'expense' },
      { id: 4, name: 'Upah Kuli Proses Gabah', type: 'expense' },
      { id: 5, name: 'Upah Kuli Panen Manual', type: 'expense' },
      { id: 6, name: 'Upah Mesin Kombi', type: 'expense' },
      { id: 7, name: 'Karung', type: 'expense' },
      { id: 8, name: 'Sopir', type: 'expense' },
      { id: 9, name: 'Sekam', type: 'expense' },
      { id: 10, name: 'Uang Makan', type: 'expense' },
      { id: 11, name: 'Solar', type: 'expense' },
      { id: 12, name: 'memberi utang ke orang', type: 'expense' },
      { id: 13, name: 'beli alat', type: 'expense' },
      { id: 14, name: 'beli obat sawah', type: 'expense' },
      { id: 15, name: 'beli pupuk', type: 'expense' },
      { id: 16, name: 'upah kuli sawah', type: 'expense' },
      { id: 17, name: 'upah traktor', type: 'expense' },
    ];
    return mockCategories.filter(c => !type || c.type === type);
  }

  let query = 'SELECT * FROM categories';
  let params: any[] = [];
  
  if (type) {
    query += ' WHERE type = ?';
    params.push(type);
  }
  
  query += ' ORDER BY name ASC';
  const { results } = await db.prepare(query).bind(...params).all<Category>();
  return results;
}

export async function addCategory(name: string, type: 'income' | 'expense') {
  const db = getDB();
  await db.prepare('INSERT INTO categories (name, type) VALUES (?, ?)')
    .bind(name, type)
    .run();
  revalidatePath('/');
}

export async function deleteCategory(id: number) {
  const db = getDB();
  // Optional: Check if category is used in transactions
  await db.prepare('DELETE FROM categories WHERE id = ?').bind(id).run();
  revalidatePath('/');
}

export async function getTransactions(filters: {
  startDate?: string;
  endDate?: string;
  categoryId?: number;
  personName?: string;
} = {}) {
  const db = getDB();

  // Mock data for local development if D1 is missing
  if (!process.env.DB) {
    const mockData: Transaction[] = [
      { id: '1', type: 'income', amount: 5000000, category_id: 102, category_name: 'Hasil Jual Beras PK', date: '2026-04-28', created_at: '' },
      { id: '2', type: 'expense', amount: 1500000, category_id: 1, category_name: 'Beli Gabah', date: '2026-04-28', created_at: '' },
      { id: '3', type: 'expense', amount: 200000, category_id: 12, category_name: 'memberi utang ke orang', person_name: 'Pak Budi', description: 'Pinjam untuk pupuk', date: '2026-04-27', created_at: '' },
      { id: '4', type: 'expense', amount: 50000, category_id: 11, category_name: 'Solar', date: '2026-04-27', created_at: '' },
    ];
    return mockData.filter(t => {
      if (filters.categoryId && t.category_id !== filters.categoryId) return false;
      if (filters.personName && !t.person_name?.toLowerCase().includes(filters.personName.toLowerCase())) return false;
      if (filters.startDate && t.date < filters.startDate) return false;
      if (filters.endDate && t.date > filters.endDate) return false;
      return true;
    });
  }

  let query = `
    SELECT t.*, c.name as category_name 
    FROM transactions t 
    JOIN categories c ON t.category_id = c.id
    WHERE 1=1
  `;
  const params: any[] = [];

  if (filters.startDate) {
    query += ' AND t.date >= ?';
    params.push(filters.startDate);
  }
  if (filters.endDate) {
    query += ' AND t.date <= ?';
    params.push(filters.endDate);
  }
  if (filters.categoryId) {
    query += ' AND t.category_id = ?';
    params.push(filters.categoryId);
  }
  if (filters.personName) {
    query += ' AND t.person_name LIKE ?';
    params.push(`%${filters.personName}%`);
  }

  query += ' ORDER BY t.date DESC, t.created_at DESC';
  
  const { results } = await db.prepare(query).bind(...params).all<Transaction>();
  return results;
}

export async function addTransaction(data: {
  type: 'income' | 'expense';
  amount: number;
  category_id: number;
  description?: string;
  person_name?: string;
  date: string;
}) {
  const db = getDB();
  const id = crypto.randomUUID();
  
  await db.prepare(`
    INSERT INTO transactions (id, type, amount, category_id, description, person_name, date)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id,
    data.type,
    data.amount,
    data.category_id,
    data.description || '',
    data.person_name || null,
    data.date
  ).run();
  
  revalidatePath('/');
}

export async function deleteTransaction(id: string) {
  const db = getDB();
  await db.prepare('DELETE FROM transactions WHERE id = ?').bind(id).run();
  revalidatePath('/');
}

export async function getCategoryTotals() {
  const db = getDB();

  // Mock data for local development if D1 is missing
  if (!process.env.DB) {
    return [
      { name: 'Hasil Jual Beras PK', total: 5000000, type: 'income' },
      { name: 'Beli Gabah', total: 1500000, type: 'expense' },
      { name: 'memberi utang ke orang', total: 200000, type: 'expense' },
      { name: 'Solar', total: 50000, type: 'expense' },
    ];
  }

  const { results } = await db.prepare(`
    SELECT c.name, SUM(t.amount) as total, c.type
    FROM transactions t
    JOIN categories c ON t.category_id = c.id
    GROUP BY c.id
    ORDER BY total DESC
  `).all<{ name: string; total: number; type: string }>();
  
  return results;
}

export async function getStats() {
  const db = getDB();

  // Mock data for local development if D1 is missing
  if (!process.env.DB) {
    return {
      income: 5000000,
      expense: 1750000,
      balance: 3250000
    };
  }

  const stats = await db.prepare(`
    SELECT 
      SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) as total_income,
      SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) as total_expense
    FROM transactions
  `).first<{ total_income: number; total_expense: number }>();
  
  return {
    income: stats?.total_income || 0,
    expense: stats?.total_expense || 0,
    balance: (stats?.total_income || 0) - (stats?.total_expense || 0)
  };
}

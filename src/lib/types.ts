export interface Category {
  id: number;
  name: string;
  type: 'income' | 'expense';
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category_id: number;
  description?: string;
  person_name?: string;
  date: string;
  created_at: string;
  category_name?: string; // Joined field
}

export type D1Database = {
  prepare: (sql: string) => any;
  batch: (statements: any[]) => Promise<any>;
  exec: (sql: string) => Promise<any>;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: D1Database;
    }
  }
}

// @ts-nocheck
import * as db from '$lib/server/db';
import type { PageServerLoad, Actions } from './$types';

export const load = async ({ url, platform }: Parameters<PageServerLoad>[0]) => {
  const d1 = platform?.env?.DB;
  
  const filters = {
    startDate: url.searchParams.get('start') || undefined,
    endDate: url.searchParams.get('end') || undefined,
    categoryId: url.searchParams.get('cat') ? parseInt(url.searchParams.get('cat')!) : undefined,
    personName: url.searchParams.get('person') || undefined,
  };

  const [stats, transactions, categories, categoryTotals] = await Promise.all([
    db.getStats(d1),
    db.getTransactions(d1, filters),
    db.getCategories(d1),
    db.getCategoryTotals(d1),
  ]);

  return {
    stats,
    transactions,
    categories,
    categoryTotals,
    filters
  };
};

export const actions = {
  addTransaction: async ({ request, platform }: import('./$types').RequestEvent) => {
    const d1 = platform?.env?.DB;
    const data = await request.json();
    await db.addTransaction(d1, data);
    return { success: true };
  },
  deleteTransaction: async ({ request, platform }: import('./$types').RequestEvent) => {
    const d1 = platform?.env?.DB;
    const { id } = await request.json();
    await db.deleteTransaction(d1, id);
    return { success: true };
  },
  addCategory: async ({ request, platform }: import('./$types').RequestEvent) => {
    const d1 = platform?.env?.DB;
    const { name, type } = await request.json();
    await db.addCategory(d1, name, type);
    return { success: true };
  },
  deleteCategory: async ({ request, platform }: import('./$types').RequestEvent) => {
    const d1 = platform?.env?.DB;
    const { id } = await request.json();
    await db.deleteCategory(d1, id);
    return { success: true };
  }
};
;null as any as Actions;
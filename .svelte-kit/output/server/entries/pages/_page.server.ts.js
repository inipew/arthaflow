async function getCategories(db, type) {
  if (!db) {
    const mockCategories = [
      { id: 101, name: "Bon / Utang ke Bos", type: "income" },
      { id: 102, name: "Hasil Jual Beras PK", type: "income" },
      { id: 103, name: "Uang Kembalian Beli Gabah", type: "income" },
      { id: 1, name: "Beli Gabah", type: "expense" },
      { id: 2, name: "DP / Panjer", type: "expense" },
      { id: 3, name: "Listrik", type: "expense" },
      { id: 4, name: "Upah Kuli Proses Gabah", type: "expense" },
      { id: 5, name: "Upah Kuli Panen Manual", type: "expense" },
      { id: 6, name: "Upah Mesin Kombi", type: "expense" },
      { id: 7, name: "Karung", type: "expense" },
      { id: 8, name: "Sopir", type: "expense" },
      { id: 9, name: "Sekam", type: "expense" },
      { id: 10, name: "Uang Makan", type: "expense" },
      { id: 11, name: "Solar", type: "expense" },
      { id: 12, name: "memberi utang ke orang", type: "expense" },
      { id: 13, name: "beli alat", type: "expense" },
      { id: 14, name: "beli obat sawah", type: "expense" },
      { id: 15, name: "beli pupuk", type: "expense" },
      { id: 16, name: "upah kuli sawah", type: "expense" },
      { id: 17, name: "upah traktor", type: "expense" }
    ];
    return mockCategories.filter((c) => true);
  }
  let query = "SELECT * FROM categories";
  let params = [];
  query += " ORDER BY name ASC";
  const { results } = await db.prepare(query).bind(...params).all();
  return results;
}
async function getTransactions(db, filters = {}) {
  if (!db) {
    const mockData = [
      { id: "1", type: "income", amount: 5e6, category_id: 102, category_name: "Hasil Jual Beras PK", date: "2026-04-28", created_at: "" },
      { id: "2", type: "expense", amount: 15e5, category_id: 1, category_name: "Beli Gabah", date: "2026-04-28", created_at: "" },
      { id: "3", type: "expense", amount: 2e5, category_id: 12, category_name: "memberi utang ke orang", person_name: "Pak Budi", description: "Pinjam untuk pupuk", date: "2026-04-27", created_at: "" },
      { id: "4", type: "expense", amount: 5e4, category_id: 11, category_name: "Solar", date: "2026-04-27", created_at: "" }
    ];
    return mockData.filter((t) => {
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
  const params = [];
  if (filters.startDate) {
    query += " AND t.date >= ?";
    params.push(filters.startDate);
  }
  if (filters.endDate) {
    query += " AND t.date <= ?";
    params.push(filters.endDate);
  }
  if (filters.categoryId) {
    query += " AND t.category_id = ?";
    params.push(filters.categoryId);
  }
  if (filters.personName) {
    query += " AND t.person_name LIKE ?";
    params.push(`%${filters.personName}%`);
  }
  query += " ORDER BY t.date DESC, t.created_at DESC";
  const { results } = await db.prepare(query).bind(...params).all();
  return results;
}
async function getStats(db) {
  if (!db) {
    return { income: 5e6, expense: 175e4, balance: 325e4 };
  }
  const stats = await db.prepare(`
    SELECT 
      SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) as total_income,
      SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) as total_expense
    FROM transactions
  `).first();
  const income = stats?.total_income || 0;
  const expense = stats?.total_expense || 0;
  return { income, expense, balance: income - expense };
}
async function getCategoryTotals(db) {
  if (!db) {
    return [
      { name: "Hasil Jual Beras PK", total: 5e6, type: "income" },
      { name: "Beli Gabah", total: 15e5, type: "expense" },
      { name: "memberi utang ke orang", total: 2e5, type: "expense" },
      { name: "Solar", total: 5e4, type: "expense" }
    ];
  }
  const { results } = await db.prepare(`
    SELECT c.name, SUM(t.amount) as total, c.type
    FROM transactions t
    JOIN categories c ON t.category_id = c.id
    GROUP BY c.id
    ORDER BY total DESC
  `).all();
  return results;
}
async function addTransaction(db, data) {
  if (!db) return;
  const id = crypto.randomUUID();
  await db.prepare(`
    INSERT INTO transactions (id, type, amount, category_id, description, person_name, date)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id,
    data.type,
    data.amount,
    data.category_id,
    data.description || "",
    data.person_name || null,
    data.date
  ).run();
}
async function deleteTransaction(db, id) {
  if (!db) return;
  await db.prepare("DELETE FROM transactions WHERE id = ?").bind(id).run();
}
async function addCategory(db, name, type) {
  if (!db) return;
  await db.prepare("INSERT INTO categories (name, type) VALUES (?, ?)").bind(name, type).run();
}
async function deleteCategory(db, id) {
  if (!db) return;
  await db.prepare("DELETE FROM categories WHERE id = ?").bind(id).run();
}
const load = async ({ url, platform }) => {
  const d1 = platform?.env?.DB;
  const filters = {
    startDate: url.searchParams.get("start") || void 0,
    endDate: url.searchParams.get("end") || void 0,
    categoryId: url.searchParams.get("cat") ? parseInt(url.searchParams.get("cat")) : void 0,
    personName: url.searchParams.get("person") || void 0
  };
  const [stats, transactions, categories, categoryTotals] = await Promise.all([
    getStats(d1),
    getTransactions(d1, filters),
    getCategories(d1),
    getCategoryTotals(d1)
  ]);
  return {
    stats,
    transactions,
    categories,
    categoryTotals,
    filters
  };
};
const actions = {
  addTransaction: async ({ request, platform }) => {
    const d1 = platform?.env?.DB;
    const data = await request.json();
    await addTransaction(d1, data);
    return { success: true };
  },
  deleteTransaction: async ({ request, platform }) => {
    const d1 = platform?.env?.DB;
    const { id } = await request.json();
    await deleteTransaction(d1, id);
    return { success: true };
  },
  addCategory: async ({ request, platform }) => {
    const d1 = platform?.env?.DB;
    const { name, type } = await request.json();
    await addCategory(d1, name, type);
    return { success: true };
  },
  deleteCategory: async ({ request, platform }) => {
    const d1 = platform?.env?.DB;
    const { id } = await request.json();
    await deleteCategory(d1, id);
    return { success: true };
  }
};
export {
  actions,
  load
};

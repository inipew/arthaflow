import { getStats, getTransactions, getCategories, getCategoryTotals } from '@/lib/actions';
import DashboardHeader from '@/components/DashboardHeader';
import MainContainer from '@/components/MainContainer';

export const runtime = 'edge';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;
  
  const filters = {
    startDate: typeof params.start === 'string' ? params.start : undefined,
    endDate: typeof params.end === 'string' ? params.end : undefined,
    categoryId: typeof params.cat === 'string' ? parseInt(params.cat) : undefined,
    personName: typeof params.person === 'string' ? params.person : undefined,
  };

  const [stats, transactions, categories, categoryTotals] = await Promise.all([
    getStats(),
    getTransactions(filters),
    getCategories(),
    getCategoryTotals(),
  ]);

  return (
    <main className="container" style={{ maxWidth: '900px' }}>
      <DashboardHeader />
      <MainContainer 
        stats={stats} 
        transactions={transactions} 
        categories={categories} 
        categoryTotals={categoryTotals}
      />
    </main>
  );
}

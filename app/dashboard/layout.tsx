// app/dashboard/layout.tsx
import Sidebar from './components/Sidebar';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { UserProvider } from './UserProvider';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/auth/login');
  }

  return (
    <UserProvider uid={user.id!}>
      <div className="flex min-h-screen">
        <aside className="w-60 bg-gray-100 border-r border-gray-200">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4 bg-white">
          {children}
        </main>
      </div>
    </UserProvider>
  );
}

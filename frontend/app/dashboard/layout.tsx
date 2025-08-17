// app/dashboard/layout.tsx
import Sidebar from './components/Sidebar';
import getUser from '@/utils/supabase/get-user'
import { redirect } from 'next/navigation';
import { UserProvider } from './UserProvider';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Fetch user profile from your API
  async function getUserProfile() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user?uid=${user?.id}`, {
      cache: 'no-store', // optional: avoid stale data in SSR
    });
    return res.json();
  }

  const profile = await getUserProfile();

  return (
    <UserProvider profile={profile}>
      <div className="flex min-h-screen">
        <aside className="fixed left-0 top-0 w-60 h-full bg-gray-100 border-r border-gray-200 z-40">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-60 p-4 bg-white">{children}</main>
      </div>
    </UserProvider>
  );
}
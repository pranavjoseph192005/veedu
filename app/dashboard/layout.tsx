import Sidebar from './components/Sidebar'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-100 border-r border-gray-200">
        <Sidebar />
      </aside>
      <main className="flex-1 p-4 bg-white">
        {children}
      </main>
    </div>
  )
}

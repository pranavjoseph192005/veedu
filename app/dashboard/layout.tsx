import Sidebar from './components/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

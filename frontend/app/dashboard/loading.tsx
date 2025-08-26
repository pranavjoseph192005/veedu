export default function DashboardSkeleton() {
    return (
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-6 bg-gray-50 min-h-screen animate-pulse">
        {/* Properties section skeleton */}
        <div className="row-span-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4">
          {/* Header skeleton */}
          <div className="flex justify-between items-center mb-3">
            <div className="h-6 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
          
          {/* Table skeleton */}
          <div className="space-y-3">
            {/* Table header */}
            <div className="flex gap-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            
            {/* Table rows */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                <div className="h-4 bg-gray-100 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Tickets section skeleton */}
        <div className="row-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4">
          <div className="h-6 bg-gray-200 rounded w-16 mx-auto"></div>
        </div>
  
        {/* Profit section skeleton */}
        <div className="row-start-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4">
          <div className="h-6 bg-gray-200 rounded w-12 mx-auto"></div>
        </div>
  
        {/* Reminders section skeleton */}
        <div className="row-start-3 col-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4">
          <div className="h-6 bg-gray-200 rounded w-20 mx-auto"></div>
        </div>
  
        {/* Analytics section skeleton */}
        <div className="row-start-3 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4">
          <div className="h-6 bg-gray-200 rounded w-18 mx-auto"></div>
        </div>
      </div>
    );
  }
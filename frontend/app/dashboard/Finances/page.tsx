import React from 'react'

const FinancePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl">
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-6 min-h-screen">
        <div className="row-span-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
          Net Profit for the month
        </div>
        <div className="row-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
          upcoming payments
        </div>
        <div className="row-start-2 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
          Expenses
        </div>
        <div className="row-start-3 col-start-1 col-span-2 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center justify-center text-gray-700 font-medium text-lg hover:text-blue-500 transition">
          Reminders
        </div>
      </div>
    </main>
  )
}

export default FinancePage
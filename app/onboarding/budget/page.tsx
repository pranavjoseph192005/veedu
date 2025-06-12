'use client'

import { useRouter } from 'next/navigation'

export default function IncomeSlider() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/onboarding/goal')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 space-y-8 animate-fade-in"
      >
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                What's your financial profile?
            </h1>
            <p className="text-base text-gray-500 mb-0">
                Tell us a bit about your financial situation
            </p>
            <p className="text-base text-gray-500 mt-0">
                so we can better tailor your plan.
            </p>
        </div>

        <div className="space-y-4">
            <div>
                <label htmlFor="savings" className="text-2xl font-medium text-gray-700 block mt-0">
                    How much do you have saved to invest?
                </label>
                <p className="text-sm text-gray-500 py-1">
                    Don't worry if you haven't saved any!
                </p>
                <input
                    id="savings"
                    name="savings"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="income" className="text-2xl font-medium text-gray-700 block mt-0">
                    Whats your annual income?
                </label>
                <input
                    id="income"
                    name="income"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>

        {/* You can insert the slider or form fields here */}

        <button
          type="submit"
          className="w-full py-3 text-white font-medium bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Continue
        </button>
      </form>
    </main>
  )
}

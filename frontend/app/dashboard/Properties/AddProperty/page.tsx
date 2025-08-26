'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const OPTIONS = [
  { id: '', label: '-- Select Property Type --' },
  { id: 'Single Family Property', label: 'Single Family Home' },
  { id: 'Multi-Family Property', label: 'Multi-Family Property' },
  { id: 'Commercial Property', label: 'Commercial Property' },
  { id: 'Other', label: 'Other' },
]

export default function PropertyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const res = await fetch('/api/house', {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      router.push('/dashboard/Properties/AddProperty/info')
    } else {
      alert('Failed to add property')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl px-8 py-8">
      <div className="w-full max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Add Your Property</h1>
          <p className=" text-gray-600 max-w-md mx-auto">
            Tell us about your property so we can help you manage it effectively.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Property Type */}
              <div className="space-y-2">
                <label htmlFor="propertyType" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Property Type
                </label>
                <select 
                  name="propertyType" 
                  id="propertyType" 
                  required
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 font-medium"
                >
                  {OPTIONS.map((option) => (
                    <option key={option.id} value={option.id} disabled={option.id === ''}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address Grid */}
              <div className="grid grid-cols-1 gap-6">
                {/* Street Address */}
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Street Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* City, State, ZIP Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      placeholder="Dallas"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="state" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      State
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      placeholder="TX"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="zip" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      required
                      placeholder="75201"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed shadow-none'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus:ring-4 focus:ring-blue-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding Property...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                      Add Property
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Accent */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"></div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Your property information is secure and encrypted
        </p>
      </div>
    </main>
  )
}
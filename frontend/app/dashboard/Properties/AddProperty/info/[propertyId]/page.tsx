'use client'

import React, { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function PropertyInfo() {
  const params = useParams()
  const propertyId = params.propertyId
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [purchaseMonth, setPurchaseMonth] = useState(() => {
    const now = new Date();
    return now.toISOString().slice(0, 7);
  })
  const [purchasePrice, setPurchasePrice] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    if (propertyId) {
      formData.append('id', propertyId as string)
    }
    formData.append('purchaseMonth', purchaseMonth)
    formData.append('purchasePrice', purchasePrice)

    const res = await fetch('/api/house',{
      method: 'PATCH',
      body: formData,
    })

    if (res.ok) {
      router.push('/dashboard/Properties')
    } else {
      console.error('Failed to add property')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl px-8 py-8">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Add Your Property</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Help us with some info about your property.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Purchase Date */}
              <div className="space-y-2">
                <label htmlFor="purchaseDate" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Purchase Date
                </label>
                <input
                  id="purchaseDate"
                  name="purchaseDate"
                  type="month"
                  required
                  value={purchaseMonth}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 font-medium"
                  onChange={(e) => setPurchaseMonth(e.target.value)}
                />
              </div>

              {/* Bedrooms, Bathrooms, Square Feet */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="bed" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Bedrooms
                  </label>
                  <input 
                    id="bed"
                    name="bed"
                    type="number"
                    required 
                    placeholder="3"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="bath" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Bathrooms
                  </label>
                  <input 
                    id="bath"
                    name="bath"
                    type="number"
                    required 
                    placeholder="2"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="squareFoot" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Square Feet
                  </label>
                  <input 
                    id="squareFoot"
                    name="squareFoot"
                    type="number"
                    required 
                    placeholder="1000"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Purchase Price */}
              <div className="space-y-2">
                <label htmlFor="purchasePrice" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Purchase Price
                </label>
                <input
                  id="purchasePrice"
                  name="purchasePrice"
                  type="number"
                  required
                  placeholder="250000"
                  value={purchasePrice}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 font-medium"
                  onChange={(e) => setPurchasePrice(e.target.value)}
                />
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
        </div>
      </div>
    </main>
  )
}
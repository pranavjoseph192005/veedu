'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PropertyInfo() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [purchaseMonth, setPurchaseMonth] = useState(() => {
        const now = new Date();
        return now.toISOString().slice(0, 7);
    })
    const router = useRouter()

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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <label htmlFor="purchaseDate" className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Purchase Date
                                </label>
                                <input
                                    id="purchaseDate"
                                    name="purchaseDate"
                                    type="month"
                                    required
                                    value={purchaseMonth}className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-900 font-medium"
                                    onChange={(e) => setPurchaseMonth(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
import React from 'react'

export default async function PropertyForm(){
    return(
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form
                action="/api/house" method="POST"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Add A Property</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Add a property you want us to manage.
                     </p>
                </div>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="address" className="text-sm font-medium text-gray-700 block mb-1">
                            Street
                        </label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="text-sm font-medium text-gray-700 block mb-1">
                            City
                        </label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="state" className="text-sm font-medium text-gray-700 block mb-1">
                            State
                        </label>
                        <input
                            id="state"
                            name="state"
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="zip" className="text-sm font-medium text-gray-700 block mb-1">
                            ZIP Code
                        </label>
                        <input
                            id="zip"
                            name="zip"
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                    Add Property
                    </button>
                </div>
            </form>
        </main>
    )
}
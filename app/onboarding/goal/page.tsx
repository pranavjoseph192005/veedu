'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const OPTIONS = [
  { id: 'investor', label: 'I want to invest' },
  { id: 'manager', label: 'I already own property' },
  { id: 'both', label: 'Both' },
]

export default function OnboardingTable() {
  const [selectedId, setSelectedId] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    if (!selectedId) return alert('Please select an option.')

    await fetch('/api/submit-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ choice: selectedId }),
    })

    router.push('/onboarding/budget')
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <table className="w-full border border-gray-200 rounded overflow-hidden">
        <tbody>
          {OPTIONS.map((option) => (
            <tr
              key={option.id}
              onClick={() => setSelectedId(option.id)}
              className={`cursor-pointer transition 
                ${selectedId === option.id ? 'bg-blue-100 font-semibold' : 'hover:bg-gray-100'}
              `}
            >
              <td className="p-4 border-b">{option.label}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Continue
      </button>
    </div>
  )
}
// app/onboarding/complete/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function OnboardingComplete() {
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/userProfile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstLoginComplete: true }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('Updated successfully:', data)

      router.push('/dashboard')
    } catch (error) {
      console.error('Error during PATCH:', error)
    }
  } 

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div
        className="bg-white border border-gray-200 p-10 rounded-2xl shadow-xl max-w-xl text-center space-y-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-gray-800"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          🎉 You’re All Set!
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Thanks for sharing your info. We’ve tailored your experience to match your goals. You can now explore properties, get insights, and start investing smarter.
        </motion.p>

        <motion.button
          onClick={() => handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg shadow-lg transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Dashboard
        </motion.button>

        {/* Background confetti animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute bg-blue-100 rounded-full w-4 h-4 top-[10%] left-[30%]"
            animate={{ y: ["0%", "100%"], x: ["0%", "20%"], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bg-gray-100 rounded-full w-3 h-3 top-[20%] left-[70%]"
            animate={{ y: ["0%", "120%"], x: ["0%", "-30%"], rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bg-blue-50 rounded-full w-2 h-2 top-[0%] left-[50%]"
            animate={{ y: ["0%", "130%"], x: ["0%", "10%"], rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </main>
  );
}

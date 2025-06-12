// app/onboarding/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function OnboardingStart() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-800 to-pink-600 flex items-center justify-center p-6">
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl text-center space-y-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-purple-800"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          🎉 Welcome Aboard!
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We just need you to answer a few quick questions to personalize your journey.
        </motion.p>

        <motion.button
          onClick={() => router.push('/onboarding/experience')}
          className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-3 rounded-full shadow-lg transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: -3 }}
        >
          Let’s Go 🚀
        </motion.button>

        <motion.div
          className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background confetti animation (pseudo example) */}
          <motion.div
            className="absolute bg-white rounded-full w-4 h-4 top-[10%] left-[30%]"
            animate={{ y: ["0%", "100%"], x: ["0%", "20%"], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bg-white rounded-full w-3 h-3 top-[20%] left-[70%]"
            animate={{ y: ["0%", "120%"], x: ["0%", "-30%"], rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bg-white rounded-full w-2 h-2 top-[0%] left-[50%]"
            animate={{ y: ["0%", "130%"], x: ["0%", "10%"], rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </main>
  );
}

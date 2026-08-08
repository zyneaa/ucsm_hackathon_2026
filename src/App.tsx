import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-neutral-950 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        React + TypeScript + Tailwind + Framer Motion
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCount((c) => c + 1)}
        className="rounded-lg bg-indigo-500 px-6 py-3 text-lg font-medium"
      >
        Count is {count}
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-neutral-400"
      >
        Edit <code className="text-neutral-200">src/App.tsx</code> to get started.
      </motion.p>
    </main>
  )
}

export default App
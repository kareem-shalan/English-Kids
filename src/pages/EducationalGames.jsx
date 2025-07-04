import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gamepad2, Trophy, Star, RefreshCw } from 'lucide-react'

const EducationalGames = () => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState('playing')

  const games = [
    {
      title: 'Letter Matching',
      emoji: '🔤',
      description: 'Match uppercase letters with lowercase letters!',
      color: 'from-blue-400 to-blue-600',
      type: 'matching'
    },
    {
      title: 'Word Quiz',
      emoji: '❓',
      description: 'Choose the correct word for each picture!',
      color: 'from-green-400 to-green-600',
      type: 'quiz'
    },
    {
      title: 'Sound Match',
      emoji: '🔊',
      description: 'Match the animal sounds with their pictures!',
      color: 'from-purple-400 to-purple-600',
      type: 'sound'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎮 Educational Games! 🎮
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn English while having fun with our exciting games!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`cursor-pointer bg-gradient-to-r ${game.color} rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white/30`}
            >
              <div className="text-6xl mb-4">{game.emoji}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{game.title}</h3>
              <p className="text-white/90 text-lg mb-6">{game.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-200"
              >
                Play Now!
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white/15 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20"
        >
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-white mb-4">More Games Coming Soon!</h2>
          <p className="text-white/90 text-lg">
            We're working hard to bring you more exciting educational games. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default EducationalGames 
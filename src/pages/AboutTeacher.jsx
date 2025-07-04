import { motion } from 'framer-motion'
import { Heart, Star, BookOpen, Smile } from 'lucide-react'

const AboutTeacher = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            👩‍🏫 Meet Your Teacher! 👩‍🏫
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-white/50"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-6xl"
            >
              👩‍🏫
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Miss Sarah</h2>
            <p className="text-xl text-gray-600">Your English Learning Guide</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-500" />
                About Me
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hi there, wonderful learners! I'm Miss Sarah, and I absolutely love helping children 
                discover the magic of the English language. With over 10 years of teaching experience, 
                I believe that learning should always be fun, colorful, and full of surprises!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                My Teaching Style
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I use songs, games, stories, and lots of interactive activities to make learning 
                English exciting. Every child learns differently, and I make sure everyone feels 
                comfortable and confident as they explore new words and sounds!
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-6 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Fun Facts About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/50 rounded-xl p-4">
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-gray-700 font-medium">I love painting and drawing with bright colors!</p>
              </div>
              <div className="bg-white/50 rounded-xl p-4">
                <div className="text-3xl mb-2">🐱</div>
                <p className="text-gray-700 font-medium">I have two fluffy cats named Whiskers and Mittens!</p>
              </div>
              <div className="bg-white/50 rounded-xl p-4">
                <div className="text-3xl mb-2">🍪</div>
                <p className="text-gray-700 font-medium">I bake cookies for my students on special occasions!</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Smile className="w-6 h-6 mr-2 text-green-500" />
              My Promise to You
            </h3>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                "I promise to make your English learning journey filled with joy, laughter, and amazing discoveries. 
                Together, we'll explore the wonderful world of words, and I'll be here to cheer you on every step of the way! 
                Remember, every mistake is just a stepping stone to success, and every question you ask makes you braver and smarter!"
              </p>
              <div className="mt-4 text-2xl">💕✨🌟</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutTeacher 
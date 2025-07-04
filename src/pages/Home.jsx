import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Volume2, Gamepad2, Star, Heart, Sparkles } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Learn the Alphabet',
      description: 'Discover letters with fun sounds and colorful pictures!',
      color: 'from-green-400 to-green-600',
      link: '/alphabet'
    },
    {
      icon: Volume2,
      title: 'Practice Words',
      description: 'Build your vocabulary with interactive flashcards!',
      color: 'from-blue-400 to-blue-600',
      link: '/vocabulary'
    },
    {
      icon: Gamepad2,
      title: 'Play Games',
      description: 'Have fun while learning with exciting games!',
      color: 'from-pink-400 to-pink-600',
      link: '/games'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative px-4 py-20 text-center"
      >
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-6xl"
        >
          🌟
        </motion.div>

        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-20 text-5xl"
        >
          🎈
        </motion.div>

        <motion.div
          animate={{
            y: [-5, 15, -5],
            x: [-5, 5, -5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 text-4xl"
        >
          🌈
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              English Fun!
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join us on an amazing adventure to learn English! 
            Play games, learn letters, and discover new words in the most fun way possible! 🎉
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium"
            >
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              Ages 4-9
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium"
            >
              <Heart className="w-5 h-5 mr-2 text-red-300" />
              Fun Learning
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium"
            >
              <Sparkles className="w-5 h-5 mr-2 text-purple-300" />
              Interactive
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link to={feature.link}>
                  <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/25 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/80 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-6 mx-auto"
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <Link to="/alphabet">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Learning Now! 🚀
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default Home 
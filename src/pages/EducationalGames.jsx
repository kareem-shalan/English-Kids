import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, ArrowLeft } from 'lucide-react'

const EducationalGames = () => {
  const [selectedGame, setSelectedGame] = useState(null)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState('menu')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [gameData, setGameData] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)

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

  const letterMatchingData = [
    { uppercase: 'A', lowercase: 'a', word: 'Apple', emoji: '🍎' },
    { uppercase: 'B', lowercase: 'b', word: 'Ball', emoji: '⚽' },
    { uppercase: 'C', lowercase: 'c', word: 'Cat', emoji: '🐱' },
    { uppercase: 'D', lowercase: 'd', word: 'Dog', emoji: '🐶' },
    { uppercase: 'E', lowercase: 'e', word: 'Elephant', emoji: '🐘' },
    { uppercase: 'F', lowercase: 'f', word: 'Fish', emoji: '🐠' },
    { uppercase: 'G', lowercase: 'g', word: 'Giraffe', emoji: '🦒' },
    { uppercase: 'H', lowercase: 'h', word: 'House', emoji: '🏠' }
  ]

  const wordQuizData = [
    {
      question: 'What animal is this?',
      image: '🐱',
      options: ['Cat', 'Dog', 'Bird', 'Fish'],
      correct: 'Cat'
    },
    {
      question: 'What color is this?',
      image: '🍎',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      correct: 'Red'
    },
    {
      question: 'What fruit is this?',
      image: '🍌',
      options: ['Apple', 'Banana', 'Orange', 'Grape'],
      correct: 'Banana'
    },
    {
      question: 'What animal is this?',
      image: '🐶',
      options: ['Cat', 'Dog', 'Bird', 'Fish'],
      correct: 'Dog'
    },
    {
      question: 'What color is this?',
      image: '🌊',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      correct: 'Blue'
    }
  ]

  const soundMatchData = [
    {
      animal: 'Cat',
      emoji: '🐱',
      sound: 'Meow',
      options: ['Meow', 'Woof', 'Moo', 'Baa'],
      correct: 'Meow'
    },
    {
      animal: 'Dog',
      emoji: '🐶',
      sound: 'Woof',
      options: ['Meow', 'Woof', 'Moo', 'Baa'],
      correct: 'Woof'
    },
    {
      animal: 'Cow',
      emoji: '🐮',
      sound: 'Moo',
      options: ['Meow', 'Woof', 'Moo', 'Baa'],
      correct: 'Moo'
    },
    {
      animal: 'Sheep',
      emoji: '🐑',
      sound: 'Baa',
      options: ['Meow', 'Woof', 'Moo', 'Baa'],
      correct: 'Baa'
    },
    {
      animal: 'Lion',
      emoji: '🦁',
      sound: 'Roar',
      options: ['Roar', 'Woof', 'Moo', 'Baa'],
      correct: 'Roar'
    }
  ]

  const startGame = (game) => {
    setSelectedGame(game)
    setScore(0)
    setCurrentQuestion(0)
    setCorrectAnswers(0)
    setGameState('playing')

    switch (game.type) {
      case 'matching':
        setGameData(letterMatchingData)
        break
      case 'quiz':
        setGameData(wordQuizData)
        break
      case 'sound':
        setGameData(soundMatchData)
        break
      default:
        setGameData([])
    }
  }

  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1.1
      speechSynthesis.speak(utterance)
    }
  }

  const handleAnswer = (answer) => {
    const currentData = gameData[currentQuestion]
    let isCorrect = false

    if (selectedGame.type === 'matching') {
      isCorrect = answer === currentData.lowercase
    } else {
      isCorrect = answer === currentData.correct
    }

    if (isCorrect) {
      setScore(score + 10)
      setCorrectAnswers(correctAnswers + 1)
    }

    if (currentQuestion < gameData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setGameState('finished')
    }
  }

  const resetGame = () => {
    setGameState('menu')
    setSelectedGame(null)
    setScore(0)
    setCurrentQuestion(0)
    setCorrectAnswers(0)
  }

  const renderGameContent = () => {
    if (!gameData || currentQuestion >= gameData.length) return null

    const currentData = gameData[currentQuestion]

    switch (selectedGame.type) {
      case 'matching':
        return (
          <div className="text-center">
            <div className="text-8xl mb-8">{currentData.emoji}</div>
            <h2 className="text-6xl font-bold text-white mb-8">{currentData.uppercase}</h2>
            <p className="text-2xl text-white/90 mb-8">Find the lowercase letter for "{currentData.uppercase}"</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((letter) => (
                <motion.button
                  key={letter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(letter)}
                  className="bg-white text-gray-800 text-4xl font-bold p-6 rounded-2xl hover:bg-gray-100 transition-all duration-200"
                >
                  {letter}
                </motion.button>
              ))}
            </div>
          </div>
        )

      case 'quiz':
        return (
          <div className="text-center">
            <div className="text-8xl mb-8">{currentData.image}</div>
            <h2 className="text-3xl font-bold text-white mb-8">{currentData.question}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {currentData.options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option)}
                  className="bg-white text-gray-800 text-xl font-bold p-6 rounded-2xl hover:bg-gray-100 transition-all duration-200"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        )

      case 'sound':
        return (
          <div className="text-center">
            <div className="text-8xl mb-8">{currentData.emoji}</div>
            <h2 className="text-3xl font-bold text-white mb-4">What sound does this animal make?</h2>
            <p className="text-2xl text-white/90 mb-8">{currentData.animal}</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => playSound(currentData.sound)}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full font-bold text-xl mb-8 mx-auto flex items-center"
            >
              <Volume2 className="w-6 h-6 mr-2" />
              Listen to Sound
            </motion.button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {currentData.options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option)}
                  className="bg-white text-gray-800 text-xl font-bold p-6 rounded-2xl hover:bg-gray-100 transition-all duration-200"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const renderGameResult = () => {
    const percentage = Math.round((correctAnswers / gameData.length) * 100)
    const isPerfect = percentage === 100
    const isGood = percentage >= 80
    const isOkay = percentage >= 60

    return (
      <div className="text-center">
        <div className="text-8xl mb-8">
          {isPerfect ? '🏆' : isGood ? '🎉' : isOkay ? '👍' : '😊'}
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Game Complete!</h2>
        <p className="text-2xl text-white/90 mb-8">
          You got {correctAnswers} out of {gameData.length} correct!
        </p>
        <div className="text-6xl font-bold text-white mb-8">{percentage}%</div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl"
          >
            Play Again
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setGameState('menu')}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full font-bold text-xl"
          >
            Choose Another Game
          </motion.button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        <AnimatePresence mode="wait">
          {gameState === 'menu' ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-3 gap-8"
            >
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
                    onClick={() => startGame(game)}
                    className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-200"
                  >
                    Play Now!
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          ) : gameState === 'playing' ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* Game Header */}
              <div className="flex justify-between items-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetGame}
                  className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-200 flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Menu
                </motion.button>
                
                <div className="text-center">
                  <div className="text-white/80 mb-2">
                    Question {currentQuestion + 1} of {gameData.length}
                  </div>
                  <div className="w-64 bg-white/20 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / gameData.length) * 100}%` }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                    />
                  </div>
                </div>
                
                <div className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold">
                  Score: {score}
                </div>
              </div>

              {/* Game Content */}
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                {renderGameContent()}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                {renderGameResult()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Coming Soon Message */}
        {gameState === 'menu' && (
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
        )}
      </div>
    </div>
  )
}

export default EducationalGames 
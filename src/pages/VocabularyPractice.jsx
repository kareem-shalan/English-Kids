import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, RotateCcw, CheckCircle, XCircle, Star } from 'lucide-react'

const VocabularyPractice = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showDefinition, setShowDefinition] = useState(false)
  const [showCongratulations, setShowCongratulations] = useState(false)
  const [completedWords, setCompletedWords] = useState(new Set())

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedSelectedCategory = localStorage.getItem('englishApp_selectedCategory')
    const savedCurrentWordIndex = localStorage.getItem('englishApp_currentWordIndex')
    const savedShowDefinition = localStorage.getItem('englishApp_showDefinition')
    const savedCompletedWords = localStorage.getItem('englishApp_completedWords')
    
    if (savedSelectedCategory) {
      setSelectedCategory(JSON.parse(savedSelectedCategory))
      setCurrentWordIndex(parseInt(savedCurrentWordIndex) || 0)
      setShowDefinition(savedShowDefinition === 'true')
      
      if (savedCompletedWords) {
        setCompletedWords(new Set(JSON.parse(savedCompletedWords)))
      }
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem('englishApp_selectedCategory', JSON.stringify(selectedCategory))
      localStorage.setItem('englishApp_currentWordIndex', currentWordIndex.toString())
      localStorage.setItem('englishApp_showDefinition', showDefinition.toString())
      localStorage.setItem('englishApp_completedWords', JSON.stringify(Array.from(completedWords)))
    } else {
      localStorage.removeItem('englishApp_selectedCategory')
      localStorage.removeItem('englishApp_currentWordIndex')
      localStorage.removeItem('englishApp_showDefinition')
      localStorage.removeItem('englishApp_completedWords')
    }
  }, [selectedCategory, currentWordIndex, showDefinition, completedWords])

      const categories = [
      {
        name: 'Animals',
        emoji: '🐾',
        color: 'from-green-400 to-green-600',
        words: [
          { word: 'Cat', definition: 'A small furry pet that says meow!', emoji: '🐱' },
          { word: 'Dog', definition: 'A friendly pet that barks and wags its tail!', emoji: '🐶' },
          { word: 'Bird', definition: 'A flying animal with wings and feathers!', emoji: '🐦' },
          { word: 'Fish', definition: 'A swimming animal that lives in water!', emoji: '🐠' },
          { word: 'Elephant', definition: 'A very big gray animal with a long trunk!', emoji: '🐘' },
          { word: 'Lion', definition: 'A big orange cat that is the king of the jungle!', emoji: '🦁' },
          { word: 'Giraffe', definition: 'A tall animal with a very long neck!', emoji: '🦒' },
          { word: 'Monkey', definition: 'A playful animal that likes to climb trees!', emoji: '🐵' }
        ]
      },
      {
        name: 'Colors',
        emoji: '🌈',
        color: 'from-pink-400 to-pink-600',
        words: [
          { word: 'Red', definition: 'The color of apples and fire trucks!', emoji: '🔴' },
          { word: 'Blue', definition: 'The color of the sky and ocean!', emoji: '🔵' },
          { word: 'Yellow', definition: 'The color of the sun and bananas!', emoji: '🟡' },
          { word: 'Green', definition: 'The color of grass and leaves!', emoji: '🟢' },
          { word: 'Purple', definition: 'The color of grapes and some flowers!', emoji: '🟣' },
          { word: 'Orange', definition: 'The color of oranges and pumpkins!', emoji: '🟠' },
          { word: 'Pink', definition: 'A light red color, like cotton candy!', emoji: '💗' },
          { word: 'Brown', definition: 'The color of chocolate and tree bark!', emoji: '🟤' }
        ]
      },
      {
        name: 'Food',
        emoji: '🍎',
        color: 'from-orange-400 to-orange-600',
        words: [
          { word: 'Apple', definition: 'A sweet red or green fruit!', emoji: '🍎' },
          { word: 'Banana', definition: 'A yellow fruit that monkeys love!', emoji: '🍌' },
          { word: 'Pizza', definition: 'A round food with cheese and toppings!', emoji: '🍕' },
          { word: 'Cookie', definition: 'A sweet treat that\'s round and yummy!', emoji: '🍪' },
          { word: 'Cake', definition: 'A sweet dessert for birthdays!', emoji: '🎂' },
          { word: 'Ice Cream', definition: 'A cold sweet treat that comes in many flavors!', emoji: '🍦' },
          { word: 'Bread', definition: 'A soft food made from flour that we eat with meals!', emoji: '🍞' },
          { word: 'Milk', definition: 'A white drink that comes from cows!', emoji: '🥛' }
        ]
      },
      {
        name: 'Family',
        emoji: '👨‍👩‍👧‍👦',
        color: 'from-blue-400 to-blue-600',
        words: [
          { word: 'Mom', definition: 'Your mother, the woman who takes care of you!', emoji: '👩' },
          { word: 'Dad', definition: 'Your father, the man who takes care of you!', emoji: '👨' },
          { word: 'Sister', definition: 'A girl who has the same parents as you!', emoji: '👧' },
          { word: 'Brother', definition: 'A boy who has the same parents as you!', emoji: '👦' },
          { word: 'Grandma', definition: 'Your mother\'s or father\'s mother!', emoji: '👵' },
          { word: 'Grandpa', definition: 'Your mother\'s or father\'s father!', emoji: '👴' },
          { word: 'Baby', definition: 'A very young child who cannot walk yet!', emoji: '👶' },
          { word: 'Family', definition: 'All the people who live together and love each other!', emoji: '👨‍👩‍👧‍👦' }
        ]
      },
      {
        name: 'School',
        emoji: '🏫',
        color: 'from-purple-400 to-purple-600',
        words: [
          { word: 'Teacher', definition: 'A person who helps you learn new things!', emoji: '👩‍🏫' },
          { word: 'Student', definition: 'A person who goes to school to learn!', emoji: '👨‍🎓' },
          { word: 'Book', definition: 'Something you read to learn new things!', emoji: '📚' },
          { word: 'Pencil', definition: 'Something you use to write and draw!', emoji: '✏️' },
          { word: 'School', definition: 'A place where children go to learn!', emoji: '🏫' },
          { word: 'Homework', definition: 'Work you do at home for school!', emoji: '📝' },
          { word: 'Friend', definition: 'Someone you like to play with!', emoji: '👥' },
          { word: 'Learn', definition: 'To find out new things and understand them!', emoji: '🧠' }
        ]
      },
      {
        name: 'Numbers',
        emoji: '🔢',
        color: 'from-yellow-400 to-yellow-600',
        words: [
          { word: 'One', definition: 'The first number, like one apple!', emoji: '1️⃣' },
          { word: 'Two', definition: 'The number after one, like two eyes!', emoji: '2️⃣' },
          { word: 'Three', definition: 'The number after two, like three sides of a triangle!', emoji: '3️⃣' },
          { word: 'Four', definition: 'The number after three, like four wheels on a car!', emoji: '4️⃣' },
          { word: 'Five', definition: 'The number after four, like five fingers on your hand!', emoji: '5️⃣' },
          { word: 'Six', definition: 'The number after five, like six legs on a bug!', emoji: '6️⃣' },
          { word: 'Seven', definition: 'The number after six, like seven days in a week!', emoji: '7️⃣' },
          { word: 'Eight', definition: 'The number after seven, like eight legs on a spider!', emoji: '8️⃣' }
        ]
      }
    ]

  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1.1
      speechSynthesis.speak(utterance)
    }
  }

  const nextWord = () => {
    if (selectedCategory && currentWordIndex < selectedCategory.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1)
      setShowDefinition(false)
    }
  }

  const prevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1)
      setShowDefinition(false)
    }
  }

  const markWordComplete = () => {
    const wordKey = `${selectedCategory.name}-${currentWordIndex}`
    setCompletedWords(prev => {
      const newSet = new Set(prev)
      newSet.add(wordKey)
      return newSet
    })
    setShowCongratulations(true)
    
    setTimeout(() => {
      setShowCongratulations(false)
    }, 2000)
  }

  const renderCongratulations = () => {
    if (!showCongratulations) return null

    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-8 rounded-3xl shadow-2xl text-center">
          <div className="text-8xl mb-4">🎉</div>
          <h2 className="text-4xl font-bold mb-4">Great Job!</h2>
          <p className="text-2xl">You learned a new word!</p>
          <div className="text-6xl mt-4">⭐</div>
        </div>
      </motion.div>
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
            📚 Vocabulary Practice! 📚
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose a category and practice new words with our interactive flashcards!
          </p>
        </motion.div>

        {!selectedCategory ? (
          /* Category Selection */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {categories.map((category, index) => {
              const completedCount = category.words.filter((_, wordIndex) => 
                completedWords.has(`${category.name}-${wordIndex}`)
              ).length
              const progressPercentage = Math.round((completedCount / category.words.length) * 100)
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentWordIndex(0)
                    setShowDefinition(false)
                  }}
                  className={`cursor-pointer bg-gradient-to-r ${category.color} rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white/30`}
                >
                  <div className="text-6xl mb-4">{category.emoji}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-white/90 text-lg mb-6">
                    {category.words.length} words to learn!
                  </p>
                  
                  {/* Progress indicator */}
                  {completedCount > 0 && (
                    <div className="bg-white/20 rounded-xl p-3 mb-4 text-white">
                      <div className="text-sm opacity-90">Progress:</div>
                      <div className="text-lg font-bold">{completedCount}/{category.words.length} words</div>
                      <div className="w-full bg-white/30 rounded-full h-2 mt-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          /* Flashcard View */
          <div className="max-w-2xl mx-auto">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className="mb-8 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-200"
            >
              ← Back to Categories
            </motion.button>

            {/* Progress */}
            <div className="mb-8 text-center">
              <div className="text-white/80 mb-2">
                Word {currentWordIndex + 1} of {selectedCategory.words.length}
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentWordIndex + 1) / selectedCategory.words.length) * 100}%` }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                />
              </div>
            </div>

            {/* Flashcard */}
            <motion.div
              key={currentWordIndex}
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              <div
                className={`h-full p-8 bg-gradient-to-r ${selectedCategory.color} text-center flex flex-col justify-center`}
              >
                {!showDefinition ? (
                  /* Word Side */
                  <>
                    <div className="text-8xl mb-6">
                      {selectedCategory.words[currentWordIndex].emoji}
                    </div>
                    <h2 className="text-6xl font-bold text-white mb-6">
                      {selectedCategory.words[currentWordIndex].word}
                    </h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => playSound(selectedCategory.words[currentWordIndex].word)}
                      className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-xl mb-6 mx-auto flex items-center"
                    >
                      <Volume2 className="w-6 h-6 mr-2" />
                      Listen
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowDefinition(true)}
                      className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold text-lg mx-auto"
                    >
                      Show Meaning
                    </motion.button>
                  </>
                ) : (
                  /* Definition Side */
                  <>
                    <div className="text-6xl mb-6">
                      {selectedCategory.words[currentWordIndex].emoji}
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-6">
                      {selectedCategory.words[currentWordIndex].word}
                    </h3>
                    <p className="text-2xl text-white/90 mb-8 leading-relaxed">
                      {selectedCategory.words[currentWordIndex].definition}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDefinition(false)}
                        className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold text-lg flex items-center justify-center"
                      >
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Show Word
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={markWordComplete}
                        className="bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center justify-center"
                      >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        I Know This!
                      </motion.button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevWord}
                disabled={currentWordIndex === 0}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg ${
                  currentWordIndex === 0
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                } transition-all duration-200`}
              >
                Previous
              </motion.button>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-red-500 text-white p-3 sm:p-4 rounded-full shadow-lg"
                >
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextWord}
                disabled={currentWordIndex === selectedCategory.words.length - 1}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg ${
                  currentWordIndex === selectedCategory.words.length - 1
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                } transition-all duration-200`}
              >
                Next
              </motion.button>
            </div>
          </div>
        )}

        {/* Congratulations Overlay */}
        <AnimatePresence>
          {renderCongratulations()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default VocabularyPractice 
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, ArrowLeft, ArrowRight, Star } from 'lucide-react'

const AlphabetLessons = () => {
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)

      const alphabetData = [
      {
        letter: 'A',
        sound: '/eɪ/',
        phonics: 'ay',
        words: ['Apple 🍎', 'Ant 🐜', 'Airplane ✈️', 'Alligator 🐊', 'Arrow 🏹', 'Angel 😇'],
        color: 'from-red-400 to-red-600',
        emoji: '🍎'
      },
      {
        letter: 'B',
        sound: '/biː/',
        phonics: 'bee',
        words: ['Ball ⚽', 'Bear 🐻', 'Banana 🍌', 'Butterfly 🦋', 'Book 📚', 'Bird 🐦'],
        color: 'from-blue-400 to-blue-600',
        emoji: '⚽'
      },
      {
        letter: 'C',
        sound: '/siː/',
        phonics: 'see',
        words: ['Cat 🐱', 'Car 🚗', 'Cake 🎂', 'Crown 👑', 'Clock 🕐', 'Cloud ☁️'],
        color: 'from-green-400 to-green-600',
        emoji: '🐱'
      },
      {
        letter: 'D',
        sound: '/diː/',
        phonics: 'dee',
        words: ['Dog 🐶', 'Duck 🦆', 'Drum 🥁', 'Diamond 💎', 'Door 🚪', 'Dinosaur 🦕'],
        color: 'from-yellow-400 to-yellow-600',
        emoji: '🐶'
      },
      {
        letter: 'E',
        sound: '/iː/',
        phonics: 'ee',
        words: ['Elephant 🐘', 'Egg 🥚', 'Eagle 🦅', 'Earth 🌍', 'Eye 👁️', 'Ear 👂'],
        color: 'from-purple-400 to-purple-600',
        emoji: '🐘'
      },
      {
        letter: 'F',
        sound: '/ɛf/',
        phonics: 'eff',
        words: ['Fish 🐠', 'Frog 🐸', 'Fire 🔥', 'Flower 🌸', 'Flag 🏳️', 'Fox 🦊'],
        color: 'from-pink-400 to-pink-600',
        emoji: '🐠'
      },
      {
        letter: 'G',
        sound: '/dʒiː/',
        phonics: 'jee',
        words: ['Giraffe 🦒', 'Grapes 🍇', 'Guitar 🎸', 'Gift 🎁', 'Garden 🌻', 'Ghost 👻'],
        color: 'from-indigo-400 to-indigo-600',
        emoji: '🦒'
      },
      {
        letter: 'H',
        sound: '/eɪtʃ/',
        phonics: 'aych',
        words: ['House 🏠', 'Horse 🐴', 'Hat 👒', 'Heart ❤️', 'Hand 🤚', 'Hammer 🔨'],
        color: 'from-orange-400 to-orange-600',
        emoji: '🏠'
      },
      {
        letter: 'I',
        sound: '/aɪ/',
        phonics: 'eye',
        words: ['Ice cream 🍦', 'Island 🏝️', 'Iguana 🦎', 'Iron ⚡', 'Ink 🖋️', 'Insect 🐛'],
        color: 'from-cyan-400 to-cyan-600',
        emoji: '🍦'
      },
      {
        letter: 'J',
        sound: '/dʒeɪ/',
        phonics: 'jay',
        words: ['Juice 🧃', 'Jellyfish 🪼', 'Jacket 🧥', 'Jump 🦘', 'Jar 🏺', 'Jet ✈️'],
        color: 'from-teal-400 to-teal-600',
        emoji: '🧃'
      },
      {
        letter: 'K',
        sound: '/keɪ/',
        phonics: 'kay',
        words: ['Kite 🪁', 'King 👑', 'Key 🗝️', 'Kangaroo 🦘', 'Kitchen 🍳', 'Kitten 🐱'],
        color: 'from-lime-400 to-lime-600',
        emoji: '🪁'
      },
      {
        letter: 'L',
        sound: '/ɛl/',
        phonics: 'ell',
        words: ['Lion 🦁', 'Leaf 🍃', 'Lamp 💡', 'Lemon 🍋', 'Ladder 🪜', 'Love 💕'],
        color: 'from-emerald-400 to-emerald-600',
        emoji: '🦁'
      },
      {
        letter: 'M',
        sound: '/ɛm/',
        phonics: 'em',
        words: ['Moon 🌙', 'Mouse 🐭', 'Music 🎵', 'Monkey 🐵', 'Mountain ⛰️', 'Milk 🥛'],
        color: 'from-sky-400 to-sky-600',
        emoji: '🌙'
      },
      {
        letter: 'N',
        sound: '/ɛn/',
        phonics: 'en',
        words: ['Nest 🪺', 'Nose 👃', 'Night 🌃', 'Nurse 👩‍⚕️', 'Number 🔢', 'Net 🕸️'],
        color: 'from-violet-400 to-violet-600',
        emoji: '🪺'
      },
      {
        letter: 'O',
        sound: '/oʊ/',
        phonics: 'oh',
        words: ['Ocean 🌊', 'Orange 🍊', 'Owl 🦉', 'Octopus 🐙', 'Open 🔓', 'Ox 🐂'],
        color: 'from-fuchsia-400 to-fuchsia-600',
        emoji: '🌊'
      },
      {
        letter: 'P',
        sound: '/piː/',
        phonics: 'pee',
        words: ['Penguin 🐧', 'Pizza 🍕', 'Puppy 🐶', 'Piano 🎹', 'Park 🏞️', 'Pen 🖊️'],
        color: 'from-rose-400 to-rose-600',
        emoji: '🐧'
      },
      {
        letter: 'Q',
        sound: '/kjuː/',
        phonics: 'cue',
        words: ['Queen 👸', 'Question ❓', 'Quilt 🛏️', 'Quiet 🤫', 'Quick ⚡', 'Quiz 📝'],
        color: 'from-amber-400 to-amber-600',
        emoji: '👸'
      },
      {
        letter: 'R',
        sound: '/ɑr/',
        phonics: 'are',
        words: ['Rabbit 🐰', 'Rainbow 🌈', 'Robot 🤖', 'Ring 💍', 'River 🏞️', 'Red 🔴'],
        color: 'from-red-500 to-red-700',
        emoji: '🐰'
      },
      {
        letter: 'S',
        sound: '/ɛs/',
        phonics: 'ess',
        words: ['Sun ☀️', 'Snake 🐍', 'Star ⭐', 'Smile 😊', 'Ship 🚢', 'Strawberry 🍓'],
        color: 'from-yellow-500 to-yellow-700',
        emoji: '☀️'
      },
      {
        letter: 'T',
        sound: '/tiː/',
        phonics: 'tee',
        words: ['Tiger 🐅', 'Tree 🌳', 'Train 🚂', 'Turtle 🐢', 'Toy 🧸', 'Telephone 📞'],
        color: 'from-green-500 to-green-700',
        emoji: '🐅'
      },
      {
        letter: 'U',
        sound: '/juː/',
        phonics: 'you',
        words: ['Umbrella ☂️', 'Unicorn 🦄', 'Under ⬇️', 'Up ⬆️', 'Uncle 👨', 'Universe 🌌'],
        color: 'from-blue-500 to-blue-700',
        emoji: '☂️'
      },
      {
        letter: 'V',
        sound: '/viː/',
        phonics: 'vee',
        words: ['Violin 🎻', 'Volcano 🌋', 'Van 🚐', 'Vegetable 🥕', 'Voice 🗣️', 'Victory 🏆'],
        color: 'from-purple-500 to-purple-700',
        emoji: '🎻'
      },
      {
        letter: 'W',
        sound: '/dʌbəljuː/',
        phonics: 'double-you',
        words: ['Whale 🐋', 'Water 💧', 'Window 🪟', 'Watch ⌚', 'Wind 💨', 'Wolf 🐺'],
        color: 'from-pink-500 to-pink-700',
        emoji: '🐋'
      },
      {
        letter: 'X',
        sound: '/ɛks/',
        phonics: 'ex',
        words: ['X-ray 🩻', 'Xylophone 🎵', 'Box 📦', 'Fox 🦊', 'Six 6️⃣', 'Mix 🥄'],
        color: 'from-gray-500 to-gray-700',
        emoji: '🩻'
      },
      {
        letter: 'Y',
        sound: '/waɪ/',
        phonics: 'why',
        words: ['Yellow 💛', 'Yacht ⛵', 'Yak 🐂', 'Yarn 🧶', 'Year 📅', 'Yes ✅'],
        color: 'from-yellow-600 to-orange-500',
        emoji: '💛'
      },
      {
        letter: 'Z',
        sound: '/ziː/',
        phonics: 'zee',
        words: ['Zebra 🦓', 'Zoo 🏛️', 'Zero 0️⃣', 'Zip 🤐', 'Zoom 🔍', 'Zigzag ⚡'],
        color: 'from-indigo-600 to-purple-500',
        emoji: '🦓'
      }
    ]

  const playSound = (phonics) => {
    // In a real app, you would use Web Speech API or audio files
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(phonics)
      utterance.rate = 0.7
      utterance.pitch = 1.2
      speechSynthesis.speak(utterance)
    }
  }

  const nextLetter = () => {
    if (currentLetterIndex < alphabetData.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1)
      setSelectedLetter(alphabetData[currentLetterIndex + 1])
    }
  }

  const prevLetter = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1)
      setSelectedLetter(alphabetData[currentLetterIndex - 1])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🔤 Alphabet Adventure! 🔤
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Click on any letter to learn its sound and discover exciting words that start with it!
          </p>
        </motion.div>

        {/* Alphabet Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-12"
        >
          {alphabetData.map((letterData, index) => (
            <motion.div
              key={letterData.letter}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedLetter(letterData)
                setCurrentLetterIndex(index)
              }}
              className={`relative cursor-pointer bg-gradient-to-r ${letterData.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white/30`}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {letterData.letter}
              </div>
              <div className="text-2xl">{letterData.emoji}</div>
              
              {selectedLetter?.letter === letterData.letter && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2"
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Letter Detail Modal */}
        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-white/50"
            >
              <div className="flex items-center justify-between mb-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevLetter}
                  disabled={currentLetterIndex === 0}
                  className={`p-3 rounded-full ${currentLetterIndex === 0 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-all duration-200`}
                >
                  <ArrowLeft className="w-6 h-6" />
                </motion.button>

                <div className="text-center">
                  <motion.div
                    key={selectedLetter.letter}
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: 0 }}
                    className={`text-6xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r ${selectedLetter.color} bg-clip-text text-transparent mb-4`}
                  >
                    {selectedLetter.letter}
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => playSound(selectedLetter.phonics)}
                    className="flex items-center justify-center mx-auto bg-gradient-to-r from-green-400 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    Sound: {selectedLetter.sound}
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextLetter}
                  disabled={currentLetterIndex === alphabetData.length - 1}
                  className={`p-3 rounded-full ${currentLetterIndex === alphabetData.length - 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-all duration-200`}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Words Section */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Words that start with {selectedLetter.letter}:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {selectedLetter.words.map((word, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onClick={() => playSound(word.split(' ')[0])}
                      className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-4 sm:p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/30"
                    >
                      <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">
                        {word}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <div className="text-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLetter(null)}
                  className="bg-gradient-to-r from-red-400 to-red-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun Facts */}
        {!selectedLetter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/15 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              🌟 Fun Alphabet Facts! 🌟
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div>
                <div className="text-4xl mb-2">📚</div>
                <p className="text-lg">There are 26 letters in the English alphabet!</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🎵</div>
                <p className="text-lg">Each letter has its own special sound!</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔤</div>
                <p className="text-lg">We use letters to make all the words we know!</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AlphabetLessons 
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, ArrowLeft, ArrowRight, Star } from 'lucide-react'

const AlphabetLessons = () => {
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [showMissingLetters, setShowMissingLetters] = useState(false)
  const [missingLetterAnswers, setMissingLetterAnswers] = useState({})

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedSelectedLetter = localStorage.getItem('englishApp_selectedLetter')
    const savedCurrentLetterIndex = localStorage.getItem('englishApp_currentLetterIndex')
    const savedShowMissingLetters = localStorage.getItem('englishApp_showMissingLetters')

    if (savedSelectedLetter && savedCurrentLetterIndex) {
      const letterData = alphabetData[parseInt(savedCurrentLetterIndex)]
      setSelectedLetter(letterData)
      setCurrentLetterIndex(parseInt(savedCurrentLetterIndex))
      setShowMissingLetters(savedShowMissingLetters === 'true')
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (selectedLetter) {
      localStorage.setItem('englishApp_selectedLetter', JSON.stringify(selectedLetter))
      localStorage.setItem('englishApp_currentLetterIndex', currentLetterIndex.toString())
      localStorage.setItem('englishApp_showMissingLetters', showMissingLetters.toString())
    } else {
      localStorage.removeItem('englishApp_selectedLetter')
      localStorage.removeItem('englishApp_currentLetterIndex')
      localStorage.removeItem('englishApp_showMissingLetters')
    }
  }, [selectedLetter, currentLetterIndex, showMissingLetters])

  const alphabetData = [
    {
      letter: 'A',
      sound: '/eɪ/',
      phonics: 'ay',
      words: ['Apple 🍎', 'Ant 🐜', 'Airplane ✈️', 'Alligator 🐊', 'Arrow 🏹', 'Angel 😇'],
      color: 'from-red-400 to-red-600',
      emoji: '🍎',
      image: '🍎',
      description: 'A is for Apple - a sweet red fruit!',
      missingLetterWords: [
        { word: 'C_T', answer: 'A', fullWord: 'CAT', emoji: '🐱' },
        { word: 'H_T', answer: 'A', fullWord: 'HAT', emoji: '👒' },
        { word: 'B_T', answer: 'A', fullWord: 'BAT', emoji: '🏏' },
        { word: 'M_T', answer: 'A', fullWord: 'MAT', emoji: '🏐' }
      ]
    },
    {
      letter: 'B',
      sound: '/biː/',
      phonics: 'bee',
      words: ['Ball ⚽', 'Bear 🐻', 'Banana 🍌', 'Butterfly 🦋', 'Book 📚', 'Bird 🐦'],
      color: 'from-blue-400 to-blue-600',
      emoji: '⚽',
      image: '⚽',
      description: 'B is for Ball - let\'s play and have fun!',
      missingLetterWords: [
        { word: 'BO_K', answer: 'O', fullWord: 'BOOK', emoji: '📚' },
        { word: 'BI_D', answer: 'R', fullWord: 'BIRD', emoji: '🐦' },
        { word: 'BEA_', answer: 'R', fullWord: 'BEAR', emoji: '🐻' },
        { word: 'BA_', answer: 'G', fullWord: 'BAG', emoji: '👜' }
      ]
    },
    {
      letter: 'C',
      sound: '/siː/',
      phonics: 'see',
      words: ['Cat 🐱', 'Car 🚗', 'Cake 🎂', 'Crown 👑', 'Clock 🕐', 'Cloud ☁️'],
      color: 'from-green-400 to-green-600',
      emoji: '🐱',
      image: '🐱',
      description: 'C is for Cat - a furry friend that purrs!',
      missingLetterWords: [
        { word: 'CA_', answer: 'T', fullWord: 'CAT', emoji: '🐱' },
        { word: 'C_R', answer: 'A', fullWord: 'CAR', emoji: '🚗' },
        { word: 'CA_E', answer: 'K', fullWord: 'CAKE', emoji: '🎂' },
        { word: 'CO_', answer: 'W', fullWord: 'COW', emoji: '🐮' }
      ]
    },
    {
      letter: 'D',
      sound: '/diː/',
      phonics: 'dee',
      words: ['Dog 🐶', 'Duck 🦆', 'Drum 🥁', 'Diamond 💎', 'Door 🚪', 'Dinosaur 🦕'],
      color: 'from-yellow-400 to-yellow-600',
      emoji: '🐶',
      image: '🐶',
      description: 'D is for Dog - man\'s best friend!',
      missingLetterWords: [
        { word: 'DO_', answer: 'G', fullWord: 'DOG', emoji: '🐶' },
        { word: 'DU_K', answer: 'C', fullWord: 'DUCK', emoji: '🦆' },
        { word: 'DOO_', answer: 'R', fullWord: 'DOOR', emoji: '🚪' },
        { word: 'DA_', answer: 'Y', fullWord: 'DAY', emoji: '☀️' }
      ]
    },
    {
      letter: 'E',
      sound: '/iː/',
      phonics: 'ee',
      words: ['Elephant 🐘', 'Egg 🥚', 'Eagle 🦅', 'Earth 🌍', 'Eye 👁️', 'Ear 👂'],
      color: 'from-purple-400 to-purple-600',
      emoji: '🐘',
      image: '🐘',
      description: 'E is for Elephant - the biggest land animal!',
      missingLetterWords: [
        { word: 'G_G', answer: 'E', fullWord: 'EGG', emoji: '🥚' },
        { word: 'Y_', answer: 'E', fullWord: 'EYE', emoji: '👁️' },
        { word: 'A_R', answer: 'E', fullWord: 'EAR', emoji: '👂' },
        { word: 'T_N', answer: 'E', fullWord: 'TEN', emoji: '🔟' }
      ]
    },
    {
      letter: 'F',
      sound: '/ɛf/',
      phonics: 'eff',
      words: ['Fish 🐠', 'Frog 🐸', 'Fire 🔥', 'Flower 🌸', 'Flag 🏳️', 'Fox 🦊'],
      color: 'from-pink-400 to-pink-600',
      emoji: '🐠',
      image: '🐠',
      description: 'F is for Fish - swimming in the water!',
      missingLetterWords: [
        { word: 'I_SH', answer: 'F', fullWord: 'FISH', emoji: '🐠' },
        { word: 'O_G', answer: 'F', fullWord: 'FOG', emoji: '🌫️' },
        { word: 'A_T', answer: 'F', fullWord: 'FAT', emoji: '🍔' },
        { word: 'U_N', answer: 'F', fullWord: 'FUN', emoji: '🎉' }
      ]
    },
    {
      letter: 'G',
      sound: '/dʒiː/',
      phonics: 'jee',
      words: ['Giraffe 🦒', 'Grapes 🍇', 'Guitar 🎸', 'Gift 🎁', 'Garden 🌻', 'Ghost 👻'],
      color: 'from-indigo-400 to-indigo-600',
      emoji: '🦒',
      image: '🦒',
      description: 'G is for Giraffe - the tallest animal!',
      missingLetterWords: [
        { word: 'O_D', answer: 'G', fullWord: 'GOD', emoji: '🙏' },
        { word: 'A_T', answer: 'G', fullWord: 'GAT', emoji: '🎩' },
        { word: 'E_T', answer: 'G', fullWord: 'GET', emoji: '📥' },
        { word: 'O_T', answer: 'G', fullWord: 'GOT', emoji: '✅' }
      ]
    },
    {
      letter: 'H',
      sound: '/eɪtʃ/',
      phonics: 'aych',
      words: ['House 🏠', 'Horse 🐴', 'Hat 👒', 'Heart ❤️', 'Hand 🤚', 'Hammer 🔨'],
      color: 'from-orange-400 to-orange-600',
      emoji: '🏠',
      image: '🏠',
      description: 'H is for House - where we live and play!',
      missingLetterWords: [
        { word: 'A_T', answer: 'H', fullWord: 'HAT', emoji: '👒' },
        { word: 'O_USE', answer: 'H', fullWord: 'HOUSE', emoji: '🏠' },
        { word: 'E_ART', answer: 'H', fullWord: 'HEART', emoji: '❤️' },
        { word: 'A_ND', answer: 'H', fullWord: 'HAND', emoji: '🤚' }
      ]
    },
    {
      letter: 'I',
      sound: '/aɪ/',
      phonics: 'eye',
      words: ['Ice cream 🍦', 'Island 🏝️', 'Iguana 🦎', 'Iron ⚡', 'Ink 🖋️', 'Insect 🐛'],
      color: 'from-cyan-400 to-cyan-600',
      emoji: '🍦',
      image: '🍦',
      description: 'I is for Ice cream - a cold sweet treat!',
      missingLetterWords: [
        { word: 'C_', answer: 'I', fullWord: 'ICE', emoji: '🧊' },
        { word: 'P_G', answer: 'I', fullWord: 'PIG', emoji: '🐷' },
        { word: 'B_G', answer: 'I', fullWord: 'BIG', emoji: '🐘' },
        { word: 'S_T', answer: 'I', fullWord: 'SIT', emoji: '🪑' }
      ]
    },
    {
      letter: 'J',
      sound: '/dʒeɪ/',
      phonics: 'jay',
      words: ['Juice 🧃', 'Jellyfish 🪼', 'Jacket 🧥', 'Jump 🦘', 'Jar 🏺', 'Jet ✈️'],
      color: 'from-teal-400 to-teal-600',
      emoji: '🧃',
      image: '🧃',
      description: 'J is for Juice - a healthy drink!',
      missingLetterWords: [
        { word: 'A_R', answer: 'J', fullWord: 'JAR', emoji: '🏺' },
        { word: 'E_T', answer: 'J', fullWord: 'JET', emoji: '✈️' },
        { word: 'O_B', answer: 'J', fullWord: 'JOB', emoji: '💼' },
        { word: 'A_M', answer: 'J', fullWord: 'JAM', emoji: '🍯' }
      ]
    },
    {
      letter: 'K',
      sound: '/keɪ/',
      phonics: 'kay',
      words: ['Kite 🪁', 'King 👑', 'Key 🗝️', 'Kangaroo 🦘', 'Kitchen 🍳', 'Kitten 🐱'],
      color: 'from-lime-400 to-lime-600',
      emoji: '🪁',
      image: '🪁',
      description: 'K is for Kite - flying high in the sky!',
      missingLetterWords: [
        { word: 'I_TE', answer: 'K', fullWord: 'KITE', emoji: '🪁' },
        { word: 'I_NG', answer: 'K', fullWord: 'KING', emoji: '👑' },
        { word: 'E_Y', answer: 'K', fullWord: 'KEY', emoji: '🗝️' },
        { word: 'I_T', answer: 'K', fullWord: 'KIT', emoji: '📦' }
      ]
    },
    {
      letter: 'L',
      sound: '/ɛl/',
      phonics: 'ell',
      words: ['Lion 🦁', 'Leaf 🍃', 'Lamp 💡', 'Lemon 🍋', 'Ladder 🪜', 'Love 💕'],
      color: 'from-emerald-400 to-emerald-600',
      emoji: '🦁',
      image: '🦁',
      description: 'L is for Lion - the king of the jungle!',
      missingLetterWords: [
        { word: 'I_ON', answer: 'L', fullWord: 'LION', emoji: '🦁' },
        { word: 'E_AF', answer: 'L', fullWord: 'LEAF', emoji: '🍃' },
        { word: 'A_MP', answer: 'L', fullWord: 'LAMP', emoji: '💡' },
        { word: 'O_VE', answer: 'L', fullWord: 'LOVE', emoji: '💕' }
      ]
    },
    {
      letter: 'M',
      sound: '/ɛm/',
      phonics: 'em',
      words: ['Moon 🌙', 'Mouse 🐭', 'Music 🎵', 'Monkey 🐵', 'Mountain ⛰️', 'Milk 🥛'],
      color: 'from-sky-400 to-sky-600',
      emoji: '🌙',
      image: '🌙',
      description: 'M is for Moon - shining bright at night!',
      missingLetterWords: [
        { word: 'O_ON', answer: 'M', fullWord: 'MOON', emoji: '🌙' },
        { word: 'O_USE', answer: 'M', fullWord: 'MOUSE', emoji: '🐭' },
        { word: 'I_LK', answer: 'M', fullWord: 'MILK', emoji: '🥛' },
        { word: 'A_P', answer: 'M', fullWord: 'MAP', emoji: '🗺️' }
      ]
    },
    {
      letter: 'N',
      sound: '/ɛn/',
      phonics: 'en',
      words: ['Nest 🪺', 'Nose 👃', 'Night 🌃', 'Nurse 👩‍⚕️', 'Number 🔢', 'Net 🕸️'],
      color: 'from-violet-400 to-violet-600',
      emoji: '🪺',
      image: '🪺',
      description: 'N is for Nest - where birds lay their eggs!',
      missingLetterWords: [
        { word: 'E_ST', answer: 'N', fullWord: 'NEST', emoji: '🪺' },
        { word: 'O_SE', answer: 'N', fullWord: 'NOSE', emoji: '👃' },
        { word: 'I_GHT', answer: 'N', fullWord: 'NIGHT', emoji: '🌃' },
        { word: 'E_T', answer: 'N', fullWord: 'NET', emoji: '🕸️' }
      ]
    },
    {
      letter: 'O',
      sound: '/oʊ/',
      phonics: 'oh',
      words: ['Ocean 🌊', 'Orange 🍊', 'Owl 🦉', 'Octopus 🐙', 'Open 🔓', 'Ox 🐂'],
      color: 'from-fuchsia-400 to-fuchsia-600',
      emoji: '🌊',
      image: '🌊',
      description: 'O is for Ocean - the big blue sea!',
      missingLetterWords: [
        { word: 'C_EAN', answer: 'O', fullWord: 'OCEAN', emoji: '🌊' },
        { word: 'R_ANGE', answer: 'O', fullWord: 'ORANGE', emoji: '🍊' },
        { word: 'W_L', answer: 'O', fullWord: 'OWL', emoji: '🦉' },
        { word: 'P_N', answer: 'O', fullWord: 'OPEN', emoji: '🔓' }
      ]
    },
    {
      letter: 'P',
      sound: '/piː/',
      phonics: 'pee',
      words: ['Penguin 🐧', 'Pizza 🍕', 'Puppy 🐶', 'Piano 🎹', 'Park 🏞️', 'Pen 🖊️'],
      color: 'from-rose-400 to-rose-600',
      emoji: '🐧',
      image: '🐧',
      description: 'P is for Penguin - sliding on ice!',
      missingLetterWords: [
        { word: 'E_N', answer: 'P', fullWord: 'PEN', emoji: '🖊️' },
        { word: 'I_ZZA', answer: 'P', fullWord: 'PIZZA', emoji: '🍕' },
        { word: 'I_G', answer: 'P', fullWord: 'PIG', emoji: '🐷' },
        { word: 'A_RK', answer: 'P', fullWord: 'PARK', emoji: '🏞️' }
      ]
    },
    {
      letter: 'Q',
      sound: '/kjuː/',
      phonics: 'cue',
      words: ['Queen 👸', 'Question ❓', 'Quilt 🛏️', 'Quiet 🤫', 'Quick ⚡', 'Quiz 📝'],
      color: 'from-amber-400 to-amber-600',
      emoji: '👸',
      image: '👸',
      description: 'Q is for Queen - wearing a crown!',
      missingLetterWords: [
        { word: 'U_EEN', answer: 'Q', fullWord: 'QUEEN', emoji: '👸' },
        { word: 'U_ESTION', answer: 'Q', fullWord: 'QUESTION', emoji: '❓' },
        { word: 'U_ILT', answer: 'Q', fullWord: 'QUILT', emoji: '🛏️' },
        { word: 'U_ICK', answer: 'Q', fullWord: 'QUICK', emoji: '⚡' }
      ]
    },
    {
      letter: 'R',
      sound: '/ɑr/',
      phonics: 'are',
      words: ['Rabbit 🐰', 'Rainbow 🌈', 'Robot 🤖', 'Ring 💍', 'River 🏞️', 'Red 🔴'],
      color: 'from-red-500 to-red-700',
      emoji: '🐰',
      image: '🐰',
      description: 'R is for Rabbit - hopping in the garden!',
      missingLetterWords: [
        { word: 'A_BBIT', answer: 'R', fullWord: 'RABBIT', emoji: '🐰' },
        { word: 'A_INBOW', answer: 'R', fullWord: 'RAINBOW', emoji: '🌈' },
        { word: 'I_VER', answer: 'R', fullWord: 'RIVER', emoji: '🏞️' },
        { word: 'E_D', answer: 'R', fullWord: 'RED', emoji: '🔴' }
      ]
    },
    {
      letter: 'S',
      sound: '/ɛs/',
      phonics: 'ess',
      words: ['Sun ☀️', 'Snake 🐍', 'Star ⭐', 'Smile 😊', 'Ship 🚢', 'Strawberry 🍓'],
      color: 'from-yellow-500 to-yellow-700',
      emoji: '☀️',
      image: '☀️',
      description: 'S is for Sun - giving us light and warmth!',
      missingLetterWords: [
        { word: 'U_N', answer: 'S', fullWord: 'SUN', emoji: '☀️' },
        { word: 'N_AKE', answer: 'S', fullWord: 'SNAKE', emoji: '🐍' },
        { word: 'T_AR', answer: 'S', fullWord: 'STAR', emoji: '⭐' },
        { word: 'H_IP', answer: 'S', fullWord: 'SHIP', emoji: '🚢' }
      ]
    },
    {
      letter: 'T',
      sound: '/tiː/',
      phonics: 'tee',
      words: ['Tiger 🐅', 'Tree 🌳', 'Train 🚂', 'Turtle 🐢', 'Toy 🧸', 'Telephone 📞'],
      color: 'from-green-500 to-green-700',
      emoji: '🐅',
      image: '🐅',
      description: 'T is for Tiger - with stripes so bold!',
      missingLetterWords: [
        { word: 'I_GER', answer: 'T', fullWord: 'TIGER', emoji: '🐅' },
        { word: 'R_EE', answer: 'T', fullWord: 'TREE', emoji: '🌳' },
        { word: 'R_AIN', answer: 'T', fullWord: 'TRAIN', emoji: '🚂' },
        { word: 'O_Y', answer: 'T', fullWord: 'TOY', emoji: '🧸' }
      ]
    },
    {
      letter: 'U',
      sound: '/juː/',
      phonics: 'you',
      words: ['Umbrella ☂️', 'Unicorn 🦄', 'Under ⬇️', 'Up ⬆️', 'Uncle 👨', 'Universe 🌌'],
      color: 'from-blue-500 to-blue-700',
      emoji: '☂️',
      image: '☂️',
      description: 'U is for Umbrella - keeping us dry!',
      missingLetterWords: [
        { word: 'M_BRELLA', answer: 'U', fullWord: 'UMBRELLA', emoji: '☂️' },
        { word: 'N_ICORN', answer: 'U', fullWord: 'UNICORN', emoji: '🦄' },
        { word: 'N_DER', answer: 'U', fullWord: 'UNDER', emoji: '⬇️' },
        { word: 'P_', answer: 'U', fullWord: 'UP', emoji: '⬆️' }
      ]
    },
    {
      letter: 'V',
      sound: '/viː/',
      phonics: 'vee',
      words: ['Violin 🎻', 'Volcano 🌋', 'Van 🚐', 'Vegetable 🥕', 'Voice 🗣️', 'Victory 🏆'],
      color: 'from-purple-500 to-purple-700',
      emoji: '🎻',
      image: '🎻',
      description: 'V is for Violin - making beautiful music!',
      missingLetterWords: [
        { word: 'I_OLIN', answer: 'V', fullWord: 'VIOLIN', emoji: '🎻' },
        { word: 'O_LCANO', answer: 'V', fullWord: 'VOLCANO', emoji: '🌋' },
        { word: 'A_N', answer: 'V', fullWord: 'VAN', emoji: '🚐' },
        { word: 'E_GETABLE', answer: 'V', fullWord: 'VEGETABLE', emoji: '🥕' }
      ]
    },
    {
      letter: 'W',
      sound: '/dʌbəljuː/',
      phonics: 'double-you',
      words: ['Whale 🐋', 'Water 💧', 'Window 🪟', 'Watch ⌚', 'Wind 💨', 'Wolf 🐺'],
      color: 'from-pink-500 to-pink-700',
      emoji: '🐋',
      image: '🐋',
      description: 'W is for Whale - swimming in the deep sea!',
      missingLetterWords: [
        { word: 'H_ALE', answer: 'W', fullWord: 'WHALE', emoji: '🐋' },
        { word: 'A_TER', answer: 'W', fullWord: 'WATER', emoji: '💧' },
        { word: 'I_NDOW', answer: 'W', fullWord: 'WINDOW', emoji: '🪟' },
        { word: 'A_TCH', answer: 'W', fullWord: 'WATCH', emoji: '⌚' }
      ]
    },
    {
      letter: 'X',
      sound: '/ɛks/',
      phonics: 'ex',
      words: ['X-ray 🩻', 'Xylophone 🎵', 'Box 📦', 'Fox 🦊', 'Six 6️⃣', 'Mix 🥄'],
      color: 'from-gray-500 to-gray-700',
      emoji: '🩻',
      image: '🩻',
      description: 'X is for X-ray - seeing inside!',
      missingLetterWords: [
        { word: '-RAY', answer: 'X', fullWord: 'X-RAY', emoji: '🩻' },
        { word: 'B_O', answer: 'X', fullWord: 'BOX', emoji: '📦' },
        { word: 'F_O', answer: 'X', fullWord: 'FOX', emoji: '🦊' },
        { word: 'S_I', answer: 'X', fullWord: 'SIX', emoji: '6️⃣' }
      ]
    },
    {
      letter: 'Y',
      sound: '/waɪ/',
      phonics: 'why',
      words: ['Yellow 💛', 'Yacht ⛵', 'Yak 🐂', 'Yarn 🧶', 'Year 📅', 'Yes ✅'],
      color: 'from-yellow-600 to-orange-500',
      emoji: '💛',
      image: '💛',
      description: 'Y is for Yellow - a bright sunny color!',
      missingLetterWords: [
        { word: 'E_LLOW', answer: 'Y', fullWord: 'YELLOW', emoji: '💛' },
        { word: 'A_CHT', answer: 'Y', fullWord: 'YACHT', emoji: '⛵' },
        { word: 'A_K', answer: 'Y', fullWord: 'YAK', emoji: '🐂' },
        { word: 'E_ARN', answer: 'Y', fullWord: 'YARN', emoji: '🧶' }
      ]
    },
    {
      letter: 'Z',
      sound: '/ziː/',
      phonics: 'zee',
      words: ['Zebra 🦓', 'Zoo 🏛️', 'Zero 0️⃣', 'Zip 🤐', 'Zoom 🔍', 'Zigzag ⚡'],
      color: 'from-indigo-600 to-purple-500',
      emoji: '🦓',
      image: '🦓',
      description: 'Z is for Zebra - with black and white stripes!',
      missingLetterWords: [
        { word: 'E_BRA', answer: 'Z', fullWord: 'ZEBRA', emoji: '🦓' },
        { word: 'O_O', answer: 'Z', fullWord: 'ZOO', emoji: '🏛️' },
        { word: 'E_RO', answer: 'Z', fullWord: 'ZERO', emoji: '0️⃣' },
        { word: 'I_P', answer: 'Z', fullWord: 'ZIP', emoji: '🤐' }
      ]
    }
  ]

  const playSound = (word) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.rate = 0.7
      utterance.pitch = 1.2
      speechSynthesis.speak(utterance)
    }
  }

  const playMissingLetterSound = (word, missingLetter) => {
    const fullWord = word.replace('_', missingLetter)
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(fullWord)
      utterance.rate = 0.8
      utterance.pitch = 1.1
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

    const handleMissingLetterAnswer = (answer, wordKey) => {
    setMissingLetterAnswers(prev => ({
      ...prev,
      [wordKey]: answer
    }))
    
    const isCorrect = answer === selectedLetter.letter
    
    if (isCorrect) {
      setTimeout(() => {
        setMissingLetterAnswers(prev => {
          const newState = { ...prev }
          delete newState[wordKey]
          return newState
        })
      }, 2000)
    } else {
      setTimeout(() => {
        setMissingLetterAnswers(prev => {
          const newState = { ...prev }
          delete newState[wordKey]
          return newState
        })
      }, 1000)
    }
  }

  const renderMissingLettersSection = () => {
    if (!selectedLetter) return null

    return (
      <div className="mt-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          🧩 Missing Letters Challenge! 🧩
        </h3>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Listen to the word and find the missing letter!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {selectedLetter.missingLetterWords.map((wordData, index) => {
            // Create 3 letter choices: correct answer + 2 random wrong letters
            const correctLetter = wordData.answer
            const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            const wrongLetters = allLetters.filter(letter => letter !== correctLetter)
            const randomWrongLetters = wrongLetters.sort(() => 0.5 - Math.random()).slice(0, 2)
            const letterChoices = [correctLetter, ...randomWrongLetters].sort(() => 0.5 - Math.random())

                        const wordKey = `${selectedLetter.letter}_${wordData.word}`
            const currentAnswer = missingLetterAnswers[wordKey]
            
            return (
              <motion.div
                key={wordData.word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-6 text-center shadow-lg border-2 border-white/30"
              >
                <div className="text-4xl mb-4">{wordData.emoji}</div>
                <div className="text-3xl font-bold text-white mb-4">
                  {wordData.word}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => playMissingLetterSound(wordData.word, wordData.answer)}
                  className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold text-lg mb-4 mx-auto flex items-center"
                >
                  <Volume2 className="w-5 h-5 mr-2" />
                  Listen to Word
                </motion.button>
                
                <div className="grid grid-cols-3 gap-3">
                  {letterChoices.map((letter) => (
                    <motion.button
                      key={letter}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleMissingLetterAnswer(letter, wordKey)}
                      disabled={currentAnswer !== undefined}
                      className={`text-xl font-bold p-3 rounded-xl transition-all duration-200 ${currentAnswer === letter
                        ? letter === wordData.answer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      {letter}
                    </motion.button>
                  ))}
                </div>
                
                {currentAnswer === wordData.answer && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4 text-green-300 font-bold text-lg"
                  >
                    ✅ Correct! {wordData.fullWord}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderQuestionsSection = () => {
    if (!selectedLetter) return null

    const questions = [
      {
        question: `What sound does the letter ${selectedLetter.letter} make?`,
        options: [
          { text: selectedLetter.sound, correct: true },
          { text: '/ə/', correct: false },
          { text: '/ɑ/', correct: false },
          { text: '/i/', correct: false }
        ]
      },
      {
        question: `Which word starts with the letter ${selectedLetter.letter}?`,
        options: [
          { text: selectedLetter.words[0], correct: true },
          { text: 'Apple 🍎', correct: false },
          { text: 'Ball ⚽', correct: false },
          { text: 'Cat 🐱', correct: false }
        ]
      },
      {
        question: `What is the phonics sound for letter ${selectedLetter.letter}?`,
        options: [
          { text: selectedLetter.phonics, correct: true },
          { text: 'ay', correct: false },
          { text: 'bee', correct: false },
          { text: 'see', correct: false }
        ]
      }
    ]

    return (
      <div className="mt-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          ❓ Letter Questions! ❓
        </h3>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Test your knowledge about the letter {selectedLetter.letter}!
        </p>

        <div className="space-y-6">
          {questions.map((questionData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl p-6 shadow-lg border-2 border-white/30"
            >
              <h4 className="text-xl font-bold text-white mb-4 text-center">
                {questionData.question}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {questionData.options.map((option, optionIndex) => (
                  <motion.button
                    key={optionIndex}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/20 backdrop-blur-md text-white p-4 rounded-xl font-medium text-center hover:bg-white/30 transition-all duration-200"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  const renderIntroductionQuestions = () => {
    const introQuestions = [
      {
        question: "🎵 Do you know how many letters are in the alphabet?",
        answer: "26 letters!",
        emoji: "🔤"
      },
      {
        question: "🎨 What's your favorite color?",
        answer: "Tell me about it!",
        emoji: "🌈"
      },
      {
        question: "🐾 Can you name an animal that starts with 'A'?",
        answer: "Alligator, Ant, or Apple!",
        emoji: "🐊"
      },
      {
        question: "🌟 What letter does your name start with?",
        answer: "That's special!",
        emoji: "⭐"
      },
      {
        question: "🎪 Are you ready to learn the alphabet?",
        answer: "Let's have fun!",
        emoji: "🎉"
      }
    ]

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-6 sm:p-8 mb-8 shadow-lg border-4 border-white/30"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          👋 Welcome to Alphabet Adventure! 👋
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 text-center">
          Let's start with some fun questions to get ready for learning!
        </p>
        
        <div className="space-y-4">
          {introQuestions.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl sm:text-3xl mr-3">{q.emoji}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {q.question}
                </h3>
              </div>
              <p className="text-white/90 text-base sm:text-lg ml-12">
                💡 {q.answer}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-6"
        >
          <p className="text-white font-bold text-lg sm:text-xl">
            🎯 Now let's explore the alphabet together!
          </p>
        </motion.div>
      </motion.div>
    )
  }

  const renderCapitalSmallLetters = () => {
    const letterPairs = [
      { capital: 'A', small: 'a', word: 'Apple', emoji: '🍎' },
      { capital: 'B', small: 'b', word: 'Ball', emoji: '⚽' },
      { capital: 'C', small: 'c', word: 'Cat', emoji: '🐱' },
      { capital: 'D', small: 'd', word: 'Dog', emoji: '🐶' },
      { capital: 'E', small: 'e', word: 'Elephant', emoji: '🐘' },
      { capital: 'F', small: 'f', word: 'Fish', emoji: '🐠' },
      { capital: 'G', small: 'g', word: 'Giraffe', emoji: '🦒' },
      { capital: 'H', small: 'h', word: 'House', emoji: '🏠' },
      { capital: 'I', small: 'i', word: 'Ice cream', emoji: '🍦' },
      { capital: 'J', small: 'j', word: 'Juice', emoji: '🧃' },
      { capital: 'K', small: 'k', word: 'Kite', emoji: '🪁' },
      { capital: 'L', small: 'l', word: 'Lion', emoji: '🦁' },
      { capital: 'M', small: 'm', word: 'Moon', emoji: '🌙' },
      { capital: 'N', small: 'n', word: 'Nest', emoji: '🪺' },
      { capital: 'O', small: 'o', word: 'Ocean', emoji: '🌊' },
      { capital: 'P', small: 'p', word: 'Penguin', emoji: '🐧' },
      { capital: 'Q', small: 'q', word: 'Queen', emoji: '👸' },
      { capital: 'R', small: 'r', word: 'Rabbit', emoji: '🐰' },
      { capital: 'S', small: 's', word: 'Sun', emoji: '☀️' },
      { capital: 'T', small: 't', word: 'Tiger', emoji: '🐅' },
      { capital: 'U', small: 'u', word: 'Umbrella', emoji: '☂️' },
      { capital: 'V', small: 'v', word: 'Violin', emoji: '🎻' },
      { capital: 'W', small: 'w', word: 'Whale', emoji: '🐋' },
      { capital: 'X', small: 'x', word: 'X-ray', emoji: '🩻' },
      { capital: 'Y', small: 'y', word: 'Yellow', emoji: '💛' },
      { capital: 'Z', small: 'z', word: 'Zebra', emoji: '🦓' }
    ]

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-6 sm:p-8 mb-8 shadow-lg border-4 border-white/30"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          🔤 Capital & Small Letters! 🔤
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 text-center">
          Learn the difference between BIG and small letters!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {letterPairs.map((pair, index) => (
            <motion.div
              key={pair.capital}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => playSound(pair.word)}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-4 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{pair.emoji}</div>
                <div className="flex justify-center items-center space-x-4 mb-3">
                  <div className="text-4xl font-bold text-white bg-red-500 rounded-full w-16 h-16 flex items-center justify-center">
                    {pair.capital}
                  </div>
                  <div className="text-2xl text-white">→</div>
                  <div className="text-4xl font-bold text-white bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
                    {pair.small}
                  </div>
                </div>
                <div className="text-lg font-bold text-white">
                  {pair.word}
                </div>
                <div className="text-sm text-white/80 mt-2">
                  Click to hear!
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-6"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
            <h3 className="text-xl font-bold text-white mb-2">
              💡 Did you know?
            </h3>
            <p className="text-white/90">
              Capital letters are BIG and used at the start of sentences and names!
              <br />
              Small letters are used in the middle and end of words.
            </p>
          </div>
        </motion.div>
      </motion.div>
    )
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

        {/* Introduction Questions */}
        {!selectedLetter && renderIntroductionQuestions()}

        {/* Capital & Small Letters Section */}
        {!selectedLetter && renderCapitalSmallLetters()}

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
              className={`relative cursor-pointer bg-gradient-to-r ${letterData.color} rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white/30`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {letterData.letter}
              </div>
              <div className="text-xl sm:text-2xl">{letterData.image}</div>
              
              {selectedLetter?.letter === letterData.letter && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1 sm:p-2"
                >
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
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
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-white/50"
            >
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevLetter}
                  disabled={currentLetterIndex === 0}
                  className={`p-2 sm:p-3 rounded-full ${currentLetterIndex === 0 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-all duration-200`}
                >
                  <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
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

                  <div className="text-4xl sm:text-6xl mb-4">{selectedLetter.image}</div>
                  <p className="text-lg sm:text-xl text-gray-600 mb-4">{selectedLetter.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => playSound(selectedLetter.letter)}
                    className="flex items-center justify-center mx-auto bg-gradient-to-r from-green-400 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Volume2 className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
                    Sound: {selectedLetter.sound}
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextLetter}
                  disabled={currentLetterIndex === alphabetData.length - 1}
                  className={`p-2 sm:p-3 rounded-full ${currentLetterIndex === alphabetData.length - 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-all duration-200`}
                >
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              {/* Words Section */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
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
                      onClick={() => playSound(word)}
                      className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-4 sm:p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/30"
                    >
                      <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white text-center">
                        {word}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Missing Letters Section */}
              {renderMissingLettersSection()}

              {/* Questions Section */}
              {renderQuestionsSection()}

              {/* Close Button */}
              <div className="text-center mt-6 sm:mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedLetter(null)}
                  className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="bg-white/15 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center border border-white/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🌟 Fun Alphabet Facts! 🌟
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div>
                <div className="text-3xl sm:text-4xl mb-2">📚</div>
                <p className="text-base sm:text-lg">There are 26 letters in the English alphabet!</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl mb-2">🎵</div>
                <p className="text-base sm:text-lg">Each letter has its own special sound!</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl mb-2">🔤</div>
                <p className="text-base sm:text-lg">We use letters to make all the words we know!</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Capital & Small Letters Section */}
        {renderCapitalSmallLetters()}
      </div>
    </div>
  )
}

export default AlphabetLessons 
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Star, Volume2, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

const GrammarLessons = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(new Set())

  const grammarTopics = [
    {
      id: 'nouns',
      title: 'Nouns',
      emoji: '📚',
      color: 'from-blue-400 to-blue-600',
      description: 'Learn about people, places, things, and animals',
      lessons: [
        {
          title: 'What are Nouns?',
          content: 'Nouns are words that name people, places, things, or animals.',
          examples: ['Person: teacher, student, mom, dad', 'Place: school, home, park, store', 'Thing: book, car, toy, phone', 'Animal: cat, dog, bird, fish'],
          practice: ['The teacher is nice.', 'I go to school.', 'I have a book.', 'The cat is sleeping.']
        },
        {
          title: 'Common and Proper Nouns',
          content: 'Common nouns are general names. Proper nouns are specific names and start with capital letters.',
          examples: ['Common: teacher, school, book, cat', 'Proper: Miss Sarah, Washington School, Harry Potter, Fluffy'],
          practice: ['My teacher is Miss Sarah.', 'I go to Washington School.', 'I read Harry Potter.', 'My cat is Fluffy.']
        },
        {
          title: 'Singular and Plural Nouns',
          content: 'Singular means one. Plural means more than one. We add -s to make most nouns plural.',
          examples: ['Singular: cat, book, toy, tree', 'Plural: cats, books, toys, trees'],
          practice: ['I have one cat.', 'I have two cats.', 'I read one book.', 'I read many books.']
        }
      ]
    },
    {
      id: 'verbs',
      title: 'Verbs',
      emoji: '🏃',
      color: 'from-green-400 to-green-600',
      description: 'Learn about action words and what people do',
      lessons: [
        {
          title: 'What are Verbs?',
          content: 'Verbs are action words. They tell us what someone or something does.',
          examples: ['Run, walk, jump, play', 'Eat, drink, sleep, read', 'Write, draw, sing, dance'],
          practice: ['I run fast.', 'You walk slowly.', 'We play games.', 'They eat pizza.']
        },
        {
          title: 'Present Tense Verbs',
          content: 'Present tense tells us what happens now. We use -s for he, she, it.',
          examples: ['I play, You play, He plays, She plays', 'I eat, You eat, He eats, She eats'],
          practice: ['I play soccer.', 'He plays soccer.', 'I eat apples.', 'She eats apples.']
        },
        {
          title: 'Helping Verbs',
          content: 'Helping verbs help the main verb. Common helping verbs are: am, is, are, can, will.',
          examples: ['I am happy.', 'She is reading.', 'They are playing.', 'I can swim.'],
          practice: ['I am learning English.', 'She is my teacher.', 'We are friends.', 'I can help you.']
        }
      ]
    },
    {
      id: 'adjectives',
      title: 'Adjectives',
      emoji: '🎨',
      color: 'from-purple-400 to-purple-600',
      description: 'Learn about describing words that tell us more about nouns',
      lessons: [
        {
          title: 'What are Adjectives?',
          content: 'Adjectives are describing words. They tell us more about nouns.',
          examples: ['Big, small, tall, short', 'Red, blue, green, yellow', 'Happy, sad, angry, excited'],
          practice: ['The big dog.', 'The red car.', 'The happy child.', 'The tall tree.']
        },
        {
          title: 'Using Adjectives in Sentences',
          content: 'Adjectives usually come before the noun they describe.',
          examples: ['The big dog runs fast.', 'I have a red car.', 'She is a happy girl.'],
          practice: ['I see a big elephant.', 'I like the blue sky.', 'He is a good friend.']
        },
        {
          title: 'Comparing with Adjectives',
          content: 'We can compare things using -er and -est.',
          examples: ['Big, bigger, biggest', 'Small, smaller, smallest', 'Tall, taller, tallest'],
          practice: ['My dog is big.', 'Your dog is bigger.', 'His dog is the biggest.']
        }
      ]
    },
    {
      id: 'pronouns',
      title: 'Pronouns',
      emoji: '👥',
      color: 'from-pink-400 to-pink-600',
      description: 'Learn about words that take the place of nouns',
      lessons: [
        {
          title: 'What are Pronouns?',
          content: 'Pronouns are words that take the place of nouns. They help us avoid repeating the same words.',
          examples: ['I, you, he, she, it', 'We, they, us, them', 'My, your, his, her, its'],
          practice: ['I am a student.', 'You are my friend.', 'He is tall.', 'She is smart.']
        },
        {
          title: 'Subject Pronouns',
          content: 'Subject pronouns are used as the subject of a sentence.',
          examples: ['I like pizza.', 'You are kind.', 'He plays soccer.', 'She reads books.'],
          practice: ['I go to school.', 'You help me.', 'He is my brother.', 'She is my sister.']
        },
        {
          title: 'Possessive Pronouns',
          content: 'Possessive pronouns show ownership.',
          examples: ['My book, your toy, his car, her cat', 'Our house, their dog'],
          practice: ['This is my book.', 'That is your toy.', 'This is his car.', 'That is her cat.']
        }
      ]
    },
    {
      id: 'sentences',
      title: 'Sentences',
      emoji: '📝',
      color: 'from-orange-400 to-orange-600',
      description: 'Learn how to build complete sentences',
      lessons: [
        {
          title: 'What is a Sentence?',
          content: 'A sentence is a group of words that makes complete sense. It starts with a capital letter and ends with a period.',
          examples: ['I like pizza.', 'The cat is sleeping.', 'We play games.', 'She reads books.'],
          practice: ['I am happy.', 'The dog runs fast.', 'We eat lunch.', 'They sing songs.']
        },
        {
          title: 'Subject and Predicate',
          content: 'Every sentence has a subject (who or what) and a predicate (what happens).',
          examples: ['Subject: I, The cat, We, She', 'Predicate: like pizza, is sleeping, play games, reads books'],
          practice: ['I (subject) like pizza (predicate).', 'The cat (subject) is sleeping (predicate).']
        },
        {
          title: 'Types of Sentences',
          content: 'There are different types of sentences: statements, questions, commands, and exclamations.',
          examples: ['Statement: I like pizza.', 'Question: Do you like pizza?', 'Command: Eat your pizza.', 'Exclamation: I love pizza!'],
          practice: ['I am learning English.', 'Do you like school?', 'Please help me.', 'I am so happy!']
        }
      ]
    },
    {
      id: 'questions',
      title: 'Questions',
      emoji: '❓',
      color: 'from-teal-400 to-teal-600',
      description: 'Learn how to ask and answer questions',
      lessons: [
        {
          title: 'Question Words',
          content: 'Question words help us ask for specific information.',
          examples: ['What: What is your name?', 'Where: Where do you live?', 'When: When is your birthday?', 'Who: Who is your teacher?'],
          practice: ['What is your favorite color?', 'Where do you go to school?', 'When do you wake up?', 'Who is your best friend?']
        },
        {
          title: 'Yes/No Questions',
          content: 'Yes/No questions can be answered with yes or no. We often start with helping verbs.',
          examples: ['Are you happy?', 'Do you like pizza?', 'Can you swim?', 'Is she your sister?'],
          practice: ['Are you a student?', 'Do you like reading?', 'Can you help me?', 'Is this your book?']
        },
        {
          title: 'Answering Questions',
          content: 'When answering questions, we can give short or long answers.',
          examples: ['Short: Yes, I am. / No, I am not.', 'Long: Yes, I am a student.', 'Short: Yes, I do. / No, I do not.'],
          practice: ['Are you happy? Yes, I am.', 'Do you like pizza? Yes, I do.', 'Can you swim? No, I cannot.']
        }
      ]
    }
  ]

  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1.2
      speechSynthesis.speak(utterance)
    }
  }

  const markLessonComplete = (topicId, lessonIndex) => {
    const lessonKey = `${topicId}-${lessonIndex}`
    setCompletedLessons(prev => {
      const newSet = new Set(prev)
      newSet.add(lessonKey)
      return newSet
    })
  }

  const nextLesson = () => {
    if (selectedTopic && currentLessonIndex < selectedTopic.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    }
  }

  const getTopicProgress = (topicId) => {
    const topic = grammarTopics.find(t => t.id === topicId)
    if (!topic) return { completed: 0, total: 0 }
    
    const completedCount = topic.lessons.filter((_, index) => 
      completedLessons.has(`${topicId}-${index}`)
    ).length
    
    return { completed: completedCount, total: topic.lessons.length }
  }

  const getOverallProgress = () => {
    let totalCompleted = 0
    let totalLessons = 0
    
    grammarTopics.forEach(topic => {
      totalLessons += topic.lessons.length
      totalCompleted += topic.lessons.filter((_, index) => 
        completedLessons.has(`${topic.id}-${index}`)
      ).length
    })
    
    return { completed: totalCompleted, total: totalLessons }
  }

  const overallProgress = getOverallProgress()

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
            📚 Grammar Lessons! 📚
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn English grammar in a fun and easy way!
          </p>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/15 backdrop-blur-md rounded-3xl p-8 mb-12 text-center border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            🎯 Your Grammar Progress
          </h2>
          <div className="text-6xl font-bold text-yellow-300 mb-4">
            {overallProgress.completed}/{overallProgress.total}
          </div>
          <div className="text-xl text-white/90 mb-6">
            Lessons Completed!
          </div>
          <div className="w-full bg-white/20 rounded-full h-4 max-w-2xl mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(overallProgress.completed / overallProgress.total) * 100}%` }}
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full"
            />
          </div>
        </motion.div>

        {!selectedTopic ? (
          /* Topic Selection */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {grammarTopics.map((topic, index) => {
              const progress = getTopicProgress(topic.id)
              const progressPercentage = Math.round((progress.completed / progress.total) * 100)
              
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedTopic(topic)
                    setCurrentLessonIndex(0)
                  }}
                  className={`cursor-pointer bg-gradient-to-r ${topic.color} rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white/30`}
                >
                  <div className="text-6xl mb-4">{topic.emoji}</div>
                  <h3 className="text-3xl font-bold text-white mb-4">{topic.title}</h3>
                  <p className="text-white/90 text-lg mb-6">{topic.description}</p>
                  
                  {/* Progress indicator */}
                  {progress.completed > 0 && (
                    <div className="bg-white/20 rounded-xl p-3 mb-4 text-white">
                      <div className="text-sm opacity-90">Progress:</div>
                      <div className="text-lg font-bold">{progress.completed}/{progress.total} lessons</div>
                      <div className="w-full bg-white/30 rounded-full h-2 mt-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="text-white/90 text-lg">
                    {progress.completed > 0 
                      ? `${progress.completed}/${progress.total} lessons completed!`
                      : `${topic.lessons.length} lessons to learn!`
                    }
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          /* Lesson View */
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTopic(null)}
              className="mb-8 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-200"
            >
              ← Back to Topics
            </motion.button>

            {/* Progress */}
            <div className="mb-8 text-center">
              <div className="text-white/80 mb-2">
                Lesson {currentLessonIndex + 1} of {selectedTopic.lessons.length}
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentLessonIndex + 1) / selectedTopic.lessons.length) * 100}%` }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
                />
              </div>
            </div>

            {/* Lesson Content */}
            <motion.div
              key={currentLessonIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-white/50"
            >
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  {selectedTopic.lessons[currentLessonIndex].title}
                </h2>
                <p className="text-xl text-gray-600">
                  {selectedTopic.lessons[currentLessonIndex].content}
                </p>
              </div>

              {/* Examples */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-500" />
                  Examples
                </h3>
                <div className="bg-blue-50 rounded-2xl p-6">
                  {selectedTopic.lessons[currentLessonIndex].examples.map((example, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center mb-3"
                    >
                      <span className="text-blue-500 font-bold mr-3">•</span>
                      <span className="text-gray-700 text-lg">{example}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => playSound(example)}
                        className="ml-auto bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Practice */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                  Practice Sentences
                </h3>
                <div className="bg-green-50 rounded-2xl p-6">
                  {selectedTopic.lessons[currentLessonIndex].practice.map((sentence, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center mb-3"
                    >
                      <span className="text-green-500 font-bold mr-3">•</span>
                      <span className="text-gray-700 text-lg">{sentence}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => playSound(sentence)}
                        className="ml-auto bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevLesson}
                  disabled={currentLessonIndex === 0}
                  className={`px-6 py-3 rounded-full font-bold ${
                    currentLessonIndex === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } transition-all duration-200 flex items-center`}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => markLessonComplete(selectedTopic.id, currentLessonIndex)}
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-200 flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Mark Complete
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextLesson}
                  disabled={currentLessonIndex === selectedTopic.lessons.length - 1}
                  className={`px-6 py-3 rounded-full font-bold ${
                    currentLessonIndex === selectedTopic.lessons.length - 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } transition-all duration-200 flex items-center`}
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GrammarLessons 
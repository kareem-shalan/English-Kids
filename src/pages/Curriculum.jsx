import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Target, BookOpen, Play, CheckCircle, Lock, Star, Volume2 } from 'lucide-react'
import { monthlySchedule } from '../data/curriculumData'

const Curriculum = () => {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [completedSessions, setCompletedSessions] = useState(new Set())
  const [showSavedIndicator, setShowSavedIndicator] = useState(false)

  // Load progress from localStorage on component mount
  useEffect(() => {
    const progressArray = localStorage.getItem('englishApp_completedSessions')
    const savedWeek = localStorage.getItem('englishApp_selectedWeek')
    
    if (progressArray) {
      try {
        const progress = JSON.parse(progressArray)
        setCompletedSessions(new Set(progress))
      } catch (error) {
        console.error('Error loading saved progress:', error)
      }
    }
    
    if (savedWeek) {
      try {
        const weekNumber = parseInt(savedWeek, 10)
        if (weekNumber >= 1 && weekNumber <= 4) {
          setSelectedWeek(weekNumber)
        }
      } catch (error) {
        console.error('Error loading saved week:', error)
      }
    }
  }, [])

  // Save progress to localStorage whenever completedSessions changes
  useEffect(() => {
    const progressArray = Array.from(completedSessions)
    localStorage.setItem('englishApp_completedSessions', JSON.stringify(progressArray))
    
    // Show saved indicator briefly
    if (progressArray.length > 0) {
      setShowSavedIndicator(true)
      const timer = setTimeout(() => setShowSavedIndicator(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [completedSessions])

  // Save selected week to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('englishApp_selectedWeek', selectedWeek.toString())
  }, [selectedWeek])

  const markSessionComplete = (weekNumber, sessionDay) => {
    const sessionKey = `${weekNumber}-${sessionDay}`
    setCompletedSessions(prev => {
      const newSet = new Set(prev)
      newSet.add(sessionKey)
      return newSet
    })
  }

  const markSessionIncomplete = (weekNumber, sessionDay) => {
    const sessionKey = `${weekNumber}-${sessionDay}`
    setCompletedSessions(prev => {
      const newSet = new Set(prev)
      newSet.delete(sessionKey)
      return newSet
    })
  }

  const getWeekData = (weekNumber) => {
    const weekKey = `week${weekNumber}`
    return monthlySchedule[weekKey]
  }

  const getSessionProgress = (weekNumber) => {
    const weekSessions = getWeekData(weekNumber)?.sessions || []
    const completedCount = weekSessions.filter(session => 
      completedSessions.has(`${weekNumber}-${session.day}`)
    ).length
    return { completed: completedCount, total: weekSessions.length }
  }

  const getOverallProgress = () => {
    let totalCompleted = 0
    let totalSessions = 0
    
    for (let week = 1; week <= 4; week++) {
      const weekData = getWeekData(week)
      if (weekData) {
        totalSessions += weekData.sessions.length
        totalCompleted += weekData.sessions.filter(session => 
          completedSessions.has(`${week}-${session.day}`)
        ).length
      }
    }
    
    return { completed: totalCompleted, total: totalSessions }
  }

  const playSound = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1.2
      speechSynthesis.speak(utterance)
    }
  }

  const weeks = [
    { number: 1, title: "Foundation Building", theme: "Alphabet & Basic Sounds", color: "from-blue-400 to-blue-600" },
    { number: 2, title: "Grammar Foundations", theme: "Parts of Speech & Sentence Structure", color: "from-green-400 to-green-600" },
    { number: 3, title: "Communication Skills", theme: "Conversations & Real-world English", color: "from-purple-400 to-purple-600" },
    { number: 4, title: "Advanced Application", theme: "Reading, Writing & Practical Skills", color: "from-orange-400 to-orange-600" }
  ]

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
            📚 Monthly Curriculum! 📚
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Complete 30 sessions over 4 weeks to master English fundamentals!
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
            🎯 Your Overall Progress
          </h2>
          <div className="text-6xl font-bold text-yellow-300 mb-4">
            {overallProgress.completed}/{overallProgress.total}
          </div>
          <div className="text-xl text-white/90 mb-6">
            Sessions Completed!
          </div>
          <div className="w-full bg-white/20 rounded-full h-4 max-w-2xl mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(overallProgress.completed / overallProgress.total) * 100}%` }}
              className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full"
            />
          </div>
          {showSavedIndicator && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 text-green-300 font-bold"
            >
              ✅ Progress Saved!
            </motion.div>
          )}
        </motion.div>

        {/* Week Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {weeks.map((week, index) => {
            const weekProgress = getSessionProgress(week.number)
            const isSelected = selectedWeek === week.number
            
            return (
              <motion.div
                key={week.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedWeek(week.number)}
                className={`cursor-pointer bg-gradient-to-r ${week.color} rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-4 ${
                  isSelected ? 'border-yellow-300' : 'border-white/30'
                }`}
              >
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Week {week.number}</h3>
                <p className="text-white/90 text-sm mb-4">{week.title}</p>
                <div className="bg-white/20 rounded-xl p-3 text-white">
                  <div className="text-sm opacity-90">Progress:</div>
                  <div className="text-lg font-bold">{weekProgress.completed}/{weekProgress.total}</div>
                  <div className="w-full bg-white/30 rounded-full h-2 mt-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(weekProgress.completed / weekProgress.total) * 100}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Selected Week Sessions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedWeek}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {(() => {
              const weekData = getWeekData(selectedWeek)
              if (!weekData) return null

              return (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {weekData.title}
                    </h2>
                    <p className="text-xl text-white/90">{weekData.theme}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {weekData.sessions.map((session, index) => {
                      const isCompleted = completedSessions.has(`${selectedWeek}-${session.day}`)
                      
                      return (
                        <motion.div
                          key={session.day}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`bg-white/15 backdrop-blur-md rounded-3xl p-6 border-4 transition-all duration-300 ${
                            isCompleted ? 'border-green-300 bg-green-500/20' : 'border-white/30'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                Day {session.day}
                              </h3>
                              <p className="text-white/90 text-lg">{session.title}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-5 h-5 text-white/70" />
                              <span className="text-white/70 text-sm">{session.duration}</span>
                            </div>
                          </div>

                          <div className="space-y-3 mb-4">
                            <div className="flex items-center space-x-2">
                              <BookOpen className="w-5 h-5 text-blue-300" />
                              <span className="text-white/90 text-sm font-medium">Activities:</span>
                            </div>
                            <ul className="space-y-1 text-white/80 text-sm">
                              {session.activities.slice(0, 3).map((activity, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="text-blue-300">•</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                              {session.activities.length > 3 && (
                                <li className="text-white/60 text-xs">
                                  +{session.activities.length - 3} more activities
                                </li>
                              )}
                            </ul>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center space-x-2">
                              <Target className="w-4 h-4 text-green-300" />
                              <span className="text-white/90 text-sm font-medium">Vocabulary:</span>
                            </div>
                            <p className="text-white/80 text-sm">{session.vocabulary.join(', ')}</p>
                          </div>

                          <div className="space-y-2 mb-6">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-yellow-300" />
                              <span className="text-white/90 text-sm font-medium">Grammar:</span>
                            </div>
                            <p className="text-white/80 text-sm">{session.grammar}</p>
                          </div>

                          <div className="flex justify-between items-center">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => playSound(session.title)}
                              className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-all duration-200 flex items-center"
                            >
                              <Volume2 className="w-4 h-4 mr-2" />
                              Listen
                            </motion.button>

                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => isCompleted 
                                ? markSessionIncomplete(selectedWeek, session.day)
                                : markSessionComplete(selectedWeek, session.day)
                              }
                              className={`px-6 py-2 rounded-full font-bold transition-all duration-200 flex items-center ${
                                isCompleted
                                  ? 'bg-red-500 text-white hover:bg-red-600'
                                  : 'bg-green-500 text-white hover:bg-green-600'
                              }`}
                            >
                              {isCompleted ? (
                                <>
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Completed
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4 mr-2" />
                                  Mark Complete
                                </>
                              )}
                            </motion.button>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </>
              )
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Curriculum 
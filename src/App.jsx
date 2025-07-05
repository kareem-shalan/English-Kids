import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AlphabetLessons from './pages/AlphabetLessons'
import VocabularyPractice from './pages/VocabularyPractice'
import EducationalGames from './pages/EducationalGames'
import Curriculum from './pages/Curriculum'
import GrammarLessons from './pages/GrammarLessons'
import AboutTeacher from './pages/AboutTeacher'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-16 sm:pt-20"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alphabet" element={<AlphabetLessons />} />
                          <Route path="/vocabulary" element={<VocabularyPractice />} />
              <Route path="/games" element={<EducationalGames />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/grammar" element={<GrammarLessons />} />
              <Route path="/about" element={<AboutTeacher />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BookOpen, Volume2, Gamepad2, User, Mail, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home, color: 'text-yellow-400' },
    { path: '/alphabet', label: 'Alphabet', icon: BookOpen, color: 'text-green-400' },
    { path: '/vocabulary', label: 'Words', icon: Volume2, color: 'text-blue-400' },
    { path: '/games', label: 'Games', icon: Gamepad2, color: 'text-pink-400' },
    { path: '/curriculum', label: 'Curriculum', icon: BookOpen, color: 'text-indigo-400' },
    { path: '/grammar', label: 'Grammar', icon: BookOpen, color: 'text-teal-400' },
    { path: '/about', label: 'Teacher', icon: User, color: 'text-purple-400' },
    { path: '/contact', label: 'Contact', icon: Mail, color: 'text-orange-400' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">E</span>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              English Fun
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                    <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden py-4 space-y-2"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? 'text-white' : item.color}`} />
                    <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar 
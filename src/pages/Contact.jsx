import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            📞 Get in Touch! 📞
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? Want to learn more? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-white/50"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Contact Information
            </h2>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">hello@englishfun.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-KIDS</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl"
              >
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Location</h3>
                  <p className="text-gray-600">Online Learning Center</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Available Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9AM - 5PM</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-orange-500" />
                Quick Response Promise
              </h3>
              <p className="text-gray-700">
                We typically respond to all messages within 24 hours! We can't wait to help 
                your child start their English learning adventure! 🌟
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-white/50"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Send us a Message! 💌
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Child's Age
                </label>
                <select className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-200">
                  <option>Select age</option>
                  <option>4 years old</option>
                  <option>5 years old</option>
                  <option>6 years old</option>
                  <option>7 years old</option>
                  <option>8 years old</option>
                  <option>9 years old</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us how we can help your child learn English!"
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message 🚀
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-600 text-sm">
                * Required fields. We respect your privacy and never share your information.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12 bg-white/15 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            We Can't Wait to Meet You!
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Every great adventure starts with a simple "hello"! Reach out to us today 
            and let's begin your child's exciting English learning journey together! 
          </p>
          <div className="mt-4 text-3xl">🌈✨🦋</div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 
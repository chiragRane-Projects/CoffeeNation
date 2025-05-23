import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Chirag Vaibhav Rane</h2>
          <p className="text-black text-sm">
            Web Developer | App Developer | Data Scientist
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a href="https://www.instagram.com/chiragrane04/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/me/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/chiragRane-Projects/CoffeeNation.git" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors duration-300">
            <FaGithub />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-600 mt-6 text-sm">&copy; {new Date().getFullYear()} Chirag Vaibhav Rane. All rights reserved.</p>
    </footer>
  )
}

export default Footer
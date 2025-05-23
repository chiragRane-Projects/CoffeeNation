import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SidebarSocial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Navbar */}
      <nav className='w-full px-6 py-4 flex justify-between items-center text-white z-50 relative'>
        <h1 className='text-2xl font-bold text-lightOrange'>
          COFFEE<span className='text-white'>NATION</span>
        </h1>
        <button onClick={toggleMenu} className='text-2xl z-50'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50'
            >
              <div className='w-full h-full flex flex-col justify-center items-center gap-6 text-white text-xl'>
                <div className='w-[1px] h-[70px] bg-white'></div>
                <a href="https://instagram.com/chiragrane04" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/chiragRane-Projects" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn className="hover:scale-110 transition-transform duration-300" />
                </a>
                <div className='w-[1px] h-[70px] bg-white'></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarSocial;

import React from 'react'
import BgImage from '../../assets/bg-slate.png'
import BlackCup from "../../assets/black.png"
import Navbar from "../Navbar/Navbar"
import { motion } from 'framer-motion'

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className='relative min-h-[750px] w-full'>
        <div className="container">
          {/* Navbar Section */}
          <Navbar />

          {/* Hero Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>

            {/* Text Section */}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                className='text-5xl lg:text-7xl font-bold leading-tight ml-4 lg:ml-24'
              >
                Blvck Tumbler
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
                className='relative'
              >
                <div className='relative z-10 space-y-4'>
                  <h2 className='text-2xl'>Black Lifestyle Lovers,</h2>
                  <p className='text-sm opacity-60 leading-loose'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum voluptatum nam inventore nisi quos tenetur voluptatibus aliquam eligendi ipsa numquam error id eos possimus dicta repellat, repellendus placeat facere.
                  </p>
                </div>
                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 backdrop-blur-sm rounded-lg shadow-md'></div>
              </motion.div>
            </div>

            {/* Image Section */}
            <div className='relative'>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
                src={BlackCup}
                alt="Black Tumbler Cup"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
                className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'
              />
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }}
                className='absolute -top-20 left-[200px] z-[1]'
              >
                <h1 className='text-[clamp(3rem,12vw,10rem)] font-bold text-darkGray/40 leading-none'>
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>

            {/* Optional Third Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1.2 }}
              className='hidden md:block text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'
            >
              <h1 className='opacity-0 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight ml-14 lg:ml-24'>
                Blvck Tumbler
              </h1>
              <div className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h2 className='text-2xl'>Blvck Tumbler</h2>
                  <p className='text-sm opacity-60 leading-loose'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae porro voluptas maiores praesentium delectus, quis officia sint autem, eaque commodi, obcaecati facilis sapiente sit neque fugit ipsam itaque magni asperiores!
                  </p>
                </div>
                <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero

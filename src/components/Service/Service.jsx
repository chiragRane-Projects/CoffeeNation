import React from 'react'
import { motion } from 'framer-motion'
import Coffee1 from "../../assets/coffee/coffee1.png"
import Coffee3 from "../../assets/coffee/coffee3.png"

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      delay: 0.2
    },
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const Service = () => {
  return (
    <div className='container my-16 space-y-4'>
      {/* Header */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
          className='text-3xl font-bold text-lightGray'
        >
          Fresh and <span className='text-primary'>Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.6 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
          className='text-sm opacity-50'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur laborum eveniet laboriosam a.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
      >
        {servicesData.map(({ id, image, title, subtitle }) => (
          <motion.div
            key={id}
            variants={cardVariants}
            viewport={{ amount: 0.3 }}
            className='text-center p-4 space-y-6'
          >
            <img
              src={image}
              alt={title}
              className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer'
            />
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold text-primary'>{title}</h1>
              <p className='text-darkGray'>{subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Service

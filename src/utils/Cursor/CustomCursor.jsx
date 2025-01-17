import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'
import { throttle } from 'lodash'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = throttle((event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }, 64)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className='custom-cursor'
      animate={{
        x: position.x - 15, // Ajuste para centrar el cursor
        y: position.y - 15
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300
      }}
    />
  )
}

export default CustomCursor

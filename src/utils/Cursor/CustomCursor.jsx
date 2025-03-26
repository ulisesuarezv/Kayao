import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'
import { throttle } from 'lodash'
// import animationJSON from '/src/public/animations/animation1.json'
// import LottieRender from './LottieRender'

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999
      }}
      animate={{
        x: position.x - 25, // Ajuste para centrar el cursor
        y: position.y - 25
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 300
      }}
    ></motion.div>
  )
}

export default CustomCursor

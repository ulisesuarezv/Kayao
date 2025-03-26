import { MotionValue, motionValue } from 'motion'

import { motion } from 'motion/react'
import './UseParallax.css'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Step({ children, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <div ref={ref} className='step_wrapper'>
      <motion.div className='step_container' style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}

const UseParallax = () => {
  return (
    <div className='steps_section'>
      {[1, 2, 3, 4, 5].map((num) => (
        <Step key={num} index={num}>
          <h2>hgolaa</h2>
        </Step>
      ))}
    </div>
  )
}

export default UseParallax

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity
} from 'framer-motion'
import './ScrollText.css'
import { useRef } from 'react'

const wrap = (min, max, v) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

const ScrollText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  // const x = useTransform(baseX, (v) => `${wrap(-10, -45, v)}%`)

  const directionFactor = useRef(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  const x = useTransform(baseX, (v) => `${wrap(-10, -45, v)}%`)

  return (
    <div className='parallax'>
      <motion.div className='scroller_text' style={{ x }}>
        <span className='text_ScrollText'>{children} </span>
        <span className='text_ScrollText'>{children} </span>
        <span className='text_ScrollText'>{children} </span>
        <span className='text_ScrollText'>{children} </span>
        <span className='text_ScrollText'>{children} </span>
        <span className='text_ScrollText'>{children} </span>
        <span className='text_ScrollText'>{children} </span>
        <span className='text_ScrollText'>{children} </span>
      </motion.div>
    </div>
  )
}

export default ScrollText

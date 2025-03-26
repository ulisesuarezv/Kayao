import { motion } from 'motion/react'

const HeroDesign = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(225,230,121,0.3)',
          borderRadius: '50%',
          transform: 'translate(33%, -33%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '40rem',
          height: '40rem',
          backgroundColor: 'rgba(225,230,121,0.15)',
          borderRadius: '50%',
          transform: 'translate(-50%, 50%)'
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '25%',
          right: '25%',
          width: '1rem',
          height: '1rem',
          backgroundColor: 'rgba(225,230,121,0.8)',
          borderRadius: '50%'
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '33%',
          width: '1.5rem',
          height: '1.5rem',
          backgroundColor: 'rgba(225,230,121,0.6)',
          borderRadius: '50%'
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          width: '6rem',
          height: '6rem',
          backgroundColor: 'rgba(225,230,121,0.5)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: 'linear'
        }}
      />
    </>
  )
}

export default HeroDesign

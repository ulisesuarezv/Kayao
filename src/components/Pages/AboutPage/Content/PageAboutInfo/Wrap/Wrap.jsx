import { Divider } from '@chakra-ui/react'
import { WRAPINFO } from '../../../../../../utils/wrapInfo'
import './Wrap.css'
import { motion } from 'motion/react'
const Wrap = () => {
  return (
    <section className='wrap'>
      <div id='wrap_container'>
        {WRAPINFO.map((item, index) => (
          <>
            <Divider borderBottomWidth='3px' w='90vw' />
            <motion.div
              key={index}
              className='wrap_card'
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1.2 }}
              initial={{ opacity: 0, x: 100, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: false }}
            >
              <div className='title_wrap_container'>
                <h3 className='title_wrap'>{item.title}</h3>
              </div>
              <div className='subtitle_wrap_container'>
                <h4 className='subtitle_wrap'>
                  {item.subtitles.map((subtitle, i) => (
                    <span key={i}>
                      {subtitle}
                      <br />
                    </span>
                  ))}
                </h4>
              </div>
              <div className='text_wrap_container'>
                <p className='text_wrap'>{item.text}</p>
              </div>
            </motion.div>
          </>
        ))}
      </div>
    </section>
  )
}

export default Wrap

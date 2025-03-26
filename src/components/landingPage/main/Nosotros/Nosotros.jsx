import CircleDesign from '../../../../utils/CircleDesign/CircleDesign'
import ScrollText from '../../../../utils/ScrollText/ScrollText'
import AboutInfo from './AboutInfo/AboutInfo'
import './Nosotros.css'
import { motion } from 'motion/react'

const Nosotros = () => {
  return (
    <section id='nosotros'>
      <motion.div className='nosotros_container'>
        <div className='parallax_container'>
          <ScrollText baseVelocity={5}>WE BUILD TECH</ScrollText>
          <ScrollText baseVelocity={-5}>FOR THE FUTURE</ScrollText>
        </div>
        <div className='nosotros_container_header'>
          <CircleDesign />
          <motion.div
            className='nosotros_tag_1'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className='title_tag_1'>Design | Development | Maintenance</h1>
          </motion.div>
          <motion.div
            className='nosotros_tag_2'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div>
              <h1 id='title_tag_2'>Sobre Nosotros</h1>
            </div>
            <div>
              <p className='basic_text_class' id='text_tag_2'>
                Ubicados en Sevilla, España, somos un equipo de profesionales
                apasionados por la tecnologia y el desarrollo de software.
                Nuestra mision es ayudarte a llevar tu idea al siguiente nivel,
                transformando tu proposito digital en un producto atractivo y
                funcional que genera resultados.
              </p>
            </div>
          </motion.div>
        </div>
        <AboutInfo />
      </motion.div>
    </section>
  )
}

export default Nosotros

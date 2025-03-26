import Button from '../../button/Button'
import Nosotros from '../nosotros/nosotros'
import Cliente from '../clientes/Cliente'
import Contacto from '../contacto/Contacto'
import Tarjeta from '../tarjeta/Tarjeta'
import Testimonios from '../testimonios/Testimonios'
import Text from '../text/Text'
import Titulo2 from '../titulo2/titulo2'
import './Hero.css'
import { motion } from 'motion/react'
import Header from '../../header/Header/Header'
import CustomCursor from '../../../../utils/Cursor/CustomCursor'
import CircleDesign from '../../../../utils/CircleDesign/CircleDesign'
import HeroDesign from '../../../../utils/HeroDesign/HeroDesign'

const Hero = () => {
  return (
    <main>
      <Header />
      <section id='intro' style={{ position: 'relative', overflow: 'hidden' }}>
        <HeroDesign />
        <motion.div
          id='title_content'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text />
          <motion.div
            id='button_container'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button className='button_proyect' w='12rem' h='2.8rem'>
              Ver Proyectos
            </Button>
            <Button className='button_get_started' w='12rem' h='2.8rem'>
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <section id='especialidades'>
        <CircleDesign />
        <Titulo2>Especialidades</Titulo2>
        <motion.div
          id='tarjetas'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Tarjeta
            subtitulo='Diseño Web'
            texto='Diseñamos poderosas paginas web con el fin de conectar tu proposito con clientes potenciales convirtiendolos en regulares.'
          />
          <Tarjeta
            subtitulo='Branding'
            texto='Tu idea, vision, pasion. Con un proceso creativo conseguimos plasmar tu esencia y proposito en un branding distintivo.'
          />
          <Tarjeta
            subtitulo='Desarrollo Web'
            texto='Desarrollamos poderosas paginas web sostenibles y escalables, utilizando tecnologias de punta llevaremos tu proposito a otro nivel.'
          />
        </motion.div>
      </section>
      <Nosotros />
      <section id='portfolio'>
        <Cliente />
      </section>
      <section id='testimonios'>
        <Testimonios />
      </section>
      <Contacto />
      <CustomCursor />
    </main>
  )
}

export default Hero

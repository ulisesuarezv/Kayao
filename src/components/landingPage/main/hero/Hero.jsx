import Button from '../../button/Button'
import Cliente from '../clientes/Cliente'
import Contacto from '../contacto/Contacto'
import Tarjeta from '../tarjeta/Tarjeta'
import Testimonios from '../testimonios/Testimonios'
import Text from '../text/Text'
import Titulo2 from '../titulo2/titulo2'
import './Hero.css'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <main>
      <section id='intro'>
        <Text />
        <motion.div
          id='button_container'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button className='button_proyect'>Ver Proyectos</Button>
          <Button className='button_get_started'>Get Started</Button>
        </motion.div>
      </section>
      <section id='especialidades'>
        <Titulo2>Especialidades</Titulo2>
        <div id='tarjetas'>
          <Tarjeta
            subtitulo='Web Design'
            texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis ipsum, dolores excepturi.'
          />
          <Tarjeta
            subtitulo='Web Development'
            texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis ipsum, dolores excepturi.'
          />
          <Tarjeta
            subtitulo='Web Maintenance'
            texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis ipsum, dolores excepturi.'
          />
        </div>
      </section>
      <section id='portfolio'>
        <Cliente />
      </section>
      <section id='testimonios'>
        <Testimonios />
      </section>
      <section id='contacto'>
        <Contacto />
      </section>
    </main>
  )
}

export default Hero

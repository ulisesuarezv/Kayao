import { motion } from 'framer-motion'
import './Estimar.css'
import Button from '../button/Button'

const Estimar = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      className='estimar_container'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='estimar_content_header'>
        <h2 className='title_estimar_class' style={{ width: '50%' }}>
          HABLANOS DE TU PROPOSITO
        </h2>
        <div>
          <p className='text_about_class' style={{ width: '100%' }}>
            Odias los formularios? <br />
            Escribenos a @kayaosv@gmail.com
          </p>
        </div>
      </div>
      <div className='estimar_content_body'>
        <div className='estimar_content_body_container'>
          <h2 className='text_about_class' style={{ fontWeight: '500' }}>
            Completa este formulario, revisaremos tu solicitud y nos pondremos
            en contacto contigo dentro de 24 horas
          </h2>
        </div>
        <div className='estimar_content_body_container'>
          <h2 className='estimar_content_body_title'>Cuentanos sobre ti</h2>
          <div>
            <h2>FORM AQUIIII</h2>
          </div>
        </div>
        <div className='estimar_content_body_container'>
          <h2 className='estimar_content_body_title'>
            Etapa actual de tu idea
          </h2>
          <div>
            <Button>GRUPO DE BUTTONSSSS</Button>
          </div>
        </div>
        <div className='estimar_content_body_container'>
          <h2 className='estimar_content_body_title'>
            Que servicios solicitas?
          </h2>
          <div>
            <h2>SERVICIOS / BRANDING</h2>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Estimar

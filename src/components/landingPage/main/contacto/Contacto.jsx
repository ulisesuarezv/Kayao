import { useRef } from 'react'
import Button from '../../button/Button'
import './Contacto.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import Form from '../../../../utils/Form/Form'

const Contacto = () => {
  const footerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['0.1 1', '1 1']
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(225, 230, 121, 0.1)', 'rgba(225, 230, 121, 0.2)']
  )

  return (
    <motion.footer
      ref={footerRef}
      style={{
        backgroundColor,
        transition: 'background-color 0.5s ease-in-out',
        height: '90vh'
      }}
    >
      <div className='footer_container'>
        <div className='footer_container_header'>
          <div className='footer_container_header_title'>
            <h2 className='title_tag_2'>Estima tu proyecto con nosotros!</h2>
          </div>
          <div>
            <Button className='button_inverted' w='15rem' h='3.5rem'>
              COntacccta
            </Button>
          </div>
        </div>
        <div className='footer_container_body'>
          <div className='footer_container_body_text'>
            <h2 className='title_tag_2'>Tienes dudas?</h2>
            <p
              className='text_about_class'
              style={{ backgroundColor: 'transparent' }}
            >
              Listo para llevar tu idea / negocio a un siguiente nivel?
              Contactanos
            </p>
            <p
              className='text_about_class'
              style={{ backgroundColor: 'transparent' }}
            >
              kayaosv@gmail.com
            </p>
          </div>
          <div className='footer_container_body_form'>
            <Form />
          </div>
        </div>
        <div className='footer_container_footer'>
          <div>
            <p>Veelisa alba</p>
          </div>
          <div>
            <p>2021</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Contacto

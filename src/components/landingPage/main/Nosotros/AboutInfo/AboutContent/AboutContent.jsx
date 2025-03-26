import { Divider } from '@chakra-ui/react'
import LottieRender from '../../../../../../utils/Cursor/LottieRender'
import './AboutContent.css'
import animationStep1 from '/src/public/animations/process_1.json'
import animationStep2 from '/src/public/animations/process_2.json'
import animationStep3 from '/src/public/animations/process_3.json'
import animationStep4 from '/src/public/animations/process_4.json'
import { motion } from 'motion/react'

const AboutContent = () => {
  return (
    <div className='about_content_container'>
      <div className='steps_container'>
        <div className='steps_container_content'>
          <Divider borderBottomWidth='3px' />
          <motion.div
            className='step_container'
            initial={{ opacity: 0, x: 100, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: false }}
          >
            <div className='step_left'>
              <LottieRender
                animationData={animationStep1}
                width_w='60%'
                height_h='60%'
              />
            </div>
            <div className='step_right'>
              <div className='step_right_content'>
                <h3 className='h3_about_class'>Step 1</h3>
                <h2 className='h2_about_class'>Producto Minimo Viable</h2>
                <p className='text_about_class'>
                  Transformamos tu idea inicial en un MVP atractivo,
                  permitiendote previsualizar tu idea y atraer inversores
                  rapidamente.
                </p>
              </div>
            </div>
          </motion.div>
          <Divider borderBottomWidth='3px' />
          <motion.div
            className='step_container'
            initial={{ opacity: 0, x: 100, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: false }}
          >
            <div className='step_left'>
              <LottieRender
                animationData={animationStep2}
                width_w='60%'
                height_h='60%'
              />
            </div>
            <div className='step_right'>
              <div className='step_right_content'>
                <h3 className='h3_about_class'>Step 2</h3>
                <h2 className='h2_about_class'>Diseño | Desarrollo</h2>
                <p className='text_about_class'>
                  Diseñamos y desarrollamos tu idea siempre bajo las ultimas
                  tecnologias y demandas del cliente. Nuestro proposito es
                  involucrarnos en tu proposito y plasmarla mediante el
                  desarrollo.
                </p>
              </div>
            </div>
          </motion.div>
          <Divider borderBottomWidth='3px' />
          <motion.div
            className='step_container'
            initial={{ opacity: 0, x: 100, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: false }}
          >
            <div className='step_left'>
              <LottieRender
                animationData={animationStep3}
                width_w='60%'
                height_h='60%'
              />
            </div>
            <div className='step_right'>
              <div className='step_right_content'>
                <h3 className='h3_about_class'>Step 3</h3>
                <h2 className='h2_about_class'>Lanzamiento</h2>
                <p className='text_about_class'>
                  Con el producto finalizado, realizamos tests y correcciones
                  junto con el cliente para asegurarnos de que el producto final
                  cumple con las expectativas. Una vez finalizado, lanzamos el
                  producto al mercado.
                </p>
              </div>
            </div>
          </motion.div>
          <Divider borderBottomWidth='3px' />
          <motion.div
            className='step_container'
            initial={{ opacity: 0, x: 100, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: false }}
          >
            <div className='step_left'>
              <LottieRender
                animationData={animationStep4}
                width_w='60%'
                height_h='60%'
              />
            </div>
            <div className='step_right'>
              <div className='step_right_content'>
                <h3 className='h3_about_class'>Step 4</h3>
                <h2 className='h2_about_class'>Mantenimiento | Soporte</h2>
                <p className='text_about_class'>
                  En este camino no te dejamos solo. Al desarrollar tu producto
                  con nosotros te aseguramos un soporte y mantenimiento continuo
                  para que tu producto siga creciendo y mejorando.
                </p>
              </div>
            </div>
          </motion.div>
          <Divider borderBottomWidth='3px' />
        </div>
      </div>
    </div>
  )
}

export default AboutContent

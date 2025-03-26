import { Divider } from '@chakra-ui/react'
import { TESTIMONIOS } from '../../../../utils/testimonios'
import './Testimonios.css'

const Testimonios = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Divider borderBottomWidth='3px' w='90vw' />
      </div>
      <h2>Testimonios</h2>
      <div id='testimonios_container'>
        {TESTIMONIOS.map((item, index) => (
          <div key={index} className='carta_testimonio'>
            <p className='texto_testimonio'>{item.texto}</p>
            <div className='autor_testimonio'>
              <img
                src={item.img}
                alt={item.cliente}
                className='img_testimonio'
              />
              <div className='autor_info'>
                <h3>{item.cliente}</h3>
                <p style={{ fontSize: '15px', opacity: '0.7' }}>
                  {item.empresa}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Testimonios

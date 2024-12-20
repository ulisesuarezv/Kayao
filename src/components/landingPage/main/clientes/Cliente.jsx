import { PORTFOLIO } from '../../../../utils/portfolio'
import './Cliente.css'

const Cliente = () => {
  return (
    <>
      <h2>Nuestra Pasion</h2>
      <div id='cartas_container'>
        {PORTFOLIO.map((item, index) => (
          <>
            <div className='cartas'>
              <img src={item.img} alt={item.nombre} className='carta_imagen' />
              <div key={index} className='carta_overlay'>
                <div className='carta_content'>
                  <h2 className='carta_titulo'>{item.nombre}</h2>
                  <p className='carta_descripcion'>Cliente: {item.cliente}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Cliente

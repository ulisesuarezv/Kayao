import './Tarjeta.css'

const Tarjeta = ({ subtitulo, texto }) => {
  return (
    <>
      <div className='tarjeta'>
        <h3>{subtitulo}</h3>
        <p>{texto}</p>
      </div>
    </>
  )
}

export default Tarjeta

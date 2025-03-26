import { useEffect, useMemo, useState } from 'react'
import './PageAboutHero.css'
import HeroDesign from '../../../../../utils/HeroDesign/HeroDesign'

const PageAboutHero = () => {
  const titulos = useMemo(
    () => ['DISEÑAMOS', 'DESARROLLAMOS', 'MANTENEMOS', 'DESARROLLAMOS'],
    []
  )
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titulos.length)
        setFade(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [titulos])

  return (
    <div id='pageAbout' style={{ position: 'relative', overflow: 'hidden' }}>
      <HeroDesign />
      <div id='animationAboutContainer'>
        <div className='containers__about'>
          <h1 className={`animated-title title_tag_1 ${fade ? 'fade' : ''}`}>
            {titulos[index]}
          </h1>
        </div>
        <div className='containers__about'>
          <p className='basic_text_class text_about'>
            Aplicaciones web para startups, pequeñas y medianas empresas
            transformando tu concepto inicial en experiencias que conectan con
            los usuarios convirtiendo a estos en clientes frecuentes.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageAboutHero

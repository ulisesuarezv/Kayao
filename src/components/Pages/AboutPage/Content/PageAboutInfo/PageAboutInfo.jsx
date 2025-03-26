import CircleDesign from '../../../../../utils/CircleDesign/CircleDesign'
import './PageAboutInfo.css'
import Techs from './Techs/Techs'
import Wrap from './Wrap/Wrap'

const PageAboutInfo = () => {
  return (
    <section className='pageAboutInfo'>
      <div className='title-container-techs'>
        <h1 className='title_tag_1'>TECNOLOGIAS PARA HACERLO POSIBLE</h1>
      </div>
      <div className='techs-container'>
        <Techs />
      </div>
      <Wrap />
      <CircleDesign />
    </section>
  )
}

export default PageAboutInfo

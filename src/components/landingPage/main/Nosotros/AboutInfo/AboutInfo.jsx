import HeroDesign from '../../../../../utils/HeroDesign/HeroDesign'
import AboutContent from './AboutContent/AboutContent'
import './AboutInfo.css'

const AboutInfo = () => {
  return (
    <div className='about_info_container' style={{ position: 'relative' }}>
      <div className='about_info_title_container'>
        <h1 className='about_info_title'>Desarrollemos Juntos</h1>
      </div>
      <AboutContent />
    </div>
  )
}

export default AboutInfo

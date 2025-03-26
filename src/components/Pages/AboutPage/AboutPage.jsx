import CustomCursor from '../../../utils/Cursor/CustomCursor'
import Header from '../../landingPage/header/Header/Header'
import Contacto from '../../landingPage/main/contacto/Contacto'
import './AboutPage.css'
import PageAboutHero from './Content/PageAboutHero/PageAboutHero'
import PageAboutInfo from './Content/PageAboutInfo/PageAboutInfo'
import Wrap from './Content/PageAboutInfo/Wrap/Wrap'

const AboutPage = () => {
  return (
    <>
      <Header />
      <PageAboutHero />
      <PageAboutInfo />
      <Wrap />
      <Contacto />
      <CustomCursor />
    </>
  )
}

export default AboutPage

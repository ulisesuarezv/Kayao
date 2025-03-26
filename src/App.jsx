import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/landingPage/main/hero/Hero'
import AboutPage from './components/Pages/AboutPage/AboutPage'
import Services from './components/Pages/Services/Services'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App

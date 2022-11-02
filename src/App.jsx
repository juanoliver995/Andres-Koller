import { useState, useEffect } from 'react'
import HeroImage from './components/HeroImage'
import HeroVideo from './components/HeroVideo'
import Header from './components/Header'
import Biography from './components/Biography'
import Dates from './components/Dates'
import Music from './components/Music'
import Galery from './components/Galery'
import Footer from './components/Footer'
import SocialLinks from './components/SocialLinks'
import Loader from './components/Loader'
function App() {
  const [loading, setLoading] = useState('')

  const loadingFunction = () =>{
    setLoading('none')
  }
  useEffect(()=>{
    setTimeout(loadingFunction, 3000)
  })

  return (
    <div>
      <Loader loading={loading}/>
      <Header />
      {
        window.screen.width > 480 ? <HeroImage /> : <HeroVideo />
      }
      <Biography/>
      <Dates/>
      <Music/>
      <Galery/>
      <SocialLinks />
      <Footer/>
    </div>
  )
}

export default App

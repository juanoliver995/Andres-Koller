import HeroImage from '../components/HeroImage'
import HeroVideo from '../components/HeroVideo'
import Header from '../components/Header'
import Biography from '../components/Biography'
import Dates from '../components/Dates'
import Music from '../components/Music'
import Galery from '../components/Galery'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import Resonate from '../components/Resonate'
import { useState, useEffect } from 'react'
import  Newsletter  from '../components/Newsletter'
import Modal from '../components/Modal'
const Index = () => {

  const [dates, setDates] = useState([])
  const [modalOpen, setModaleOpen] = useState(true)

  useEffect(() => {
    const getDates = () => {
      fetch('https://back-admin-dates-production.up.railway.app/api/dates/site/638660e6fa8a1f1fff145feb')
        .then(res => res.json())
        .then(data => setDates(data))
        .catch(err => console.log(err))
    }
    getDates()
  }, [])
  return (
    <div>
      {
        modalOpen ? <Modal setModal={setModaleOpen}/> : ''
      }
      <Header />
      {
        window.screen.width > 480 ? <HeroImage /> : <HeroVideo />
      }
      <Biography />
      <Resonate />
      <Dates dates={dates}/>
      <Music />
      <Galery />
      <div className='container-newsletter-social'>
        <Newsletter />
        <SocialLinks />
      </div>
      <Footer />
    </div>
  )
}

export default Index
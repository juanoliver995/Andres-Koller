import { useState, useEffect } from 'react'
import HeroImage from '../components/HeroImage'
import HeroVideo from '../components/HeroVideo'
import Header from '../components/Header'
import Biography from '../components/Biography'
import Dates from '../components/Dates'
import Music from '../components/Music'
import Galery from '../components/Galery'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import Loader from '../components/Loader'

const Index = () => {
  const [loading, setLoading] = useState(true)
  const [dates, setDates] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/api/dates')
      .then((res) => res.json())
      .then((data) => setDates(data))
      .catch((err) => console.log(err))
    setLoading(false)
  })

  return (
    <div>
      {
        loading ? <Loader loading={loading} />
          :
          <>
            <Header />
            {
              window.screen.width > 480 ? <HeroImage /> : <HeroVideo />
            }
            <Biography />
            <Dates dates={dates} />
            <Music />
            <Galery />
            <SocialLinks />
            <Footer />
          </>
      }
    </div>
  )
}

export default Index
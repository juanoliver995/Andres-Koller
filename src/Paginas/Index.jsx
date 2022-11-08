import HeroImage from '../components/HeroImage'
import HeroVideo from '../components/HeroVideo'
import Header from '../components/Header'
import Biography from '../components/Biography'
import Dates from '../components/Dates'
import Music from '../components/Music'
import Galery from '../components/Galery'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'


const Index = () => {


  return (
    <div>
      <Header />
      {
        window.screen.width > 480 ? <HeroImage /> : <HeroVideo />
      }
      <Biography />
      <Dates />
      <Music />
      <Galery />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default Index
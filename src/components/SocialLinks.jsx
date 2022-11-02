import instagram from '../assets/socialMedia/instagram.svg'
import twitter from '../assets/socialMedia/twitter.svg'
import facebook from '../assets/socialMedia/facebook.svg'
import beatport from '../assets/socialMedia/beatport.svg'
import soundcloud from '../assets/socialMedia/soundcloud.svg'
import spotify from '../assets/socialMedia/spotify.svg'

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <h2>Follow me in</h2>
      <div className='container-social-links'>
        <div className='social-link'>
          <a href="https://www.instagram.com/andreskoller/?hl=es-la" target="_blank" rel="noreferrer"><img src={instagram}/></a>
        </div>
        <div className='social-link'>
          <a href="https://twitter.com/Andreskoller" target="_blank" rel="noreferrer"><img src={twitter}/></a>
        </div>
        <div className='social-link'>
          <a href="https://www.facebook.com/AndreskollerOficiall" target="_blank" rel="noreferrer"><img src={facebook}/></a>
        </div>
        <div className='social-link'>
          <a href="https://www.beatport.com/artist/andres-koller/721054" target="_blank" rel="noreferrer"><img src={beatport}/></a>
        </div>
        <div className='social-link'>
          <a href="https://soundcloud.com/andreskolleroficial" target="_blank" rel="noreferrer"><img src={soundcloud}/></a>
        </div>
        <div className='social-link'>
          <a href="https://open.spotify.com/artist/7BrU1gbgI2aA4H5oUHmbSN" target="_blank" rel="noreferrer"><img src={spotify}/></a>
        </div>
      </div>
    </div>
  )
}

export default SocialLinks
import video from '../assets/andres-web.mp4'
import soundOn from '../assets/sound-on.svg'
import soundOff from '../assets/sound-off.svg'
import { useState } from 'react'

const HeroVideo = () => {
  const [muted, setMuted] = useState('')
  const mutedVideo = () => {
    if (muted === '') {
      setMuted('muted')
    } else {
      setMuted('')
    }
  }
  return (
    <div className='hero-video'>
      <video autoPlay src={video} muted={muted} playsInline loop preload="auto"/>
      <div className='container-sound'>
        <button onClick={() => mutedVideo()} className="btn-muted">
          {
            muted === '' ? <img src={soundOn} /> : <img src={soundOff} />
          }
        </button>
      </div>
    </div>
  )
}

export default HeroVideo
import video from '../assets/andres-web.mp4'
import soundOn from '../assets/sound-on.svg'
import soundOff from '../assets/sound-off.svg'
import { useState } from 'react'
import MutedVideo from './MutedVideo'

const HeroVideo = () => {
  const [muted, setMuted] = useState(true)
  const [viewMuted, setViewMuted] = useState(true)

  const userMutedAccion = () => {
    setMuted(true)
    setViewMuted(false)
    const video = document.getElementById('video-hero')
    video.play()

  }
  const userUnMutedAccion = () => {
    setMuted(false)
    setViewMuted(false)
    const video = document.getElementById('video-hero')
    video.play()
  }

  const mutedVideo = () => {
    if (muted === true) {
      setMuted(false)
    } else {
      setMuted(true)
    }
  }
  return (
    <div className='hero-video'>
      {
        viewMuted ? <MutedVideo userMutedAccion={userMutedAccion} userUnMutedAccion={userUnMutedAccion} /> : ''
      }
      <video src={video} muted={muted} playsInline loop preload="auto" id="video-hero"/>
      <div className='container-sound'>
        <button onClick={() => mutedVideo()} className="btn-muted">
          {
            !muted ? <img src={soundOn} /> : <img src={soundOff} />
          }
        </button>
      </div>
    </div>
  )
}

export default HeroVideo
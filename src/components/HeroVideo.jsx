import video from '../assets/andres-web.mp4'

import { useState } from 'react'
import MutedVideo from './MutedVideo'

const HeroVideo = () => {

  const [viewMuted, setViewMuted] = useState(true)


  const userUnMutedAccion = () => {
    setViewMuted(false)
    const video = document.getElementById('video-hero')
    video.play()
  }

  return (
    <div className='hero-video'>
      {
        viewMuted ? <MutedVideo  userUnMutedAccion={userUnMutedAccion} /> : ''
      }
      <video muted={true} src={video} loop preload="auto" id="video-hero"/>
    </div>
  )
}

export default HeroVideo
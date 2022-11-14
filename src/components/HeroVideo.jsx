import video from '../assets/andres-web.mp4'



const HeroVideo = () => {



  return (
    <div className='hero-video'>
      <video muted={true} src={video} loop preload="auto" id="video-hero"/>
    </div>
  )
}

export default HeroVideo
import video from '../assets/andres-web.mp4'

const HeroVideo = () => {

  return (
    <div className='hero-video'>
      <video src={video} muted={true} autoPlay={true} playsInline={true} loop id="video-hero"/>
    </div>
  )
}

export default HeroVideo
import video from '../assets/andres-web.mp4'



const HeroVideo = () => {

  return (
    <div className='hero-video'>
      <video muted={true} autoPlay={true} src={video} playsInline loop preload="auto" id="video-hero"/>
    </div>
  )
}

export default HeroVideo
import video from '../assets/andres-web.mp4'


const HeroVideo = (muted) => {

  return (
    <div className='hero-video'>
      <video  autoPlay src={video} {...muted} playsInline loop preload="auto"/>
    </div>
  )
}

export default HeroVideo
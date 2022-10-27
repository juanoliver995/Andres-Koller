import one from '../assets/galery/_DSC1148.jpg'
import two from '../assets/galery/IMG_6711.jpg'
import three from '../assets/galery/_DSC1199-2.jpg'
import four from '../assets/galery/foto2.jpg'
import five from '../assets/galery/foto.jpg'
import six from '../assets/galery/DSC09731.jpg'

const Galery = () => {
  return (
    <div className="galery">
      <div className="container-galery">
        <img src={one} className="one"/>
        <div className='text-galery'>
          <p>I’d like to make a little difference in this world and hope I can inspire others to do the same.</p> 
        </div>
        <img src={two} className="two"/>
        <img src={three} className="three"/>
        <img src={four} className="four"/>
        <img src={five} className="five"/>
        <img src={six} className="six"/>
      </div>
    </div>
  )
}

export default Galery
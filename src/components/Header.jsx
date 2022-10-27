import logo from '../assets/ANDRES KOLLER 3.png'
import soundOn from '../assets/sound-on.svg'
import soundOff from '../assets/sound-off.svg'

const Header = ({mutedVideo, muted}) => {
  return (
    <div className='header'>
      <div className='container-logo'>
        <img src={logo} className="logo"/>
      </div>
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

export default Header
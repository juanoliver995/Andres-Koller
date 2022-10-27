import eart from '../assets/vecteezy_spinning-black-and-white-globe-on-a-dark-background_3191217.mp4'

import { useInView } from 'react-intersection-observer'
const Dates = () => {

  const { ref: videoRef, inView: myElementVisible } = useInView()
  console.log(myElementVisible)
  

  return (
    <div className='dates'>
      <video className={`${myElementVisible ? 'animate-eart' : ''}`} ref={videoRef} src={eart} autoPlay muted playsInline loop></video>
      <div className='container-dates'>
        <div className='container-date'>
          <div className='info-date'>
            <time>Nov 4</time>
            <strong>Cordoba, Arg</strong>
            <p>La Fabrica - Pan-Pot</p>
          </div>
          <div className='btn-tickets'>
            <a className="custom-btn btn-7"><span>Buy Tickets</span></a>
          </div>
        </div>
        <div className='container-date'>
          <div className='info-date'>
            <time>Nov 11</time>
            <strong>Buenos Aires, Arg</strong>
            <p>Crobar - Nicolas Taboada</p>
          </div>
          <div className='btn-tickets'>
            <a className="custom-btn btn-7"><span>Buy Tickets</span></a>
          </div>
        </div>
        <div className='container-date'>
          <div className='info-date'>
            <time>Nov 12</time>
            <strong>Rosario, Arg</strong>
            <p>Switch</p>
          </div>
          <div className='btn-tickets'>
            <a className="custom-btn btn-7"><span>Buy Tickets</span></a>
          </div>
        </div>
        <div className='container-date'>
          <div className='info-date'>
            <time>Nov 21</time>
            <strong>Santa Fe, Arg</strong>
            <p>4get</p>
          </div>
          <div className='btn-tickets'>
            <a className="custom-btn btn-7"><span>Buy Tickets</span></a>
          </div>
        </div>
        <div className='container-date'>
          <div className='info-date'>
            <time>DEC 10</time>
            <strong>Santiago, Chi</strong>
            <p>Club Room</p>
          </div>
          <div className='btn-tickets'>
            <a className="custom-btn btn-7"><span>Buy Tickets</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dates
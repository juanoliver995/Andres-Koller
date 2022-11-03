import eart from '../assets/vecteezy.mp4'
import { motion } from 'framer-motion'
const Dates = () => {

  return (
    <div className='dates'>
      <motion.video
        initial={{
          opacity: 0,
          y: -200

        }}
        whileInView={{
          opacity: 0.5,
          y: 0
        }}
        transition={{
          duration: 2
        }}
        viewport={{ once: true }}
        src={eart}
        autoPlay={true}
        muted={true}
        loop
      ></motion.video>
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
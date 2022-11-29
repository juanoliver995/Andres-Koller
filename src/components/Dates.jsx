import eart from '../assets/vecteezy.mp4'
import { motion } from 'framer-motion'
import Date from '../components/Date'

const Dates = ({dates}) => {

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
        {
          dates.map(date => (
            <Date date={date} key={date._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Dates
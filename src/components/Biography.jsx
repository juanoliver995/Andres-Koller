import andresBio from '../assets/andres-byn.png'
import { motion } from 'framer-motion'
const Biography = () => {
  return (
    <div className='biography'>
      <div className='info-biography'>
        <h2>My Biography</h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 200

          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 2
          }}
          viewport={{ once: true }}
        >Andres Koller is a DJ/Producer from Rosario,
                  Argentina. At a very early age he realized the
                  electronic music is his passion. Currently, at the age
                  of 25, he has managed to perform in renowned
                  parties from Argentina, Mexico, the United States
                  and Chile. Sharing the booth with various national
                  and international artists such as, Adam Beyer,
                  Victor Ruiz, Pan Pot, Deborah De Luca, The Elements, Sasha Carassi, Nicolas Taboada, Beico and
                  others. Today he dedicates all his time to the music
                  to show the public his way of creating a unique
                  style when it comes to creating a DJ set and also
                  when creating new music with its own brand.</motion.p>
        <motion.div 
          initial={{
            opacity: 0,

          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2
          }}
          viewport={{ once: true }}
          className='download-bio'
        >
          <a href='../../public/AndresKoller-Biography.pdf' download="Andres-Koller-Biography">Download Biography</a>
        </motion.div>
      </div>
      <div className='img-biography'>
        <motion.img 
          initial={{
            opacity: 0,
            x: 200

          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 2
          }}
          viewport={{ once: true }}
          src={andresBio}/>
      </div>
    </div>
  )
}

export default Biography
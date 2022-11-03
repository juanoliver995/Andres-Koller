import one from '../assets/galery/_DSC1148.jpg'
import three from '../assets/galery/_DSC1199-2.jpg'
import four from '../assets/galery/foto2.jpg'
import six from '../assets/galery/DSC09731.jpg'
import { motion } from 'framer-motion'
const Galery = () => {
  return (
    <div className="galery">
      <div className="container-galery">
        <div>
          <motion.img 
            initial={{
              opacity: 0,
              x: -200

            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
            src={one}
          />
        </div>
        <div>
          <motion.img
            initial={{
              opacity: 0,
              x: -200

            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
            src={four}/>
        </div>
        <div>
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
              duration: 1
            }}
            viewport={{ once: true }}
            src={three}/>
        </div>
        <div>
          <motion.img
            initial={{
              opacity: 0,
              x: -200

            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
            src={six}/>
        </div>
      </div>
    </div>
  )
}

export default Galery
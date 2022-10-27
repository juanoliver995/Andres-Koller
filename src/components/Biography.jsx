import andresBio from '../assets/andres-byn.png'

const Biography = () => {
  return (
    <div className='biography'>
      <div className='info-biography'>
        <h2>My Biography</h2>
        <p>Andres Koller is a DJ/Producer from Rosario,
                  Argentina. At a very early age he realized the
                  electronic music is his passion. Currently, at the age
                  of 25, he has managed to perform in renowned
                  parties from Argentina, Mexico, the United States
                  and Chile. Sharing the booth with various national
                  and international artists such as, Adam Beyer,
                  Victor Ruiz, Pan Pot, Nicolas Taboada, Beico and
                  others. Today he dedicates all his time to the music
                  to show the public his way of creating a unique
                  style when it comes to creating a DJ set and also
                  when creating new music with its own brand.</p>
      </div>
      <div className='img-biography'>
        <img src={andresBio}/>
      </div>
    </div>
  )
}

export default Biography
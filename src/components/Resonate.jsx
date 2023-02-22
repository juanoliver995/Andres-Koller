import ResonateLogo from '../assets/RESONATE BLANCO.png'

const Resonate = () => {
  return (
    <div className='resonate-container'>
      <div className='resonate'>
        <h1>Andres Koller presents</h1>
        <img src={ResonateLogo}/>
        <div className='resonate-info'>
          <p>Resonate is a new concept that presents a totally unique experience, each performance will feature different guest artists, special aesthetic and the best techno / melodic techno in the industry.</p>
          <p>This name is the best way to express my feelings and energies through music.</p>
          <p className='ultimate-info'>I invite you to resonate with me!</p>
        </div>
        <div>
          <div className='btn-tickets'>
            <a target="_blank" href="https://www.passline.com/eventos/resonate-x-switch" className="custom-btn btn-7 btn-resonate" rel="noreferrer"><span>Get your tickets</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resonate
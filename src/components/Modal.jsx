import tour from '../assets/tour.jpg'

const Modal = ({ setModal }) => {
  return (
    <div className='modal'>
      <h2>TOUCHDOWN 2022 &#128147;</h2>
      <img src={tour}/>
      <button onClick={() => setModal(false)}>Close</button>
    </div>
  )
}

export default Modal

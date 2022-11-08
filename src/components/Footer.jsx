import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className='bookin'>
          <h3>For Bookings</h3>
          <a href='https://www.instagram.com/herzbooking/?hl=es-la' target="_blank" rel="noreferrer">@herzbooking</a>
          <a href='https://walink.co/4bd22f' target="_blank" rel="noreferrer">Contact</a>
        </div>
        <div className='promos'>
          <h3>For Promos</h3>
          <a href='mailto:promos.andreskoller@gmail.com'>Promos.andreskoller@gmail.com</a>
        </div>
        <div className='link-secret'>
          <Link to="/login">© COPYRIGHT ANDRES KOLLER 2022</Link>
        </div>
        <div>
          <p>WEBSITE BY JUAN OLIVER</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
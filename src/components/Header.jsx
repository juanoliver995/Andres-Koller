import logo from '../assets/ANDRES KOLLER 3.png'

const Header = () => {
  
  return (
    <div className='header'>
      <div className='container-logo'>
        <img src={logo} className="logo"/>
      </div>
    </div>
  )
}

export default Header
import { useState, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import HeaderAdmin from '../components/HeaderAdmin'

const Admin = () => {
  const [userLogged, setUserLogged] = useState(() => JSON.parse(window.localStorage.getItem('user')))
  let navigate = useNavigate()

  useEffect(() => {
    if (userLogged === null) {
      navigate('/login')
    }
  },[])

  return (
    <div>
      <div>
        <HeaderAdmin user={userLogged} />
        <div className='md:flex md:min-h-screen'>
          <SideBar/>
          <main className='flex-1 p-10'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Admin
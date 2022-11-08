import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <aside className=' md:w-80 lg:w-96 px-5 py-10'>
      <Link className='bg-neutral-800 w-full p-1 block mt-5 text-center' to="/admin">Dates</Link>
      <Link className='bg-neutral-800 w-full p-1 block mt-5 text-center' to="newdate">New Date</Link>
    </aside>
  )
}

export default SideBar
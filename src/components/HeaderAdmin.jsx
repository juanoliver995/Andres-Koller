import React from 'react'

const HeaderAdmin = ({ user }) => {
  return (
    <header className='px-2 py-2 bg-neutral-900'>
      <div className=' md:flex md:justify-between'>
        <h2 className=' text-4xl font-white text-center'>Welcome {user}</h2>
      </div>
    </header>
  )
}

export default HeaderAdmin
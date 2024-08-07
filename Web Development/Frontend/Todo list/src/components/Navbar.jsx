import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex bg-purple-800 justify-between rounded-xl mt-2 mx-3 py-2'>
        <div>
            <span className='text-white text-3xl font-bold font-sans mx-10'>iTask</span>
        </div>
        <ul className='mx-10 flex items-center text-white gap-5'>
            <li className='cursor-pointer font-semibold hover:transition-all hover:font-bold '>Home</li>
            <li className='cursor-pointer font-semibold hover:transition-all hover:font-bold '>Your Tasks</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

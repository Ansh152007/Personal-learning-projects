import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-green-500 flex justify-between px-80 py-2 items-center rounded-lg m-3">
                <div className="navbar-logo">
                    <h1 className='text-3xl font-bold text-white'><span><span className='text-black'>&lt;</span>Pas</span><span className='text-black'>SAVE<span className='text-black'> /&gt;</span></span></h1>
                </div>
                <div className="navbar-links text-white">
                    <ul className='flex gap-4 font-semibold hover:cursor-pointer'>
                        <li className='hover:cursor-pointer'>Home</li>
                        <li className='hover:cursor-pointer'>About</li>
                        <li className='hover:cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

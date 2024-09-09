"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'
import { useState } from "react"
const Navbar = ({params}) => {
    const [showDropdown, setshowDropdown] = useState(false)
    const { data: session } = useSession()
    return (
        <div className='flex justify-between items-center p-2 bg-pink-500 px-10'>
            <Link href={"/"}><div className='flex items-center gap-1'>
                <img className='w-10' src="/fundo.gif" alt="" /><h1 className='text-3xl font-bold'>FunDO</h1>
            </div></Link>

            <div className='flex gap-2'>
                {session && 
<> <div className="hs-dropdown relative inline-flex">
  <button onClick={() => setshowDropdown(!showDropdown)} onBlur={() => setTimeout(() => {setshowDropdown(false)}, 300)} id="hs-dropdown-custom-trigger" type="button" className="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-white  bg-white text-white  shadow-sm hover:bg-white focus:outline-none focus:bg-white disabled:opacity-50 disabled:pointer-events-none dark:bg-pink-900 dark:border-pink-700 dark:text-white dark:hover:bg-pink-800 dark:focus:bg-pink-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    <img className="w-8 h-auto rounded-full" src="\krishna.png" alt="Avatar"/>
    <span className="text-white  font-medium truncate max-w-[7.5rem] dark:text-white">{session.user.name}</span>
    <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div className={`absolute top-12 ${showDropdown ? 'opacity-100' : 'hidden'} z-50 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0  min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-pink-800 dark:border dark:border-pink-700`} role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-custom-trigger">

    <Link href={"/dashboard"}> <div className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white  hover:bg-white  focus:outline-none focus:bg-white  dark:text-white dark:hover:bg-pink-700 dark:hover:text-white dark:focus:bg-pink-700" >
      Dashboard</div>
</Link> 
    <Link href={`/${session.user.name}`}> <div className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white  hover:bg-white  focus:outline-none focus:bg-white  dark:text-white dark:hover:bg-pink-700 dark:hover:text-white dark:focus:bg-pink-700" >
      Profile</div>
</Link> 
    <Link href={"/help"}> <div className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white  hover:bg-white  focus:outline-none focus:bg-white  dark:text-white dark:hover:bg-pink-700 dark:hover:text-white dark:focus:bg-pink-700" >
      Help</div>
</Link> 
  </div>
</div></>
}
                {session && <button onClick={() => { signOut() }}
className="group flex items-center justify-start w-11 h-10 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
                    <div
                        className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                        <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                            <path
                                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                            ></path>
                        </svg>
                    </div>
                    <div
                        className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        Logout
                    </div>
                </button>
                }
                {!session &&
                    <Link href={"/signup"}><button
                        className="relative flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-pink-600 rounded-md group active:scale-95">
                        <span
                            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-pink-500"></span>
                        </span>
                        <span
                            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-pink-500"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full  rounded-md bg-pink-800  group-hover:translate-x-0"
                        ></span>
                        <span
                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >Sign Up
                        </span>
                    </button></Link>}
                {!session &&
                    <Link href={"/login"}>    <button
                        className="relative flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-pink-600 rounded-md group active:scale-95"
                    >
                        <span
                            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-pink-500"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-pink-500"
                            ></span>
                        </span>
                        <span
                            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full  rounded-md bg-pink-800  group-hover:translate-x-0"
                        ></span>
                        <span
                            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                        >Login</span>
                    </button></Link>}

            </div>
        </div>
    )
}

export default Navbar

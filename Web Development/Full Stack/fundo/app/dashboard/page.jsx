"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
  }, [router, session])

  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  

  return (
    <div className='text-white flex justify-center pt-5'>
       <div className="form w-1/2 bg-pink-500 text-black flex flex-col items-center justify-start rounded-xl py-5 space-y-3">
          <div className='text-3xl pb-2 font-bold text-white '>Your credentials:</div>
          <div className=''><div className='text-white font-bold text-lg'>Name</div>
            <input className='w-[50rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="text" value={form.name ? form.name : ""} onChange={handlechange} name='name' placeholder='Name' /></div>
          <div className=''><div className='text-white font-bold text-lg'>Email</div>
            <input className='w-[50rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="email" value={form.email ? form.email : ""} onChange={handlechange} name='email' placeholder='Email' /></div>
          <div className=''><div className='text-white font-bold text-lg'>Username</div>
            <input className='w-[50rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="text" value={form.username ? form.username : ""} onChange={handlechange} name='username' placeholder='Username' /></div>
          <div className=''><div className='text-white font-bold text-lg'>Profile Image</div>
            <input className='w-[10rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="image" value={form.profileimage ? form.profileimage : ""} onChange={handlechange} name='profileimage' placeholder='Profile Image' /></div>
          <div className=''><div className='text-white font-bold text-lg'>Cover Image</div>
            <input className='w-[10rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="image" value={form.coverimage ? form.coverimage : ""} onChange={handlechange} name='coverimage' placeholder='Cover Image' /></div>
          <div className=''><div className='text-white font-bold text-lg'>Razor Pay ID</div>
            <input className='w-[50rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="text" value={form.razorpayid ? form.razorpayid : ""} onChange={handlechange} name='razorpayid' placeholder='Razor Pay ID' /></div>
          <div className=''><div className='text-white font-bold text-lg'>Razor Pay Secret</div>
            <input className='w-[50rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="text" value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handlechange} name='razorpaysecret' placeholder='Razor Pay Secret' /></div>
          <div><button className='bg-pink-800 text-white px-5 py-3 rounded-lg active:scale-90 transition-all'>Save</button></div>
          
        </div>
    </div>
  )
}

export default Dashboard

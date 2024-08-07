"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import React from 'react'
import { permanentRedirect } from 'next/navigation'
const login = () => {

  const { data: session } = useSession()
  
  if (session) {"use server"
    permanentRedirect("/dashboard")
  }
  return (
    <div>
      <div className='text-black text-3xl font-bold flex justify-center items-center pt-10'>
        Login to let your fans support you!
      </div>
      <div className='pt-10 space-y-1'>
        <div className="login flex justify-center">
          <div className="google bg-white flex justify-center gap-2 items-center border rounded-md px-3 py-1 w-72 active:scale-95 transition-all hover:cursor-pointer">
            <span><img className='w-10' src="/google.svg" alt="" /></span><span className='text-black'>Continue with Google</span>
          </div> </div><div className="login flex justify-center">
          <div className="facebook bg-[#2aa4f4] flex justify-center gap-2 items-center border rounded-md px-3 py-1 w-72 active:scale-95 transition-all hover:cursor-pointer">
            <span ><img className='w-10' src="/facebook.svg" alt="" /></span><span>Continue with Facebook</span>
          </div> </div><div className="login flex justify-center">
          <div onClick={()=>{signIn("github")}} className="github bg-black flex justify-center gap-2 items-center border rounded-md px-3 py-1 w-72 active:scale-95 transition-all hover:cursor-pointer">
            <span ><img className='w-10' src="/github.svg" alt="" /></span><span>Continue with Github</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login

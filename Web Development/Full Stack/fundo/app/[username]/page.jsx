import React from 'react'

const userprofile = ({ params }) => {
  return (
    <div className='text-black h-[118vh]'>
      <div className="images flex justify-center h-[55vh] w-full relative">
        <img className='object-cover w-full' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        <img className='absolute w-40 rounded-full top-[85%] bg-white p-1' src="/krishna.png" alt="" />
      </div>
      <div className="userinfo flex flex-col items-center justify-center relative top-20">
        <div className='font-semibold pt-1'>@{params.username.replaceAll("%20", "").toLowerCase()}</div>
        <div className='text-sm opacity-50 p-1'>Created fundo for personal interest</div>
        <div className='text-sm opacity-50'>10000 Followers. 120posts .15$worthfundocard</div>
      </div>
      <div className="paymentsinfo container mx-auto relative top-32 flex justify-center gap-5 w-[60%] h-[38vh]">
        <div className="numberofpayements w-1/2 bg-pink-200 text-pink-900 flex flex-col items-center py-3 justify-start rounded-xl overflow-auto my-scrollbar">

          <ul className='text-xl font-semibold '>
            <li><span>Satish Kumar donated</span><span className='font-bold'> 100$</span><span> says</span><span className='font-bold'> "Have a good day"</span></li>
          </ul>
        </div>
        <div className="pay w-1/2 bg-pink-500 text-black flex flex-col items-center justify-start rounded-xl pt-5 space-y-3">
          <div className='text-2xl pb-2 font-bold text-white '>Support your favorite creator!</div>
          <div className=''><input className='w-[33rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="text" value="" placeholder='Name' /></div>
          <div><input className='w-[33rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="text" value="" placeholder='Message' /></div>
          <div><input className='w-[33rem] py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="number" value="" placeholder='Amount' /></div>
          <div><button className='bg-pink-800 text-white px-5 py-3 rounded-lg active:scale-90 transition-all'>Pay</button></div>
          <div className='flex gap-2'>
            <button className='bg-pink-700 text-white px-5 py-3 rounded-lg active:scale-95 transition-all'>5$</button>
            <button className='bg-pink-700 text-white px-5 py-3 rounded-lg active:scale-95 transition-all'>10$</button>
            <button className='bg-pink-700 text-white px-5 py-3 rounded-lg active:scale-95 transition-all'>20$</button>
            <button className='bg-pink-700 text-white px-5 py-3 rounded-lg active:scale-95 transition-all'>40$</button>
            <button className='bg-pink-700 text-white px-5 py-3 rounded-lg active:scale-95 transition-all'>80$</button>
            <button className='bg-pink-700 text-white px-5 py-3 rounded-lg active:scale-95 transition-all'>100$</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default userprofile

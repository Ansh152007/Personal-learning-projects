import React from 'react'

const userprofile = ({params}) => {
  return (
    <div className='text-black h-[130vh]'>
      <div className="images flex justify-center h-[55vh] w-full relative">
        <img  className='object-cover w-full' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        <img  className='absolute w-40 rounded-full top-[85%] bg-white p-1' src="/krishna.png" alt="" />
      </div>
      <div className="userinfo flex flex-col items-center justify-center relative top-20">
        <div className='font-semibold pt-1'>@{params.username.replaceAll("%20","").toLowerCase()}</div>
        <div className='text-sm opacity-50 p-1'>Created fundo for personal interest</div>
        <div className='text-sm opacity-50'>10000 Followers. 120posts .15$worthfundocard</div>
      </div>
      <div className="paymentsinfo container mx-auto relative top-32 flex justify-center gap-5 w-[60%] h-[50vh]">
        <div className="numberofpayements w-1/2 bg-pink-200 text-pink-900 flex flex-col pl-5 justify-start rounded-xl pt-5 ">
        <ul className='text-xl font-semibold'>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
          <li>Satish Kumar donated 100$</li>
        </ul>
        </div>
        <div className="pay w-1/2 bg-pink-900 text-black flex flex-col items-center justify-start rounded-xl pt-5"> 
        <div className=''><input className='w-96 py-2 bg-pink-200 opacity-80 rounded-lg outline-none px-5' type="text" value="amount" /></div>
        <div><input className='' type="text" value="" /></div>
        <div><input className='' type="number" value="" /></div>
        <div><button>Pay</button></div>
        <div>
          <button>Pay 5$</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default userprofile

"use client";

export default function Home() {
  return (
    <main >
      <div className="pt-24">
        <div className="text-black flex gap-2 items-center justify-center pb-3">
          <span className="text-5xl font-bold "> Buy me a FunDO card </span><span><img className="w-16" src="/ticket.gif" alt="Ticket" /></span>
        </div>
        <div className="text-black flex gap-1 items-center justify-center pb-1">A crowd funding platform, Get funded by your followers. Start Now!</div>
        <div className="flex gap-3 items-center justify-center py-1">
          <button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#ec4899] before:to-[#ec4899] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Start Here
          </button>
          <button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#ec4899] before:to-[#ec4899] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Read More
          </button>
        </div>
      </div>
      <div className="h-[1px] w-[85%] bg-black opacity-20 mx-auto my-24"></div>
      <div className="">
      
        <div className="text-black text-3xl font-bold flex justify-center items-center "> Your followers can buy you a FunDO card</div>
        <div className="flex justify-evenly items-center gap-10 pt-10">
          <div className="text-black">
          <div className="flex justify-center"><img className=" shadow-sm shadow-black w-36 bg-pink-100 border rounded-full p-3" src="/developer.gif" alt="" /></div>
            <div className="flex justify-center"><div className="pt-5 font-semibold">Your followers can buy you a FunDO card</div></div>
          </div>
          <div className="text-black">
            <div className="flex justify-center"><img className=" shadow-sm shadow-black w-36 bg-pink-100 border rounded-full p-3" src="/pig-savings.gif" alt="" /></div>
            <div className="flex justify-center"><div className="pt-5 font-semibold">Your followers can buy you a FunDO card</div></div>
          </div>
          <div className="text-black">
          <div className="flex justify-center"><img className=" shadow-sm shadow-black w-36 bg-pink-100 border rounded-full p-3" src="/public.gif" alt="" /></div>
            <div className="flex justify-center"><div className="pt-5 font-semibold">Your followers can buy you a FunDO card</div></div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[85%] bg-black opacity-20 mx-auto my-24"></div>
      <div className="pb-24">
        <div className="text-black text-3xl font-bold flex justify-center items-center "> Your followers can buy you a FunDO card</div>
        <div className="flex justify-evenly items-center gap-10 pt-10">
          <div className="text-black">
          <div className="flex justify-center"><img className=" shadow-sm shadow-black w-36 bg-pink-100 border rounded-full p-3" src="/developer.gif" alt="" /></div>
           <div className="flex justify-center"><div> <div className="pt-5 font-semibold">Your followers can buy you a FunDO card</div></div></div>
          </div>
          <div className="text-black">
            <div className="flex justify-center"><img className=" shadow-sm shadow-black w-36 bg-pink-100 border rounded-full p-3" src="/pig-savings.gif" alt="" /></div>
            <div className="flex justify-center"><div className="pt-5 font-semibold">Your followers can buy you a FunDO card</div></div>
          </div>
          <div className="text-black">
          <div className="flex justify-center"><img className=" shadow-sm shadow-black w-36 bg-pink-100 border rounded-full p-3" src="/public.gif" alt="" /></div>
            <div className="flex justify-center"><div className="pt-5 font-semibold">Your followers can buy you a FunDO card</div></div>
          </div>
        </div>
        
      </div>
    </main>
  );
}

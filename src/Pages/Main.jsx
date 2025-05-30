import React from 'react'



const Main = () => {
  return (
    <div className='  flex flex-col justify-center items-center p-5 bg-gray-700 space-y-2'>
      {/* img here */}
      <div className='relative'> 
        <img src="img/sagor.jpeg" alt="" className='rounded-full w-20 border border-white border-r-2 '/>
        
          {/* <img src="img/sagor.jpeg" alt="" className=' myimg'/> */}
          <h1 className='w-25 flex items-center absolute top-7 translate-x-15 text-xs border rounded-2xl p-0.5 bg-white text-black -rotate-10 up-anim transition-all duration-300'>Sagor ahmed <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-amber-300 -rotate-45">
         <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
        </svg>
        </h1>

      </div>
      
      <h1 className='text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-50 via-gray-100 to-gray-400 opacity-anim'>
        <span>Build digital </span> <br />

        <span>product, brands,and</span> <br />
        <span> experience</span>
       

      </h1>
      <h1 className='text-xl bg-gray-500 text-gray-50 border p-1 rounded-2xl'>let shots</h1>





    </div>
  )
}

export default Main
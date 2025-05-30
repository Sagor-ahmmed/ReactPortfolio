import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import '../App.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (

    <section className='bg-gray-800 p-2 shadow-lg shadow-amber-50'>
      <div className='flex flex-row justify-between items-center container mx-auto w-3/4 text-gray-200 relative'>
        {/* text-devloper */}
        <div className=' flex justify-center items-center gap-1.5'>



          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${toggle ? 'size-10' : ""} size-6`}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
          </span>
          <span className={`${toggle ? "-translate-x-6 opacity-0 md:opacity-100 md:-translate-0" : ""} transition-all duration-1000 `}>S@<span className='text-2xl text-red-500 '>G</span>orAhmed.com</span>







        </div>

        {/* mobile-icon */}
        <button onClick={() => setToggle(!toggle)} className='md:hidden transition-all duration-500'>
          <div className={`w-7 h-0.5 bg-white transition-all ${toggle ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-7 h-0.5 bg-white my-1 transition-all ${toggle ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all  ${toggle ? '-rotate-45 -translate-y-1.5' : ''}`}></div>

        </button>

        {/* Mobile-menu */}
        {toggle && <div className={`mobile-menu absolute right-0 bg-black p-3 rounded text-xl flex flex-col space-y-5 text-center  md:hidden  `}>
          <a href="https://www.facebook.com/md.sagor.ahmmed.726371" target='blank'>Facebook </a>

          <a href="https://github.com/Sagor-ahmmed" target='blank'>Github </a>

          <NavLink href="">Contact </NavLink>

        </div>}




        {/* desktop-menu */}
        <div className='hidden md:block flex space-x-3.5 text-xl'>
           <a href="https://www.facebook.com/md.sagor.ahmmed.726371" target='blank'>Facebook </a>
          <span>/</span>
          <a href="https://github.com/Sagor-ahmmed" target='blank'>Github </a>
          <span>/</span>
          <Link href="">Contact</Link>

        </div>


      </div>


    </section>

  )
}

export default Navbar
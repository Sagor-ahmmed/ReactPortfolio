import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { PiHandshakeDuotone } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";




const Contact = () => {
  return (
    <div className='bg-gray-600 flex justify-center items-center p-8'>
      <div className='flex items-center flex-col space-y-5'>
        <div className='bg-gray-400 rounded-full p-1'>
          <span className='text-4xl text-center text-gray-300'><PiHandshakeDuotone /></span>

        </div>

        <div>
          <h1 className='text-center text-xl md:text-2xl lg:text-4xl text-gray-50 font-semibold'>Contact me as <br /> more Ways </h1>

        </div>

        <div className='flex gap-10 mt-3'>
          <button className='text-3xl text-white'><a href="mailto:helpahmed35sagor@gmail.com" target='blank'><MdOutlineAttachEmail /></a></button>
          <button className='text-3xl text-green-500'><a href="http://wa.me/01733832435" target='blank'><FaWhatsapp /></a></button>


        </div>
        <div className='flex items-center justify-center gap-2'>
          <span className='text-xl text-white animate-ping'><FaArrowAltCircleRight /></span>
          <h1 className='text-xs text-white'><a href="https://github.com/Sagor-ahmmed" target='blank'><u className='text-xl text-red-500'>click here</u> </a>  to see my Project</h1>
        </div>

      </div>






    </div>
  )
}

export default Contact
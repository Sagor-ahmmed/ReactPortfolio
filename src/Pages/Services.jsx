import React from 'react'

import { motion } from "motion/react"


import { TiHtml5 } from "react-icons/ti"
import { AiOutlineJavaScript } from "react-icons/ai";
import { BsFiletypeCss } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";

const services=[
    {
        icon:<TiHtml5 className='text-4xl text-amber-300'/>,
        title:'HTML5',
        descrription:'HTML is the standard markup language for creating Web pages.'
    },
     {
        icon:<BsFiletypeCss className='text-3xl text-amber-400'/> ,
        title:'CSS3',
        descrription:'CSS is the language we use to style a Web page.'
    },
     {
        icon:<AiOutlineJavaScript  className='text-4xl text-blue-700'/> ,
        title:'Javascript',
        descrription:'JavaScript is the programming language of the web.'
    },
     {
        icon:<FaReact className='text-pink-300 text-4xl'/>,
        title:'React JS',
        descrription:'React is a JavaScript library for building user interfaces..'
    },
]


const Services = () => {
  return (
    <div className='bg-gray-700 p-8 flex flex-col justify-center items-center'>
        <div>
            <h1 className=' mb-8 text-xl md:text-2xl text-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 text-transparent bg-clip-text'>Collaborate with brands and agencies <br />create impactful result <br />
             Completed fronted devlopment <br /> & <br /> progress in Backend devloper
            </h1>
           
        </div>

        {/* div for data  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto container w-3/4 gap-3 p-5 text-gray-300' >
            {
                services?.map((service,index)=>< motion.div className='bg-gray-800 p-4 border rounded-lg shadow-lg border-gray-900 pb-25 space-y-5'key={index} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}}>

                    <span>{service.icon} </span>
                    <h1 className='text-2xl md:text-3xl'>{service.title}</h1>
                    <h1 className='text-xs md:text-xl'>{service.descrription}</h1>

                </ motion.div  >)
            }
        </div>

    </div>
  )
}

export default Services

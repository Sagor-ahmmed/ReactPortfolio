import React from 'react'

const Footer = () => {
  const year=new Date().getFullYear()

  return (
    <div className='bg-gray-950 text-white p-1 text-center'>
   
      <h1> Devloped By Sagor ahmed<span>&copy;</span>{year}</h1>
      <h2 className='text-gray-400 text-xs'>email:ahmed35sagor@gmail.com</h2>
      

    </div>
  )
}

export default Footer
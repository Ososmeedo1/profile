import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact(props) {
  
  console.log(props);
  
  
  return <>

    <div className="relative h-[60vh] bg-black text-slate-300 border-b border-b-gray-600">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('./../../../public/images/test2.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-neutral-950"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container mx-auto z-50">
        <div className="caption flex flex-col items-center">
          <div className="me bg-[#1E1E1E] rounded-4xl px-3 py-1">
            <h2>Contact</h2>
          </div>
          <p className='md:text-7xl lg:text-7xl my-5 bg-linear-to-b from-gray-700 to-gray-300 bg-clip-text text-transparent font-bold font-main max-sm:text-6xl sm:text-6xl'>Contact me</p>
          <Link to={'https://wa.me/01060683508?text=Osama El-Gamal'} target='_blank' className="call border border-neutral-500 rounded-4xl font-bold font-main mb-5 px-10 py-3 transition-all duration-300 hover:bg-white hover:text-slate-950">
            <p>Call me</p>
          </Link>
          <div className='flex font-main'>
            <span className='text-gray-500 pe-1'>email:</span>
            <Link to={`https://mail.google.com/mail/?view=cm&fs=1&to=ososmeedo@gmail.com`} target='_blank' className='underline font-semibold'>ososmeedo@gmail.com</Link>
          </div>
        </div>
      </div>
    </div>


    <div className="name text-center">
      <h2 className='md:text-8xl lg:text-9xl font-bold font-main my-10 bg-linear-to-br from-neutral-700 to-neutral-300 bg-clip-text text-transparent max-sm:text-6xl sm:text-7xl'>Osama El-Gamal</h2>
    </div>


  </>
}

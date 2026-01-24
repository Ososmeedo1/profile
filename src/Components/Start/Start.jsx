
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Start() {

  const main = useRef();
  const osama = useRef();
  const email = useRef();

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    
    const tl = gsap.timeline();

    tl.from(main.current, {
      opacity: 0,
      y: 500,
      duration: 1
    })

    tl.from(osama.current, {
      opacity: 0,
      x: -50,
      duration: 1
    })

    tl.from(email.current, {
      opacity: 0,
      duration: 1
    })
  })

  return <>
    <header className={`h-screen text-white flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(./../../../public/images/bg6.jpg)] bg-cover`}>
      <div className="info flex flex-col items-center justify-around h-1/2">
        <div ref={osama} className="me bg-[#1E1E1E] rounded-4xl px-3 py-1">
          <h2 >I am Osama 👋</h2>
        </div>
        <div className="caption flex justify-center text-center max-sm:p-5">
          <h2 ref={main} className='font-main capitalize bg-linear-to-br from-blue-400 to-blue-100 bg-clip-text text-transparent max-sm:text-7xl sm:text-7xl md:text-8xl md:w-3xl'>I'm full-stack web developer</h2>
        </div>
        <div className="email"  ref={email}>
          <Link to={'https://mail.google.com/mail/?view=cm&fs=1&to=ososmeedo@gmail.com'} target="_blank" className="group flex items-center gap-2 border border-white/50 rounded-full bg-transparent px-6 py-2 text-white font-medium hover:bg-white hover:text-slate-950 transition-colors duration-300"><span>Email me</span><FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </div>
      </div>
    </header>
  </>
}

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function Nav({isOpen, setIsOpen, navToggle}) {

  gsap.registerPlugin(useGSAP);

  const name = useRef();
  const nav = useRef();

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from(nav.current, {
      opacity: 0,
      duration: 3
    })

    tl.from(name.current, {
      opacity: 0,
      x: -200,
      ease: "elastic",
      duration: 1
    })

  })

  return <>
    <nav ref={nav} className='container text-white mx-auto py-3 px-4 flex justify-between items-center font-main max-sm:border-b-2 max-sm:border-gray-800 sm:border-b-2 sm:border-gray-800 md:border-0 md:py-5 z-50 top-0 left-0 right-0'>
      <Link className="nav-logo" to={'/'}>
        <div className="name" ref={name}>
          <h1 className='font-bold text-2xl hover:text-blue-500'>Osama El-Gamal</h1>
        </div>
      </Link>

      <div className={`nav-links w-1/2 max-sm:hidden sm:hidden md:flex md:justify-end`}>
        <ul className='flex justify-between w-1/2'>
          <Link to={'projects'} className='transition-all duration-150 hover:text-blue-500'>Projects</Link>
          <Link to={'about'} className='transition-all duration-150 hover:text-blue-500'>About</Link>
          <Link to={'contact'} className='transition-all duration-150 hover:text-blue-500'>Contact</Link>
        </ul>
      </div>

      <div className={`links w-full bottom-10/12 z-50 md:hidden left-0 px-3 bg-[#0E0E0E] absolute transition-all overflow-hidden duration-500 ${isOpen ? "max-h-60  translate-y-0 py-5" : "max-h-0 opacity-0 -translate-y-6 py-0"}`}>
        <ul className='w-full space-y-5'>
          <Link onClick={navToggle} to={'projects'} className='transition-all duration-150 hover:bg-[rgba(255,255,255,0.3)] hover:text-blue-400 px-5 py-3 rounded-3xl'>Projects</Link>
          <Link onClick={navToggle} to={'about'} className='transition-all duration-150 hover:bg-[rgba(255,255,255,0.3)] hover:text-blue-400 px-5 py-3 rounded-3xl'>About</Link>
          <Link onClick={navToggle} to={'contact'} className='transition-all duration-150 hover:bg-[rgba(255,255,255,0.3)] hover:text-blue-400 px-5 py-3 rounded-3xl'>Contact</Link>
        </ul>
      </div>

      <div className="icon max-sm:flex max-sm:justify-end sm:flex sm:justify-end md:hidden">
      {isOpen ? <MdOutlineClose className='text-5xl cursor-pointer' onClick={navToggle} /> : <FiAlignJustify className='text-5xl cursor-pointer' onClick={navToggle} />}
      </div>
    </nav>
  </>
}

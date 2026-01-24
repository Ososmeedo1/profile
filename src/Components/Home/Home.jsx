import React, { useRef } from 'react'
import Start from '../Start/Start.jsx'
import Projects from '../Projects/Projects.jsx'
import About from '../About/About.jsx'
import Contact from '../Contact/Contact.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Home() {

  return <>

    <Start />
    <Projects />
    <About />
    <Contact />
    
  </>
}

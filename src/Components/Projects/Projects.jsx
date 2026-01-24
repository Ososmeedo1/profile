import React, { useRef } from 'react'
import ecommerce from './../../../public/images/ecommerce.png'
import notice from './../../../public/images/notice.png'
import weather from './../../../public/images/weather.png'
import food from './../../../public/images/food.png'
import restaurant from './../../../public/images/restaurant.png'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

export default function Projects() {

  const portfolio = useRef();
  const ecommerceSection = useRef();
  const notes = useRef();
  const recipes = useRef();
  const weatherSection = useRef();
  const restaurant = useRef();


  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(ecommerceSection.current, {
    x: -600,
    opcaity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: portfolio.current,
      start: "top top",
      end: "+=500px",
      // start: "top center",
      // end: "start center-=200px",
      pin: true,
      // start: "top-=600px center-=200px",
      // end: "end top",
      scrub: true,
      markers: true
    }
  })
  
  })

  return <>
    <section className='text-white py-20' ref={portfolio}>
      <div className="title flex flex-col items-center mb-16">
        <h4 className='border rounded-4xl px-3 py-1 bg-[#1E1E1E] font-main mb-5'>Portfolio</h4>
        <h2 className='capitalize text-6xl bg-linear-to-r from-neutral-300 to-neutral-50 bg-clip-text text-transparent text-center mt-5'>My latest projects</h2>
      </div>
      <div className="projects flex flex-wrap mx-auto md:container mb-5">

        <Link ref={ecommerceSection} className="sm:w-full max-sm:w-full flex flex-col items-center md:w-1/2 h-[400px]" to={'https://ososmeedo22.netlify.app'} target='_blank'>

          <div className="layout w-10/12 h-11/12  bg-[#0E0E0E] border border-neutral-800 rounded-2xl relative group">

            <div className="image absolute top-0 right-0 left-0 bottom-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
              <img src={ecommerce} className='w-full h-full rounded-2xl opacity-20 object-cover' alt="" />
            </div>

            <div className="project-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className='text-4xl lg:text-6xl opacity-100 text-neutral-600 font-extrabold transition-all duration-300 group-hover:text-green-500 group-hover:scale-150'>Ecommerce</h2>
            </div>

          </div>

        </Link>

        <Link ref={notes} className="sm:w-full max-sm:w-full flex flex-col items-center md:w-1/2 h-[400px]" to={'https://ososmeedo.netlify.app'} target='_blank'>

          <div className="layout w-10/12 h-11/12  bg-[#0E0E0E] border border-neutral-800 rounded-2xl relative group">

            <div className="image absolute top-0 right-0 left-0 bottom-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
              <img src={notice} className='w-full h-full rounded-2xl opacity-20 object-cover' alt="" />
            </div>

            <div className="project-title text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className='text-4xl lg:text-6xl opacity-100 text-neutral-600 font-extrabold transition-all duration-300 group-hover:text-blue-400 group-hover:scale-150'>Notes project</h2>
            </div>

          </div>

        </Link>

        <Link ref={weatherSection} className="sm:w-full max-sm:w-full flex flex-col items-center md:w-1/2 h-[400px]" to={'https://ososmeedo1.github.io/weather-project'} target='_blank'>

          <div className="layout w-10/12 h-11/12  bg-[#0E0E0E] border border-neutral-800 rounded-2xl relative group">

            <div className="image absolute top-0 right-0 left-0 bottom-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
              <img src={weather} className='w-full h-full rounded-2xl opacity-20 object-cover' alt="" />
            </div>

            <div className="project-title text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className='text-4xl lg:text-6xl opacity-100 text-neutral-600 font-extrabold transition-all duration-300 group-hover:text-slate-200 group-hover:scale-150'>Weather</h2>
            </div>

          </div>

        </Link>

        <Link ref={recipes} className="sm:w-full max-sm:w-full flex flex-col items-center md:w-1/2 h-[400px]" to={'https://ososmeedo1.github.io/food'} target='_blank'>

          <div className="layout w-10/12 h-11/12  bg-[#0E0E0E] border border-neutral-800 rounded-2xl relative group">

            <div className="image absolute top-0 right-0 left-0 bottom-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
              <img src={food} className='w-full h-full rounded-2xl opacity-20 object-cover' alt="" />
            </div>

            <div className="project-title text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className='text-4xl lg:text-6xl opacity-100 text-neutral-600 font-extrabold transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-150'>Food Recipes</h2>
            </div>

          </div>

        </Link>

        <Link ref={restaurant} className="w-full flex flex-col items-center h-[400px]" to={'https://restaurant22.netlify.app'} target='_blank'>

          <div className="layout max-sm:w-10/12 sm:w-10/12 md:w-11/12 h-11/12  bg-[#0E0E0E] border border-neutral-800 rounded-2xl relative group">

            <div className="image absolute top-0 right-0 left-0 bottom-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
              <img src={restaurant} className='w-full h-full rounded-2xl opacity-20 object-cover' alt="" />
            </div>

            <div className="project-title text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h2 className='text-4xl lg:text-6xl opacity-100 text-neutral-600 font-extrabold transition-all duration-300 group-hover:text-red-500 group-hover:scale-150'>Restaurant</h2>
            </div>

          </div>

        </Link>

      </div>

    </section>
  </>
}

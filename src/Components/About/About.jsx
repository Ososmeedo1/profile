import React from 'react'
import photo from './../../../public/images/IMG20250824234502.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return <>
    <section className='text-white mt-10'>
      <div className="container mx-auto flex flex-wrap">

        <div className="max-sm:items-center sm:w-full sm:items-center md:w-full lg:w-1/2 mb-10 flex justify-center">
          <div className="content border-2 border-white rounded-4xl sm:w-8/12 max-sm:w-2/3 md:w-2/3 mx-auto">
            <img src={photo} className='rounded-4xl' alt="" />
          </div>
        </div>

        <div className="max-sm:w-full md:w-full lg:w-1/2">
          <div className="caption max-sm:p-10 sm:p-5 md:w-11/12 h-full flex flex-col justify-evenly">
            <div className="badge text-center">
              <h4 className='border sm:w-4/12 sm:mx-auto md:w-10/12 lg:w-2/12 rounded-4xl py-1 bg-[#1E1E1E] font-main mb-5'>About</h4>
            </div>
            <div className="content mt-8">
              <h2 className='text-4xl text-white mb-3'>I'm Osama El-Gamal Full-stack Developer</h2>
              <p className='capitalize text-md leading-8 text-gray-400'>I have joined Shorouk Academy, I have attended many courses during my way to start my career as a developer, I have also my own <Link to={'www.youtube.com/@code2210'} className='underline'>youtube channel</Link> and I seek to have my first step in my career</p>
            </div>
            <div className="certificates mb-5">

              <ul className='list-disc list-inside leading-10'>
                <li>Route Full-stack Diploma</li>
                <li>Route Programming Fundamentals Diploma</li>
                <li>Egyptian Engineers Syndicate Full-stack Diploma</li>
                <li>Orange Full-stack Certificate</li>
                <li>Amit Full-stack Certificate</li>
              </ul>
            </div>
            <div className="cv">
              <Link className='bg-blue-600 px-6 py-2 w-2/12 rounded-2xl transition-all duration-300 hover:bg-blue-800' to={'https://drive.google.com/file/d/1LWisvFYjzCiUbTHGfItUPaN4m_2vRmJr/view?usp=drive_link'} target='_blank'>My CV</Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  </>
}

import { Button } from 'flowbite-react'
import React from 'react'
import Nav from './Components/Nav/Nav.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Projects from './Components/Projects/Projects.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'

export default function App() {
  
  const routers = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: 'projects', element: <Projects/>},
      {path: 'about', element: <About/>},
      {path: 'contact', element: <Contact/>},
    ]}
  ])
  
  
  
  return <>
  <RouterProvider router={routers}></RouterProvider>
    {/* <Nav/> */}
  </>
}

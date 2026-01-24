import React, { useState } from 'react'
import Nav from '../Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {

  const [navStatus, setNavStatus] = useState(false);

  function toggleNav () {
    navStatus ? setNavStatus(false) : setNavStatus(true);
  }
  
  return <>
    <Nav isOpen={navStatus} navToggle={toggleNav} setIsOpen={setNavStatus} />
    <Outlet context={{navStatus, toggleNav, setNavStatus}}></Outlet>
  </>
}

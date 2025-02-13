import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // style
  const handleLiveNav = (e) =>{
      return [
          "font-medium",
          "sm:text-xl",
          e.isActive? 'text-red-400' : '',
          e.isActive? 'font-bold' : ''
      ].join(" ");
  }

  // style
  const handleMobileNavLinkStyle = (e)=>{
    return [
      "text-base", "md:text-lg", "font-medium", "p-3", "hover:border-1", "hover:border-gray-200", "rounded-md",
      e.isActive? 'text-red-400' : '',
      e.isActive? 'font-bold' : ''
    ].join(" ");
  }

  return (
    <nav className='flex justify-between sm:justify-evenly items-center p-3 font-mono shadow-lg shadow-blue-300'>

      {/* Logo */}
      <div>
        <Link to="/" className='text-3xl sm:text-4xl lg:text-3xl font-bold'>SSB</Link>
      </div>

      {/* Links */}
      <div className='hidden sm:flex sm:items-center sm:gap-8 lg:gap-10'>
        <NavLink to="/" className={ (e)=>handleLiveNav(e) } >Home</NavLink>
        <NavLink to="/experience" className={ (e)=>handleLiveNav(e) }>Experience</NavLink>
        <NavLink to="/projects" className={ (e)=>handleLiveNav(e) }>Project</NavLink>
        <NavLink to="/education" className={ (e)=>handleLiveNav(e) }>Education</NavLink>
        <NavLink to="/contact" className={ (e)=>handleLiveNav(e) }>Contact</NavLink>
      </div>

      {/* Menu Button for Mobile */}
      <button className="sm:hidden" onClick={handleMenu}>
        <i className="ri-menu-line font-semibold text-lg text-gray-500"></i>
      </button>


      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} fixed bg-[#000c29] text-white inset-0 p-3 z-10`}>

        {/* Navbar in Mobile  */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className='text-3xl sm:text-4xl lg:text-3xl font-extrabold'>SSB</Link>
          </div>

          {/* Close Button */}
          <button className="lg:hidden" onClick={handleMenu}>
            <i className="ri-close-large-line font-semibold text-xl text-gray-500"></i>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="mt-5 flex flex-col gap-5">
            <NavLink className={(e)=>handleMobileNavLinkStyle(e)} to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink className={(e)=>handleMobileNavLinkStyle(e)} to="/experience" onClick={closeMenu}>
              Experience
            </NavLink>
            <NavLink className={(e)=>handleMobileNavLinkStyle(e)} to="/projects" onClick={closeMenu}>
              Project
            </NavLink>
            <NavLink className={(e)=>handleMobileNavLinkStyle(e)} to="/education" onClick={closeMenu}>
              Education
            </NavLink>
            <NavLink className={(e)=>handleMobileNavLinkStyle(e)} to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar
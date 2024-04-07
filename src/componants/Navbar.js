import React from 'react'
import Logo from './Logo'

function Navbar() {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
    return (
        <div>
            <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <Logo /> */}

        {/* Navbar links */}
        <div className="hidden md:block">
          <a href="#" className="text-white hover:text-gray-300 ml-3">Home</a>
          <a href="#" className="text-white hover:text-gray-300 ml-3">Schedule a Meeting</a>
          <button onClick={scrollToAbout} className="mx-4 text-white">About Us</button>
          <button onClick={scrollToContact} className="mx-4 text-white">Contact Us</button>
          
        </div>

        {/* Mobile menu button (hidden on larger screens) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar

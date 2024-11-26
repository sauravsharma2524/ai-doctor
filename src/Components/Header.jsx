import React from 'react'

const Header = () => {
  return (
      <>
          {/* Header */}
          <header className="sticky top-0 z-10 w-full bg-white shadow-md">
              <div className="flex justify-between items-center py-4 px-4 md:px-16 lg:px-32">
                  <h1 className="text-orange-500 font-bold text-2xl">DataClinic</h1>
                  <nav className="hidden md:flex space-x-6">
                      <a href="#about" className="text-gray-600 hover:text-orange-500">
                          About Us
                      </a>
                      <a href="#services" className="text-gray-600 hover:text-orange-500">
                          Services
                      </a>
                      <a href="#pricing" className="text-gray-600 hover:text-orange-500">
                          Pricing
                      </a>
                      <a href="#contact" className="text-gray-600 hover:text-orange-500">
                          Contact Us
                      </a>
                  </nav>
                  <div className="flex space-x-4">
                      <button className="text-gray-600 hidden sm:block">Contact us</button>
                      <button className="text-gray-600 hidden sm:block">Login</button>
                      <button className="text-white bg-orange-500 px-4 py-2 rounded">
                          진단해 주세요!
                      </button>
                  </div>
              </div>
          </header>
    </>
  )
}

export default Header
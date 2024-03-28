import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="bg-gray-800 p-4 w-full">
            <div className="mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">Logo</div>
                <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar


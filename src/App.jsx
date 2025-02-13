import React from 'react'
import Navbar from "./components/01-Nav-Section/Navbar.jsx"
import DemoRoutes from "./utils/DemoRoutes.jsx"

const App = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-[#000c29] text-white'>
        {/* Top - Navbar (Always Visible) */}
        <Navbar />

        {/* Middle - Dynamic Content Changes on Route Change */}
        <DemoRoutes />

        {/* Footer */}
        <h2 className='text-center mb-2 sm:mb-5 lg:my-3 text-sm sm:text-xl lg:text-lg text-gray-400'>&copy; 2025 Designed & Developed by Shiv Bodke</h2>
    </div>
  )
}

export default App
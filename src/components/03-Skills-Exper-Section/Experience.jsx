import React from 'react'

const Experience = () => {

  const workExperData = [
    {
      header:"Seven Mentor Pvt Ltd", 
      role:"MERN Stack Developer",
      Date:"Jan 2025 – Present",
      val:[
        "Built responsive web applications using MERN stack.",
        "Developed dynamic UI/UX with React.js and Tailwind CSS.",
        "Optimized API performance with Node.js and Express.js.",
        "Integrated MongoDB for efficient data storage.",
      ]
    },
    {
      header:"Oasis Infobyte", 
      role:"Front-End Developer",
      Date:"Jan 2023 - Feb 2023",
      val:[
        "Developed responsive web pages using HTML, CSS, and JavaScript.",
        "Implemented interactive UI components for better user experience.",
        "Optimized website performance and ensured cross-browser compatibility.",
        "Worked with modern frameworks to enhance UI responsiveness.",
      ]
    }

  ];

  return (
    <section className='flex flex-col gap-5 sm:gap-8 lg:gap-6 mt-10'>
      <h1 className='text-center text-3xl sm:text-6xl font-semibold'>WORK EXPERIENCE</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          workExperData.map(obj => 
              <div className='bg-gradient-to-r from-pink-300 to-indigo-400 p-3 flex flex-col gap-1 sm:gap-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-2'>
                <h1 className='text-3xl sm:text-5xl font-extrabold text-black'>{obj.header}</h1>
                <h3 className='text-xl sm:text-3xl font-bold'>{obj.role}</h3>
                <h5 className='bg-white text-black w-fit px-3 sm:px-5 py-1 text-base sm:text-xl '>{obj.Date}</h5>
                <ul className="list-disc list-inside text-gray-900">
                    {
                      obj.val.map(p=>
                        <li className='text-base sm:text-xl font-semibold lg:tracking-tighter'>{p}</li>
                      )
                    }
                </ul>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Experience
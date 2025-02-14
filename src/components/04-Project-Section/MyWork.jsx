import React from 'react'
import p2 from "../../components/04-Project-Section/p2.png"
import p3 from "../../components/04-Project-Section/p3.png"

const MyWork = () => {

    const Some_of_My_Work_Data = [
        {
          imgLocation:p2,
          header:"Tech Blog Platform",
          skillsUsed:["React", "Tailwind CSS", "JavaScript", "Context API", "Local Storage"],
          val:[
            "CRUD Functionality – Enables creating, reading, updating, and deleting blog posts.",
            "API Integration – Fetches and displays blog data dynamically from an external API.",
            "Local Storage – Persists blog data using browser Local Storage for offline access."
          ],
          deployLink:"https://dev-ssb.github.io/Blog-App/",
        },
        {
          imgLocation:p3,
          header:"Task Manager App",
          skillsUsed:["React", "Tailwind CSS", "JavaScript", "State Management", "Local Storage"],
          val:[
            "CRUD Functionality – Enables creating, reading, updating, and deleting blog posts.",
            "API Integration – Fetches and displays blog data dynamically from an external API.",
            "Local Storage – Persists blog data using browser Local Storage for offline access."
          ],
          deployLink:"https://dev-ssb.github.io/Todo-App/",
        },
    ];



  return (
    <div className='flex flex-col gap-5 sm:gap-8 lg:gap-6 mt-10'>
        <h1 className='text-center text-3xl sm:text-6xl font-semibold'>SOME OF MY WORK</h1>

      <div className='flex flex-col gap-5'>
        {
          Some_of_My_Work_Data.map(obj=>
            <a target="_blank" rel="noopener noreferrer" href={obj.deployLink} className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-3 border border-amber-200 bg-gradient-to-r from-slate-900 via-slate-700 to-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1'>

            <img src={obj.imgLocation} alt="project img" className='w-full rounded-l-md'/>
  
            <div className='flex flex-col gap-3 sm:gap-6 lg:gap-4'>
              <h2 className='text-2xl sm:text-5xl sm:mt-5 lg:mt-0 lg:text-5xl font-semibold'>{obj.header}</h2>
  
              <div className='flex gap-2 flex-wrap'>
                {
                  obj.skillsUsed.map(skill=>
                    <h6 className='text-black text-medium sm:text-xl lg:text-lg font-semibold bg-gray-100     px-4 lg:px-2 sm:px-4 py-1 rounded-md'>{skill}</h6>
                  )
                }
              </div>
  
              <div className='flex flex-col gap-1 sm:gap-2'>
                <h4 className='text-2xl sm:text-4xl lg:text-2xl font-semibold'>Details</h4>
                <div className='px-4 text-gray-300 flex flex-col gap-2'>
                  {
                    obj.val.map(d=>
                      <p className='leading-tight text-sm sm:text-xl lg:text-base'>{d}</p>
                    )
                  }
                </div>
              </div>
  
            </div>
  
          </a>
          )
        }
      </div>

        
    </div>
  )
}

export default MyWork
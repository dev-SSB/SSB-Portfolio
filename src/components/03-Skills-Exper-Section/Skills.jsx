import React, { useState } from 'react'

const Skills = () => {

  const [showAll, setShowAll] = useState(false);

  const skillsData = [
    {header:"Programming",val:["JavaScript", "Core Java", "C++", "C"]},
    {header:"Web Development",val:["React.js","Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]},
    {header:"Databases",val:["MongoDB","MySQL"]},
    {header:"Tools & Platforms",val:["Git","GitHub","Postman","VS Code","Eclipse"]}
  ];

  const visibleSkills = showAll ? skillsData : skillsData.slice(0, 2);


  return (
    <section className='flex flex-col gap-5 sm:gap-8 lg:gap-6'>
      <h1 className='text-center text-3xl sm:text-6xl font-semibold'>TECHNICAL SKILLS</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {
        visibleSkills.map(obj=>
          
        <div className='flex flex-col w-full py-2 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-400 rounded-md min-h-52 sm:min-h-56 lg:min-h-48 transition delay-150 duration-300 ease-in-out hover:-translate-y-2'>
            <h3 className='p-1 text-center font-semibold text-2xl sm:text-3xl border-b-2'>{obj.header}</h3>
            <div className='flex gap-3 justify-center items-center mt-3 flex-wrap px-2'>
              {
                obj.val.map(val=>
                  <h6 className='text-black text-medium sm:text-xl font-semibold bg-gray-100 px-3 py-1 rounded-md'>{val}</h6>
                )
              }
            </div>
        </div>
        )
      }
      </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-2">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-800 transition duration-300"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

    </section>
  )
}

export default Skills
import React, { useState } from 'react'



const OtherProject = () => {

  const [showAll, setShowAll] = useState(false);

  const Other_Project_Data = [
    {
      header:"Portfolio",
      Info:"",
      githubLink:"",
    },
    {
      header:"Tech Blog Platform",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Blog-App",
    },
    {
      header:"Task Manager App",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Todo-App",
    },
    {
      header:"Dribbble Landing Page",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Dribbble-Responive-Website",
    },
    {
      header:"Premier Landing Clone",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Premier-Model-Management-Responsive-Animation-Website",
    },
    {
      header:"Myntra Landing Page",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Myntra-Clone-Landing-Page-Responsive-Design?tab=readme-ov-file",
    },
    {
      header:"Cotten Weave Landing Page",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Cotten-Weave-Landing-Page-Responsive-Design?tab=readme-ov-file",
    },
    {
      header:"Trendline Landing Page",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Trendline-Landing-Page-Responsive-Design",
    },
    {
      header:"Shop Jacket Landing Page",
      Info:"",
      githubLink:"https://github.com/dev-SSB/-Jacket-Landing-Page-Responsive-Design?tab=readme-ov-file",
    },
    {
      header:"Movie Landing Page",
      Info:"",
      githubLink:"https://github.com/dev-SSB/Movie-Landing-Page-HTML-CSS-Responsive-Design?tab=readme-ov-file",
    },
  ];
  
  // Show only first 4 projects when showAll is false
  const visibleProjects = showAll ? Other_Project_Data : Other_Project_Data.slice(0, 3);


  return (
    <div className='flex flex-col gap-5 sm:gap-8 lg:gap-6'>

        <h1 className='text-center text-3xl sm:text-6xl font-semibold'>PROJECTS</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-3 py-2'>
        {
          visibleProjects.map(obj=>
            <a target="_blank" rel="noopener noreferrer" className='flex flex-col gap-5 bg-[#ffa400] p-3 w-full h-44 transition delay-150 duration-300 ease-in-out hover:-translate-y-2' href={obj.githubLink}>
              <div className='flex justify-between'>
                <i class="ri-folder-6-line text-6xl text-black"></i>
                <i class="ri-github-fill text-5xl text-black"></i>
              </div>
              <h4 className='text-gray-900 font-bold text-xl'>{obj.header}</h4>
            </a>
          )
        }
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-800 transition duration-300"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>
  )
}

export default OtherProject
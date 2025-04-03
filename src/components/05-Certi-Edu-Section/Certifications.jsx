import React from 'react'

const Certifications = () => {

  const certiData = [
    {name:"React JS", comp:"Seven Mentor Pvt.Ltd"},
    {name:"Node JS , Express JS & Mongo DB", comp:"Seven Mentor Pvt.Ltd"},
    {name:"ReactJS", comp:"Addvic Technology"},
    {name:"Java FullStack Development", comp:"FirstBit Solutions, Pune"},
    {name:"AI-ML Training", comp:"Intel Unnati"},
    {name:"Data Structures Using C++", comp:"Udemy"},
  ];
  return (
    <div className='flex flex-col gap-5 sm:gap-8 lg:gap-6 mt-10'> 
        <h1 className='text-center text-3xl sm:text-6xl font-semibold'>CERTIFICATION</h1>

        <div className='flex flex-col justify-center items-center gap-5 sm:gap-4 lg:gap-6 bg-[#ffa400] w-full lg:w-fit mx-auto sm:p-5 lg:p-8'>
          {
            certiData.map(obj=>
              <p className='text-xl sm:text-3xl lg:text-2xl font-semibold border-b-2 w-full text-center'>{obj.name} - <span className='text-fuchsia-600'>{obj.comp}</span></p>
            )
          }
        </div>
    </div>
  )
}

export default Certifications;
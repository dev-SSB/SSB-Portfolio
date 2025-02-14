import React from 'react'

const Education = () => {

  const eduData = [
    {
      header:"Marathwada Mitra Mandal’s College of Engineering",
      branch:"BE - Computer Engineering",
      cgpa:"8.5",
      timeline:"2020-2024",
      city:"Pune, Maharashtra"
    },
    {
      header:"Vasantrao Naik JR College",
      branch:"HSC - Science",
      cgpa:"66%",
      timeline:"2019-2020",
      city:"Nanded, Maharashtra"
    },
    {
      header:"Mahatma Phule High School",
      branch:"SSC - Science",
      cgpa:"88%",
      timeline:"2017-2018",
      city:"Nanded, Maharashtra"
    },
  ];

  return (
    <div className='flex flex-col gap-5 sm:gap-8 lg:gap-6'>
      <h1 className='text-center text-3xl sm:text-6xl font-semibold'>EDUCATION</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-5'>
        {
          eduData.map(obj=>
            <div className='flex flex-col gap-1 shadow-md shadow-amber-200 p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 '>
              <h3 className='sm:text-2xl font-bold'>{obj.header}</h3>
              <p className='text-sm sm:text-lg font-semibold'>{obj.branch}</p>
              <h6 className='text-sm sm:text-base font-medium'>CGPA: {obj.cgpa}</h6>
              <p className='text-sm sm:text-base font-medium'>YEAR: {obj.timeline}</p>
              <p className='text-sm sm:text-base font-medium'>CITY: {obj.city}</p>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Education
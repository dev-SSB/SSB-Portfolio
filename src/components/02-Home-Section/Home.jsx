
import { Link } from 'react-router-dom'

const Home = () => {  

  const pageUrl = [
      {name:"Experience",urlLink:"/SSB-Portfolio/#/experience"},
      {name:"Projects",urlLink:"/SSB-Portfolio/#/projects"},
      {name:"Education",urlLink:"/SSB-Portfolio/#/education"},
      {name:"Contact",urlLink:"/SSB-Portfolio/#/contact"},
  ];

  return (
    <div className='px-5 sm:px-8 lg:px-10 py-3 mt-3 font-mono grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12'>

      <section className='h-full flex flex-col gap-6 sm:gap-5'>

        <div className='flex gap-2 justify-center items-center w-fit px-3 py-1 rounded-md bg-blue-500 hover:bg-purple-400 border-none'>
          <span className='h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full font-bold bg-white'></span>
          <h5 className='font-bold text-base sm:text-lg'>AVAILABLE FOR WORK</h5>
        </div>

        <div className='flex flex-col gap-5 '>
          <h3 className='text-6xl sm:text-8xl lg:text-6xl font-semibold tracking-tighter'>Hi, I Am</h3>
          <h2 className='text-4xl sm:text-7xl lg:text-6xl text-end font-semibold tracking-tighter' >Shivprasad Bodke</h2>

        </div>


        <p className='text-center text-lg sm:text-3xl lg:text-2xl sm:text-center text-gray-100 font-medium'>I am a MERN Stack Developer passionate about building amazing web applications.</p>

        <div className='flex justify-around items-center'>
          <a 
            href=".../public/Shivprasad-Bodke-CV.pdf" 
            download="Shivprasad-Bodke-CV.pdf"
            className='px-8 sm:px-15 py-2 text-xl sm:text-3xl lg:text-2xl font-bold rounded-md text-white border-none bg-linear-65 from-purple-500 to-pink-500 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110'
            target="_blank" 
            rel="noopener noreferrer"
            >
              Download CV
          </a>
        </div>

        <div className='bg-transparent h-52 lg:h-40 grid-cols-1 justify-center items-center shadow-lg shadow-amber-200 lg:p-5 gap-5 sm:gap-8 lg:gap-5 place-content-center'>

        <h1 className='text-2xl sm:text-5xl lg:text-4xl text-amber-400 text-center'>Navigate to Other Pages</h1>

        <div className='grid grid-cols-2 gap-3 mt-5'>
           {
            pageUrl.map((obj,index)=>
              <a key={index} href={obj.urlLink} className='flex gap-3 place-content-center'>
                <h5 className='sm:text-2xl lg:text-xl'>{obj.name}</h5>
                <i className="ri-arrow-right-up-fill sm:text-2xl lg:text-xl"></i>
              </a>
            )
           }
        </div>

        </div>

      </section>

      <section className='flex flex-col gap-3 justify-end'>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-5'>
          <img src="../02-Home-Section/pic1.jpeg" alt="img" className='hidden sm:block rounded-2xl object-cover h-64 sm:h-80 w-full sm:w-1/2' />
          <img src="../02-Home-Section/user1.jpeg" alt="img" className='rounded-2xl object-cover h-64 sm:h-80 w-full sm:w-1/2' />
        </div>

        <div className='flex flex-col sm:flex-row sm:justify-between gap-4 mt-5'>

          <div className='hidden sm:block bg-purple-400 p-5 w-1/2 rounded-md h-40'>

          </div>
        
          <div className='flex px-5 py-2 justify-around items-center w-full sm:w-1/2'>
            <a href='https://www.linkedin.com/in/shivprasad-bodke/' className='px-4 py-1 sm:py-2 lg:py-1 border-none text-3xl sm:text-5xl lg:text-3xl text-amber-300 w-fit rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110  '><i class="ri-linkedin-box-fill"></i></a>
            <a href='https://github.com/dev-SSB' className='px-4 py-1 sm:py-2 lg:py-1 border-none text-3xl sm:text-5xl lg:text-3xl w-fit rounded text-amber-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110  '><i class="ri-github-fill"></i></a>
            <a href="mailto:shivbodke03@gmail.com" target="_blank" rel="noopener noreferrer" className='px-4 py-1 sm:py-2 lg:py-1 border-none text-3xl sm:text-5xl lg:text-3xl w-fit rounded transition delay-150 text-amber-300 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110  '>
              <i class="ri-mail-line"></i>
            </a>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home
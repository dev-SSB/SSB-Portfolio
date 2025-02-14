
import { Link } from 'react-router-dom'
import pic1 from "../../components/02-Home-Section/pic1.jpeg";
import user1 from "../../components/02-Home-Section/user1.jpeg";


const Home = () => {  

  const pageUrl = [
      {name:"Experience",urlLink:"/SSB-Portfolio/#/experience"},
      {name:"Projects",urlLink:"/SSB-Portfolio/#/projects"},
      {name:"Education",urlLink:"/SSB-Portfolio/#/education"},
      {name:"Contact",urlLink:"/SSB-Portfolio/#/contact"},
  ];

  return (
    <div className='px-5 sm:px-8 lg:px-10 py-3 mt-3 font-mono grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12 lg:h-[70vh] lg:place-content-center'>
      <section className='h-full flex flex-col gap-1 sm:gap-4 lg:gap-2 mt-3 sm:mt-5'>

        <h3 className='text-2xl sm:text-3xl lg:text-2xl font-semibold tracking-tighter'>Hello, I Am</h3>
        <h2 className='text-4xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-amber-300' >Shivprasad Bodke</h2>

        <p className='text-lg sm:text-3xl lg:text-2xl  text-gray-400 font-light tracking-tighter sm:-tracking-wider'>I am a MERN Stack Developer passionate about building amazing web applications.</p>

        <div className='flex py-1 items-center w-full mt-4 gap-8 sm:gap-8 lg:gap-6'>
            <a href='https://www.linkedin.com/in/shivprasad-bodke/' className='border-none text-3xl sm:text-5xl lg:text-3xl text-amber-300 w-fit rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110  '><i class="ri-linkedin-box-fill"></i></a>
            <a href='https://github.com/dev-SSB' className='pxborder-none text-3xl sm:text-5xl lg:text-3xl w-fit rounded text-amber-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110  '><i class="ri-github-fill"></i></a>
            <a href="mailto:shivbodke03@gmail.com" target="_blank" rel="noopener noreferrer" className='border-none text-3xl sm:text-5xl lg:text-3xl w-fit rounded transition delay-150 text-amber-300 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110  '><i class="ri-mail-line"></i></a>
        </div>
        
          <a 
            href=".../public/Shivprasad-Bodke-CV.pdf" 
            download="Shivprasad-Bodke-CV.pdf"
            className='mt-5 w-fit px-8 sm:px-15 py-2 text-xl sm:text-3xl lg:text-2xl font-bold rounded-md text-white border-none bg-linear-65 from-purple-500 to-pink-500 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110'
            target="_blank" 
            rel="noopener noreferrer"
            >
              Download CV
          </a>

        <div className='bg-transparent h-40 sm:h-60 lg:h-40 grid-cols-1 justify-center items-center shadow-lg shadow-amber-200 lg:p-5 gap-3 sm:gap-8 lg:gap-5 place-content-center mt-4 sm:mt-8 lg:mt-5 lg:w-1/2 lg:hidden'>

          <h1 className='text-2xl sm:text-5xl lg:text-4xl text-amber-300 text-center'>Navigate to Other Pages</h1>

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
    </div>
  )
}

export default Home
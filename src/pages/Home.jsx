import React from 'react'
import JoinWhatsappBtn from '../components/JoinWhatsappBtn'
import About from '../components/About'
const Home = () => {
  return (
    <div className="flex flex-col ">
        <div className="small-screen big-screen  bg-no-repeat max-xs:h-[250px] bg-center before:absolute before:content-[''] before:z-10 before:w-full before:top-0 before:left-0 before:h-full  before:bg-black/40 before:m-0 max-xs:bg-cover xs:bg-cover    ubuntu-medium  text-white relative min-h-[210px] sm:h-[450px] flex justify-center xs:justify-start py-[40px] items-start px-4 flex-col  w-full ">
            <h1 className='z-10 sm:text-6xl text-3xl'>
                welcome to our squad
            </h1>
            <h1 className='z-10 sm:text-7xl   text-5xl'>
                NEXUS I
            </h1>
             {/* join squad buttton */}
       <JoinWhatsappBtn/>
        </div>
       
   <About/>
       
    </div>

  )
}

export default Home
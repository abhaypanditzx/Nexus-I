import React from 'react'
import logo from "../assets/logo.png"
import JoinWhatsappBtn from '../components/JoinWhatsappBtn'
const Home = () => {
  return (
    <div className="flex flex-col ">
        <div className="small-screen big-screen bg-no-repeat max-xs:h-[300px] bg-center before:absolute before:content-[''] before:z-10 before:w-full before:top-0 before:left-0 before:h-full  before:bg-black/40 before:m-0 max-xs:bg-cover xs:bg-cover    ubuntu-medium  text-white relative min-h-[210px] sm:h-[450px] flex justify-center xs:justify-start py-[40px] items-start px-4 flex-col  w-full ">
            <h1 className='z-10 sm:text-6xl text-3xl'>
                welcome to our squad
            </h1>
            <h1 className='z-10 sm:text-7xl  text-5xl'>
                NEXUS I
            </h1>
             {/* join squad buttton */}
       <JoinWhatsappBtn/>
        </div>
       
        <div className="realtive bg-black min-h-[400px] py-5 flex justify-center items-center px-4 flex-col  w-full ">
            <div className="flex bg-gray-900/60 rounded-md lg:self-start  lg:w-[800px] min-h-[300px] min-w-[320px] p-4 mt-5  flex-col">
                    <div className="flex items-center justify-start gap-x-5 xs:text-2xl ">
                    <img src={logo} className='rounded-full max-w-[40px] max-h-[40px] ' alt="logo" />
                    <h2 className='text-white text-2xl'>about us</h2>
                    </div>
                    <p className='text-white mt-5 ubuntu-light'>
                    <span className="text-yellow-400">NEXUS I</span>  is your go-to destination for Mobile Legends gaming excellence in India. We're a tight-knit group of Indian gamers united by our love for Mobile Legends and a shared goal of dominating the battlefield. Join our WhatsApp group today to connect with fellow gamers, strategize, and forge new friendships as we conquer the virtual realm together. Become a legend with India Legends Mobile Squad!
                    </p>
            </div>
        </div>
        <div className="bg-[#2B2B2B] min-h-[400px] min-w-full">
                {/* ourMission */}
                <div className="ourMission  p-4 mt-10 flex flex-col justify-center items-center">
                    <h2 className="text-2xl text-gray-100 uppercase  ">our mission</h2>
                    <p className='text-sm text-gray-200  max-w-[800px] text-center'>
                    Our mission is to foster camaraderie, sportsmanship, and excellence in competitive gaming. Through teamwork, dedication, and strategic prowess, we aim to represent our squad with integrity and determination in every tournament and gaming endeavor we undertake. We aspire to create a supportive community where members can grow both individually and collectively, pushing the boundaries of our abilities while enjoying the thrill of competition.
                    </p>
                </div>
                {/* ourVision */}
                <div className="ourVision p-4 mt-10 w-full flex flex-col justify-center items-center ">
                    <h2 className="text-2xl text-gray-100 uppercase  ">our vision</h2>
                    <p className='text-sm text-gray-200   max-w-[800px] text-center'>

                    Our vision is to become a recognized force in the competitive gaming scene, known for our skill, professionalism, and unwavering commitment to fair play. We envision a future where our squad stands as a symbol of excellence, inspiring others to pursue their gaming passions with diligence and passion. By continuously refining our strategies, honing our skills, and expanding our horizons, we strive to reach the pinnacle of success in tournaments worldwide, leaving a lasting legacy in the gaming community                    </p>
                </div>
        </div>
       
    </div>

  )
}

export default Home
import React from 'react'
import logo from "../assets/logo.png"
const About = () => {
  return (
    <>
             <div className="realtive bg-black min-h-[400px] py-5 flex justify-center items-center px-4 flex-col  w-full ">
            <div className="flex bg-gray-40 rounded-md lg:self-start  lg:w-[800px] min-h-[300px] min-w-[320px] p-4 mt-5  flex-col">
                    <h2 className='text-white text-2xl'>About us</h2>
                    <p className='text-white mt-2 ubuntu-light'>
                    <span className="text-yellow-400 font-medium">NEXUS I</span>  is your go-to destination for Mobile Legends gaming excellence in India. We're a tight-knit group of Indian gamers united by our love for Mobile Legends and a shared goal of dominating the battlefield. Join our WhatsApp group today to connect with fellow gamers, strategize, and forge new friendships as we conquer the virtual realm together. Become a legend with India Legends Mobile Squad!
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
    </>
  )
}

export default About
import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import gif from "../assets/karina.gif"
const JoinWhatsappBtn = () => {
  return (
    <div className='absolute bottom-0 left-[50%] translate-x-[-50%] z-30'>
           <a href='https://chat.whatsapp.com/Ek4Z7soBFRoK43Kp18Ccf3' className="min-w-[150px] p-2 order-1 text-gray-800 relative   hover:text-gray-900 hover:scale-95 flex items-center justify-around min-h-[30px] bg-white/70 backdrop-blur-sm   w-fit  xs:h-[50px] bottom-[-20px] left-[50%] translate-x-[-50%] ">
           <img src={gif} alt="" className='max-w-[100px] absolute bottom-[21.5px] max-xs:bottom-[11.5px] order-3 ' />

            <RiWhatsappFill className='rounded-full xs:text-2xl text-green-500 border-white   bg-white max-xs:text-xl'  />
            <span className='font-medium'>join whatsapp</span>
          </a>
    </div>
  )
}

export default JoinWhatsappBtn
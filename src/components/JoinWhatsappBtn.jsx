import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";

const JoinWhatsappBtn = () => {
  return (
    <div>
           <a href='https://chat.whatsapp.com/Ek4Z7soBFRoK43Kp18Ccf3' className="min-w-[150px] p-2 z-20 text-gray-800  hover:text-gray-900 hover:scale-95 flex items-center justify-around min-h-[30px] bg-white/70 backdrop-blur-sm absolute  w-fit  xs:h-[50px] bottom-[-20px] left-[50%] translate-x-[-50%] ">
            <RiWhatsappFill className='rounded-full xs:text-2xl text-green-500 border-white  bg-white max-xs:text-xl'  />
            <span className='font-medium'>join whatsapp</span>
          </a>
    </div>
  )
}

export default JoinWhatsappBtn
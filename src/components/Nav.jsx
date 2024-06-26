import React from 'react'
import { IoMenu , IoLogoXbox } from "react-icons/io5";
const Nav = () => {
  return (
    <div className='min-h-fit sticky top-0 z-50 bg-black min-w-full p-4 max-w-full'>
      <ul className="flex gap-x-[100px]  max-xs:px-0 max-xs:gap-x-[30px] font-sans max-xs:text-sm xs:text-base px-10 items-center justify-end w-full ">
        <li onClick={()=>{window.scrollTo(0,0)}} className='text-white  hover:text-gray-200 cursor-pointer  '>
          Home
        </li>
        <li  onClick={()=>{window.scrollTo(0,450)}} className='text-white hover:text-gray-200  cursor-pointer '>
          About us
        </li>
        <li  onClick={()=>{window.scrollTo(0,1000)}} className='text-white hover:text-gray-200  cursor-pointer '>
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Nav
import React from 'react'
import { IoMenu , IoLogoXbox } from "react-icons/io5";
const Nav = () => {
  return (
    <div className='min-h-fit sticky top-0 z-50 bg-black min-w-full p-4 max-w-full'>
      <ul className="flex gap-x-[100px] max-xs:px-0 max-xs:gap-x-[30px] px-10 items-center justify-end w-full ">
        <li onClick={()=>{window.scrollTo(0,0)}} className='text-white  hover:text-gray-200 cursor-pointer text-base ububtu-normal'>
          Home
        </li>
        <li  onClick={()=>{window.scrollTo(0,550)}} className='text-white hover:text-gray-200 text-base cursor-pointer ububtu-normal'>
          About us
        </li>
        <li  onClick={()=>{window.scrollTo(0,1000)}} className='text-white hover:text-gray-200 text-base cursor-pointer ububtu-normal'>
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Nav
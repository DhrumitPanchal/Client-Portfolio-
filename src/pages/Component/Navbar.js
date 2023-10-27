import React,{useState} from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars,FaXmark } from "react-icons/fa6";

function Navebar() {
  
const [openmenu,setOpenmenu] = useState(false)

  return (
  
   <div className='px-[2rem] py-[.4rem] absolute flex justify-between items-center z-50 bg-white text-[#041A17] w-full shadow-[0_5px_10px_rgba(0,0,0,0.2)]'>
      <h2 className='logo cursor-pointer text-[1.8rem] font-bold '><span className='text-[#1c31b5]'>V</span>ishwas</h2>
      <ul className='flex justify-center items-center gap-[1.2rem] text-[1.2rem] font-medium capitalize'>
        <a href='#Home' className='cursor-pointer hover:text-[#1c31b5] transition-colors duration-300'>home</a>
        <a href='#About' className='cursor-pointer hover:text-[#1c31b5] transition-colors duration-300'>about</a>
        <a href='#Services' className='cursor-pointer hover:text-[#1c31b5] transition-colors duration-300'>services</a>
        <a href='#' className='cursor-pointer hover:text-[#1c31b5] transition-colors duration-300'>work</a>
        <a href='#' className='cursor-pointer hover:text-[#1c31b5] transition-colors duration-300'>contect</a>
      </ul>
   </div>
  )}
export default Navebar;








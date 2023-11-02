import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

function Navebar() {
  const [openmenu, setOpenmenu] = useState(false);

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="px-[2rem] py-[.8rem] max-sm:py-[.8rem] absolute flex justify-between items-center z-50 bg-white text-[#041A17] w-full shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
      >
        <h2 className="logo cursor-pointer leading-[1.6rem] text-[1.8rem] font-bold tracking-[.2rem]">
          <span className="text-[#1c31b5]">R</span>akesh
        </h2>
        <ul className="max-sm:hidden flex  justify-center items-center gap-[1.2rem] text-[1.2rem] font-semibold capitalize">
          <a
            href="#Home"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            home
          </a>
          <a
            href="#About"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            about
          </a>
          <a
            href="#Services"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            services
          </a>
          <a
            href="#Work"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            work
          </a>
          <a
            href="#Contect"
            className="cursor-pointe0r hover:text-[#1c31b5] transition-colors duration-300"
          >
            contect
          </a>
        </ul>
        <FaBars
          onClick={() => setOpenmenu(!openmenu)}
          className="max-sm:inline-block hidden text-[2rem] text-[#1c31b5]"
        />
      </div>

      <div
        className={` ${
          openmenu ? "left-0" : "-left-full"
        } transition-all duration-500 hidden z-50 fixed top-0  max-sm:flex justify-center items-center bg-white h-screen w-full `}
      >
        <ul className="h-full w-full relative flex flex-col  justify-center items-center gap-[1rem] text-[1.6rem] font-semibold capitalize">
          <FaTimes
            onClick={() => setOpenmenu(!openmenu)}
            className="absolute text-[2rem] top-[2rem] right-[2rem] text-[#1c31b5]"
          />
          <h2 className="absolute top-[2rem] logo cursor-pointer text-[2rem] font-bold tracking-[.2rem]">
            <span className="text-[#1c31b5]">V</span>ishwas
          </h2>

          <a
            href="#Home"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            home
          </a>
          <a
            href="#About"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            about
          </a>
          <a
            href="#Services"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            services
          </a>
          <a
            href="#Work"
            className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300"
          >
            work
          </a>
          <a
            href="#Contect"
            className="cursor-pointe0r hover:text-[#1c31b5] transition-colors duration-300"
          >
            contect
          </a>
        </ul>
      </div>
    </>
  );
}
export default Navebar;

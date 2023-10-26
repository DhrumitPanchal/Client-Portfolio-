import React from "react";
import Navebar from "./Component/Navbar";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";

function LandingPage() {
  return (
    <>
      <Navebar />

      <section
        id="Home"
        className="overflow-hidden relative  h-screen max-sm:h-full w-full text-[#041A17] bg-slate-300 "
      >
        <img
          className="z-0 absolute top-0 left-0  w-full"
          src="./Images/BG Image Light.svg"
          alt=""
        />

        <div className="z-20 absolute left-0 top-0 h-screen flex items-center ">
          <div className="flex flex-col justify-center items-center gap-[.8rem] bg-white rounded-br-[.6rem] rounded-tr-[.6rem] text-[1.8rem] p-[.8rem] shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
            <a href="#">
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a href="#">
              <FaGithub className="cursor-pointer" />
            </a>
            <a href="#">
              <FaInstagram className="cursor-pointer" />
            </a>
            <a href="#">
              <FaFacebook className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="w-full h-full pt-[4rem] absolute flex justify-center items-center flex-col gap-[.6rem] ">
          <h2 className=" text-[2.4rem] font-bold uppercase">HELLO THERE,</h2>
          <h2 className="text-[2.4rem] font-bold  uppercase">
            I'M VISHWAS BHAMBHANI
          </h2>
          <p className="mt-[.6rem] w-[46rem] text-[1.2rem] text-center  ">
            A Frontend Web Devloper building the Fontend of Websites and
            Websites and an App Developer Building the cross pletform Mobile App
            that leads to the success of the overall product
          </p>
          <button className="mt-[.6rem] px-[1rem] py-[.6rem] rounded-[.4rem] text-[1rem]  font-semibold text-white bg-[#1c31b5]">
            KNOW ABOUT ME
          </button>
          <a
            href="#About"
            className="mt-[1.4rem] flex justify-center items-center h-[2.5rem] w-[2.5rem] rounded-[.4rem] bg-[#1c31b5]/30 text-[1.8rem] text-[#1c31b5]"
          >
            <GoArrowDown />
          </a>
        </div>
      </section>
     
    </>
  );
}

export default LandingPage;

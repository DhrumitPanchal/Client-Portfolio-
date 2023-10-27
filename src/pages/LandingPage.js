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
      <section
        id="About"
        className="px-[4rem]  py-[2rem] flex  items-center flex-col gap-[.6rem] h-screen max-sm:h-full w-full text-black"
      >
        <div className="flex flex-col items-center">
          <h2 className="title text-[2rem] font-semibold uppercase">
            ABOUT ME
          </h2>
          <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
          <p className="mt-[.8rem] w-[50rem] text-[1.2rem] text-center  ">
            Here you will find more information about me, what i do,and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>
        <div className="mt-[6rem] h-full w-full flex justify-between items-center gap-[6rem]">
          <div className="h-full w-3/5 px-[2rem]">
            <div className="h-full flex flex-col gap-[1rem] pr-[4rem]">
              <div>
                <h2 className="title text-[1.7rem] font-semibold uppercase">
                  Something about me
                </h2>
                <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
              </div>
              <p className="mt-[1rem] text-[1.1rem] ">
                I'm a <span className="font-semibold">Frontend Web Developer</span>  building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some Of my work in the <span className="font-semibold">Projects</span> section.
              </p>
              <p className="mt-[rem] text-[1.1rem] ">
                {" "}
                also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my <span className="font-semibold">LinkedIn</span> where I post useful content related to Web
                Development and Programming
              </p>
              <p className="mt-[rem] text-[1.1rem] ">
                I'm open to <span className="font-semibold">Job</span> opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to <span className="font-semibold">contact</span> me.
              </p>
              <button className="uppercase mt-[.6rem] flex justify-center items-center  h-[2.5rem] w-[7rem] rounded-[.4rem] text-[1rem]  font-semibold text-white bg-[#1c31b5]">
                Contact
              </button>
            </div>
          </div>

          <div className="h-full w-2/5">
            <div className="flex flex-col ">
              <h2 className="title text-[1.7rem] font-semibold uppercase">
                Skills that i own
              </h2>
              <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
            </div>
            <div className="mt-[1.6rem] h-[22rem] w-[28rem] grid grid-rows-6 grid-cols-9 gap-4">
                <div  className="flex justify-center items-center text-[2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-3 row-span-2 text-[#666666] font-medium">HTML</div>
                <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-2 text-[#666666] font-medium">CSS</div>
                <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-2 text-[#666666] font-medium">SQL</div>
                <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] row-span-2 col-span-2 text-[#666666] font-medium ho">S <br />E <br />O</div>
                <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-4 text-[#666666] font-medium">JavaScript</div>
                <div className="flex justify-center items-center text-[2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-4 row-span-2 text-[#666666] font-medium">Kotlin</div>
                <div className="flex justify-center items-center text-[1.3rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-3 row-span-2 text-center text-[#666666] font-medium">Responsive <br />Design</div>
                <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem]  row-span-2 col-span-2 text-center text-[#666666] font-extralight">Git <br />&<br /> GitHub</div>
                <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-2 text-[#666666] font-extralight">SASS</div>
                <div className="flex justify-center items-center text-[1.6rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-3 text-[#666666] font-medium">Java</div>
                <div className="flex justify-center items-center text-[1.6rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-4 text-[#666666] font-medium">Node</div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default LandingPage;

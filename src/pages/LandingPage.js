import React, { useEffect, useState } from "react";
import Navebar from "./Component/Navbar";
import Testislider from "./Component/TestiSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaDesktop,
  FaAppStore,
  FaPaperPlane,
} from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";

import { GoArrowDown } from "react-icons/go";

function LandingPage() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Massage: "",
  });
  console.log(formData);
  const hendleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const resetForm = () => {
    setFormData({ Name: "", Email: "", Subject: "", Massage: "" });
  };

  const [bgimg, setBgimg] = useState("./Images/BG-desktop.jpg");
  window.addEventListener("resize", () => {
    window.innerWidth < 450
      ? setBgimg("./Images/BG-mobile.jpg")
      : setBgimg("./Images/BG-desktop.jpg");
  });
  useEffect(() => {
    window.innerWidth < 500
      ? setBgimg("./Images/BG-mobile.jpg")
      : setBgimg("./Images/BG-desktop.jpg");
    AOS.init();
  }, []);

  return (
    <>
      <Navebar />

      <section
        id="Home"
        className="overflow-hidden relative  h-screen  w-full text-[#041A17]"
      >
        <img className="z-0 absolute top-0 left-0  w-full" src={bgimg} alt="" />

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="z-20 max-sm:hidden absolute left-0 top-0 h-screen flex items-center "
        >
          <div className="flex flex-col justify-center items-center gap-[.8rem] bg-white rounded-br-[.6rem] rounded-tr-[.6rem] text-[1.8rem] p-[.8rem] shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
            <a href="https://www.linkedin.com/in/rakesh-meena-751415299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300 " />
            </a>
            <a href="https://github.com/vardaan797">
              <FaGithub className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300 " />
            </a>
            <a href="https://instagram.com/rakesx.m?igshid=OGQ5ZDc2ODk2ZA==">
              <FaInstagram className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300 " />
            </a>
            <a href="https://www.facebook.com/meena.rakesh.7568?mibextid=ZbWKwL">
              <FaFacebook className="cursor-pointer hover:text-[#1c31b5] transition-colors duration-300 " />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-full  pt-[4rem] absolute flex justify-center items-center flex-col gap-[.6rem] "
        >
          <h2 className=" text-[2.4rem] max-sm:text-[2rem] font-bold uppercase tracking-[.1rem]">
            HELLO THERE,
          </h2>
          <h2 className="text-[2.4rem] max-sm:text-[2.1rem] font-bold  uppercase tracking-[.1rem]">
            I'M RAKESH MEENA
          </h2>
          <p className="mt-[.6rem] max-sm:px-[2rem] w-[46rem] max-sm:w-full text-[1.2rem] text-center  ">
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
        className="overflow-hidden px-[4rem] max-sm:px-[2rem]  py-[2rem] flex  items-center flex-col gap-[.6rem] h-screen max-sm:h-fit w-full text-black"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col items-center"
        >
          <h2 className="title text-[2rem] font-semibold uppercase">
            ABOUT ME
          </h2>
          <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
          <p className="mt-[.8rem] w-[50rem] max-sm:w-full text-[1.2rem] text-center  ">
            Here you will find more information about me, what i do,and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>
        <div className="mt-[6rem] h-full w-full flex justify-between items-center max-sm:flex-col gap-[6rem]">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="h-full w-3/5 max-sm:w-full px-[2rem] max-sm:px-0"
          >
            <div className="h-full flex flex-col gap-[1rem] pr-[4rem]">
              <div>
                <h2 className="title text-[1.7rem] font-semibold uppercase">
                  Something about me
                </h2>
                <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
              </div>
              <p className="mt-[1rem] text-[1.1rem] ">
                I'm a{" "}
                <span className="font-semibold">Frontend Web Developer</span>{" "}
                building the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some Of
                my work in the <span className="font-semibold">Projects</span>{" "}
                section.
              </p>
              <p className="mt-[rem] text-[1.1rem] ">
                {" "}
                also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my <span className="font-semibold">LinkedIn</span> where I
                post useful content related to Web Development and Programming
              </p>
              <p className="mt-[rem] text-[1.1rem] ">
                I'm open to <span className="font-semibold">Job</span>{" "}
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don't hesitate to{" "}
                <span className="font-semibold">contact</span> me.
              </p>
              <button className="uppercase mt-[.6rem] flex justify-center items-center  h-[2.5rem] w-[7rem] rounded-[.4rem] text-[1rem]  font-semibold text-white bg-[#1c31b5]">
                Contact
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="h-full w-2/5 max-sm:w-full"
          >
            <div className="flex flex-col ">
              <h2 className="title text-[1.7rem] font-semibold uppercase">
                Skills that i own
              </h2>
              <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
            </div>
            <div className="mt-[1.6rem] max-sm:mx-auto h-[22rem] w-[28rem] grid grid-rows-6 grid-cols-9 gap-4">
              <div className="flex justify-center items-center text-[2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-3 row-span-2 text-[#666666] font-medium">
                HTML
              </div>
              <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-2 text-[#666666] font-medium">
                CSS
              </div>
              <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-2 text-[#666666] font-medium">
                SQL
              </div>
              <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] row-span-2 col-span-2 text-[#666666] font-medium ho">
                S <br />E <br />O
              </div>
              <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-4 text-[#666666] font-medium">
                JavaScript
              </div>
              <div className="flex justify-center items-center text-[2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-4 row-span-2 text-[#666666] font-medium">
                Kotlin
              </div>
              <div className="flex justify-center items-center text-[1.3rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-3 row-span-2 text-center text-[#666666] font-medium">
                Responsive <br />
                Design
              </div>
              <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem]  row-span-2 col-span-2 text-center text-[#666666] font-extralight">
                Git <br />&<br /> GitHub
              </div>
              <div className="flex justify-center items-center text-[1.2rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-2 text-[#666666] font-extralight">
                SASS
              </div>
              <div className="flex justify-center items-center text-[1.6rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-3 text-[#666666] font-medium">
                Java
              </div>
              <div className="flex justify-center items-center text-[1.6rem] h-full w-full bg-[#e7e7e7] rounded-[.5rem] col-span-4 text-[#666666] font-medium">
                Node
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Services"
        className="px-[4rem] max-sm:px-[2rem] py-[2rem] flex  items-center flex-col gap-[.6rem] h-screen max-sm:h-fit w-full text-black"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col items-center"
        >
          <h2 className="title text-[2rem] font-semibold uppercase">
            SERVICES{" "}
          </h2>
          <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
          <p className="mt-[.8rem] w-[50rem] max-sm:w-full text-[1.2rem] text-center  ">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="px-[4rem] pt-[4rem] flex justify-between max-sm:flex-col gap-[6rem] max-sm:gap-[3rem] h-[31rem] max-sm:h-fit w-full "
        >
          <div className="p-[1rem] flex justify-center gap-[1.2rem] items-center flex-col h-full max-sm:h-[24rem] w-full bg-white rounded-[.8rem] transition-all duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_10px_rgba(28,49,181,.6)]">
            <FaAppStore className="text-[8rem] " />
            <div className="text-center">
              <h2 className="mb-[1rem] text-[1.8rem] font-semibold">
                App Deve opment
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt doloremque fugiat labore. Libero, soluta dolorum.
              </p>
            </div>
          </div>
          <div className="p-[1rem] flex justify-center gap-[1.2rem] items-center flex-col h-full max-sm:h-[24rem] w-full bg-white rounded-[.8rem] transition-all duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_10px_rgba(28,49,181,.6)]">
            <FaDesktop className="text-[8rem] " />
            <div className="text-center">
              <h2 className="mb-[1rem] text-[1.8rem] font-semibold">
                Web Development
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt doloremque fugiat labore. Libero, soluta dolorum.
              </p>
            </div>
          </div>
          <div className="p-[1rem] flex justify-center gap-[1.2rem] items-center flex-col h-full max-sm:h-[24rem] w-full bg-white rounded-[.8rem] transition-all duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_10px_rgba(28,49,181,.6)]">
            <TbAugmentedReality className="text-[8rem] " />
            <div className="text-center">
              <h2 className="mb-[1rem] text-[1.8rem] font-semibold">
                App Tester
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt doloremque fugiat labore. Libero, soluta dolorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Work"
        className="overflow-hidden max-sm:px-[rem] max-sm:mt-[4rem] py-[2rem] flex  items-center flex-col gap-[.6rem] h-fit max-sm:h-fit w-full text-black bg-[#f6f6f6]"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col items-center"
        >
          <h2 className="title text-[2rem] font-semibold uppercase">
            PROJECTS
          </h2>
          <div className=" mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
          <p className="max-sm:px-[2rem] mt-[.8rem] w-[50rem] max-sm:w-full text-[1.2rem] text-center  ">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        <div className=" w-full">
          <div className="-mt-[8rem] max-sm:-mt-[14rem] pr-[10rem] max-sm:pr-0 relative flex  items-center justify-between max-sm:flex-col gap-[1rem] h-fit w-full ">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="-ml-[18rem] h-fit   "
            >
              <img className="h-[60rem]" src="./Images/Group 28.svg" alt="" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="max-sm:px-[2rem] h-full flex flex-col justify-center gap-[2rem]"
            >
              <h2 className="text-[2.2rem] font-semibold">
                <span className="text-[#1c31b5]">M</span>ain Kalyan
              </h2>
              <p className="w-[35rem] max-sm:w-full  text-[1.3rem] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Iure et ex
                cum vitae, voluptatem tempora obcaecati libero, temporibus
                reprehenderit molestias pariatur voluptatibus eligendi vel
                earum.
              </p>
              <a
                href="#"
                className="mt-[.6rem] flex justify-center items-center h-[2.4rem] w-[7rem]  rounded-[.4rem] text-[1rem] uppercase font-medium text-white bg-[#1c31b5]"
              >
                view live
              </a>
            </div>
          </div>

          <div className=" overflow-hidden pl-[10rem] max-sm:pl-0 relative flex flex-row-reverse items-center justify-between max-sm:flex-col gap-[1rem] h-fit w-full ">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="-mr-[12rem] h-fit   "
            >
              <img className=" h-[60rem]" src="./Images/Group 27.svg" alt="" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="max-sm:-mt-[8rem] max-sm:px-[2rem] h-full flex flex-col justify-center gap-[2rem]"
            >
              <h2 className="text-[2.2rem] font-semibold">
                <span className="text-[#1c31b5]">D</span>evam
              </h2>
              <p className="w-[35rem] max-sm:w-full  text-[1.3rem] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Iure et ex
                cum vitae, voluptatem tempora obcaecati libero, temporibus
                reprehenderit molestias pariatur voluptatibus eligendi vel
                earum.
              </p>
              <a
                href="#"
                className="mt-[.6rem] flex justify-center items-center h-[2.4rem] w-[7rem]  rounded-[.4rem] text-[1rem] uppercase font-medium text-white bg-[#1c31b5]"
              >
                view live
              </a>
            </div>
          </div>

          <div className="-mt-[10rem] max-sm:mt-0 pr-[10rem] max-sm:pr-0 relative flex items-center justify-between max-sm:flex-col gap-[1rem] h-fit w-full ">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="-ml-[18rem] h-fit   "
            >
              <img className=" h-[60rem]" src="./Images/Group 26.svg" alt="" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="max-sm:px-[2rem] h-full flex flex-col justify-center gap-[2rem]"
            >
              <h2 className="text-[2.2rem] font-semibold">
                <span className="text-[#1c31b5]">A</span>nytime Matka
              </h2>
              <p className="w-[35rem] max-sm:w-full  text-[1.3rem] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Iure et ex
                cum vitae, voluptatem tempora obcaecati libero, temporibus
                reprehenderit molestias pariatur voluptatibus eligendi vel
                earum.
              </p>
              <a
                href="#"
                className="mt-[.6rem] flex justify-center items-center h-[2.4rem] w-[7rem]  rounded-[.4rem] text-[1rem] uppercase font-medium text-white bg-[#1c31b5]"
              >
                view live
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className="px-[4rem] py-[2rem] flex items-center flex-col gap-[4rem] h-screen max-sm:h-full w-full  text-black"
      >
        <div className="flex flex-col items-center">
          <h2 className="title text-[2rem] font-semibold uppercase">
            TESTIMONIALS
          </h2>
          <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
        </div>
        <Testislider />
      </section>

      <section
        id="Contect"
        className="max-sm:mt-[4rem] px-[4rem] max-sm:px-[2rem]  py-[2rem] flex  items-center flex-col gap-[4rem] h-screen max-sm:h-full w-full text-black"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col items-center"
        >
          <h2 className="title text-[2rem] font-semibold uppercase">Contect</h2>
          <div className="mt-[.2rem] h-[.4rem] w-[8rem] bg-[#1c31b5] rounded-[.2rem]"></div>
        </div>

        <div className="flex flex-col items-center gap-[3rem] w-full">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex justify-center flex-col items-center gap-[.1rem]"
          >
            <h2 className={`text-[1.6rem] font-bold capitalize text-[#1c31b5]`}>
              Send Me An Message
            </h2>
            <h4 className="text-[1rem] font-semibold">
              I’M VERY RESPONSIVE TO MESSAGES
            </h4>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex w-[60rem] max-sm:w-full"
          >
            <form
              action="https://formspree.io/f/xzblwdgb"
              method="POST"
              name="submit-to-google-sheet"
              className="flex flex-col justify-center  gap-[1rem] w-full  max-sm:px-0 text-[1.2rem]"
            >
              <div className="flex max-sm:flex-col w-full gap-[1.5rem] max-sm:gap-[1rem] ">
                <input
                  name="Name"
                  type="text"
                  placeholder="Name"
                  required
                  onChange={(e) => hendleInput(e)}
                  value={formData.Name}
                  autoComplete="off"
                  className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[2px] border-slate-300 focus:border-[#1c31b5]`}
                />
                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => hendleInput(e)}
                  value={formData.Email}
                  autoComplete="off"
                  className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[2px] border-slate-300 focus:border-[#1c31b5]`}
                />
              </div>
              <input
                name="Subject"
                type="text"
                placeholder="Subject"
                required
                onChange={(e) => hendleInput(e)}
                value={formData.Subject}
                autoComplete="off"
                className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[2px] border-slate-300 focus:border-[#1c31b5]`}
              />
              <textarea
                name="Massage"
                cols="30"
                rows="10"
                placeholder="Message"
                required
                onChange={(e) => hendleInput(e)}
                value={formData.Massage}
                autoComplete="off"
                className={`h-[9rem] w-full px-[1rem] pt-[.6rem] rounded-[.5rem] border-[2px] border-slate-300 focus:border-[#1c31b5]`}
              />
              <div className=" h-fit flex justify-between items-center">
                <button
                  type="submit"
                  onClick={() => {
                    resetForm();
                  }}
                  className={` flex justify-center items-center gap-[1rem] w-[12rem] h-[3.2rem] capitalize text-[1.1rem] rounded-[1rem] font-medium bg-[#1c31b5]  text-[#fdf9ff] `}
                >
                  <FaPaperPlane className="text-[1.5rem]" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="py-[1rem] flex justify-center items-center text-white bg-[#1c31b5]">
         Copyright © 2023 by Dhrumit | All Rights Resereved
      </footer>
    </>
  );
}

export default LandingPage;

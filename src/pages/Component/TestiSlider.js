import React, { Component } from "react";
import Slider from "react-slick";
// import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className="hidden" />;
}

export default class PreviousNextMethods extends Component {
  next = this.next.bind(this);
  previous = this.previous.bind(this);
  state = {
    carcoun: window.innerWidth >= 640 ? 3 : 1,
    cardots: window.innerWidth < 330 ? false : true,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  //   handleResize = () => {
  //     this.setState({ carcoun: window.innerWidth >= 640 ? 3 : 1 });
  //     this.setState({cardots: window.innerWidth < 330 ? false : true, });
  //   };

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 6000,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="max-sm:mt-[3rem] h-full   mx-auto relative flex items-center justify-center "
        >
          <Slider
            ref={(c) => (this.slider = c)}
            {...settings}
            className="mx-auto max-sm:w-[28rem] w-[30rem]"
          >
            <div className="max-sm:mx-0 max-sm:px-[1rem] mx-[3rem] mb-[3rem]  h-full  flex flex-col justify-center items-center gap-[1.6rem] ">
              <div className="h-[4rem]"></div>
              <div
                className={` flex flex-col items-center gap-[1rem] h-[26rem] w-[24rem] max-sm:w-[26rem] p-[2rem]  rounded-[.8rem] border-[1px] bg-white transition-all duration-500 shadow-[0_5px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_10px_rgba(28,49,181,.6)]`}
              >
                <div className="overflow-hidden -mt-[5rem] h-[7.5rem] w-[7.5rem] rounded-full bg-slate-200 border-[.4rem] border-black">
                  <img
                    className="h-full w-full"
                    src="./Images/persone.png"
                    alt=""
                  />
                </div>
                <h2 className="mt-[1rem] text-[1.6rem]">Markus Dwenn</h2>
                <p className="mt-[1rem] text-[1.2rem] text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti dolores quam dolor? At, nam. Aut possimus voluptates
                  numquam iure excepturi.
                </p>
              </div>
            </div>
            {/* ------------------------------------------------- */}

            <div className="max-sm:mx-0 max-sm:px-[1rem] mx-[3rem] h-full flex flex-col justify-center items-center gap-[1.6rem] ">
              <div className="h-[4rem]"></div>
              <div
                className={`flex flex-col items-center gap-[1rem] h-[26rem] w-[24rem] max-sm:w-[26rem] p-[2rem]  rounded-[.8rem] border-[1px] bg-white transition-all duration-500 shadow-[0_5px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_5px_10px_rgba(28,49,181,.6)]`}
              >
                <div className="overflow-hidden -mt-[5rem] h-[7.5rem] w-[7.5rem] rounded-full bg-slate-200 border-[.4rem] border-black">
                  <img
                    className="h-full w-full"
                    src="./Images/persone.png"
                    alt=""
                  />
                </div>{" "}
                <h2 className="mt-[1rem] text-[1.6rem]">Markus Dwenn</h2>
                <p className="mt-[1rem] text-[1.2rem] text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti dolores quam dolor? At, nam. Aut possimus voluptates
                  numquam iure excepturi.
                </p>
              </div>
            </div>

            {/* ------------------------------------------------- */}
          </Slider>
          <div className="absolute max-sm:hidden flex justify-between items-center w-[60rem] -translate-y-[1rem] text-[1.5rem] text-[#fdf9ff]">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              onClick={this.previous}
              className={`cursor-pointer flex justify-center items-center h-[2.8rem] w-[4.5rem] bg-[#1c31b5] rounded-[1.5rem] `}
            >
              <FaArrowLeft />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              onClick={this.next}
              className={`cursor-pointer flex justify-center items-center h-[2.8rem] w-[4.5rem] bg-[#1c31b5] rounded-[1.5rem] `}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      </>
    );
  }
}

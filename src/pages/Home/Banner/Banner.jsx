import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showArrows={true}>
      <div className="relative">
        <img src={banner1} />
        <div className="flex gap-4 absolute bottom-20 left-17 ">
          <div className="flex items-center ">
            <button className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden tracking-tighter bg-primary text-secondary rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span className="relative  font-semibold">Track Your Parcel</span>
            </button>
            <button className="bg-secondary text-primary p-2 rounded-full -rotate-45">
              <FaArrowRight className="" />
            </button>
          </div>
          <button className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden tracking-tighter btn btn-outline rounded-lg group border-gray-300">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  "></span>
            <span className="relative  font-semibold">Be A Rider</span>
          </button>
        </div>
      </div>
      <div>
        <img src={banner2} />
        <div className="flex gap-4 absolute bottom-20 left-17 ">
          <div className="flex items-center ">
            <button className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden tracking-tighter bg-primary text-secondary rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  "></span>
              <span className="relative  font-semibold">Track Your Parcel</span>
            </button>
            <button className="bg-secondary text-primary p-2 rounded-full -rotate-45">
              <FaArrowRight className="" />
            </button>
          </div>
          <button className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden tracking-tighter btn btn-outline rounded-lg group border-gray-300">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  "></span>
            <span className="relative  font-semibold">Be A Rider</span>
          </button>
        </div>
      </div>
      <div>
        <img src={banner3} />

        <div className="flex gap-4 absolute bottom-20 left-17 ">
          <div className="flex items-center ">
            <button className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden tracking-tighter bg-primary text-secondary rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  "></span>
              <span className="relative  font-semibold">Track Your Parcel</span>
            </button>
            <button className="bg-secondary text-primary p-2 rounded-full -rotate-45">
              <FaArrowRight className="" />
            </button>
          </div>
          <button className="relative inline-flex items-center justify-center px-8 py-2.5 hover:text-white overflow-hidden tracking-tighter btn btn-outline rounded-lg group border-gray-300">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary  rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  "></span>
            <span className="relative  font-semibold">Be A Rider</span>
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;

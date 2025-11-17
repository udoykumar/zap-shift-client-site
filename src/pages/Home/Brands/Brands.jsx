import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
const brandLogos = [
  amazon,
  casio,
  moonstar,
  randstad,
  star,
  starPeople,
  amazonVector,
];
const Brands = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        reverseDirection: true,
        disableOnInteraction: false,
      }}
    >
      {brandLogos.map((logo, ind) => (
        <SwiperSlide key={ind}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;

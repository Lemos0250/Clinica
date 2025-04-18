"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export function Brands() {
  return (
    <div className="flex h-auto py-6 justify-center items-center bg-strong">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2, 
          },
          640: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-4xl px-4"
      >
        {[
          { src: "/Image-Toyota-Logo-Png_1-removebg-preview.png", alt: "Toyota" },
          { src: "/volkswagen-logo.png", alt: "Volkswagen" },
          { src: "/chevrolet-logo.png", alt: "Chevrolet" },
          { src: "/peugeot-logo.png", alt: "Peugeot" },
          { src: "/ford-logo.png", alt: "Ford" },
          { src: "/porsche-logo.png", alt: "Porsche" },
        ].map((brand, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={brand.src}
              alt={brand.alt}
              width={140}
              height={100}
              className="object-contain m-2 w-[150px] sm:w-[168px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export function Brands() {
    return (
        <div className="flex h-1/4 py-[2.5%] justify-center items-center bg-strong">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4} 
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3, 
                    },
                    1024: {
                        slidesPerView: 4, 
                    },
                }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full max-w-4xl"
            >
                <SwiperSlide>
                    <Image src="/Image-Toyota-Logo-Png_1-removebg-preview.png" alt="Toyota" width={168} height={128} className="object-contain m-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/volkswagen-logo.png" alt="Volkswagen" width={168} height={128} className="object-contain m-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/chevrolet-logo.png" alt="Chevrolet" width={168} height={128} className="object-contain m-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/peugeot-logo.png" alt="Peugeot" width={168} height={128} className="object-contain m-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/ford-logo.png" alt="Ford" width={168} height={128} className="object-contain m-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/porsche-logo.png" alt="Porsche" width={168} height={128} className="object-contain m-2" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

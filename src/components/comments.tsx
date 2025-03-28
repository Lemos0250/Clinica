"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Star } from "lucide-react";

export function Comments() {

    const stars = [1, 2, 3, 4, 5, 6];

    return (
        <div id="clientes" className="flex flex-col font-heading bg-gray h-[65%] w-full py-[2.5%] justify-center items-center gap-8">
            <div className="flex flex-col lg:w-[38%] text-center gap-4">
                <h1 className="text-lg 2xl:text-2xl font-bold text-red">Avaliações</h1>
                <h2 className="text-3xl 2xl:text-6xl text-gray-700">O que os clientes dizem</h2>
                <p className="text-lg 2xl:text-xl text-gray-600">Quer saber o que torna a experiência conosco tão única? Confira o que nossos clientes têm a dizer!</p>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={2} 
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full max-w-5xl"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-start justify-center gap-2 bg-white p-4 rounded-lg shadow-md min-h-[250px]">
                        <div className="flex text-yellow-500 mb-2">
                            {stars.map((star, index) => (
                                <Star key={index} className="fill-yellow-500" />
                            ))}
                        </div>
                        <blockquote className="mb-2">"Bons mecânicos, atendimento maravilhoso e o melhor de tudo preço justo. Pode ir de olhos fechados"</blockquote>
                        <span className="block">Carlos Henrique</span>
                        <span className="font-bold block">Cliente desde 2002</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col items-start justify-center gap-2 bg-white p-4 rounded-lg shadow-md min-h-[250px]">
                        <div className="flex text-yellow-500 mb-2">
                            {stars.map((star, index) => (
                                <Star key={index} className="fill-yellow-500" />
                            ))}
                        </div>
                        <blockquote className="mb-2">"Um ótimo lugar e de confiança"</blockquote>
                        <span className="block">Carlos Henrique</span>
                        <span className="font-bold block">Cliente desde 2002</span>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col items-start justify-center gap-2 bg-white p-4 rounded-lg shadow-md min-h-[250px]">
                        <div className="flex text-yellow-500 mb-2">
                            {stars.map((star, index) => (
                                <Star key={index} className="fill-yellow-500" />
                            ))}
                        </div>
                        <blockquote className="mb-2">"Serviço de mecânica excepcional, com profissionais qualificados e atendimento de primeira. Trabalham com diversos tipos de carros, sempre garantindo qualidade e eficiência. Recomendo!"</blockquote>
                        <span className="block">Carlos Henrique</span>
                        <span className="font-bold block">Cliente desde 2002</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}


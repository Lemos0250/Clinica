"use client";

import { motion } from "framer-motion";
import { MapIcon } from "lucide-react";
import Image from "next/image";

export function HomePage() {
    return (
        <div className="relative flex flex-col lg:flex-row h-auto lg:h-[85vh] px-5 lg:px-20">
            
            <div 
                className="absolute inset-0 bg-[url('/Fundo.png')] bg-cover bg-center 
                grayscale filter blur-[2.5px] opacity-50 z-0">
            </div>

            <div className="relative flex flex-col justify-center w-full lg:w-1/2 gap-4 font-heading px-5 lg:px-14">
                <Image 
                    className="w-[15%] h-[12%] object-fill rounded-xl"
                    src="/Carro_de_Kiko_LE_upscale_digital_art_x4-removebg-preview.png"
                    width={600}
                    height={500}
                    alt="Clínica do Automóvel"
                />
                <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                    Seja bem-vindo(a) ao site da <span className="text-red font-bold">Clínica do Automóvel</span>
                </h1>
                <p className="text-base md:text-lg 2xl:text-2xl font-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <button className="flex items-center py-3 px-6 bg-red text-white text-sm md:text-base 2xl:text-xl font-medium rounded-xl gap-2">
                    <MapIcon />
                    Entre em contato
                </button>

                <span className="text-sm md:text-base">Preencha seu e-mail e faça parte da família</span>
            </div>

            {/* Imagem ao lado */}
            <div className="relative flex justify-center items-end w-full lg:w-1/2 mt-10 lg:mt-0">
                <div className="relative w-full h-[500px] lg:h-[800px] 2xl:h-[950px]">
                    <Image
                    className="scale-x-[-1] object-cover object-top rounded-4xl"
                    src="/MulherMech.png"
                    alt="Clínica do Automóvel"
                    layout="fill"
                    />
                </div>
            </div>
        </div>
    );
}

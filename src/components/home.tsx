"use client";

import { motion } from "framer-motion";
import { MapIcon } from "lucide-react";
import Image from "next/image";

export function HomePage() {
    return (
        <div className="relative flex flex-col lg:flex-row h-auto lg:h-[85vh] pt-10 md:pt-0 px-5 lg:px-20">
            
            <div 
                className="absolute inset-0 bg-[url('/Fundo.png')] bg-cover bg-center 
                grayscale filter blur-[2.5px] opacity-50 z-0">
            </div>

            <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0, y: 1 }} 
            viewport={{ once: false, amount: 0.2 }} 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="relative flex flex-col justify-center w-full lg:w-1/2 gap-4 font-heading px-5 lg:px-14">
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

                <a
                    href="https://www.google.com/search?q=Cl%C3%ADnica+do+Autom%C3%B3vel+%7C+Pe%C3%A7as+e+Servi%C3%A7os+em+Piedade+Jaboat%C3%A3o+dos+Guararapes+PE&oq=Cl%C3%ADnica+do+Autom%C3%B3vel+%7C+Pe%C3%A7as+e+Servi%C3%A7os+em+Piedade+Jaboat%C3%A3o+dos+Guararapes+PE&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQRRg80gEHNjA3ajBqOagCALACAQ&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[70%] md:w-[50%] 2xl:w-[33%]"
                    >
                    <button className="flex justify-center items-center py-3 px-6 bg-red text-white text-sm md:text-base 2xl:text-xl font-medium w-full rounded-xl gap-2">
                        <MapIcon />
                        Entre em contato
                    </button>
                </a>

                <span className="text-sm md:text-base">Preencha seu e-mail e faça parte da família</span>
            </motion.div>

            
            <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0, y: 1 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="relative flex justify-center items-end w-full lg:w-1/2 mt-10 lg:mt-0">
                <div className="relative w-full h-[500px] lg:h-full ">
                    <Image
                    className="scale-x-[-1] object-cover object-top rounded-4xl"
                    src="/MulherMech.png"
                    alt="Clínica do Automóvel"
                    layout="fill"
                    />
                </div>
            </motion.div>
        </div>
    );
}

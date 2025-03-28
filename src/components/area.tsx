"use client"

import { CircleFadingPlus, House, Info, Users } from "lucide-react";
import { Link, Element } from 'react-scroll';
import Image from "next/image";


export function Area() {
    return (
        <div className={`
        flex py-5 px-40 items-center w-scren justify-between
        bg-black
        text-xl 2xl:text-2xl text-white
        `}>

            <Image 
                className="w-[10%] h-[10%] object-fill rounded-xl"
                src="/LogoTotal.png"
                width={1000}
                height={500}
                alt="Clínica do Automóvel"
            />
                

            <div className="flex gap-5">
                <Link className="flex gap-2 items-center cursor-pointer" to="home" smooth={true} duration={1000}>
                    <House/>
                    <p>Página Inicial</p>
                </Link>

                <Link className="flex gap-2 items-center cursor-pointer" to="sobre" smooth={true} duration={1000}>
                    <Info/>
                    <p>Sobre</p>
                </Link>

                <Link className="flex gap-2 items-center cursor-pointer" to="clientes" smooth={true} duration={1000}>
                    <Users/>
                    <p>Clientes</p>
                </Link>
                
                <Link className="flex gap-2 items-center cursor-pointer" to="contato" smooth={true} duration={1000}>
                    <CircleFadingPlus/>
                    <p>Contato</p>
                </Link>
            </div>
        </div>
    )
}
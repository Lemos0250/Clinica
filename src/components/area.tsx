import { CircleFadingPlus, House, Info, Users } from "lucide-react";
import Image from "next/image";


export function Area() {
    return (
        <div className={`
        flex py-5 px-[9%] items-center w-scren justify-between
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
                

            <div className="flex gap-4">
                <House/>
                <p>Página Inicial</p>
                <Info/>
                <p>Sobre</p>
                <Users/>
                <p>Clientes</p>
                <CircleFadingPlus/>
                <p>Contato</p>
            </div>
        </div>
    )
}
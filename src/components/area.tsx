import { CircleFadingPlus, House, Info, Users } from "lucide-react";

export function Area() {
    return (
        <div className={`
        flex py-10 items-center gap-2.5
        bg-black
        text-xl text-white
        `}>
            <House/>
            <p>Página Inicial</p>
            <Info/>
            <p>Sobre</p>
            <Users/>
            <p>Clientes</p>
            <CircleFadingPlus/>
            <p>Contato</p>
        </div>
    )
}
import { MapIcon } from "lucide-react";

export function HomePage() {
    return (
        <div className={`
        flex w-screen
        `}>
            <div className="flex flex-col w-[50%] gap-3.5 font-heading justify-center items-start">
                <span className="text-4xl">Seja bem vindo(a) ao site da <span className="text-red font-bold">Clínica do Automóvel</span></span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </span>

                <div className="flex items-center py-3.5 px-6 bg-red text-white font-medium rounded-xl gap-2">
                    <MapIcon/>
                    <button className="">Entre em contato</button>
                </div>

                <span>Preencha seu e-mail e faça parte da familia</span>
            </div>

            <div>

            </div>
        </div>
    )
}
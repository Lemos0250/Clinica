import { MapIcon } from "lucide-react";
import Image from "next/image";

export function HomePage() {
    return (
        <div className="flex h-[85vh] px-20">
            <div className="flex flex-col justify-center w-1/2 gap-4 font-heading px-14">
                <h1 className="text-5xl 2xl:text-6xl">
                    Seja bem-vindo(a) ao site da <span className="text-red font-bold">Clínica do Automóvel</span>
                </h1>
                <p className="text-lg 2xl:text-2xl font-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <button className="flex w-vh-50 items-center py-3 px-6 bg-red text-white 2xl:text-xl font-medium rounded-xl gap-2">
                    <MapIcon />
                    Entre em contato
                </button>

                <span>Preencha seu e-mail e faça parte da família</span>
            </div>

            <div className="flex justify-center items-center w-1/2">
                <Image 
                    className="w-[90%] h-[65%] object-fill rounded-4xl"
                    src="/teste-mecanico.jpeg"
                    width={500}
                    height={500}
                    alt="Clínica do Automóvel"
                />
            </div>
        </div>
    );
}

import { CarFrontIcon, Dam, Settings } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <div className="flex w-screen h-screen bg-gray">

            <div className="flex w-1/2 h-full justify-center items-center">
                <Image 
                    className="w-[90%] h-[65%] object-fill rounded-4xl"
                    src="/loja-clinica.png"
                    width={500}
                    height={500}
                    alt="Clínica do Automóvel"
                />
            </div>

            <div className="w-1/2 flex flex-col justify-center px-10">
                <div className="flex items-center text-xl font-semibold text-red gap-2">
                    <div className="w-8 h-[2.5px] bg-red"></div>
                    <span>Sobre nós</span>
                </div>

                <h2 className="text-3xl font-bold mt-4">Serviços mecânicos de qualidade!</h2>

                <p className="mt-4 text-lg text-gray-700">
                    A Clínica do Automóvel é sinônimo de qualidade, confiança e preço justo. 
                    Fundada em 17 de outubro de 2022, nossa empresa está localizada em Jaboatão dos Guararapes, Pernambuco, oferecendo serviços especializados em manutenção e reparação mecânica de veículos automotores. 
                    Contamos com uma equipe de mecânicos altamente capacitados, garantindo um atendimento excepcional e soluções eficientes para o seu veículo. 
                    Trabalhamos com carros nacionais e importados, sempre utilizando peças de qualidade e técnicas avançadas para assegurar a melhor performance e segurança do seu automóvel.
                </p>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2">
                        <Settings className="text-red" size={20}/>
                        <p className="text-gray-700">Serviços de suspensão, Troca de óleo, correia dentada.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Dam className="text-red" size={20}/>
                        <p className="text-gray-700">Limpeza de motor, bicos injetores e sistema de arrefecimento.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CarFrontIcon className="text-red" size={20}/>
                        <p className="text-gray-700">Revisão para viagem, Manutenção e reparo de motor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

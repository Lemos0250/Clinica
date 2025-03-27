"use client";

import { CarFrontIcon, Dam, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <div className="flex flex-col lg:flex-row h-auto lg:h-[85vh] bg-gray px-5 lg:px-20">
            {/* Imagem */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0, y: 1 }} 
                viewport={{ once: false, amount: 0.2 }} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center"
            >
                <Image 
                    className="w-full lg:w-[92.5%] h-auto lg:h-[65%] object-fill rounded-4xl"
                    src="/loja-clinica.png"
                    width={600}
                    height={500}
                    alt="Clínica do Automóvel"
                />
            </motion.div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 lg:px-10 mt-5 lg:mt-0">
      
                <div className="flex items-center text-xl font-semibold text-red gap-2">
                    <div className="w-8 h-[2.5px] bg-red"></div>
                    <h2>Sobre nós</h2>
                </div>

                <h3 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-4">
                    Serviços mecânicos de qualidade!
                </h3>

                <p className="mt-4 text-lg lg:text-xl xl:text-2xl text-gray-600">
                    A Clínica do Automóvel é sinônimo de qualidade, confiança e preço justo. 
                    Fundada em 17 de outubro de 2022, nossa empresa está localizada em Jaboatão dos Guararapes, Pernambuco, oferecendo serviços especializados em manutenção e reparação mecânica de veículos automotores. 
                    Contamos com uma equipe de mecânicos altamente capacitados, garantindo um atendimento excepcional e soluções eficientes para o seu veículo. 
                    Trabalhamos com carros nacionais e importados, sempre utilizando peças de qualidade e técnicas avançadas para assegurar a melhor performance e segurança do seu automóvel.
                </p>


                <div className="mt-6 grid gap-4">
                    <ServiceItem 
                        icon={<Settings className="text-red" size={20} />}
                        text="Serviços de suspensão, Troca de óleo, correia dentada."
                    />
                    <ServiceItem 
                        icon={<Dam className="text-red" size={20} />}
                        text="Limpeza de motor, bicos injetores e sistema de arrefecimento."
                    />
                    <ServiceItem 
                        icon={<CarFrontIcon className="text-red" size={20} />}
                        text="Revisão para viagem, Manutenção e reparo de motor."
                    />
                </div>
            </div>
        </div>
    );
}

function ServiceItem({ icon, text }) {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <p className="text-gray-700">{text}</p>
        </div>
    );
}

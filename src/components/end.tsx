"use client";  
import Image from "next/image";  

import { Mail, Phone } from "lucide-react";  
import 'react-toastify/dist/ReactToastify.css';  
import { toast, ToastContainer } from 'react-toastify';  

export function End() {  

    return (  
        <div className="flex flex-col md:flex-row w-full h-auto px-10 gap-[2.5%] bg-black text-white text-sm md:text-md 2xl:text-lg font-heading">  

            {/* Seção com a logo e descrição */}  
            <div className="flex flex-col mt-[5%] items-start min-w-1/2 md:w-1/3">  
                <Image  
                    className="w-2/4 2xl:w-2/5 rounded-xl"  
                    src="/LogoTotal.png"  
                    width={500}  
                    height={500}  
                    alt="Clínica do Automóvel"  
                />  
                <span className="w-3/4 font-heading text-2xl my-4">
                    A <span className="text-red font-bold">Clínica do Automóvel</span> é uma Oficina Mecânica Automotiva que atende tanto <span className="text-red font-bold">carros nacionais</span> quanto <span className="text-red font-bold">importados</span>. 
                </span>
            </div>  

            <div className="flex w-1/2 gap-8">

                {/* Seção de Serviços */}  
                <div className="flex flex-col gap-8">  
                    <span className="text-2xl mb-2">Todos os Serviços</span>  
                    <ul className="list-disc list-inside">  
                        <li>Limpeza de Motoar a Seco</li>  
                        <li>Serviços de Suspensão</li>  
                        <li>Limpeza de Arrefecimento</li>  
                        <li>Troca de Óleo</li>  
                        <li>Caixa de Direção Hidráulica</li>  
                        <li>Limpeza dos Bicos Injetores</li>  
                        <li>Cabeçote</li>  
                        <li>Motor</li>  
                        <li>Revisão para Viagem</li>  
                        <li>Freios</li>    
                        <li>Embreagem</li>  
                        <li>Correia Dentada</li>   
                        <li>Alternador</li>   
                        <li>Motor de Partida</li>   
                    </ul>  
                </div>  

                {/* Divisor Vertical */}  
                <div className="hidden md:block w-[2px] min-h-full bg-gray-600"></div>  

                {/* Seção de Serviços Adicionais */}  
                <div className="flex flex-col gap-8">  
                    <span className="text-2xl mb-2">Serviços Adicionais</span>  
                    <ul className="list-disc list-inside">  
                        <li>Serviço de Vidro Eletrico</li>  
                        <li>Serviço de Chave Codificada</li>  
                        <li>Conserto de Chaves</li>  
                        <li>Conserto de Módulo Eletrônico</li>  
                        <li>Serviços Elétricos em Geral</li>  
                        <li>Serviço de ABS</li>  
                        <li>Serviço de Air-Bag</li>  
                        <li>Serviço de Injeção Eletrônica</li>  
                        <li>Central Elétrica</li>  
                    </ul>  
                </div>  
            </div>
        </div>  
    );  
}  
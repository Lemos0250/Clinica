"use client";

import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';

import { motion } from "framer-motion";

export function End() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full px-6 sm:py-10 gap-10 bg-black text-white text-sm md:text-md 2xl:text-lg font-heading">

      <motion.div
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0, y: 1 }} 
        viewport={{ once: false, amount: 0.2 }} 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex flex-col items-start md:w-1/3 pb-5 sm:pb-0"
      >
        <Image
          className="w-3/4 sm:w-1/2 md:w-3/4 2xl:w-3/5 rounded-xl"
          src="/LogoTotal.png"
          width={500}
          height={500}
          alt="Clínica do Automóvel"
        />
        <span className="mt-4 sm:text-2xl">
          A <span className="text-red font-bold">Clínica do Automóvel</span> é uma Oficina Mecânica Automotiva que atende tanto <span className="text-red font-bold">carros nacionais</span> quanto <span className="text-red font-bold">importados</span>.
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0, y: 1 }} 
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex flex-col md:flex-row gap-5 w-full sm:w-1/2"
      >
        <div className="flex-1">
          <h3 className="text-xl mb-3">Todos os Serviços</h3>
          <ul className="list-disc list-inside space-y-1">
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

        <div className="hidden md:block w-[2px] bg-gray-600" />

        <div className="flex-1">
          <h3 className="text-xl mb-3">Serviços Adicionais</h3>
          <ul className="list-disc list-inside space-y-1">
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
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

import bico from '../../public/ServicesImg/Bicos Ejetores.jpg.png';
import motor from '../../public/ServicesImg/Motor.jpg';
import oleo from '../../public/ServicesImg/Troca de Óleo.jpg';
import eletronica from '../../public/ServicesImg/InjeçãoEletronica.jpg';
import embreeagem from '../../public/ServicesImg/Embreeagem.jpg.png';
import diagnostico from '../../public/ServicesImg/Diagnostico.jpg';
import correia from '../../public/ServicesImg/Correia Dentada.jpg.png';
import cabecote from '../../public/ServicesImg/Cabeçote.jpg';

const services = [
  { name: "Bicos Ejetores", image: bico },
  { name: "Motor", image: motor },
  { name: "Troca de Óleo", image: oleo },
  { name: "Injeção Eletrônica", image: eletronica },
  { name: "Embreagem", image: embreeagem },
  { name: "Diagnóstico", image: diagnostico },
  { name: "Correia Dentada", image: correia },
  { name: "Cabeçote", image: cabecote },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function Services() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full pb-20 px-[5%] mx-auto gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex text-center text-4xl font-sans font-bold text-black p-4 rounded-full"
      >
        Serviços mais populares
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-20"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: index * 0.1,
                },
              },
            }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="w-[150px] h-[115px] sm:w-[180px] sm:h-[180px] md:w-[230px] md:h-[160px] relative">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="rounded-lg object-cover shadow-md hover:scale-105 transition-transform"
            />
          </div>

          <p className="mt-2 font-heading text-gray-600 font-medium text-center text-xl">
            {service.name}
          </p>

          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

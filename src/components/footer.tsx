"use client";

import { CarFrontIcon, Dam, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";


export function Footer() {
    return (
        <div className="flex text-xs sm:text-md justify-center py-1 bg-red font-bold">
            <p>Todos os direitos reservados - Clínica do Automóvel © 2025.</p>
        </div>
    );
}

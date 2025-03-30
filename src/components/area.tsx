"use client";

import { useState } from "react";
import { House, Info, Users, CircleFadingPlus, Menu } from "lucide-react";
import { Link } from "react-scroll";
import Image from "next/image";

export function Area() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between py-5 px-6 lg:px-40">
        {/* Logo */}
        <Image
          className="w-24 h-auto object-fill rounded-xl"
          src="/LogoTotal.png"
          width={1000}
          height={500}
          alt="Clínica do Automóvel"
        />

        {/* Botão Hambúrguer para Mobile */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <Menu size={32} />
          </button>

          {/* Menu Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
              <Link
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                to="home"
                smooth={true}
                duration={1000}
                onClick={() => setIsDropdownOpen(false)}
              >
                <House />
                <p>Página Inicial</p>
              </Link>
              <Link
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                to="sobre"
                smooth={true}
                duration={1000}
                onClick={() => setIsDropdownOpen(false)}
              >
                <Info />
                <p>Sobre</p>
              </Link>
              <Link
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                to="clientes"
                smooth={true}
                duration={1000}
                onClick={() => setIsDropdownOpen(false)}
              >
                <Users />
                <p>Clientes</p>
              </Link>
              <Link
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                to="contato"
                smooth={true}
                duration={1000}
                onClick={() => setIsDropdownOpen(false)}
              >
                <CircleFadingPlus />
                <p>Contato</p>
              </Link>
            </div>
          )}
        </div>

        {/* Links de Navegação para Desktop */}
        <div className="hidden lg:flex gap-5">
          <Link
            className="flex gap-2 items-center cursor-pointer"
            to="home"
            smooth={true}
            duration={1000}
          >
            <House />
            <p>Página Inicial</p>
          </Link>
          <Link
            className="flex gap-2 items-center cursor-pointer"
            to="sobre"
            smooth={true}
            duration={1000}
          >
            <Info />
            <p>Sobre</p>
          </Link>
          <Link
            className="flex gap-2 items-center cursor-pointer"
            to="clientes"
            smooth={true}
            duration={1000}
          >
            <Users />
            <p>Clientes</p>
          </Link>
          <Link
            className="flex gap-2 items-center cursor-pointer"
            to="contato"
            smooth={true}
            duration={1000}
          >
            <CircleFadingPlus />
            <p>Contato</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

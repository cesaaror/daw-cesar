"use client";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const asignaturas = [
    { name: "Programación", path: "/asignaturas/DAW_PROG" },
    { name: "Bases de Datos", path: "/asignaturas/DAW_BD" },
    { name: "Lenguaje de Marcas", path: "/asignaturas/DAW_LMSGI" },
    { name: "Entornos de Desarrollo", path: "/asignaturas/EDD" },
    { name: "Digitalización Aplicada", path: "/asignaturas/DIGITALIZACION" },
  ];

  return (
    <header className="bg-gray-800 text-white shadow-md">
      {/* Navbar superior */}
      <nav className="flex items-center justify-between py-3 px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl font-bold">DAW César Rentería</h1>

        {/* Botones lado derecho */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/cesaaror"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-all"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition-all">
            Iniciar sesión
          </button>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Panel lateral móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Asignaturas</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <ul className="px-6 py-4 space-y-2">
          {asignaturas.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="block px-3 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-6 space-y-3">
          <a
            href="https://github.com/cesaaror"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg transition-all"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <button className="w-full bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition-all">
            Iniciar sesión
          </button>
        </div>
      </div>
    </header>
  );
}

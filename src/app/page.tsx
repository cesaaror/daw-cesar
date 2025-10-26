import Image from "next/image";
import LayoutWrapper from "../app/components/LayoutWrapper";
import Link from "next/link";

export default function Home() {
  const asignaturas = [
    { name: "Programación", href: "/asignaturas/DAW_PROG", color: "bg-blue-600", hover: "hover:bg-blue-700" },
    { name: "Bases de Datos", href: "/asignaturas/DAW_BD", color: "bg-green-600", hover: "hover:bg-green-700" },
    { name: "Lenguaje de Marcas", href: "/asignaturas/DAW_LMSGI", color: "bg-purple-600", hover: "hover:bg-purple-700" },
    { name: "Digitalización", href: "/asignaturas/DIGITALIZACION", color: "bg-pink-600", hover: "hover:bg-pink-700" },
    { name: "Estructuras de Datos", href: "/asignaturas/EDD", color: "bg-yellow-600", hover: "hover:bg-yellow-700" },
  ];

  return (
    <LayoutWrapper>
      <section className="w-full flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        {/* Logo y título */}
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/logo.png"
            alt="DAW César"
            width={140}
            height={140}
            className="mb-4 drop-shadow-xl animate-fade-in"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-3 animate-fade-in">
            Bienvenido a tu espacio DAW
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed animate-fade-in delay-200">
            Accede a tus apuntes, recursos y módulos de cada asignatura del ciclo formativo de Desarrollo de Aplicaciones Web. Organiza tu aprendizaje y estudia de manera eficiente.
          </p>
        </div>

        {/* Botones de asignaturas */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
  {asignaturas.map((asignatura) => (
    <Link
      key={asignatura.name}
      href={asignatura.href}
      className={`${asignatura.color} text-white px-6 py-4 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${asignatura.hover} font-semibold flex items-center justify-center text-lg md:text-xl`}
    >
      {asignatura.name}
    </Link>
  ))}
</div>

      </section>

      {/* Footer motivador */}
      <section className="mt-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          "Aprender es la mejor inversión en tu futuro. ¡Organiza tus asignaturas y conquista el FP!"
        </p>
      </section>
    </LayoutWrapper>
  );
}

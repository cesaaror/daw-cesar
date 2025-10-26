export default function Sidebar() {
  const asignaturas = [
    { name: "Programación", path: "/asignaturas/DAW_PROG" },
    { name: "Bases de Datos", path: "/asignaturas/DAW_BD" },
    { name: "Lenguaje de Marcas", path: "/asignaturas/DAW_LMSGI" },
    { name: "Entornos de Desarrollo", path: "/asignaturas/EDD" },
    { name: "Digitalización Aplicada", path: "/asignaturas/DIGITALIZACION" },
  ];

  return (
    <aside className="hidden md:block w-64 bg-gray-50 dark:bg-gray-900 p-6 border-r border-gray-200 dark:border-gray-700 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-wide">
        Asignaturas
      </h2>
      <ul className="space-y-2">
        {asignaturas.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

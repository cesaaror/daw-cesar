export default function DAW_BD_Page() {
  const temas = [
    {
      titulo: "Modelo de datos y bases relacionales",
      descripcion: "Aprender los conceptos fundamentales de bases de datos relacionales: tablas, registros, atributos, claves primarias y foráneas. Comprender la relación entre entidades y cómo modelar información de forma eficiente.",
      detalle: "Se estudian diagramas ER, cardinalidad de relaciones, integridad referencial y cómo diseñar un modelo de datos inicial para cualquier aplicación."
    },
    {
      titulo: "SQL básico y avanzado",
      descripcion: "Sentencias SQL para manipulación de datos y consultas: SELECT, INSERT, UPDATE, DELETE, joins, subconsultas y funciones agregadas.",
      detalle: "También se abordan transacciones, vistas, índices, procedimientos almacenados y triggers. Se enfatiza la práctica constante en entornos MySQL, PostgreSQL o SQL Server."
    },
    {
      titulo: "Normalización y diseño de bases de datos",
      descripcion: "Aplicar reglas de normalización para evitar redundancia y garantizar integridad de los datos.",
      detalle: "Incluye formas normales (1FN, 2FN, 3FN), dependencias funcionales, descomposición de tablas y cómo diseñar una base de datos optimizada para rendimiento y consistencia."
    },
    {
      titulo: "Administración de bases de datos",
      descripcion: "Gestión de usuarios, permisos, copias de seguridad y mantenimiento de bases de datos.",
      detalle: "Se estudian estrategias de backup y recuperación, control de accesos, seguridad de datos y monitorización de rendimiento."
    },
    {
      titulo: "Proyecto práctico",
      descripcion: "Desarrollo de un proyecto completo integrando diseño, SQL y administración.",
      detalle: "Se implementa una base de datos para un caso real, aplicando todo lo aprendido: diseño relacional, consultas complejas, normalización y gestión de seguridad y backup."
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 border-b-4 border-blue-500 pb-2 text-center">
        Bases de Datos (DAW_BD)
      </h1>

      {/* Descripción y objetivos */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3 text-blue-600">Descripción de la asignatura</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Esta asignatura enseña los fundamentos de las bases de datos, desde el diseño y modelado hasta la implementación y administración en entornos reales.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-blue-500">Objetivos</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          <li>Comprender la teoría de bases de datos relacionales y el modelo entidad-relación.</li>
          <li>Diseñar, crear y mantener bases de datos eficientes y normalizadas.</li>
          <li>Dominar SQL para manipular, consultar y administrar datos.</li>
          <li>Aplicar buenas prácticas en administración y seguridad de bases de datos.</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2 text-blue-500">Competencias</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Diseño y normalización de bases de datos.</li>
          <li>Redacción de consultas SQL complejas.</li>
          <li>Administración y optimización de bases de datos.</li>
          <li>Capacidad de resolver problemas de gestión de datos en proyectos reales.</li>
        </ul>
      </section>

      {/* Temas */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">Temas a estudiar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {temas.map((tema, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-500">{tema.titulo}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{tema.descripcion}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{tema.detalle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sugerencias */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Cómo abordar la asignatura</h2>
        <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Comenzar por la teoría del modelo relacional y la normalización.</li>
          <li>Practicar SQL básico antes de pasar a joins, subconsultas y funciones avanzadas.</li>
          <li>Realizar mini-proyectos y ejercicios prácticos con bases de datos reales.</li>
          <li>Estudiar y aplicar buenas prácticas de seguridad y administración.</li>
          <li>Revisar casos de estudio de proyectos reales para comprender la aplicación práctica de la teoría.</li>
        </ul>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Recursos recomendados</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Documentación oficial de MySQL, PostgreSQL o SQL Server.</li>
          <li>Plataformas de práctica SQL: <span className="font-medium">LeetCode, HackerRank, SQLZoo</span>.</li>
          <li>Libros: "Database System Concepts" (Silberschatz) y "SQL For Dummies".</li>
          <li>Tutoriales de modelado ER y normalización en YouTube y portales educativos.</li>
        </ul>
      </section>
    </div>
  );
}

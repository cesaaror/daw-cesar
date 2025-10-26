export default function DAW_PROG_Page() {
  const temas = [
    {
      titulo: "Fundamentos de programación",
      descripcion: "Aprender los conceptos básicos de programación: variables, tipos de datos, operadores y estructuras de control.",
      detalle: "Incluye condicionales, bucles, operadores lógicos y aritméticos, así como buenas prácticas de legibilidad y organización del código."
    },
    {
      titulo: "Programación orientada a objetos (POO)",
      descripcion: "Comprender la POO y su aplicación en el desarrollo de software.",
      detalle: "Estudia clases, objetos, herencia, encapsulamiento, polimorfismo y diseño orientado a objetos para estructurar proyectos complejos."
    },
    {
      titulo: "Estructuras de datos",
      descripcion: "Manejo de colecciones de datos como arrays, listas, pilas, colas y diccionarios.",
      detalle: "Aprender cuándo y cómo usar cada estructura de datos, además de operaciones básicas como inserción, eliminación y búsqueda."
    },
    {
      titulo: "Funciones y modularización",
      descripcion: "Crear funciones y métodos para organizar y reutilizar código.",
      detalle: "Incluye parámetros, retorno de valores, sobrecarga de métodos y separación de responsabilidades en módulos o clases."
    },
    {
      titulo: "Depuración y testing",
      descripcion: "Aprender a detectar y corregir errores en el código y a realizar pruebas unitarias.",
      detalle: "Uso de depuradores, impresión de logs, pruebas de funciones y técnicas de testeo para garantizar el correcto funcionamiento del software."
    },
    {
      titulo: "Algoritmos básicos y resolución de problemas",
      descripcion: "Desarrollar la lógica para resolver problemas mediante algoritmos eficientes.",
      detalle: "Incluye algoritmos de búsqueda, ordenación, recursión y diseño de soluciones paso a paso antes de implementarlas en código."
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 border-b-4 border-purple-500 pb-2 text-center">
        Programación (DAW_PROG)
      </h1>

      {/* Descripción y objetivos */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3 text-purple-600">Descripción de la asignatura</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Esta asignatura enseña los fundamentos de la programación, incluyendo estructuras de control, POO, algoritmos y buenas prácticas de desarrollo. 
          Se centra en desarrollar la capacidad de resolver problemas mediante código organizado y eficiente.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-purple-500">Objetivos</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          <li>Aprender los conceptos fundamentales de programación y estructuras de control.</li>
          <li>Comprender y aplicar la programación orientada a objetos.</li>
          <li>Diseñar algoritmos eficientes para resolver problemas.</li>
          <li>Organizar el código mediante funciones y módulos.</li>
          <li>Aplicar técnicas de depuración y testing.</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2 text-purple-500">Competencias</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Capacidad de programar de manera estructurada y orientada a objetos.</li>
          <li>Analizar problemas y desarrollar algoritmos adecuados.</li>
          <li>Implementar y probar soluciones funcionales y eficientes.</li>
          <li>Aplicar buenas prácticas de codificación y modularización.</li>
        </ul>
      </section>

      {/* Temas */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Temas a estudiar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {temas.map((tema, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-2 text-purple-500">{tema.titulo}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{tema.descripcion}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{tema.detalle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sugerencias */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-purple-600">Cómo abordar la asignatura</h2>
        <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Comenzar con fundamentos de programación y ejercicios básicos.</li>
          <li>Practicar la lógica mediante problemas de algoritmo simples.</li>
          <li>Avanzar hacia la programación orientada a objetos y modularización.</li>
          <li>Realizar proyectos pequeños que integren todos los conceptos aprendidos.</li>
          <li>Aplicar depuración y testing en cada proyecto para garantizar funcionalidad.</li>
        </ul>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-purple-600">Recursos recomendados</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Documentación oficial del lenguaje de programación que uses (Java, Python, C#).</li>
          <li>Plataformas de práctica: <span className="font-medium">LeetCode, HackerRank, Codewars</span>.</li>
          <li>Libros: "Clean Code" (Robert C. Martin), "Eloquent JavaScript", "Head First Java".</li>
          <li>Tutoriales online y cursos interactivos sobre POO y algoritmos.</li>
          <li>Herramientas de depuración y testing integradas en IDEs como IntelliJ o VSCode.</li>
        </ul>
      </section>
    </div>
  );
}

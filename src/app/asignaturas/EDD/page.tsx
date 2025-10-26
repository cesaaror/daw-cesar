export default function EDD_Page() {
  const temas = [
    {
      titulo: "Estructuras de datos lineales",
      descripcion: "Aprender a manejar arrays, listas enlazadas, pilas y colas.",
      detalle: "Se estudian operaciones básicas como inserción, eliminación, búsqueda y recorrido, así como la elección adecuada de la estructura según el problema."
    },
    {
      titulo: "Estructuras de datos no lineales",
      descripcion: "Comprender árboles y grafos para modelar relaciones más complejas.",
      detalle: "Incluye árboles binarios, árboles balanceados, grafos dirigidos y no dirigidos, algoritmos de recorrido (BFS, DFS) y aplicaciones prácticas."
    },
    {
      titulo: "Algoritmos de búsqueda y ordenación",
      descripcion: "Implementar y analizar algoritmos fundamentales para manipular datos.",
      detalle: "Incluye búsqueda lineal y binaria, ordenación por burbuja, inserción, selección, mergesort y quicksort, con enfoque en complejidad y eficiencia."
    },
    {
      titulo: "Recursión y algoritmos divide y vencerás",
      descripcion: "Resolver problemas mediante técnicas recursivas y estrategias de división.",
      detalle: "Se practica la resolución de problemas mediante recursión, diseño de algoritmos eficientes y comprensión de su funcionamiento paso a paso."
    },
    {
      titulo: "Listas enlazadas y estructuras dinámicas",
      descripcion: "Gestionar estructuras dinámicas que crecen y se reducen según las necesidades del programa.",
      detalle: "Incluye listas enlazadas simples y dobles, implementación de pilas y colas dinámicas, y comprensión de su ventaja frente a estructuras estáticas."
    },
    {
      titulo: "Aplicaciones y proyectos de desarrollo",
      descripcion: "Integrar todas las estructuras y algoritmos en proyectos prácticos.",
      detalle: "Se fomenta la creación de pequeños proyectos que combinen estructuras de datos, algoritmos y buenas prácticas de programación, preparando al alumno para situaciones reales."
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 border-b-4 border-green-500 pb-2 text-center">
        Estructuras de Datos y Desarrollo (EDD)
      </h1>

      {/* Descripción y objetivos */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3 text-green-600">Descripción de la asignatura</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Esta asignatura se centra en la comprensión y aplicación de estructuras de datos fundamentales y algoritmos para la resolución de problemas.
          Los alumnos aprenderán a organizar datos de manera eficiente, analizar algoritmos y desarrollar proyectos prácticos utilizando estas estructuras.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-green-500">Objetivos</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          <li>Comprender y aplicar estructuras de datos lineales y no lineales.</li>
          <li>Diseñar e implementar algoritmos de búsqueda y ordenación.</li>
          <li>Resolver problemas mediante técnicas recursivas y divide y vencerás.</li>
          <li>Desarrollar proyectos integrando estructuras de datos y algoritmos.</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2 text-green-500">Competencias</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Capacidad de analizar problemas y elegir la estructura de datos adecuada.</li>
          <li>Diseñar y optimizar algoritmos eficientes.</li>
          <li>Integrar estructuras y algoritmos en soluciones completas y funcionales.</li>
          <li>Aplicar buenas prácticas de programación y documentación.</li>
        </ul>
      </section>

      {/* Temas */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-6 text-green-600">Temas a estudiar</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {temas.map((tema, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-2 text-green-500">{tema.titulo}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{tema.descripcion}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{tema.detalle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sugerencias */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Cómo abordar la asignatura</h2>
        <ul className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Comenzar estudiando estructuras de datos lineales y realizar ejercicios prácticos.</li>
          <li>Practicar algoritmos de búsqueda y ordenación con distintos tamaños de datos.</li>
          <li>Avanzar hacia estructuras no lineales como árboles y grafos.</li>
          <li>Resolver problemas utilizando recursión y divide y vencerás.</li>
          <li>Realizar proyectos prácticos integrando todas las estructuras aprendidas.</li>
        </ul>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Recursos recomendados</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Libros: "Estructuras de Datos y Algoritmos en Java" (Michael T. Goodrich), "Introduction to Algorithms" (Cormen).</li>
          <li>Plataformas de práctica: <span className="font-medium">LeetCode, HackerRank, GeeksforGeeks</span>.</li>
          <li>Documentación oficial y tutoriales del lenguaje utilizado.</li>
          <li>Proyectos prácticos y ejercicios de programación guiados.</li>
          <li>Uso de IDEs con herramientas de depuración y testing para practicar la implementación.</li>
        </ul>
      </section>
    </div>
  );
}

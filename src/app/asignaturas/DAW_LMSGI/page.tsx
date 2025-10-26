export default function DAW_LMSGI_Page() {
  const temas = [
    {
      titulo: "HTML5 y Estructura de páginas web",
      descripcion: "Aprender a estructurar documentos web usando HTML5, etiquetas semánticas y jerarquía de contenido.",
      detalle: "Incluye el uso de encabezados, párrafos, listas, tablas, formularios y elementos multimedia. Se enfatiza la accesibilidad y buenas prácticas de maquetación."
    },
    {
      titulo: "CSS3 y diseño visual",
      descripcion: "Aplicar estilos y diseño a páginas web utilizando CSS3, flexbox, grid y media queries para responsive design.",
      detalle: "Se estudian selectores, pseudo-clases, animaciones, variables CSS y buenas prácticas de diseño adaptativo para dispositivos móviles y desktop."
    },
    {
      titulo: "JavaScript básico y manipulación del DOM",
      descripcion: "Introducción a JavaScript para añadir interactividad a las páginas web y manipular elementos del DOM.",
      detalle: "Incluye eventos, funciones, arrays, objetos, bucles, condicionales y manipulación de contenido dinámico en el navegador."
    },
    {
      titulo: "Sistemas de gestión de información (SGI)",
      descripcion: "Estudio de sistemas que gestionan información en aplicaciones web y empresariales.",
      detalle: "Se analiza el uso de CMS, ERP y CRM, integrando bases de datos, consultas y presentación de información de manera organizada."
    },
    {
      titulo: "Integración de HTML, CSS y JS",
      descripcion: "Desarrollar páginas web completas combinando estructura, estilo y funcionalidad.",
      detalle: "Se practican proyectos que integran formularios, validaciones, animaciones, componentes interactivos y buenas prácticas de accesibilidad."
    },
    {
      titulo: "Uso de frameworks y librerías",
      descripcion: "Introducción a frameworks y librerías modernas de frontend como Bootstrap y React.",
      detalle: "Se estudia cómo agilizar el desarrollo web, crear componentes reutilizables y mejorar la experiencia del usuario con frameworks visuales y JS."
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 border-b-4 border-green-500 pb-2 text-center">
        Lenguajes de Marcas y SGI (DAW_LMSGI)
      </h1>

      {/* Descripción y objetivos */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3 text-green-600">Descripción de la asignatura</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Esta asignatura enseña a crear, diseñar y mantener páginas web usando lenguajes de marcas y a comprender sistemas que gestionan información en aplicaciones.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-green-500">Objetivos</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          <li>Dominar HTML5, CSS3 y JavaScript para el desarrollo web.</li>
          <li>Aprender a integrar y presentar información gestionada por sistemas.</li>
          <li>Conocer frameworks y librerías modernas de frontend.</li>
          <li>Aplicar buenas prácticas de accesibilidad y diseño responsive.</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2 text-green-500">Competencias</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Maquetación de páginas web semánticas y accesibles.</li>
          <li>Uso de CSS avanzado para diseño adaptativo y animaciones.</li>
          <li>Programación básica de interactividad con JavaScript.</li>
          <li>Integración de sistemas de información y gestión de datos.</li>
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
          <li>Comenzar aprendiendo HTML5 y la estructura semántica de las páginas.</li>
          <li>Practicar CSS3 y responsive design con flexbox y grid.</li>
          <li>Aprender JavaScript básico y manipulación del DOM con pequeños ejercicios.</li>
          <li>Desarrollar proyectos integrando HTML, CSS y JS para reforzar conocimientos.</li>
          <li>Explorar sistemas de gestión de información y su integración con la web.</li>
        </ul>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-green-600">Recursos recomendados</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>MDN Web Docs (HTML, CSS, JS) – documentación oficial y tutoriales.</li>
          <li>Plataformas de práctica: <span className="font-medium">CodePen, JSFiddle, FreeCodeCamp</span>.</li>
          <li>Frameworks: <span className="font-medium">Bootstrap, Tailwind CSS, React</span>.</li>
          <li>Libros: "HTML & CSS: Design and Build Websites" (Jon Duckett) y "JavaScript: The Definitive Guide".</li>
          <li>Tutoriales online sobre CMS, ERP y gestión de información empresarial.</li>
        </ul>
      </section>
    </div>
  );
}

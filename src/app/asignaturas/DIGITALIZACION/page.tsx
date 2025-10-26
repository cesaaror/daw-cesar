export default function DIGITALIZACION_Page() {
  const temas = [
    {
      titulo: "Conceptos de digitalización",
      descripcion: "Comprender qué significa digitalizar información y procesos.",
      detalle: "Incluye la conversión de datos analógicos a digitales, tipos de formatos y ventajas de la digitalización en entornos educativos y profesionales."
    },
    {
      titulo: "Sistemas de información",
      descripcion: "Conocer cómo se organizan, almacenan y gestionan los datos digitalizados.",
      detalle: "Se estudian bases de datos, flujos de información, sistemas de gestión de contenidos (CMS) y la importancia de la calidad de los datos."
    },
    {
      titulo: "Herramientas digitales",
      descripcion: "Aprender a utilizar herramientas para crear, editar y gestionar información digital.",
      detalle: "Incluye procesadores de texto, hojas de cálculo, presentaciones, software de gestión documental, almacenamiento en la nube y colaboración online."
    },
    {
      titulo: "Seguridad y privacidad",
      descripcion: "Conocer la importancia de proteger la información digital.",
      detalle: "Se estudian buenas prácticas de seguridad, gestión de contraseñas, copias de seguridad, cifrado y normativas de protección de datos."
    },
    {
      titulo: "Automatización de procesos",
      descripcion: "Aprender a optimizar tareas mediante herramientas digitales.",
      detalle: "Incluye flujos de trabajo, automatización de tareas repetitivas, macros, scripts y uso de plataformas de gestión empresarial (ERP, CRM)."
    },
    {
      titulo: "Transformación digital y competencias",
      descripcion: "Comprender cómo la digitalización impacta en la empresa y el trabajo.",
      detalle: "Se analizan competencias digitales clave, adaptación al cambio tecnológico y tendencias como inteligencia artificial y Big Data."
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 border-b-4 border-purple-500 pb-2 text-center">
        Digitalización
      </h1>

      {/* Descripción y objetivos */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-3 text-purple-600">Descripción de la asignatura</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Esta asignatura tiene como objetivo enseñar los fundamentos de la digitalización de la información y los procesos, así como la correcta utilización de herramientas digitales
          para mejorar la eficiencia y productividad. Se centra en la gestión de la información, seguridad y automatización de tareas.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-purple-500">Objetivos</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          <li>Comprender los conceptos de digitalización y su impacto en la sociedad y empresas.</li>
          <li>Utilizar herramientas digitales para gestionar información y procesos.</li>
          <li>Aplicar buenas prácticas de seguridad y privacidad de datos.</li>
          <li>Automatizar procesos y optimizar tareas mediante tecnologías digitales.</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2 text-purple-500">Competencias</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Desarrollar habilidades en el uso de herramientas digitales de productividad.</li>
          <li>Gestionar información digital de forma segura y eficiente.</li>
          <li>Adaptarse a nuevas tecnologías y procesos digitales.</li>
          <li>Implementar soluciones de automatización y mejora de procesos.</li>
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
          <li>Comenzar por comprender los conceptos básicos de digitalización y su importancia.</li>
          <li>Practicar con diferentes herramientas digitales y software de gestión documental.</li>
          <li>Aplicar buenas prácticas de seguridad y privacidad en todos los ejercicios.</li>
          <li>Realizar proyectos y ejercicios que integren automatización de procesos y gestión de información.</li>
          <li>Mantenerse actualizado sobre nuevas tecnologías y tendencias digitales.</li>
        </ul>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-purple-600">Recursos recomendados</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Libros: "Transformación Digital" (David L. Rogers), "Competencias Digitales" (Varios autores).</li>
          <li>Plataformas y software: Google Workspace, Microsoft 365, Trello, Notion.</li>
          <li>Tutoriales online y cursos: LinkedIn Learning, Coursera, Udemy.</li>
          <li>Práctica en proyectos reales o simulados de gestión de información.</li>
          <li>Documentación de normativas de seguridad y privacidad de datos.</li>
        </ul>
      </section>
    </div>
  );
}

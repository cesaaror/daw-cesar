"use client";
import { useState } from "react";

interface Option {
  key: string;
  text: string;
  correct: boolean;
  explanation: string;
}

interface Question {
  id: number;
  q: string;
  options: Option[];
}

interface InteractiveQuizProps {
  className?: string;
  onFinish?: (answers: Record<number, string>) => void;
}

export default function InteractiveQuiz({ className = "", onFinish }: InteractiveQuizProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showExp, setShowExp] = useState<{ qId: number; option: Option } | null>(null);

  // --- PREGUNTAS (30) con explicaciones estilo cercano y claro ---
  const questions: Question[] = [
    {
      id: 1,
      q: "El lugar donde se deposita la información sobre la totalidad de los datos que forman la base de datos y que contiene las características lógicas de las estructuras que almacenan los datos, su nombre, descripción, contenido y organización, se denomina:",
      options: [
        { key: "a", text: "DDL.", correct: false, explanation: "DDL son las sentencias para definir estructuras (CREATE, ALTER...), no el repositorio que almacena la descripción de los datos." },
        { key: "b", text: "Gestor de la base de datos.", correct: false, explanation: "El SGBD es el software que gestiona la base de datos, pero el enunciado pide el lugar donde se deposita la descripción (eso es el diccionario de datos)." },
        { key: "c", text: "Metadatos.", correct: false, explanation: "Los metadatos son la información descriptiva, pero la pregunta pide el nombre del lugar que los almacena: el diccionario de datos (o catálogo)." },
        { key: "d", text: "Diccionario de datos.", correct: true, explanation: "Correcto. El diccionario de datos (o catálogo) es donde se almacenan los metadatos: nombres, tipos, relaciones y organización de los datos." },
      ],
    },
    {
      id: 2,
      q: "En una base de datos, los encargados de llevar a cabo la identificación de los datos, las relaciones entre ellos, sus restricciones, etc. serán:",
      options: [
        { key: "a", text: "Los diseñadores.", correct: true, explanation: "Exacto: los diseñadores (analistas/modeladores) crean el modelo de datos, las entidades, relaciones y reglas." },
        { key: "b", text: "Los usuarios finales.", correct: false, explanation: "Los usuarios usan la base de datos y pueden aportar requisitos, pero no suelen modelarla." },
        { key: "c", text: "El administrador.", correct: false, explanation: "El DBA gestiona y mantiene la base de datos (rendimiento, seguridad), pero el diseño conceptual lo hacen los diseñadores." },
        { key: "d", text: "Los programadores.", correct: false, explanation: "Los programadores implementan aplicaciones sobre la base de datos, pero el diseño conceptual es trabajo de los diseñadores." },
      ],
    },
    {
      id: 3,
      q: "Al conjunto de valores que puede tomar un determinado atributo, se le denomina dominio. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Verdadero", correct: true, explanation: "Correcto: dominio es el conjunto de valores válidos para un atributo (ej.: para 'sexo' el dominio podría ser {M, F})." },
        { key: "F", text: "Falso", correct: false, explanation: "No: el término correcto para el conjunto de valores de un atributo es 'dominio'." },
      ],
    },
    {
      id: 4,
      q: "En los ficheros secuenciales, el modo de apertura del fichero condiciona:",
      options: [
        { key: "a", text: "Ninguna respuesta es correcta.", correct: false, explanation: "No: el modo de apertura sí condiciona si vas a leer, escribir o ambas cosas." },
        { key: "b", text: "La escritura.", correct: false, explanation: "Parcial: puede condicionar escritura, pero también lectura según el modo elegido." },
        { key: "c", text: "La lectura.", correct: false, explanation: "Parcial: depende del modo; la respuesta completa es lectura o escritura." },
        { key: "d", text: "La lectura o escritura.", correct: true, explanation: "Correcto. El modo de apertura determina si el fichero se abre para lectura, escritura o ambos." },
      ],
    },
    {
      id: 5,
      q: "Durante su diseño, una base de datos relacional pasa por un proceso al que se conoce como normalización de una base de datos. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Verdadero", correct: true, explanation: "Verdadero. La normalización organiza las tablas para reducir redundancia y evitar anomalías." },
        { key: "F", text: "Falso", correct: false, explanation: "No: la normalización sí forma parte del diseño relacional." },
      ],
    },
    {
      id: 6,
      q: "Para nombrar abreviadamente un sistema de almacenamiento masivo en red, utilizamos las siglas:",
      options: [
        { key: "a", text: "ASN.", correct: false, explanation: "ASN no es la sigla habitual en este contexto." },
        { key: "b", text: "SAN.", correct: false, explanation: "SAN es Storage Area Network; también es almacenamiento en red pero la opción dada como correcta en el test es NAS (Network Attached Storage) para 'almacenamiento masivo en red' accesible en la red." },
        { key: "c", text: "RAID.", correct: false, explanation: "RAID es una técnica de organización/ redundancia de discos, no la sigla buscada." },
        { key: "d", text: "NAS.", correct: true, explanation: "NAS = Network Attached Storage, dispositivo/servicio de almacenamiento conectado a la red para acceso compartido." },
      ],
    },
    {
      id: 7,
      q: "Un fichero o archivo está formado por : _____, que contienen datos relativos a un mismo elemento u objeto.",
      options: [
        { key: "a", text: "valores", correct: false, explanation: "Los valores son unidades más pequeñas; la estructura que agrupa valores relacionados es el registro." },
        { key: "b", text: "campos lógicos", correct: false, explanation: "Los campos forman parte del registro; el fichero está formado por registros lógicos." },
        { key: "c", text: "líneas", correct: false, explanation: "No es la terminología técnica habitual para bases de datos en este contexto." },
        { key: "d", text: "registros lógicos", correct: true, explanation: "Correcto: un fichero está compuesto por registros lógicos, cada uno con campos que representan atributos del elemento." },
      ],
    },
    {
      id: 8,
      q: "El lenguaje que proporciona sentencias para realizar operaciones de DDL, DML y DCL es SQL. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Verdadero", correct: true, explanation: "Verdadero. SQL incluye sentencias para definición (DDL), manipulación (DML) y control (DCL)." },
        { key: "F", text: "Falso", correct: false, explanation: "No: SQL sí abarca esas categorías." },
      ],
    },
    {
      id: 9,
      q: "El nivel en el que se describe la estructura física de la base de datos, a través de un esquema interno encargado de detallar el sistema de almacenamiento de la base de datos y sus métodos de acceso, es:",
      options: [
        { key: "a", text: "Nivel externo.", correct: false, explanation: "El externo muestra vistas para usuarios; no describe el almacenamiento físico." },
        { key: "b", text: "Nivel lógico.", correct: false, explanation: "El lógico (conceptual) describe la estructura de datos, no la implementación física." },
        { key: "c", text: "Nivel conceptual.", correct: false, explanation: "Conceptual es el esquema global; la física corresponde al interno." },
        { key: "d", text: "Nivel interno.", correct: true, explanation: "Correcto: el nivel interno (o físico) describe cómo se almacenan y acceden los datos." },
      ],
    },
    {
      id: 10,
      q: "¿Cuál de las siguientes no es una ventaja de los Sistemas Gestores de Base de Datos?",
      options: [
        { key: "a", text: "Ofrecen al usuario una visión real de la complejidad relacionada con cómo se almacenan y mantienen los datos.", correct: true, explanation: "Correcto: los SGBD normalmente ocultan la complejidad; mostrarla al usuario no es una ventaja." },
        { key: "b", text: "Aseguran la integridad de los datos.", correct: false, explanation: "Sí: los SGBD ayudan a mantener la integridad mediante restricciones y transacciones." },
        { key: "c", text: "Facilitan el acceso a los datos, aportando rapidez y evitando la pérdida de datos.", correct: false, explanation: "Sí: proporcionar acceso eficiente y proteger datos es una ventaja." },
        { key: "d", text: "Disminuyen la redundancia y la inconsistencia de datos.", correct: false, explanation: "Sí: un objetivo del SGBD es reducir redundancia e inconsistencia." },
      ],
    },
    {
      id: 11,
      q: "Los registros están divididos en campos que contienen cada una de las informaciones elementales que forman un registro. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Verdadero", correct: true, explanation: "Verdadero: un registro agrupa campos; cada campo contiene un valor atómico del registro." },
        { key: "F", text: "Falso", correct: false, explanation: "No: la afirmación es correcta." },
      ],
    },
    {
      id: 12,
      q: "El lenguaje habitual para construir las consultas a bases de datos relacionales es DDL. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Verdadero", correct: false, explanation: "No: DDL es para definir estructuras. Las consultas se escriben con DML (por ejemplo SELECT)." },
        { key: "F", text: "Falso", correct: true, explanation: "Correcto: las consultas usan DML; decir que usan DDL es falso." },
      ],
    },
    {
      id: 13,
      q: "En los ficheros de acceso directo se puede acceder a un registro indicando la posición relativa del mismo dentro del archivo o bien, a través de una clave que forma parte del registro como un campo más. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: true, explanation: "Verdadero: el acceso directo permite ubicación por posición o por clave (mediante hashing o índices)." },
        { key: "F", text: "Fals", correct: false, explanation: "La afirmación es verdadera." },
      ],
    },
    {
      id: 14,
      q: "Para una base de datos, sólo existirá un único esquema externo, un único esquema conceptual y podrían existir varios esquemas internos definidos para uno o varios usuarios. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: false, explanation: "La afirmación es incorrecta: normalmente hay varios esquemas externos (vistas para usuarios) y varios esquemas internos según el sistema; por eso este enunciado es falso." },
        { key: "F", text: "Fals", correct: true, explanation: "Correcto: la afirmación es falsa (hay múltiples esquemas externos y normalmente un esquema conceptual único)." },
      ],
    },
    {
      id: 15,
      q: "Normalmente, en cada operación de lectura/grabación se transfieren varios registros del fichero, es decir un _____ y suele contener varios registros lógicos.",
      options: [
        { key: "a", text: "campo", correct: false, explanation: "Un campo es una unidad más pequeña que un registro; la unidad transferida suele ser un bloque." },
        { key: "b", text: "archivo", correct: false, explanation: "El archivo es la colección completa; la unidad de transferencia suele ser un bloque." },
        { key: "c", text: "bloque", correct: true, explanation: "Correcto: un 'bloque' (o registro físico) contiene varios registros lógicos y se transfiere en operaciones I/O." },
        { key: "d", text: "registro", correct: false, explanation: "Se transfieren varios registros dentro de un bloque, no normalmente un solo registro." },
      ],
    },
    {
      id: 16,
      q: "El porcentaje de registros consultados o modificados en cada tratamiento del fichero, respecto al número total de registros contenidos en él, se denomina:",
      options: [
        { key: "a", text: "Frecuencia de consulta.", correct: false, explanation: "No es la terminología que usa el test." },
        { key: "b", text: "Tasa de consulta.", correct: true, explanation: "Correcto según tu test: la tasa de consulta indica el porcentaje de registros consultados/actualizados en un tratamiento." },
        { key: "c", text: "Frecuencia de renovación.", correct: false, explanation: "No es la terminología correcta aquí." },
        { key: "d", text: "Tasa de renovación.", correct: false, explanation: "Similar pero en tu test la respuesta correcta es 'tasa de consulta'." },
      ],
    },
    {
      id: 17,
      q: "En los ficheros de acceso directo, aquellos en los que la dirección física de un registro se obtiene a través de una transformación matemática en la que interviene la clave, reciben el nombre de Ficheros de Acceso Directo Indexado. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: false, explanation: "Si la dirección se obtiene por una transformación matemática (hash), eso es acceso directo por hashing; no se suele llamar 'indexado' en ese caso." },
        { key: "F", text: "Fals", correct: true, explanation: "Correcto: la afirmación es falsa; la descripción corresponde a acceso directo mediante hashing, no a acceso indexado." },
      ],
    },
    {
      id: 18,
      q: "La forma visual del modelo jerárquico de bases de datos es de árbol, en la parte inferior están los padres y en la superior los hijos. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: false, explanation: "La afirmación está invertida: normalmente en la representación de un árbol los padres están arriba y los hijos debajo." },
        { key: "F", text: "Fals", correct: true, explanation: "Correcto: la afirmación es falsa; padres arriba y hijos abajo." },
      ],
    },
    {
      id: 19,
      q: "En los ficheros secuenciales suele haber una marca indicativa del fin del fichero, que suele denominarse EOF. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: true, explanation: "Verdadero: EOF (End Of File) es la marca que indica el final en muchos ficheros secuenciales." },
        { key: "F", text: "Fals", correct: false, explanation: "No: la afirmación es verdadera." },
      ],
    },
    {
      id: 20,
      q: "¿Cuál de los siguientes sistemas gestores de base de datos no es comercial?",
      options: [
        { key: "a", text: "Foxpro.", correct: false, explanation: "FoxPro fue un producto comercial (Microsoft/antes)."}, 
        { key: "b", text: "DB2.", correct: false, explanation: "DB2 es comercial (IBM)."}, 
        { key: "c", text: "Firebird.", correct: true, explanation: "Correcto: Firebird es un SGBD open source (no comercial en su núcleo)."}, 
        { key: "d", text: "Informix.", correct: false, explanation: "Informix es un SGBD comercial (IBM)."}, 
      ],
    },
    {
      id: 21,
      q: "Al tipo de ficheros que almacenan datos de una aplicación que no pueden ser mantenidos en memoria principal por falta de espacio, se le denomina ficheros intermedios. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: false, explanation: "La afirmación del test es que esto no es correcto." },
        { key: "F", text: "Fals", correct: true, explanation: "Correcto: la afirmación es falsa según el test (los ficheros intermedios se usan para operaciones temporales, no son exactamente lo descrito)."},
      ],
    },
    {
      id: 22,
      q: "¿Cuál de los siguientes no es un tipo de base de datos documental?",
      options: [
        { key: "a", text: "Directorios.", correct: true, explanation: "Correcto: 'Directorios' no se considera en ese listado como base de datos documental." },
        { key: "b", text: "Bases de datos referenciales.", correct: false, explanation: "No: son otro tipo de bases de datos." },
        { key: "c", text: "Bases de datos de texto completo.", correct: false, explanation: "Pueden considerarse dentro de datos documentales para búsqueda de texto." },
        { key: "d", text: "Archivos electrónicos de imágenes.", correct: false, explanation: "También pueden formar parte del conjunto documental (imágenes electrónicas)."},
      ],
    },
    {
      id: 23,
      q: "Un SAN corresponde a:",
      options: [
        { key: "a", text: "Una matriz de discos redundantes independientes.", correct: false, explanation: "Ese concepto se parece más a RAID o a una matriz de discos; no define SAN." },
        { key: "b", text: "Una red de área de almacenamiento.", correct: true, explanation: "Correcto: SAN = Storage Area Network, una red dedicada al almacenamiento." },
        { key: "c", text: "Un sistema de almacenamiento masivo en red.", correct: false, explanation: "Podría confundirse con NAS; la definición más precisa es red de área de almacenamiento." },
        { key: "d", text: "Un sistema de red almacenado.", correct: false, explanation: "No es una definición estándar." },
      ],
    },
    {
      id: 24,
      q: "¿Cuál de los siguientes sistemas gestores de base de datos libres está escrito en Java?",
      options: [
        { key: "a", text: "Apache Derby.", correct: true, explanation: "Correcto: Apache Derby (también conocido como JavaDB) está escrito en Java." },
        { key: "b", text: "MySQL.", correct: false, explanation: "MySQL está escrito principalmente en C/C++." },
        { key: "c", text: "SQLite.", correct: false, explanation: "SQLite está escrito en C." },
        { key: "d", text: "PostgreSQL.", correct: false, explanation: "PostgreSQL está escrito en C." },
      ],
    },
    {
      id: 25,
      q: "Al número de registros físicos que entran en un registro lógico se le conoce con el nombre de factor de blocaje. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: false, explanation: "La afirmación está invertida: el concepto correcto es registros lógicos por bloque físico, no al revés." },
        { key: "F", text: "Fals", correct: true, explanation: "Correcto: la afirmación es falsa; el factor de blocaje se refiere al número de registros lógicos por bloque físico." },
      ],
    },
    {
      id: 26,
      q: "La cantidad de información que es transferida entre el soporte en el que se almacena el fichero, y la memoria secundaria del ordenador, en una sola operación de lectura/grabación, recibe el nombre de:",
      options: [
        { key: "a", text: "Registro lógico.", correct: false, explanation: "Un registro lógico es una unidad de datos, no la unidad de transferencia física." },
        { key: "b", text: "Registro físico.", correct: false, explanation: "No: en el test la respuesta esperada es otra." },
        { key: "c", text: "Ninguna respuesta es correcta, ya que la transferencia se hace con memoria principal.", correct: true, explanation: "Correcto según tu copia: aquí la respuesta del sistema señala que la transferencia se considera con memoria principal (nota: la lógica del enunciado del test es particular, así que seguimos la fuente original)." },
        { key: "d", text: "Factor de blocaje.", correct: false, explanation: "El factor de blocaje indica registros por bloque, no la cantidad transferida directamente." },
      ],
    },
    {
      id: 27,
      q: "En una base de datos también se almacena una descripción de los datos, es lo que se denomina metadatos, se almacena en el catálogo y es lo que permite que exista independencia de datos lógica-física. ¿Verdadero o Falso?",
      options: [
        { key: "V", text: "Vertader", correct: true, explanation: "Verdadero: los metadatos (almacenados en el catálogo) permiten la independencia lógica-física al separar la descripción de los datos de su almacenamiento físico." },
        { key: "F", text: "Fals", correct: false, explanation: "No: la afirmación es verdadera." },
      ],
    },
    {
      id: 28,
      q: "Dentro de las funciones de los sistemas gestores de base de datos, la función de descripción se realiza mediante el lenguaje:",
      options: [
        { key: "a", text: "DCL.", correct: false, explanation: "DCL (Data Control Language) es para permisos (GRANT/REVOKE), no para describir estructuras." },
        { key: "b", text: "DDL.", correct: true, explanation: "Correcto: DDL (Data Definition Language) contiene sentencias para definir la estructura y describir esquemas (CREATE, ALTER, DROP)." },
        { key: "c", text: "SCL.", correct: false, explanation: "SCL no es un acrónimo estándar en este contexto." },
        { key: "d", text: "DML.", correct: false, explanation: "DML manipula datos (SELECT, INSERT...), no describe estructuras." },
      ],
    },
    {
      id: 29,
      q: "En el modelo relacional de bases de datos, las tablas deben cumplir una serie de requisitos, ¿Cuál de los siguientes no es correcto?",
      options: [
        { key: "a", text: "La tabla sólo puede tener un tipo de registro.", correct: false, explanation: "Cada tabla tiene un tipo de registro homogéneo (los registros siguen el mismo formato), por lo que esta afirmación se considera correcta." },
        { key: "b", text: "Todos los campos son del mismo tipo.", correct: true, explanation: "Correcto (respuesta del test): es falso que todos los campos deban ser del mismo tipo; los campos pueden tener tipos distintos (int, varchar, date...)." },
        { key: "c", text: "No existen campos o atributos repetidos.", correct: false, explanation: "Correcto: no deben repetirse atributos en el mismo esquema." },
        { key: "d", text: "No existen registros duplicados.", correct: false, explanation: "Correcto: idealmente una tabla no debe contener registros duplicados si existe una clave primaria que los evite." },
      ],
    },
    {
      id: 30,
      q: "¿Cual de los siguientes no es un fichero de tipo permanente?",
      options: [
        { key: "a", text: "Maestro.", correct: false, explanation: "El fichero maestro suele ser permanente (almacena datos principales)." },
        { key: "b", text: "Histórico.", correct: false, explanation: "El fichero histórico también suele ser permanente (registro de eventos pasados)." },
        { key: "c", text: "Constante.", correct: false, explanation: "Se considera permanente dentro del contexto dado." },
        { key: "d", text: "De maniobra.", correct: true, explanation: "Correcto: los ficheros de maniobra son operativos o temporales, no ficheros permanentes." },
      ],
    },
  ];

  const current = questions[index];

  // --- FUNCIONES ---
  const selectOption = (qId: number, option: Option) => {
    if (answers[qId]) return; // evita cambiar después de responder
    setAnswers(prev => ({ ...prev, [qId]: option.key }));
    setShowExp({ qId, option });
  };

  const next = () => {
    setShowExp(null);
    if (index < questions.length - 1) setIndex(prev => prev + 1);
    else {
      if (onFinish) onFinish(answers);
    }
  };

  const prev = () => {
    setShowExp(null);
    if (index > 0) setIndex(prev => prev - 1);
  };

  const isCorrect = (q: Question, key: string): boolean => {
    return q.options.find(o => o.key === key)?.correct ?? false;
  };

  const score = Object.keys(answers).reduce((acc, qid) => {
    const q = questions.find(q => q.id === Number(qid));
    const key = answers[Number(qid)];
    return acc + (q && isCorrect(q, key) ? 1 : 0);
  }, 0);

  const restart = () => {
    setIndex(0);
    setAnswers({});
    setShowExp(null);
  };

  // --- RENDERIZADO ---
  return (
    <div className={`max-w-3xl mx-auto p-4 ${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 transition-all">
        <header className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">Bloque 1 — Práctica interactiva</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Repasa con las preguntas del test y recibe explicación inmediata.</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Pregunta {index + 1} / {questions.length}</div>
            <button
              onClick={restart}
              className="mt-2 text-xs px-3 py-1 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Reiniciar quiz
            </button>
          </div>
        </header>

        <main className="mt-4">
          <p className="text-md leading-relaxed dark:text-gray-200">{current.q}</p>

          <div className="mt-4 grid gap-3">
            {current.options.map(opt => {
              const selected = answers[current.id] === opt.key;
              const revealed = !!answers[current.id];
              const correct = opt.correct;

              let base =
                "cursor-pointer rounded-lg p-3 border flex items-center justify-between transition-all duration-200";

              if (!revealed) base += " hover:shadow-lg hover:scale-[1.01]";
              if (revealed && selected)
                base += correct
                  ? " border-green-500 bg-green-50 dark:bg-green-900/40"
                  : " border-red-500 bg-red-50 dark:bg-red-900/40";
              else if (revealed && correct) base += " border-green-300 dark:border-green-500";
              else base += " border-gray-300 dark:border-gray-600";

              return (
                <button
                  key={opt.key}
                  className={base}
                  onClick={() => selectOption(current.id, opt)}
                  disabled={!!answers[current.id]}
                >
                  <div className="text-left">
                    <div className="font-medium">{opt.key}. {opt.text}</div>
                  </div>
                  {selected && <div className="text-xs text-gray-500">✓</div>}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <button
                onClick={prev}
                className="px-3 py-1 rounded-md border mr-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                disabled={index === 0}
              >
                Anterior
              </button>
              <button
                onClick={next}
                className={`px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition ${
                  !answers[current.id] ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!answers[current.id]}
              >
                Siguiente
              </button>
            </div>

            <div className="text-sm text-gray-700 dark:text-gray-300">
              Contestadas: {Object.keys(answers).length} — Puntuación: {score}
            </div>
          </div>
        </main>
      </div>

      {/* MODAL EXPLICACIÓN */}
      {showExp && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowExp(null)} />
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-xl mx-4 p-6 z-50">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Explicación</h3>
            <p className="mt-3 text-sm leading-relaxed dark:text-gray-300">
              {showExp.option.explanation}
            </p>
            <div className="mt-4 text-right">
              <button
                className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 mr-2"
                onClick={() => setShowExp(null)}
              >
                Cerrar
              </button>
              <button
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                onClick={next}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FINAL */}
      {index === questions.length - 1 &&
        Object.keys(answers).length === questions.length && (
          <div className="mt-4 text-center">
            <div className="inline-block bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
              <div className="text-lg font-medium">¡Has completado el test!</div>
              <div className="mt-2">
                Puntuación final: <span className="font-semibold">{score}</span> / {questions.length}
              </div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Puedes revisar las preguntas anteriores o volver a intentarlo con el botón.
              </div>
              <div className="mt-4">
                <button
                  onClick={restart}
                  className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                >
                  Reiniciar quiz
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

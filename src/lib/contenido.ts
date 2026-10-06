/**
 * Todo el contenido del sitio en un solo archivo. En la web real esto vive en
 * WordPress; aquí está junto para poder revisarlo y cambiarlo de una vez.
 *
 * El centro es de ejemplo. Los nombres del equipo, los textos y los datos de
 * contacto son inventados.
 */

export const CENTRO = {
  nombre: "Centro Araucaria",
  bajada: "Mediación familiar y asistencia jurídica en la Región Metropolitana",
  entrada:
    "Si está separándose, discutiendo una pensión de alimentos o el cuidado de sus hijos, aquí le explicamos qué opciones tiene antes de que tome ninguna decisión.",
  direccion: "Av. Providencia 1540, oficina 403",
  comuna: "Providencia, Santiago",
  telefono: "+56 2 2345 6789",
  whatsapp: "56930001122",
  correo: "contacto@centroaraucaria.cl",
  horario: "Lunes a viernes, de 9:00 a 18:30",
};

export const MENU = [
  { href: "/mediacion", rotulo: "Mediación familiar" },
  { href: "/juridica", rotulo: "Asistencia jurídica" },
  { href: "/orientador", rotulo: "¿Qué necesito?" },
  { href: "/nosotros", rotulo: "Nosotros" },
  { href: "/recursos", rotulo: "Recursos" },
  { href: "/contacto", rotulo: "Contacto" },
];

export const FOTOS = {
  sala: { id: "photo-1605797491749-0c6989a44356", alt: "La sala de mediación, con mesa ovalada de madera y luz natural" },
  conversacion: { id: "photo-1592541603780-7dbbdc334b8a", alt: "Dos personas conversando con un café sobre la mesa" },
  documentos: { id: "photo-1649655232971-3e1543989684", alt: "Documentos sobre una mesa de madera durante una consulta" },
  cafe: { id: "photo-1710362921917-2e33bb342a23", alt: "Una conversación con cuadernos y café, sin pantallas de por medio" },
  salaGrande: { id: "photo-1517502884422-41eaead166d4", alt: "La sala grande, para reuniones con más personas" },
};

export const url = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

export const SERVICIOS = [
  {
    clave: "mediacion",
    titulo: "Mediación familiar",
    resumen: "Un acuerdo escrito, sin juicio, sobre pensión de alimentos, cuidado personal y relación directa y regular.",
    href: "/mediacion",
  },
  {
    clave: "juridica",
    titulo: "Asistencia jurídica",
    resumen: "Representación y asesoría cuando el acuerdo no es posible, o cuando hace falta llevarlo a tribunales.",
    href: "/juridica",
  },
];

export const EQUIPO = [
  {
    nombre: "Carolina Pérez Undurraga",
    cargo: "Mediadora familiar",
    detalle: "Trabaja con familias en procesos de separación desde hace once años. Dirige el área de mediación.",
  },
  {
    nombre: "Rodrigo Sepúlveda Lara",
    cargo: "Abogado, área de familia",
    detalle: "Lleva causas de alimentos y cuidado personal. Se encarga de los casos que no llegan a acuerdo.",
  },
  {
    nombre: "Javiera Cortés Bustos",
    cargo: "Trabajadora social",
    detalle: "Acompaña a las familias antes y después de la sesión, y hace los informes cuando el tribunal los pide.",
  },
  {
    nombre: "Matías Oyarzún Ríos",
    cargo: "Coordinador de casos",
    detalle: "Es quien contesta el teléfono, agenda las sesiones y explica el procedimiento la primera vez.",
  },
];

export const RECURSOS = [
  {
    slug: "que-es-mediacion",
    titulo: "Qué es exactamente una mediación familiar",
    resumen: "Quién está en la sala, cuánto dura, qué pasa si no hay acuerdo y por qué no es un juicio.",
    minutos: 5,
    cuerpo: [
      ["p", "Mucha gente llega pensando que una mediación es un juicio chico. No lo es, y la diferencia cambia cómo conviene prepararse."],
      ["h2", "Quién está en la sala"],
      ["p", "Las dos partes y un mediador. El mediador no decide nada, no da la razón a nadie y no representa a ninguno de los dos. Su trabajo es que la conversación avance hasta un acuerdo que las dos personas puedan cumplir."],
      ["p", "No hace falta ir con abogado. Puede ir si quiere, y es razonable consultar uno antes de firmar."],
      ["h2", "Cuánto dura"],
      ["p", "Una sesión dura entre una y dos horas. Lo normal son dos o tres sesiones, separadas por una o dos semanas, para que cada parte pueda pensar entre medio."],
      ["h2", "Qué pasa si no hay acuerdo"],
      ["p", "Se levanta un acta diciendo que la mediación se intentó y no hubo acuerdo. Con esa acta se puede ir a tribunales. No es un fracaso: es el paso que la ley pide antes de demandar en varias materias."],
      ["h2", "Qué pasa si sí hay acuerdo"],
      ["p", "El acuerdo se escribe y se envía al tribunal para que lo apruebe. Una vez aprobado, vale igual que una sentencia: si después no se cumple, se puede exigir su cumplimiento."],
    ],
  },
  {
    slug: "antes-de-la-primera-sesion",
    titulo: "Qué llevar a la primera sesión",
    resumen: "Los papeles que sirven, los que no hacen falta, y qué conviene tener pensado antes de entrar.",
    minutos: 4,
    cuerpo: [
      ["p", "La primera sesión rinde mucho más cuando uno llega con dos o tres cosas claras. No se trata de llegar con una carpeta enorme."],
      ["h2", "Lo que sirve llevar"],
      ["ul", [
        "Cédula de identidad.",
        "Certificado de nacimiento de los hijos, si lo tiene a mano.",
        "Las últimas tres liquidaciones de sueldo, o lo que use para acreditar ingresos si trabaja por cuenta propia.",
        "Un detalle de los gastos mensuales de los niños: colegio, salud, transporte.",
      ]],
      ["h2", "Lo que no hace falta"],
      ["p", "Mensajes, capturas de pantalla ni pruebas de lo que hizo la otra persona. En mediación no se juzga quién tuvo la culpa. Ese material es para un juicio, y aquí no cumple ninguna función."],
      ["h2", "Lo que conviene tener pensado"],
      ["p", "Qué necesita de verdad, y qué está dispuesto a ceder. Quien llega sin eso resuelto se pasa la primera sesión entera descubriéndolo en voz alta."],
    ],
  },
  {
    slug: "pension-de-alimentos",
    titulo: "Pensión de alimentos: lo que se conversa",
    resumen: "Cómo se calcula, qué incluye además del monto y qué pasa cuando cambian los ingresos.",
    minutos: 6,
    cuerpo: [
      ["p", "Es la materia que más llega a mediación, y casi siempre la conversación se traba en el monto cuando lo que falta acordar son otras cuatro cosas."],
      ["h2", "No es sólo el monto"],
      ["ul", [
        "Cada cuánto se paga y por qué vía.",
        "Qué incluye: si el colegio y la salud van aparte o adentro.",
        "Cómo se reajusta con el tiempo.",
        "Qué pasa con los gastos extraordinarios, como un tratamiento dental o un viaje de estudios.",
      ]],
      ["p", "Un acuerdo que fija un monto y no dice nada de lo demás vuelve a discusión en menos de un año."],
      ["h2", "Cuando cambian los ingresos"],
      ["p", "Si quien paga pierde el trabajo, o si quien recibe mejora mucho su situación, el acuerdo se puede revisar. Conviene dejar escrito desde el principio cómo se pide esa revisión, para no tener que empezar de cero."],
    ],
  },
];

/** Lo que el orientador responde. No es asesoría legal: es a qué puerta tocar. */
export interface Camino {
  clave: string;
  titulo: string;
  texto: string;
  tono: "mediacion" | "juridica" | "derivacion";
  acciones: { rotulo: string; href: string }[];
}

export const CAMINOS: Record<string, Camino> = {
  mediacion: {
    clave: "mediacion",
    titulo: "Lo suyo empieza por una mediación",
    tono: "mediacion",
    texto:
      "Por lo que nos cuenta, su caso se trabaja primero en mediación: se busca un acuerdo escrito entre las dos partes, sin juicio. Si no se llega a acuerdo, queda constancia y desde ahí se puede ir a tribunales.",
    acciones: [
      { rotulo: "Ver cómo es una mediación", href: "/mediacion" },
      { rotulo: "Pedir una hora", href: "/contacto" },
    ],
  },
  juridica: {
    clave: "juridica",
    titulo: "Lo suyo es asistencia jurídica",
    tono: "juridica",
    texto:
      "Lo que describe no se resuelve con un acuerdo entre partes: necesita asesoría y, probablemente, representación. En la primera reunión le decimos con franqueza si hay algo que hacer y cuánto cuesta.",
    acciones: [
      { rotulo: "Ver asistencia jurídica", href: "/juridica" },
      { rotulo: "Pedir una hora", href: "/contacto" },
    ],
  },
  urgencia: {
    clave: "urgencia",
    titulo: "Esto no se resuelve en una mediación",
    tono: "derivacion",
    texto:
      "Cuando hay violencia o riesgo para alguien de la familia, la mediación no corresponde: sentar a las dos partes en la misma mesa puede empeorar la situación. Lo que corresponde es una vía de protección, y eso se pide directamente en tribunales o en carabineros. Si quiere, le explicamos el camino por teléfono, sin costo y sin dejar registro en este sitio.",
    acciones: [{ rotulo: "Hablar con alguien ahora", href: "/contacto" }],
  },
  consulta: {
    clave: "consulta",
    titulo: "Conviene una consulta antes de decidir",
    tono: "juridica",
    texto:
      "Por lo que cuenta, todavía no está claro qué vía le sirve. Una consulta de media hora alcanza para saberlo, y es lo que recomendamos antes de empezar cualquier trámite.",
    acciones: [{ rotulo: "Pedir una consulta", href: "/contacto" }],
  },
};

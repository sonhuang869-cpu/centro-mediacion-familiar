/**
 * El orientador. No da asesoría legal: decide a qué puerta de este centro
 * conviene tocar, y cuándo la respuesta es que aquí no es.
 *
 * Es una función pura, para poder probarla y para que la pantalla no tenga
 * lógica dentro.
 */
import { CAMINOS, type Camino } from "./contenido";

export type Materia = "alimentos" | "cuidado" | "visitas" | "separacion" | "otra";
export type Riesgo = "si" | "no";
export type Causa = "si" | "no" | "nose";
export type Disposicion = "si" | "nose" | "no";

export interface Respuestas {
  materia?: Materia;
  riesgo?: Riesgo;
  causa?: Causa;
  disposicion?: Disposicion;
}

export const MATERIAS: { clave: Materia; rotulo: string }[] = [
  { clave: "alimentos", rotulo: "Pensión de alimentos" },
  { clave: "cuidado", rotulo: "Con quién viven los hijos" },
  { clave: "visitas", rotulo: "Visitas o régimen de contacto" },
  { clave: "separacion", rotulo: "Separación o divorcio" },
  { clave: "otra", rotulo: "Otra cosa, o todavía no sé" },
];

/** Las materias que en este centro parten por mediación. */
export const MEDIABLES: Materia[] = ["alimentos", "cuidado", "visitas"];

export function decidir(r: Respuestas): Camino | null {
  // El riesgo manda sobre todo lo demás y corta el cuestionario.
  if (r.riesgo === "si") return CAMINOS.urgencia;
  if (!r.materia || !r.riesgo) return null;

  if (r.materia === "otra") return CAMINOS.consulta;
  if (r.materia === "separacion") return CAMINOS.juridica;

  if (!r.causa) return null;
  // Con una causa ya abierta, la puerta es la jurídica, no la mediación.
  if (r.causa === "si") return CAMINOS.juridica;
  if (r.causa === "nose") return CAMINOS.consulta;

  if (!r.disposicion) return null;
  // Aunque la otra parte no quiera conversar, la mediación igual se intenta:
  // de ahí sale el acta que permite seguir en tribunales.
  return CAMINOS.mediacion;
}

/** Cuántas preguntas quedan, para la barra de avance. */
export function faltan(r: Respuestas): number {
  if (r.riesgo === "si") return 0;
  let total = 2;
  if (r.materia && MEDIABLES.includes(r.materia)) total = 4;
  const hechas = [r.materia, r.riesgo, r.causa, r.disposicion].filter(Boolean).length;
  return Math.max(0, total - hechas);
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CircleHelp, RotateCcw } from "lucide-react";
import { Seccion, Aviso } from "@/componentes/Bloques";
import { SalidaRapida } from "@/componentes/SalidaRapida";
import { MATERIAS, MEDIABLES, decidir, faltan, type Materia, type Respuestas } from "@/lib/orientador";

type Clave = keyof Respuestas;

const TONO = {
  mediacion: "border-calma/40 bg-calma/10",
  juridica: "border-primary/30 bg-primary/5",
  derivacion: "border-arcilla/50 bg-arcilla/10",
} as const;

function Pregunta({ titulo, ayuda, opciones, valor, alElegir, nombre }: {
  titulo: string; ayuda?: string; nombre: string;
  opciones: { clave: string; rotulo: string }[];
  valor?: string; alElegir: (v: string) => void;
}) {
  return (
    <fieldset className="border-t border-border pt-6">
      <legend className="sr-only">{titulo}</legend>
      <h2 className="text-xl font-semibold">{titulo}</h2>
      {ayuda && <p className="mt-1 text-sm text-muted-foreground">{ayuda}</p>}
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {opciones.map((o) => (
          <button
            key={o.clave}
            type="button"
            data-teste={`${nombre}-${o.clave}`}
            aria-pressed={valor === o.clave}
            onClick={() => alElegir(o.clave)}
            className={`min-h-13 rounded-sm border px-4 text-left text-sm font-medium transition-colors ${
              valor === o.clave ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-secondary"
            }`}
          >
            {o.rotulo}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function Orientador() {
  const [r, setR] = useState<Respuestas>({});
  const poner = (k: Clave, v: string) =>
    setR((p) => {
      const n = { ...p, [k]: v } as Respuestas;
      // cambiar la materia invalida lo que venía después
      if (k === "materia") { delete n.causa; delete n.disposicion; }
      if (k === "riesgo" && v === "si") { delete n.causa; delete n.disposicion; }
      return n;
    });

  const camino = decidir(r);
  const quedan = faltan(r);
  const mediable = r.materia && MEDIABLES.includes(r.materia as Materia);

  return (
    <Seccion className="py-10 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="-ml-1 inline-flex min-h-11 items-center gap-1.5 px-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden /> Volver al inicio
        </Link>

        <h1 className="mt-2 flex items-center gap-2 text-3xl sm:text-4xl">
          <CircleHelp className="size-7 shrink-0 text-arcilla" aria-hidden /> ¿Qué necesito?
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Cuatro preguntas, menos de un minuto. Al final le decimos a qué puerta tocar, y si
          lo suyo no se resuelve aquí, también se lo decimos.
        </p>

        <Aviso>
          Las respuestas no salen de su navegador: no se envían a ninguna parte y no quedan
          guardadas. Si necesita irse rápido, el botón de arriba borra todo y cierra el sitio.
        </Aviso>

        <div className="mt-8 space-y-7">
          <Pregunta
            nombre="materia"
            titulo="¿Qué es lo que necesita resolver?"
            opciones={MATERIAS.map((m) => ({ clave: m.clave, rotulo: m.rotulo }))}
            valor={r.materia}
            alElegir={(v) => poner("materia", v)}
          />

          {r.materia && (
            <Pregunta
              nombre="riesgo"
              titulo="¿Hay violencia o riesgo para usted o para los niños?"
              ayuda="Se lo preguntamos antes que nada porque cambia completamente lo que corresponde hacer."
              opciones={[{ clave: "no", rotulo: "No" }, { clave: "si", rotulo: "Sí, o no estoy seguro" }]}
              valor={r.riesgo}
              alElegir={(v) => poner("riesgo", v)}
            />
          )}

          {r.riesgo === "no" && mediable && (
            <Pregunta
              nombre="causa"
              titulo="¿Ya hay una causa en tribunales por esto?"
              opciones={[{ clave: "no", rotulo: "No" }, { clave: "si", rotulo: "Sí" }, { clave: "nose", rotulo: "No sé" }]}
              valor={r.causa}
              alElegir={(v) => poner("causa", v)}
            />
          )}

          {r.riesgo === "no" && mediable && r.causa === "no" && (
            <Pregunta
              nombre="disposicion"
              titulo="¿La otra parte estaría dispuesta a conversar?"
              ayuda="Aunque la respuesta sea no, siga: eso no cierra la puerta."
              opciones={[
                { clave: "si", rotulo: "Creo que sí" },
                { clave: "nose", rotulo: "No lo sé" },
                { clave: "no", rotulo: "Creo que no" },
              ]}
              valor={r.disposicion}
              alElegir={(v) => poner("disposicion", v)}
            />
          )}
        </div>

        {quedan > 0 && (
          <p className="mt-8 text-sm text-muted-foreground" data-teste="faltan">
            {quedan === 1 ? "Queda una pregunta." : `Quedan ${quedan} preguntas.`}
          </p>
        )}

        {camino && (
          <div className={`mt-8 rounded-sm border p-5 ${TONO[camino.tono]}`} data-teste="resultado" data-camino={camino.clave}>
            <h2 className="text-2xl">{camino.titulo}</h2>
            <p className="mt-2 leading-relaxed">{camino.texto}</p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              {camino.acciones.map((a, i) => (
                <Link
                  key={a.href}
                  to={a.href}
                  className={`inline-flex min-h-12 items-center justify-center rounded-sm px-5 text-sm font-semibold ${
                    i === 0 ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-secondary"
                  }`}
                >
                  {a.rotulo}
                </Link>
              ))}
            </div>
            {camino.clave === "urgencia" && (
              <div className="mt-4"><SalidaRapida /></div>
            )}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
          <button
            type="button"
            onClick={() => setR({})}
            data-teste="reiniciar"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-border px-4 text-sm font-medium hover:bg-secondary"
          >
            <RotateCcw className="size-4" aria-hidden /> Empezar de nuevo
          </button>
          <p className="text-xs text-muted-foreground">
            Esto no es asesoría legal. Es la forma de saber con qué parte del centro conviene
            hablar, para no perder una visita explicando algo que podía resolverse por teléfono.
          </p>
        </div>
      </div>
    </Seccion>
  );
}

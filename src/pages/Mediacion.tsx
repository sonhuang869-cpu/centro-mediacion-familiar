import { Link } from "react-router-dom";
import { Seccion, Titulo, Aviso } from "@/componentes/Bloques";
import { FOTOS, url } from "@/lib/contenido";

const PASOS = [
  { n: "1", t: "Una llamada", d: "Nos cuenta qué necesita resolver. En diez minutos le decimos si esto es mediación o no, y cuánto cuesta." },
  { n: "2", t: "Invitación a la otra parte", d: "La citamos nosotros. Usted no tiene que pedírselo, y eso suele destrabar la primera conversación." },
  { n: "3", t: "Primera sesión", d: "Entre una y dos horas. Se ordena qué está en discusión y qué no, que casi siempre es menos de lo que parecía." },
  { n: "4", t: "Sesiones de acuerdo", d: "Normalmente una o dos más, separadas por una o dos semanas, para que cada parte pueda pensar." },
  { n: "5", t: "Acta y tribunal", d: "El acuerdo se escribe y se envía al tribunal para que lo apruebe. Aprobado, vale igual que una sentencia." },
];

export default function Mediacion() {
  return (
    <>
      <Seccion className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <Titulo sobre="Mediación familiar">Un acuerdo escrito, sin juicio</Titulo>
          <div className="prosa mt-5 text-[1.05rem]">
            <p>
              La mediación sirve para tres cosas concretas: cuánto se paga de pensión de alimentos,
              con quién viven los hijos y cómo se organiza el contacto con el otro padre o madre.
            </p>
            <p>
              No se discute quién tuvo la culpa de la separación. No hay pruebas, no hay testigos y
              nadie gana. Lo que se busca es un acuerdo que las dos partes puedan cumplir, porque
              un acuerdo que una de las dos no puede cumplir vuelve a tribunales en seis meses.
            </p>
          </div>
        </div>
      </Seccion>

      <Seccion className="pb-12 sm:pb-16">
        <img
          src={url(FOTOS.cafe.id, 1400)}
          alt={FOTOS.cafe.alt}
          width={1400}
          height={700}
          loading="lazy"
          className="aspect-2/1 w-full rounded-sm object-cover"
        />
      </Seccion>

      <Seccion className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <Titulo sobre="El procedimiento">Cómo es, paso a paso</Titulo>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PASOS.map((p) => (
            <li key={p.n} className="rounded-sm border border-border bg-card p-5">
              <span className="titulo text-3xl font-semibold text-arcilla">{p.n}</span>
              <h3 className="mt-1 text-lg font-semibold">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </Seccion>

      <Seccion className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Titulo sobre="Lo que conviene saber">Cuándo la mediación no corresponde</Titulo>
          <div className="prosa mt-5 text-[1.05rem]">
            <p>
              Cuando hay violencia o riesgo para alguien de la familia, sentar a las dos partes en
              la misma mesa puede empeorar la situación. En esos casos no mediamos: le explicamos
              por teléfono qué vía corresponde y a dónde acudir.
            </p>
            <p>
              Tampoco corresponde cuando ya hay una causa abierta por lo mismo y el tribunal ya
              está conociendo el asunto. Ahí lo que hace falta es asesoría, no un acuerdo nuevo.
            </p>
          </div>

          <div className="mt-6">
            <Aviso>
              Si no está seguro de en cuál de estos casos está, el{" "}
              <Link to="/orientador" className="font-semibold underline underline-offset-2">orientador de cuatro preguntas</Link>{" "}
              lo resuelve en un minuto, sin dar su nombre.
            </Aviso>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contacto" className="inline-flex min-h-13 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground">
              Pedir una hora
            </Link>
            <Link to="/juridica" className="inline-flex min-h-13 items-center justify-center rounded-sm border border-border bg-card px-6 text-sm font-semibold hover:bg-secondary">
              Ver asistencia jurídica
            </Link>
          </div>
        </div>
      </Seccion>
    </>
  );
}

import { Link } from "react-router-dom";
import { Seccion, Titulo, Aviso } from "@/componentes/Bloques";
import { FOTOS, url } from "@/lib/contenido";

const AREAS = [
  { t: "Alimentos", d: "Demanda, aumento, rebaja y cumplimiento cuando no se paga lo acordado." },
  { t: "Cuidado personal", d: "Con quién viven los hijos, y qué hacer cuando lo acordado dejó de funcionar." },
  { t: "Relación directa y regular", d: "El régimen de contacto, y los casos en que se incumple de forma reiterada." },
  { t: "Divorcio", d: "De común acuerdo o unilateral, con o sin compensación económica." },
  { t: "Acuerdos ya firmados", d: "Revisión y modificación cuando cambiaron los ingresos o la situación de los niños." },
  { t: "Cumplimiento", d: "Cuando hay una resolución y la otra parte no la cumple." },
];

export default function Juridica() {
  return (
    <>
      <Seccion className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <Titulo sobre="Asistencia jurídica">Cuando el acuerdo no alcanza</Titulo>
            <div className="prosa mt-5 text-[1.05rem]">
              <p>
                No todo se resuelve conversando. Si la otra parte no responde, si ya hay una causa
                abierta, o si lo acordado no se cumple, lo que hace falta es un abogado.
              </p>
              <p>
                En la primera reunión le decimos con franqueza si hay algo que hacer, cuánto puede
                demorar y cuánto cuesta. Si no hay nada que hacer, se lo decimos también: es la
                conversación más barata de las dos.
              </p>
            </div>
          </div>
          <img
            src={url(FOTOS.documentos.id, 900)}
            alt={FOTOS.documentos.alt}
            width={900}
            height={600}
            loading="lazy"
            className="aspect-3/2 w-full rounded-sm object-cover"
          />
        </div>
      </Seccion>

      <Seccion className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <Titulo sobre="Materias">En qué trabajamos</Titulo>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <li key={a.t} className="bg-background p-5">
              <h3 className="text-lg font-semibold">{a.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Titulo sobre="Antes de contratar">Lo que le vamos a preguntar</Titulo>
          <div className="prosa mt-5 text-[1.05rem]">
            <p>
              Para decirle algo útil en la primera reunión necesitamos saber tres cosas: qué se
              acordó antes, si hay algo escrito, y qué cambió desde entonces.
            </p>
            <p>
              Si tiene un acta de mediación, una sentencia o un acuerdo firmado, tráigalo. Si no
              tiene nada, igual venga: la mitad de los casos empieza sin ningún papel.
            </p>
          </div>
          <div className="mt-6">
            <Aviso>
              En varias materias la ley pide intentar una mediación antes de demandar. Si ese es su
              caso, se lo decimos en la primera llamada en vez de cobrarle una reunión para
              averiguarlo.
            </Aviso>
          </div>
          <Link to="/contacto" className="mt-8 inline-flex min-h-13 items-center justify-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground">
            Pedir una reunión
          </Link>
        </div>
      </Seccion>
    </>
  );
}

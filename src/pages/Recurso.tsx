import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seccion } from "@/componentes/Bloques";
import { RECURSOS } from "@/lib/contenido";
import NoEncontrada from "@/pages/NoEncontrada";

export default function Recurso() {
  const { slug = "" } = useParams();
  const r = RECURSOS.find((x) => x.slug === slug);
  if (!r) return <NoEncontrada />;

  return (
    <Seccion className="py-10 sm:py-16">
      <article className="mx-auto max-w-2xl">
        <Link to="/recursos" className="-ml-1 inline-flex min-h-11 items-center gap-1.5 px-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" aria-hidden /> Volver a recursos
        </Link>
        <h1 className="mt-2 text-3xl text-balance sm:text-4xl">{r.titulo}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{r.minutos} min de lectura</p>

        <div className="prosa mt-6 text-[1.05rem]">
          {r.cuerpo.map((bloque, i) => {
            const [tipo, valor] = bloque as [string, string | string[]];
            if (tipo === "h2") return <h2 key={i}>{valor as string}</h2>;
            if (tipo === "ul")
              return (
                <ul key={i}>
                  {(valor as string[]).map((li) => <li key={li}>{li}</li>)}
                </ul>
              );
            return <p key={i}>{valor as string}</p>;
          })}
        </div>

        <div className="mt-10 rounded-sm border border-border bg-secondary/50 p-5">
          <h2 className="text-xl font-semibold">¿Y en su caso?</h2>
          <p className="mt-1.5 text-muted-foreground">
            Cuatro preguntas y le decimos a qué puerta tocar, sin dar su nombre.
          </p>
          <Link to="/orientador" className="mt-4 inline-flex min-h-12 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground">
            Ver qué necesito
          </Link>
        </div>
      </article>
    </Seccion>
  );
}

import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Seccion, Titulo } from "@/componentes/Bloques";
import { RECURSOS } from "@/lib/contenido";

export default function Recursos() {
  return (
    <Seccion className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Titulo sobre="Recursos">Para leer antes de decidir</Titulo>
        <p className="mt-4 text-muted-foreground">
          Lo que más nos preguntan por teléfono, escrito para poder leerlo con calma.
        </p>
        <ul className="mt-8 divide-y divide-border border-y border-border" data-teste="lista-recursos">
          {RECURSOS.map((r) => (
            <li key={r.slug}>
              <Link to={`/recursos/${r.slug}`} className="flex min-h-20 items-start gap-4 py-5 hover:bg-secondary/40">
                <FileText className="mt-1 size-5 shrink-0 text-arcilla" aria-hidden />
                <span>
                  <span className="block text-lg font-semibold">{r.titulo}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{r.resumen}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{r.minutos} min de lectura</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Seccion>
  );
}

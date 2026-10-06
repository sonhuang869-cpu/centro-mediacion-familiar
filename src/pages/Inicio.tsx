import { Link } from "react-router-dom";
import { ArrowRight, CircleHelp, Clock, FileText, Scale, Users } from "lucide-react";
import { Seccion, Titulo } from "@/componentes/Bloques";
import { CENTRO, FOTOS, RECURSOS, SERVICIOS, url } from "@/lib/contenido";

const ICONOS = { mediacion: Users, juridica: Scale };

export default function Inicio() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-arcilla uppercase">
              {CENTRO.comuna}
            </p>
            <h1 className="mt-3 text-4xl leading-[1.1] text-balance sm:text-5xl">{CENTRO.bajada}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{CENTRO.entrada}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/orientador"
                data-teste="ir-orientador"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <CircleHelp className="size-5" aria-hidden /> Ver qué necesito
              </Link>
              <Link
                to="/contacto"
                className="inline-flex min-h-13 items-center justify-center rounded-sm border border-border bg-card px-6 text-sm font-semibold hover:bg-secondary"
              >
                Pedir una hora
              </Link>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 shrink-0" aria-hidden /> {CENTRO.horario}
            </p>
          </div>

          <img
            src={url(FOTOS.sala.id, 1000)}
            alt={FOTOS.sala.alt}
            width={1000}
            height={667}
            fetchPriority="high"
            className="aspect-3/2 w-full rounded-sm object-cover"
          />
        </div>
      </section>

      <Seccion className="py-14 sm:py-20">
        <Titulo sobre="Lo que hacemos">Dos caminos, y conviene saber cuál es el suyo</Titulo>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          La mayoría de la gente llega sin saber si lo que necesita es un acuerdo o un abogado.
          No es lo mismo, cuesta distinto y toma distinto tiempo.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {SERVICIOS.map((s) => {
            const Icono = ICONOS[s.clave as keyof typeof ICONOS];
            return (
              <li key={s.clave}>
                <Link
                  to={s.href}
                  className="flex h-full flex-col gap-3 rounded-sm border border-border bg-card p-6 transition-colors hover:bg-secondary/60"
                >
                  <Icono className="size-6 text-primary" aria-hidden />
                  <h3 className="text-xl font-semibold">{s.titulo}</h3>
                  <p className="flex-1 text-muted-foreground">{s.resumen}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Ver cómo funciona <ArrowRight className="size-4" aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-sm border border-arcilla/40 bg-accent/40 p-6">
          <h3 className="text-xl font-semibold">¿No sabe cuál de los dos?</h3>
          <p className="mt-2 text-muted-foreground">
            Cuatro preguntas, menos de un minuto, sin dar su nombre ni su correo. Las respuestas
            no salen de su navegador.
          </p>
          <Link
            to="/orientador"
            className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-sm bg-arcilla px-5 text-sm font-semibold text-white"
          >
            <CircleHelp className="size-4" aria-hidden /> Responder las cuatro preguntas
          </Link>
        </div>
      </Seccion>

      <Seccion className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={url(FOTOS.conversacion.id, 900)}
            alt={FOTOS.conversacion.alt}
            width={900}
            height={600}
            loading="lazy"
            className="aspect-3/2 w-full rounded-sm object-cover"
          />
          <div>
            <Titulo sobre="Cómo es">Una conversación, no un juicio</Titulo>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              En una mediación nadie da la razón a nadie. Un tercero conduce la conversación hasta
              un acuerdo que las dos partes puedan cumplir, y ese acuerdo se envía al tribunal para
              que lo apruebe.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Si no hay acuerdo, queda constancia de que se intentó, y desde ahí se puede seguir
              en tribunales. No se pierde el tiempo.
            </p>
            <Link to="/mediacion" className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Ver el procedimiento completo <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Seccion>

      <Seccion className="py-14 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Titulo sobre="Recursos">Para leer antes de decidir</Titulo>
          <Link to="/recursos" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Ver todos <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {RECURSOS.map((r) => (
            <li key={r.slug}>
              <Link to={`/recursos/${r.slug}`} className="flex h-full flex-col gap-2 rounded-sm border border-border bg-card p-5 transition-colors hover:bg-secondary/60">
                <FileText className="size-5 text-arcilla" aria-hidden />
                <h3 className="text-lg font-semibold">{r.titulo}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{r.resumen}</p>
                <span className="text-xs text-muted-foreground">{r.minutos} min de lectura</span>
              </Link>
            </li>
          ))}
        </ul>
      </Seccion>
    </>
  );
}

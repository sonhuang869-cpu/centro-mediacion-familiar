import { Seccion, Titulo } from "@/componentes/Bloques";
import { CENTRO, EQUIPO, FOTOS, url } from "@/lib/contenido";

const iniciales = (n: string) => n.split(" ").slice(0, 2).map((p) => p[0]).join("");

export default function Nosotros() {
  return (
    <>
      <Seccion className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Titulo sobre="Nosotros">Por qué existe el centro</Titulo>
          <div className="prosa mt-5 text-[1.05rem]">
            <p>
              {CENTRO.nombre} empezó porque veíamos lo mismo todas las semanas: familias que
              llegaban a tribunales por algo que se podía haber conversado, y familias que
              perdieron meses conversando algo que necesitaba un abogado desde el primer día.
            </p>
            <p>
              Trabajamos las dos cosas en el mismo lugar justamente para no empujar a nadie al
              camino equivocado. Cuando lo suyo no es mediación, lo decimos, aunque signifique que
              no nos contrate.
            </p>
            <h2>Nuestra misión</h2>
            <p>
              Que una familia que se está separando pueda decidir con información, y no con miedo.
              Eso significa explicar el procedimiento completo antes de cobrar nada, y decir los
              precios por teléfono sin que haya que ir a la oficina a preguntarlos.
            </p>
            <h2>Cómo cobramos</h2>
            <p>
              Precio cerrado, dicho antes de empezar. Sin cobros por llamada ni por correo. Si el
              caso cambia de tamaño en el camino, lo conversamos antes, no después.
            </p>
          </div>
        </div>
      </Seccion>

      <Seccion className="pb-12 sm:pb-16">
        <img
          src={url(FOTOS.salaGrande.id, 1400)}
          alt={FOTOS.salaGrande.alt}
          width={1400}
          height={700}
          loading="lazy"
          className="aspect-2/1 w-full rounded-sm object-cover"
        />
      </Seccion>

      <Seccion className="border-t border-border py-14 sm:py-20">
        <Titulo sobre="Equipo">Quién lo va a atender</Titulo>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2" data-teste="equipo">
          {EQUIPO.map((p) => (
            <li key={p.nombre} className="flex gap-4 rounded-sm border border-border bg-card p-5">
              <span
                className="grid size-14 shrink-0 place-items-center rounded-full bg-secondary font-[family-name:var(--font-heading)] text-lg font-semibold text-primary"
                aria-hidden
              >
                {iniciales(p.nombre)}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{p.nombre}</h3>
                <p className="text-sm font-medium text-arcilla">{p.cargo}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.detalle}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Sin fotos de archivo haciéndose pasar por el equipo: cuando el centro mande las suyas,
          van aquí.
        </p>
      </Seccion>
    </>
  );
}

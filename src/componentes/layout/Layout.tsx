import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { CENTRO, MENU } from "@/lib/contenido";
import { Encabezado } from "@/componentes/layout/Encabezado";
import { SalidaRapida } from "@/componentes/SalidaRapida";

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      <Encabezado />
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-16 border-t border-border bg-card">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="titulo text-lg font-semibold">{CENTRO.nombre}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /><span>{CENTRO.direccion}<br />{CENTRO.comuna}</span></li>
                <li className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0" aria-hidden />{CENTRO.telefono}</li>
                <li className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0" aria-hidden />{CENTRO.correo}</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Secciones</p>
              <ul className="mt-3 space-y-1.5">
                {MENU.map((m) => (
                  <li key={m.href}>
                    <Link to={m.href} className="inline-flex min-h-9 items-center text-sm text-muted-foreground hover:text-foreground">
                      {m.rotulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Si necesita salir rápido</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Este botón cierra el sitio y borra lo que haya respondido. Está arriba en todas
                las páginas, por si está usando un computador compartido.
              </p>
              <div className="mt-3"><SalidaRapida /></div>
            </div>
          </div>

          <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            Demostración para evaluación. El Centro Araucaria no existe: el nombre, los textos,
            el equipo, la dirección, el teléfono y el correo son inventados. El formulario no
            envía nada a ninguna parte y el orientador decide en su propio navegador, sin mandar
            las respuestas afuera. Nada de lo que aparece aquí es asesoría legal. Montaje previsto
            en WordPress. Justin Gnoh · octubre de 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

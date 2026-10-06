import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { CENTRO, MENU } from "@/lib/contenido";
import { SalidaRapida } from "@/componentes/SalidaRapida";

export function Encabezado() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="border-b border-border/60 bg-secondary/60">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 sm:px-6">
          <a
            href={`tel:${CENTRO.telefono.replace(/\s/g, "")}`}
            className="flex min-h-9 items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden /> {CENTRO.telefono} · {CENTRO.horario}
          </a>
          <SalidaRapida compacto />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-h-11 items-center gap-2.5">
          <span
            className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary font-[family-name:var(--font-heading)] text-lg font-semibold text-primary-foreground"
            aria-hidden
          >
            A
          </span>
          <span className="leading-tight">
            <span className="titulo block text-lg font-semibold">{CENTRO.nombre}</span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Mediación familiar y asistencia jurídica
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Secciones">
          {MENU.map((m) => (
            <NavLink
              key={m.href}
              to={m.href}
              className={({ isActive }) =>
                `flex min-h-11 items-center rounded-sm px-2.5 text-sm font-medium transition-colors ${
                  isActive ? "bg-secondary text-primary" : "text-foreground/75 hover:bg-secondary"
                }`
              }
            >
              {m.rotulo}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          data-teste="menu-boton"
          className="grid size-11 place-items-center rounded-sm border border-border lg:hidden"
        >
          {abierto ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {abierto && (
        <nav className="border-t border-border bg-background lg:hidden" data-teste="menu-movil" aria-label="Secciones">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            {MENU.map((m) => (
              <NavLink
                key={m.href}
                to={m.href}
                onClick={() => setAbierto(false)}
                className="flex min-h-13 items-center border-b border-border/60 text-sm font-medium last:border-0"
              >
                {m.rotulo}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

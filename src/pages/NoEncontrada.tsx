import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { Seccion } from "@/componentes/Bloques";

export default function NoEncontrada() {
  return (
    <Seccion className="py-20">
      <div className="mx-auto max-w-sm text-center">
        <Compass className="mx-auto mb-3 size-10 text-muted-foreground/60" aria-hidden />
        <h1 className="text-2xl">Esa página no existe</h1>
        <p className="mt-2 mb-6 text-sm text-muted-foreground">
          Puede que el enlace esté mal escrito. Desde el inicio se llega a todo.
        </p>
        <Link to="/" className="inline-flex min-h-12 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground">
          Ir al inicio
        </Link>
      </div>
    </Seccion>
  );
}

import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/componentes/layout/Layout";
import Inicio from "@/pages/Inicio";
import NoEncontrada from "@/pages/NoEncontrada";

const Orientador = lazy(() => import("@/pages/Orientador"));
const Mediacion = lazy(() => import("@/pages/Mediacion"));
const Juridica = lazy(() => import("@/pages/Juridica"));
const Nosotros = lazy(() => import("@/pages/Nosotros"));
const Recursos = lazy(() => import("@/pages/Recursos"));
const Recurso = lazy(() => import("@/pages/Recurso"));
const Contacto = lazy(() => import("@/pages/Contacto"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Cargando">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="orientador" element={<Orientador />} />
            <Route path="mediacion" element={<Mediacion />} />
            <Route path="juridica" element={<Juridica />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="recursos" element={<Recursos />} />
            <Route path="recursos/:slug" element={<Recurso />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

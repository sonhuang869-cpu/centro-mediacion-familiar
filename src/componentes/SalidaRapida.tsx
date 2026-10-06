import { X } from "lucide-react";

/**
 * Salida rápida. Patrón de los sitios que atienden a gente que puede estar
 * compartiendo el computador con la persona del conflicto: borra lo respondido
 * y se va del sitio sin dejarlo en el historial de atrás.
 *
 * Funciona de verdad también en esta demostración.
 */
export function SalidaRapida({ compacto }: { compacto?: boolean }) {
  const salir = () => {
    try { sessionStorage.clear(); localStorage.removeItem("orientador"); } catch { /* ignora */ }
    window.location.replace("https://www.google.com");
  };
  return (
    <button
      type="button"
      onClick={salir}
      data-teste="salida-rapida"
      title="Sale del sitio y borra lo respondido"
      className={`inline-flex items-center gap-1.5 rounded-sm border border-arcilla/40 bg-arcilla/10 font-medium text-arcilla transition-colors hover:bg-arcilla/20 ${
        compacto ? "min-h-11 px-3 text-xs" : "min-h-11 px-4 text-sm"
      }`}
    >
      <X className="size-4 shrink-0" aria-hidden /> Salir rápido
    </button>
  );
}

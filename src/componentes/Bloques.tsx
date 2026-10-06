import type { ReactNode } from "react";

export function Seccion({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function Titulo({ sobre, children, centrado }: { sobre?: string; children: ReactNode; centrado?: boolean }) {
  return (
    <div className={centrado ? "text-center" : ""}>
      {sobre && <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-arcilla uppercase">{sobre}</p>}
      <h2 className="text-3xl sm:text-4xl">{children}</h2>
    </div>
  );
}

export function Aviso({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-sm border-l-2 border-arcilla bg-accent/50 px-4 py-3 text-sm leading-relaxed">
      {children}
    </p>
  );
}

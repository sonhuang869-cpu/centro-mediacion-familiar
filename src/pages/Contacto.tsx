import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Seccion, Titulo, Aviso } from "@/componentes/Bloques";
import { CENTRO } from "@/lib/contenido";

const esquema = z.object({
  nombre: z.string().trim().min(2, "Escriba al menos su nombre de pila."),
  contacto: z.string().trim().min(6, "Un teléfono o un correo, el que prefiera."),
  via: z.string().min(1),
  mensaje: z.string().trim().min(10, "Cuéntenos en una línea qué necesita resolver."),
});
type Campos = z.infer<typeof esquema>;

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const form = useForm<Campos>({
    resolver: zodResolver(esquema),
    defaultValues: { nombre: "", contacto: "", via: "telefono", mensaje: "" },
  });

  const enviar = form.handleSubmit(async () => {
    await new Promise((r) => setTimeout(r, 650));
    setEnviado(true);
    toast.success("Mensaje recibido. Le respondemos dentro del día hábil.");
  });

  return (
    <Seccion className="py-12 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <Titulo sobre="Contacto">Pedir una hora</Titulo>
          <p className="mt-4 text-muted-foreground">
            Una llamada de diez minutos suele bastar para saber si lo suyo es mediación o no.
            No cobramos esa llamada.
          </p>

          <ul className="mt-7 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span><span className="block font-semibold">{CENTRO.telefono}</span><span className="text-muted-foreground">{CENTRO.horario}</span></span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span className="text-muted-foreground">{CENTRO.correo}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span className="text-muted-foreground">{CENTRO.direccion}<br />{CENTRO.comuna}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              <span className="text-muted-foreground">Atención con hora. Sin hora no alcanzamos a atender bien.</span>
            </li>
          </ul>

          <div className="mt-7">
            <Aviso>
              Le pedimos lo mínimo: un nombre, una forma de contactarlo y una línea sobre el tema.
              No pida ni mande documentos por este formulario. Lo delicado se conversa en la
              reunión, no por correo.
            </Aviso>
          </div>
        </div>

        <div className="rounded-sm border border-border bg-card p-5 sm:p-7">
          {enviado ? (
            <div data-teste="enviado">
              <p className="flex items-center gap-2 text-xl font-semibold text-primary">
                <Check className="size-6" aria-hidden /> Mensaje recibido
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Le respondemos dentro del día hábil siguiente, por la vía que eligió. Si prefiere
                no esperar, llame al {CENTRO.telefono}.
              </p>
              <Button
                variant="outline"
                className="mt-5 h-11"
                onClick={() => { setEnviado(false); form.reset(); }}
              >
                Escribir otro mensaje
              </Button>
              <p className="mt-5 text-xs text-muted-foreground">
                En esta demostración no se envía nada a ninguna parte. En la web publicada esto
                llega al correo del centro.
              </p>
            </div>
          ) : (
            <form onSubmit={enviar} className="space-y-4" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="nombre">Su nombre</Label>
                <Input id="nombre" {...form.register("nombre")} data-teste="campo-nombre" className="h-11" autoComplete="given-name" />
                {form.formState.errors.nombre && <p className="text-sm text-destructive" role="alert">{form.formState.errors.nombre.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contacto">Teléfono o correo</Label>
                <Input id="contacto" {...form.register("contacto")} data-teste="campo-contacto" className="h-11" />
                {form.formState.errors.contacto && <p className="text-sm text-destructive" role="alert">{form.formState.errors.contacto.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="via">¿Cómo prefiere que le respondamos?</Label>
                <select id="via" {...form.register("via")} data-teste="campo-via" className="h-11 w-full rounded-sm border border-input bg-background px-3 text-sm">
                  <option value="telefono">Llamada</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="correo">Correo</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="mensaje">En una línea, ¿qué necesita resolver?</Label>
                <Textarea id="mensaje" rows={4} {...form.register("mensaje")} data-teste="campo-mensaje" />
                {form.formState.errors.mensaje && <p className="text-sm text-destructive" role="alert">{form.formState.errors.mensaje.message}</p>}
                <p className="text-xs text-muted-foreground">
                  No hace falta contar toda la historia aquí. Con el tema basta para asignarle a la
                  persona correcta.
                </p>
              </div>

              <Button type="submit" className="h-12 w-full" disabled={form.formState.isSubmitting} data-teste="enviar">
                {form.formState.isSubmitting ? "Enviando…" : "Enviar"}
              </Button>

              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden />
                Sus datos se usan sólo para responderle. No se comparten con nadie y no entran en
                ninguna lista de correos.
              </p>
            </form>
          )}
        </div>
      </div>
    </Seccion>
  );
}

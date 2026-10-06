# Centro Araucaria · sitio de un centro de mediación familiar

Maqueta funcionando del sitio de un centro de mediación familiar y asistencia
jurídica: servicios, nosotros con el equipo, formulario de contacto y recursos.

**El centro no existe.** El nombre, los textos, el equipo, la dirección, el
teléfono y el correo son inventados. El formulario no envía nada a ninguna parte.
Nada de lo que aparece es asesoría legal.

## Para qué sirve esta maqueta

El sitio final se monta en WordPress. Esto es la misma web, estática, para cerrar
diseño, estructura y textos antes de consumir horas de montaje en cambios de
opinión.

## Lo que agregué sin que lo pidieran, y por qué

**El botón de salir rápido.** Está arriba en todas las páginas. Borra lo
respondido y sale del sitio sin dejarlo en el historial de atrás. Un centro que
atiende separaciones recibe visitas desde computadores compartidos con la persona
del conflicto; es un patrón habitual en sitios de este tipo y cuesta diez líneas.
Funciona de verdad también en la demostración.

**El orientador de cuatro preguntas.** La mayoría de quien busca un centro de
mediación no sabe si lo que necesita es un acuerdo o un abogado, y llama para
preguntar eso. Cuatro preguntas resuelven la duda sin pedir nombre ni correo, y
las respuestas no salen del navegador.

Tiene cuatro salidas:

| Respuesta | A dónde lleva |
|---|---|
| Alimentos, cuidado o visitas, sin causa abierta | Mediación |
| Hay una causa en tribunales, o es separación o divorcio | Asistencia jurídica |
| **Hay violencia o riesgo** | Corta el cuestionario y deriva: la mediación no corresponde |
| No sabe todavía | Una consulta antes de decidir |

La tercera es la que importa. Un centro serio dice en su propio sitio cuándo no
es el lugar, en vez de dejar que la persona lo descubra en la primera sesión.

**El equipo sin fotos.** Monogramas en vez de caras de banco de imágenes
haciéndose pasar por el equipo. Cuando el centro mande las suyas, van ahí.

**El formulario pide lo mínimo.** Nombre, una forma de contacto y una línea. Sin
adjuntos. En este rubro, pedir menos datos es mejor servicio, no peor.

## Páginas

| Ruta | Qué es |
|---|---|
| `/` | Inicio |
| `/mediacion` | Mediación familiar, con el procedimiento paso a paso |
| `/juridica` | Asistencia jurídica |
| `/orientador` | Las cuatro preguntas |
| `/nosotros` | Misión y equipo |
| `/recursos` y `/recursos/:slug` | Artículos |
| `/contacto` | Formulario con validación |

## Dónde está todo

- `src/lib/contenido.ts` — todos los textos en un solo archivo, como se
  entregarían para llenar WordPress.
- `src/lib/orientador.ts` — la decisión de las cuatro preguntas, como función
  pura, separada de la pantalla.

## Correr

```bash
npm install
npm run dev
npm run build
```

## Stack de la maqueta

Vite · React · TypeScript · Tailwind · React Hook Form · Zod.

Justin Gnoh · octubre de 2026

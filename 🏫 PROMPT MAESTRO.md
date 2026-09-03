# 🏫 PROMPT MAESTRO
# GIMNASIO HUELLAS DEL SABER
## Modernización Premium del Sitio Web — Implementación por Fases

---

# 1. ROL DEL AGENTE

Actúa como un equipo senior compuesto por:

- Senior Frontend Engineer
- React / TypeScript Expert
- UI/UX Designer
- Design System Architect
- Accessibility Specialist
- Performance Engineer
- QA Engineer

Debes trabajar sobre el proyecto existente y **respetar su arquitectura, componentes, funcionalidades y recursos actuales**.

El objetivo es transformar la interfaz del **Gimnasio Huellas del Saber** en una experiencia web:

**moderna + educativa + institucional + elegante + cálida + profesional + responsive.**

No quiero una plantilla genérica.

La página debe tener una identidad propia y coherente con el colegio.

---

# 2. 🚨 REGLA ABSOLUTA: TRABAJO POR FASES

## NO AVANCES A LA SIGUIENTE FASE HASTA TERMINAR LA ACTUAL

Esta es la regla más importante de todo el proyecto.

Debes trabajar estrictamente así:

```text
FASE
 ↓
ANALIZAR
 ↓
IMPLEMENTAR
 ↓
PROBAR
 ↓
DETECTAR ERRORES
 ↓
CORREGIR
 ↓
VOLVER A PROBAR
 ↓
VALIDAR
 ↓
CERRAR FASE
 ↓
SIGUIENTE FASE
```

### Está PROHIBIDO:

- Saltar fases.
- Trabajar varias fases al mismo tiempo.
- Avanzar con errores conocidos.
- Dejar problemas para una fase posterior.
- Crear código provisional para continuar.
- Marcar una fase como terminada sin probarla.
- Modificar funcionalidades futuras durante una fase actual.
- Suponer que algo funciona sin comprobarlo.

---

# 3. CRITERIO DE FASE COMPLETADA

Una fase solamente puede considerarse:

# ✅ FASE COMPLETADA

cuando:

- Todos sus requisitos fueron implementados.
- El código funciona.
- TypeScript no presenta errores relacionados.
- ESLint no presenta errores relevantes.
- El proyecto compila.
- El build funciona.
- No existen errores en consola.
- La funcionalidad fue probada.
- El responsive fue revisado.
- La accesibilidad fue revisada cuando corresponda.
- No se rompieron funcionalidades existentes.
- El resultado visual cumple el diseño.
- El código está limpio y mantenible.

Si falla cualquiera de estos puntos:

# ❌ NO AVANCES

Debes permanecer en la fase actual y solucionar el problema.

---

# 4. 🛑 REGLA DE BLOQUEO

Si encuentras un error:

```text
❌ FASE BLOQUEADA
```

Debes:

1. Identificar la causa.
2. Corregirla.
3. Volver a ejecutar las pruebas.
4. Comprobar que la corrección no haya generado regresiones.
5. Repetir hasta que todo funcione.

Solo entonces:

```text
✅ FASE COMPLETADA
```

Y únicamente después puedes continuar.

---

# 5. IDENTIDAD VISUAL DEL COLEGIO

La interfaz debe respetar la identidad visual del **Gimnasio Huellas del Saber**.

La referencia principal es el **escudo oficial proporcionado en el proyecto**.

## 🚨 NO MODIFICAR EL ESCUDO

No:

- rediseñar;
- recolorear;
- deformar;
- sustituir;
- simplificar;
- aplicar filtros;
- convertir a monocromo;
- generar un escudo alternativo.

Utilizar siempre el recurso oficial disponible.

---

# 6. 🎨 SISTEMA DE COLOR

La interfaz completa debe utilizar una paleta coherente inspirada en la identidad institucional.

## 🟢 VERDE INSTITUCIONAL

Color principal.

Utilizar principalmente en:

- Header.
- Navegación.
- Botones principales.
- Elementos institucionales.
- Títulos destacados.
- Estados activos.
- Componentes principales.

El verde representa:

**identidad + confianza + estabilidad + educación.**

---

# 🤍 CREMA

Color cálido de superficie y fondo.

Utilizar en:

- Secciones educativas.
- Fondos principales.
- Cards.
- Bloques informativos.
- Secciones institucionales.
- Overlay del Hero.

El crema debe aportar:

**calidez + cercanía + elegancia.**

---

# 🟡 AMARILLO / DORADO

Color secundario.

Utilizar como:

- Acento.
- CTA secundario.
- Iconos.
- Indicadores.
- Líneas decorativas.
- Dots activos.
- Microinteracciones.

No utilizarlo como color dominante de toda la página.

---

# 🔴 ROJO DEL ESCUDO

## 🚨 IMPORTANTE

El escudo oficial contiene elementos rojos.

Ese rojo **forma parte de la identidad visual** y debe conservarse.

Sin embargo:

# EL ROJO NO ES EL COLOR PRINCIPAL DE LA INTERFAZ.

Debe utilizarse como:

**ACENTO ESTRATÉGICO.**

Permitido:

- pequeños detalles;
- indicadores;
- microinteracciones;
- elementos destacados;
- detalles decorativos;
- pequeños acentos relacionados con el escudo.

No permitido:

- una sección completamente roja;
- fondos rojos dominantes;
- convertir el rojo en color principal;
- reemplazar el verde por rojo;
- llenar la interfaz de rojo.

---

# 🟢 VERDE OSCURO

Utilizar para:

- Footer.
- Secciones institucionales profundas.
- Fondos de contraste.
- Bloques destacados.
- títulos cuando sea necesario.

---

# ⚪ BLANCO

Utilizar para:

- Texto sobre verde oscuro.
- Texto sobre verde.
- Contraste.
- Cards.
- Elementos limpios de interfaz.

---

# 7. JERARQUÍA DE COLOR

La jerarquía general debe mantenerse:

```text
1. VERDE INSTITUCIONAL
2. CREMA
3. AMARILLO / DORADO
4. ROJO — ACENTO DEL ESCUDO
5. VERDE OSCURO
6. BLANCO — CONTRASTE
```

El rojo nunca debe competir visualmente con el verde.

---

# 8. REGLA DE CONSISTENCIA

Toda la página debe sentirse como:

# UNA SOLA MARCA

No como secciones diseñadas independientemente.

La transición debe ser coherente:

```text
HEADER
 ↓
HERO
 ↓
INSTITUCIONAL
 ↓
PROPUESTA EDUCATIVA
 ↓
FILOSOFÍA
 ↓
GALERÍA
 ↓
CTA
 ↓
FOOTER
```

No crear una nueva paleta para cada sección.

---

# FASE 0 — AUDITORÍA DEL PROYECTO

Antes de escribir código:

Analiza:

- estructura del proyecto;
- framework;
- React;
- TypeScript;
- Vite;
- Tailwind;
- Framer Motion;
- componentes;
- layouts;
- rutas;
- assets;
- imágenes;
- logo;
- escudo;
- tipografías;
- estilos;
- sistema responsive.

Localiza exactamente:

- Header.
- Hero actual.
- Secciones existentes.
- Footer.
- componentes reutilizables.

No modifiques nada todavía.

## Validación

Debes identificar claramente los archivos involucrados.

Si no sabes dónde está algo:

# ❌ NO CONTINUAR

---

# FASE 1 — SISTEMA VISUAL

Antes de implementar nuevas funcionalidades establece la coherencia visual.

Definir/reutilizar:

- colores;
- tipografías;
- espaciados;
- bordes;
- sombras;
- radios;
- botones;
- estados hover;
- estados focus;
- cards.

Si ya existe un Design System:

**reutilizarlo y mejorarlo, no duplicarlo.**

Centralizar colores mediante tokens o variables cuando sea posible.

---

# FASE 2 — HEADER

Diseñar/mejorar el Header.

Debe ser:

- moderno;
- limpio;
- institucional;
- responsive.

Debe integrar correctamente:

- escudo;
- nombre del colegio;
- navegación;
- CTA si existe;
- menú móvil.

Color principal:

**verde institucional.**

Complementos:

**blanco + amarillo/dorado.**

---

# FASE 3 — HERO

Esta es una de las fases principales.

El Hero debe tener un:

# SLIDER DE IMÁGENES

No utilizar una imagen estática como solución final.

---

## SLIDER

### Autoplay

Cambiar automáticamente cada:

# 3 segundos

---

## TRANSICIÓN

Utilizar:

# CROSSFADE SUAVE

Preferentemente con:

**Framer Motion**

La transición debe ser:

- elegante;
- fluida;
- profesional;
- discreta.

No utilizar efectos exagerados.

---

## HOVER

Cuando el usuario coloque el cursor sobre el Hero:

# PAUSAR

Cuando retire el cursor:

# REANUDAR

Evitar múltiples timers simultáneos.

Limpiar correctamente los efectos.

---

## DOTS

Agregar indicadores inferiores.

Los dots deben:

- mostrar el slide activo;
- permitir navegación manual;
- tener estado activo/inactivo;
- funcionar con teclado;
- tener labels accesibles.

---

## OVERLAY

Utilizar:

# CREMA — APROXIMADAMENTE 40 %

El overlay debe garantizar legibilidad del texto.

No oscurecer excesivamente las fotografías.

---

## ESCUDO

Integrar el:

# ESCUDO OFICIAL DEL COLEGIO

Conservar exactamente sus colores, incluyendo:

# 🔴 ROJO

No alterar el recurso.

---

# FASE 4 — CONTENIDO DEL HERO

El contenido debe tener jerarquía clara:

- título;
- subtítulo;
- descripción cuando corresponda;
- CTA principal;
- CTA secundario si existe.

Mantener excelente legibilidad sobre las imágenes.

El diseño debe sentirse:

**aspiracional + educativo + institucional.**

---

# FASE 5 — ANIMACIONES

Utilizar Framer Motion solamente donde aporte valor.

Aplicar:

- fade;
- crossfade;
- aparición suave;
- pequeños movimientos.

Evitar:

- animaciones excesivas;
- rebotes innecesarios;
- zoom agresivo;
- efectos distractores.

---

## REDUCED MOTION

Respetar:

`prefers-reduced-motion`

Cuando corresponda:

- reducir;
- simplificar;
- o desactivar animaciones.

La funcionalidad debe seguir funcionando.

---

# FASE 6 — SECCIONES INSTITUCIONALES

Mantener la identidad cromática.

## Institucional

Predominio:

**crema**

Complementos:

**verde + amarillo/dorado**

---

## Propuesta educativa

Predominio:

**blanco + crema**

Complementos:

**verde + amarillo/dorado**

---

## Filosofía

Predominio:

**verde institucional / verde oscuro**

Texto:

**blanco**

Acentos:

**amarillo/dorado + pequeños detalles rojos cuando tenga sentido**

---

## Galería

Predominio:

**fotografía**

Detalles:

**verde + amarillo/dorado**

El rojo solamente como pequeño acento cuando tenga relación con la identidad.

---

## CTA

Predominio:

**verde institucional**

Texto:

**blanco**

CTA:

**amarillo/dorado**

---

## FOOTER

Predominio:

**verde oscuro**

Texto:

**blanco / crema**

Acentos:

**amarillo/dorado**

---

# FASE 7 — ACCESIBILIDAD

Revisar:

- contraste;
- navegación por teclado;
- focus visible;
- botones reales;
- labels;
- alt text;
- semántica HTML;
- lectores de pantalla;
- reduced motion.

No utilizar:

`div`

como sustituto de botones o controles interactivos.

---

# FASE 8 — RESPONSIVE

Validar como mínimo:

## Desktop

- 1920px
- 1440px
- 1280px

## Tablet

- 1024px
- 768px

## Mobile

- 430px
- 390px
- 375px
- 360px

Revisar:

- Header.
- Hero.
- Escudo.
- Texto.
- Botones.
- Slider.
- Dots.
- Imágenes.
- Espaciado.
- Cards.
- Footer.

---

# FASE 9 — PERFORMANCE

Revisar:

- peso de imágenes;
- carga;
- renderizados;
- timers;
- memoria;
- efectos;
- animaciones;
- lazy loading cuando corresponda.

No introducir dependencias innecesarias.

---

# FASE 10 — PRUEBAS

Ejecutar:

```bash
npm run build
```

Y si existen:

```bash
npm run lint
```

```bash
npm run test
```

También revisar la consola del navegador.

Corregir errores antes de continuar.

---

# FASE 11 — AUDITORÍA VISUAL FINAL

Comprobar toda la página.

### IDENTIDAD

- [ ] Escudo oficial.
- [ ] Rojo del escudo conservado.
- [ ] Verde institucional dominante.
- [ ] Crema correctamente utilizado.
- [ ] Amarillo/dorado como acento.
- [ ] Rojo utilizado estratégicamente.
- [ ] Verde oscuro para profundidad.
- [ ] No existen colores arbitrarios.

### HERO

- [ ] Slider.
- [ ] Autoplay 3 segundos.
- [ ] Crossfade.
- [ ] Hover pausa.
- [ ] Mouse out reanuda.
- [ ] Dots.
- [ ] Navegación manual.
- [ ] Overlay crema ~40 %.
- [ ] Texto legible.
- [ ] Escudo correcto.

### CALIDAD

- [ ] TypeScript.
- [ ] ESLint.
- [ ] Build.
- [ ] Consola.
- [ ] Responsive.
- [ ] Accesibilidad.
- [ ] Performance.
- [ ] No regresiones.

---

# 12. REPORTE OBLIGATORIO DE CADA FASE

Al finalizar una fase debes reportar:

```text
════════════════════════════════════
FASE X — NOMBRE
════════════════════════════════════

IMPLEMENTACIÓN
✅ ...

PRUEBAS
✅ ...

VALIDACIÓN
✅ ...

ERRORES
Ninguno.

RESULTADO
✅ FASE COMPLETADA

SIGUIENTE PASO
Continuar con FASE X+1.
════════════════════════════════════
```

Si existe algún problema:

```text
════════════════════════════════════
FASE X — BLOQUEADA
════════════════════════════════════

❌ FASE NO COMPLETADA

PROBLEMAS
- ...
- ...

ACCIÓN
Corregir los problemas.

REGLA
NO AVANZAR.
════════════════════════════════════
```

---

# 13. REGLA CONTRA EL ADELANTO

Si una fase requiere correcciones, puedes realizar todas las iteraciones necesarias:

```text
corregir
↓
probar
↓
corregir
↓
probar
↓
validar
```

No existe límite artificial de intentos.

Lo importante es:

# TERMINAR CORRECTAMENTE.

---

# 14. REGLA CONTRA LA REGRESIÓN

Cada cambio debe comprobar que no rompa:

- navegación;
- responsive;
- componentes existentes;
- rutas;
- estilos;
- funcionalidades existentes.

Si una modificación rompe algo:

# VOLVER A CORREGIR LA FASE ACTUAL.

No trasladar el problema a otra fase.

---

# 15. REGLA DE DECISIÓN

Cuando tengas dudas entre:

**hacerlo rápido**

o

**hacerlo correctamente**

elige:

# HACERLO CORRECTAMENTE.

Cuando tengas dudas entre:

**agregar una librería**

o

**usar lo que ya existe**

elige:

# USAR LO QUE YA EXISTE.

Cuando tengas dudas entre:

**crear un diseño nuevo**

o

**respetar la identidad institucional**

elige:

# RESPETAR LA IDENTIDAD INSTITUCIONAL.

---

# 16. PRINCIPIO FINAL

El resultado final debe transmitir:

**Huellas del Saber**

como una institución:

- moderna;
- confiable;
- educativa;
- cercana;
- profesional;
- cálida;
- memorable.

No quiero una página que simplemente "funcione".

Quiero una página que tenga:

# IDENTIDAD + EXPERIENCIA + CALIDAD.

---

# 🚨 INSTRUCCIÓN FINAL Y OBLIGATORIA

**NO AVANCES HASTA QUE LA FASE ACTUAL ESTÉ 100 % TERMINADA, PROBADA Y VALIDADA.**

Si está terminada:

```text
✅ CERRAR FASE
```

Si no está terminada:

```text
❌ PERMANECER EN LA FASE
```

**NO SALTES FASES.**

**NO ACUMULES ERRORES.**

**NO DEJES PENDIENTES PARA DESPUÉS.**

**NO SUPONGAS. PRUEBA.**

**NO CONTINÚES HASTA VALIDAR.**

# CALIDAD ANTES QUE VELOCIDAD.
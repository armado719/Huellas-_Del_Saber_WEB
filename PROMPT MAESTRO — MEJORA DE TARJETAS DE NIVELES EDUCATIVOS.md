# PROMPT MAESTRO — MEJORA DE TARJETAS DE NIVELES EDUCATIVOS
## Gimnasio Huellas del Saber
### Fase: 1–2 años · Caminadores

---

# 🚨 REGLA PRINCIPAL DE EJECUCIÓN

Actúa como **Senior Frontend Engineer + React/TypeScript Expert + UI/UX Designer + Accessibility Specialist + QA Engineer**.

Debes modificar la sección existente de **niveles educativos**, específicamente la tarjeta:

# 1 — 2 años · Caminadores

## ⚠️ IMPORTANTE

Esta tarea debe ejecutarse como una **FASE INDEPENDIENTE**.

**NO avances a ninguna otra modificación del proyecto hasta que esta fase esté completamente terminada, probada y validada.**

El ciclo obligatorio es:

```text
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
```

Si existe cualquier error:

# ❌ NO AVANZAR

Permanecer en esta fase hasta solucionarlo.

---

# 1. ALCANCE

Modificar únicamente la tarjeta:

**1 — 2 años · Caminadores**

No modificar:

- Header.
- Hero.
- Footer.
- Otras secciones.
- Otras páginas.
- Rutas.
- Base de datos.
- Funcionalidades no relacionadas.
- Contenido de otros niveles.

Si la tarjeta forma parte de un componente reutilizable, analizar primero su arquitectura y reutilizarla correctamente sin provocar regresiones.

---

# 2. OBJETIVO

Transformar la tarjeta actual de:

```text
1 — 2 años
Caminadores

- Apego y autonomía
- Estimulación sensorial
- Juego libre

Conocer más →
```

en una tarjeta visualmente más rica, moderna, educativa e interactiva.

La tarjeta debe incorporar:

- fotografía;
- información pedagógica;
- descripción;
- expansión interactiva;
- animaciones suaves;
- comportamiento diferente para desktop y móvil;
- accesibilidad.

---

# 3. ESTRUCTURA INICIAL DE LA TARJETA

En el estado cerrado mostrar:

## IMAGEN

En la parte superior de la tarjeta colocar una fotografía relacionada con:

**niños de 1 a 2 años / primera infancia / exploración / juego / aprendizaje temprano.**

La imagen debe:

- ocupar una parte importante de la tarjeta;
- tener buena calidad;
- utilizar `object-fit: cover`;
- respetar el diseño visual existente;
- tener bordes redondeados coherentes con el sistema visual.

---

## CONTENIDO

Debajo de la imagen:

### 1 — 2 años

# Caminadores

Frase:

> **“Aprender explorando, crecer sintiéndose seguro.”**

Mostrar inicialmente:

- Apego y autonomía
- Estimulación sensorial
- Juego libre y exploración

Y un botón:

# Conocer más →

---

# 4. IMAGEN — REGLA OBLIGATORIA

Antes de buscar, generar o sustituir imágenes:

## PRIMERO

Revisar los assets existentes del proyecto.

Si existe una fotografía apropiada del colegio o de esta etapa:

# UTILIZARLA

No reemplazar una fotografía institucional existente por una imagen genérica.

Si no existe una fotografía adecuada:

dejar el componente correctamente preparado para recibir la imagen posteriormente.

**NO inventar fotografías que aparenten ser fotografías reales del colegio.**

---

# 5. EXPANSIÓN DE LA TARJETA

Cuando el usuario haga clic en:

# Conocer más →

la tarjeta debe expandirse suavemente.

La imagen debe permanecer visible.

Debajo debe aparecer información adicional.

---

# 6. CONTENIDO EXPANDIDO

Mostrar:

## ¿Qué trabajamos en esta etapa?

- ❤️ **Apego y autonomía**
- 🧠 **Estimulación sensorial**
- 🧸 **Juego libre y exploración**
- 🗣️ **Lenguaje y comunicación**
- 🚶 **Desarrollo motor**
- 🤝 **Socialización y vínculos afectivos**

---

# 7. DESCRIPCIÓN PEDAGÓGICA

Agregar una descripción breve y profesional:

> **“En Caminadores acompañamos los primeros pasos de cada niño en un ambiente seguro, afectivo y estimulante. A través del juego, la exploración y experiencias sensoriales, fortalecemos su autonomía, comunicación, movimiento y vínculos con los demás, respetando siempre su ritmo de desarrollo.”**

La descripción debe integrarse visualmente sin hacer que la tarjeta se vea saturada.

---

# 8. COMPOSICIÓN VISUAL

La tarjeta cerrada debe verse aproximadamente así:

```text
┌─────────────────────────────────┐
│                                 │
│            IMAGEN               │
│                                 │
├─────────────────────────────────┤
│                                 │
│  1 — 2 años                     │
│  CAMINADORES                    │
│                                 │
│  Aprender explorando...         │
│                                 │
│  • Apego y autonomía            │
│  • Estimulación sensorial       │
│  • Juego y exploración          │
│                                 │
│       Conocer más →             │
│                                 │
└─────────────────────────────────┘
```

Al expandirse:

```text
┌─────────────────────────────────┐
│                                 │
│            IMAGEN               │
│                                 │
├─────────────────────────────────┤
│  1 — 2 años                     │
│  CAMINADORES                    │
│                                 │
│  ¿Qué trabajamos?               │
│                                 │
│  ❤️ Apego y autonomía            │
│  🧠 Estimulación sensorial      │
│  🧸 Juego y exploración         │
│  🗣️ Lenguaje                    │
│  🚶 Desarrollo motor             │
│  🤝 Socialización               │
│                                 │
│  DESCRIPCIÓN                    │
│  En Caminadores acompañamos... │
│                                 │
│          Cerrar ×               │
└─────────────────────────────────┘
```

---

# 9. INTERACCIÓN DESKTOP

## Click en "Conocer más"

Debe:

- expandir la tarjeta;
- mostrar el contenido adicional;
- ejecutar una animación suave.

---

## Mientras el cursor esté dentro de la tarjeta

La tarjeta debe:

# PERMANECER ABIERTA

El contenido no debe desaparecer aunque el usuario mueva el cursor desde el botón hacia cualquier otra parte de la tarjeta.

---

## Cuando el cursor salga completamente de la tarjeta

Debe comenzar una contracción suave.

### Flujo:

```text
Tarjeta cerrada
      ↓
Click "Conocer más"
      ↓
Tarjeta se expande
      ↓
Usuario mueve el mouse
      ↓
Tarjeta permanece abierta
      ↓
Mouse sale completamente
      ↓
Tarjeta se contrae
```

No cerrar simplemente porque el cursor salió del botón.

---

# 10. INTERACCIÓN MÓVIL

IMPORTANTE:

Los dispositivos táctiles no tienen hover.

Por lo tanto, el comportamiento debe adaptarse.

### Móvil

Toque:

**Conocer más →**

↓

Expandir tarjeta.

↓

Mostrar:

# Cerrar ×

↓

Toque en cerrar.

↓

Volver al estado inicial.

No depender exclusivamente de `hover`.

---

# 11. ANIMACIONES

Si Framer Motion ya está disponible en el proyecto, utilizarlo.

La expansión debe utilizar una transición elegante de aproximadamente:

**300–400 ms**

Animar preferentemente:

- altura;
- opacity;
- contenido;
- desplazamiento vertical pequeño.

La imagen puede permanecer estable.

Evitar:

- rebotes;
- zoom agresivo;
- movimientos exagerados;
- efectos innecesarios.

La sensación debe ser:

**premium + educativa + cálida + moderna.**

---

# 12. ACCESIBILIDAD

El control "Conocer más" debe ser un:

```html
<button>
```

real.

NO utilizar `div` como botón.

Implementar cuando corresponda:

- `aria-expanded`;
- `aria-controls`;
- focus visible;
- navegación con teclado;
- labels accesibles.

Debe funcionar con:

```text
TAB
↓
ENTER / SPACE
↓
EXPANDIR
```

La acción de cerrar también debe ser accesible mediante teclado.

---

# 13. IDENTIDAD VISUAL

Respetar estrictamente la identidad del Gimnasio Huellas del Saber.

## 🟢 VERDE INSTITUCIONAL

Color principal.

Utilizar para:

- títulos;
- botones;
- elementos principales;
- estados activos;
- detalles institucionales.

---

## 🤍 CREMA

Utilizar para:

- fondos;
- superficies;
- áreas cálidas;
- contenido educativo.

---

## 🟡 AMARILLO / DORADO

Utilizar como:

- acento;
- detalles;
- indicadores;
- microinteracciones.

No convertirlo en color dominante.

---

# 14. 🔴 ROJO DEL ESCUDO

El escudo oficial del colegio contiene elementos rojos.

Ese rojo:

# DEBE CONSERVARSE.

Pero:

# NO ES EL COLOR PRINCIPAL DE LA INTERFAZ.

Utilizarlo únicamente como pequeño acento cuando tenga sentido.

Permitido:

- pequeños detalles;
- indicadores;
- iconos;
- microinteracciones;
- elementos decorativos relacionados con la identidad.

No permitido:

- tarjeta completamente roja;
- fondo rojo dominante;
- reemplazar el verde por rojo;
- llenar la interfaz de rojo.

---

# 15. OTROS COLORES

Utilizar también:

### 🟢 Verde oscuro

Para profundidad y contraste cuando sea necesario.

### ⚪ Blanco

Para textos y elementos que necesiten alto contraste.

---

# 16. REGLA DE COLOR

No inventar colores.

No utilizar colores aleatorios.

No importar colores de una plantilla externa.

La tarjeta debe verse integrada con el resto del sitio.

Debe sentirse como:

# UNA SOLA MARCA

---

# 17. RESPONSIVE

Validar la tarjeta en:

### Desktop

- 1920px
- 1440px
- 1280px

### Tablet

- 1024px
- 768px

### Móvil

- 430px
- 390px
- 375px
- 360px

Comprobar:

- imagen;
- texto;
- altura;
- expansión;
- descripción;
- botón;
- cierre;
- espaciado;
- legibilidad.

No permitir overflow horizontal.

---

# 18. PERFORMANCE

No introducir dependencias innecesarias.

Revisar:

- renderizados;
- animaciones;
- imágenes;
- listeners;
- eventos;
- limpieza de efectos.

Si se utilizan listeners para detectar salida del mouse, deben gestionarse correctamente.

No crear listeners duplicados.

---

# 19. NO ROMPER EL RESTO DEL PROYECTO

Antes de finalizar comprobar que la modificación no haya afectado:

- otras tarjetas;
- otras secciones;
- navegación;
- responsive general;
- estilos globales;
- build;
- funcionalidades existentes.

Si aparece una regresión:

# ❌ FASE NO COMPLETADA

Corregir antes de continuar.

---

# 20. PRUEBAS TÉCNICAS

Ejecutar como mínimo:

```bash
npm run build
```

Si existen:

```bash
npm run lint
```

```bash
npm run test
```

Revisar además la consola del navegador.

No considerar terminada la fase mientras existan errores provocados por esta modificación.

---

# 21. CHECKLIST FINAL

## Contenido

- [ ] Imagen integrada.
- [ ] 1–2 años.
- [ ] Caminadores.
- [ ] Frase principal.
- [ ] Beneficios.
- [ ] Información expandida.
- [ ] Descripción pedagógica.

## Interacción

- [ ] Conocer más funciona.
- [ ] Click expande.
- [ ] Mouse dentro mantiene abierta.
- [ ] Mouse fuera contrae.
- [ ] Móvil funciona por toque.
- [ ] Cerrar funciona.
- [ ] No existen comportamientos extraños.

## Animación

- [ ] Expansión suave.
- [ ] Contracción suave.
- [ ] 300–400 ms aproximadamente.
- [ ] Sin rebotes.
- [ ] Sin movimientos excesivos.

## Accesibilidad

- [ ] Botones reales.
- [ ] `aria-expanded`.
- [ ] `aria-controls`.
- [ ] Focus visible.
- [ ] Navegación por teclado.

## Diseño

- [ ] Verde institucional.
- [ ] Crema.
- [ ] Amarillo/dorado.
- [ ] Rojo del escudo como acento.
- [ ] Verde oscuro.
- [ ] Blanco.
- [ ] Sin colores arbitrarios.

## Responsive

- [ ] Desktop.
- [ ] Tablet.
- [ ] Móvil.
- [ ] Sin overflow.
- [ ] Texto legible.

## Calidad

- [ ] Build.
- [ ] Lint.
- [ ] Tests si existen.
- [ ] Consola sin errores.
- [ ] Sin regresiones.

---

# 22. 🚨 CONDICIÓN DE CIERRE

Solo puedes marcar esta fase como terminada cuando:

**TODOS los puntos anteriores estén validados.**

Si alguno falla:

```text
❌ FASE NO COMPLETADA
```

Debes:

```text
CORREGIR
↓
PROBAR
↓
VOLVER A VALIDAR
```

No avanzar.

---

# 23. REPORTE FINAL OBLIGATORIO

Cuando todo esté correctamente terminado, responder:

```text
════════════════════════════════════════
FASE — CAMINADORES 1–2 AÑOS
════════════════════════════════════════

Imagen: ✅
Contenido: ✅
Descripción: ✅
Expansión: ✅
Mouse: ✅
Móvil: ✅
Animaciones: ✅
Accesibilidad: ✅
Responsive: ✅
Colores institucionales: ✅
Rojo del escudo conservado: ✅
Build: ✅
Lint: ✅
Tests: ✅
Consola: ✅
Regresiones: Ninguna

ESTADO:

✅ FASE COMPLETADA

No se modificaron otras secciones.
════════════════════════════════════════
```

Si cualquier punto falla:

```text
════════════════════════════════════════
❌ FASE NO COMPLETADA
════════════════════════════════════════

Problema:
[describir]

Acción:
Corregir y volver a probar.

🚨 NO AVANZAR.
════════════════════════════════════════
```

# 🔥 REGLA FINAL

**NO MODIFIQUES OTRAS SECCIONES.**

**NO ADELANTES TRABAJO FUTURO.**

**NO DEJES ERRORES PARA DESPUÉS.**

**NO SUPONGAS QUE FUNCIONA.**

**PRUEBA.**

**VALIDA.**

**CORRIGE.**

**Y SOLO ENTONCES CIERRA LA FASE.**

# CALIDAD ANTES QUE VELOCIDAD.
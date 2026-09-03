# PROMPT — FASE: NUESTRA PROPUESTA
## Gimnasio Huellas del Saber

Actúa como **Senior Frontend Engineer + React/TypeScript + Tailwind CSS + Framer Motion + UI/UX Designer + Accessibility + QA**, especializado en sitios web educativos premium.

Estamos trabajando en el sitio web del **Gimnasio Huellas del Saber**.

La sección que debes construir/modificar en esta fase es exclusivamente:

`#propuesta`

Ruta esperada:

`http://localhost:5173/#propuesta`

---

# 🔴 REGLA PRINCIPAL — TRABAJO POR FASES

**NO avances a ninguna otra sección hasta completar, probar, corregir y validar completamente esta fase.**

Debes seguir este ciclo:

**Analizar → Implementar → Ejecutar → Probar → Detectar errores → Corregir → Volver a probar → Validar → Cerrar fase**

No acepto:

- ❌ código incompleto
- ❌ errores pendientes
- ❌ componentes sin probar
- ❌ imágenes inventadas
- ❌ cambios en otras secciones
- ❌ estilos temporales
- ❌ `TODO`
- ❌ funcionalidades simuladas
- ❌ asumir que algo funciona sin comprobarlo

Si encuentras un problema:

**CORRÍGELO AHORA Y VUELVE A PROBAR.**

---

# 1. ANALIZA PRIMERO EL PROYECTO

Antes de modificar código:

1. Identifica la estructura actual del proyecto.
2. Localiza el componente correspondiente a `#propuesta`.
3. Revisa cómo están construidas las demás secciones.
4. Identifica el sistema actual de:
   - colores
   - tipografías
   - espaciados
   - botones
   - cards
   - animaciones
   - responsive
5. Busca TODAS las imágenes existentes relacionadas con el colegio.
6. Identifica las fotografías reales disponibles en:
   - `src/assets`
   - `public`
   - carpetas de imágenes
   - componentes existentes
   - cualquier otro directorio de assets utilizado por el proyecto.

### IMPORTANTE

El usuario dispone de **fotografías reales del Gimnasio Huellas del Saber**.

**PRIORIDAD ABSOLUTA: utilizar esas fotografías reales.**

No reemplazarlas por:

- imágenes genéricas
- fotografías de stock
- imágenes generadas por IA
- placeholders innecesarios

Si existen fotografías adecuadas dentro del proyecto, reutilízalas.

No dupliques archivos innecesariamente.

---

# 2. OBJETIVO DE LA SECCIÓN

Crear una sección:

## Nuestra propuesta

que transmita:

**Una educación que acompaña, inspira y deja huella.**

Debe sentirse como una sección institucional importante y premium.

No quiero una simple cuadrícula de cuatro tarjetas genéricas.

Debe existir una composición visual donde las fotografías tengan protagonismo.

La sección debe comunicar:

- formación
- acompañamiento
- familia
- aprendizaje
- desarrollo integral
- confianza
- futuro

---

# 3. ESTRUCTURA VISUAL

Diseña una composición moderna con:

### Encabezado

Pequeño identificador:

**NUESTRA PROPUESTA**

Título principal grande:

# Una educación que acompaña, inspira y deja huella.

Texto introductorio:

> En el Gimnasio Huellas del Saber acompañamos cada etapa del crecimiento con una propuesta educativa que integra el desarrollo académico, emocional, social y humano, fortaleciendo los vínculos entre nuestros estudiantes, sus familias y la comunidad educativa.

El título debe tener **mucha presencia visual**.

No lo hagas pequeño.

---

# 4. COMPOSICIÓN DE IMÁGENES

La sección debe utilizar fotografías reales del colegio.

Crear una composición visual elegante:

### Imagen principal

Una fotografía grande y protagonista.

Debe mostrar, si existe una fotografía adecuada:

- estudiantes
- niños aprendiendo
- actividades pedagógicas
- interacción docente-estudiante
- juego
- exploración
- actividades institucionales

La imagen debe tener:

- bordes redondeados
- `object-fit: cover`
- excelente calidad
- proporciones equilibradas
- buena composición visual
- responsive

### Imágenes secundarias

Utilizar fotografías adicionales para acompañar los pilares.

Idealmente:

**1 fotografía principal + 4 fotografías secundarias.**

Las imágenes secundarias deben integrarse visualmente con los contenidos y no parecer una galería independiente.

---

# 5. LOS CUATRO PILARES

Crear cuatro bloques/pilares.

## 01 — Formación integral

**Desarrollamos mucho más que conocimientos.**

Fortalecemos habilidades, valores, autonomía, creatividad y competencias para acompañar el desarrollo integral de cada estudiante.

---

## 02 — Acompañamiento afectivo

**Crecer sintiéndose seguro también es aprender.**

Construimos ambientes cálidos y seguros donde cada niño puede desarrollar confianza, autonomía y sentido de pertenencia.

---

## 03 — Familia y comunidad

**Educamos de la mano con las familias.**

Fortalecemos la comunicación y el vínculo entre familia y colegio para acompañar de manera cercana cada proceso de crecimiento.

---

## 04 — Excelencia académica

**Aprender para comprender, crear y transformar.**

Promovemos aprendizajes significativos, curiosidad, pensamiento crítico y herramientas que preparan a nuestros estudiantes para los retos del futuro.

---

# 6. DISEÑO DE LOS PILARES

No hagas cuatro tarjetas idénticas y planas.

Cada bloque debe tener:

- número pequeño: `01`, `02`, `03`, `04`
- icono elegante
- título grande
- descripción
- interacción hover muy sutil
- fotografía relacionada cuando corresponda

Las fotografías pueden funcionar como:

- imagen lateral
- imagen superior
- imagen de fondo parcial
- imagen flotante
- composición editorial

Elige la solución que mejor encaje con el diseño actual.

---

# 7. IDENTIDAD VISUAL

RESPETAR ESTRICTAMENTE la identidad visual establecida para el Gimnasio Huellas del Saber.

### Colores principales

🟢 Verde institucional  
🤍 Crema  
🟡 Amarillo / dorado  
⚪ Blanco  
🟢 Verde oscuro para profundidad

### ROJO

El escudo institucional contiene rojo.

Ese rojo:

**DEBE CONSERVARSE COMO PARTE DE LA IDENTIDAD DEL ESCUDO.**

Pero no convertirlo en el color dominante de la interfaz.

Puede utilizarse únicamente como:

- pequeño acento
- detalle visual
- microelemento
- referencia sutil a la identidad institucional

NO convertir la sección en una sección roja.

---

# 8. ESCUDO INSTITUCIONAL

Si el escudo aparece en esta sección:

**UTILIZAR EL ESCUDO OFICIAL EXISTENTE.**

No:

- redibujarlo
- recolorearlo
- convertirlo en monocromo
- modificar sus proporciones
- eliminar sus colores
- reemplazarlo

Debe mantenerse exactamente como está en los assets oficiales.

---

# 9. ANIMACIONES

Si el proyecto ya utiliza **Framer Motion**, reutilizarlo.

Las animaciones deben ser:

- suaves
- elegantes
- rápidas
- profesionales

Ejemplo:

- encabezado: fade + desplazamiento vertical leve
- imagen principal: fade/scale muy sutil
- pilares: aparición escalonada
- hover: pequeño desplazamiento o elevación
- imágenes: transición suave

NO utilizar:

- animaciones exageradas
- rebotes
- zoom agresivo
- efectos innecesarios
- parallax excesivo

Respetar:

`prefers-reduced-motion`

---

# 10. HOVER

En desktop, al pasar el mouse sobre un pilar:

- aumentar ligeramente el contraste
- desplazar suavemente
- destacar el icono o número
- mantener la elegancia

No utilizar efectos que parezcan una plantilla genérica.

---

# 11. RESPONSIVE

La sección debe funcionar correctamente en:

- 1920px
- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 375px
- 360px

### Desktop

Composición editorial:

**contenido + fotografía principal + pilares**

Debe aprovechar el espacio horizontal.

### Tablet

Reducir columnas y mantener buena jerarquía.

### Móvil

Convertir la composición a una sola columna.

Orden recomendado:

1. Identificador
2. Título
3. Descripción
4. Imagen principal
5. Pilar 01
6. Pilar 02
7. Pilar 03
8. Pilar 04

No permitir:

- desbordamiento horizontal
- textos cortados
- imágenes deformadas
- botones fuera de pantalla
- elementos superpuestos accidentalmente

---

# 12. ACCESIBILIDAD

Implementar correctamente:

- HTML semántico
- `alt` descriptivo en fotografías
- contraste suficiente
- navegación por teclado
- estados `:focus-visible`
- botones reales cuando sean necesarios
- jerarquía correcta de headings

No utilizar texto dentro de imágenes para información esencial.

---

# 13. PERFORMANCE

Optimizar las imágenes existentes sin destruir su calidad visual.

Evitar:

- cargar imágenes innecesarias
- duplicar assets
- imágenes gigantes sin necesidad
- animaciones costosas

Utilizar lazy loading cuando corresponda.

---

# 14. SEO

Mantener una jerarquía correcta:

```html
<section id="propuesta">
```

Debe existir un heading principal coherente.

No crear múltiples `h1`.

Usar:

- `h2`
- `h3`

según la estructura existente del sitio.

---

# 15. NO MODIFICAR OTRAS SECCIONES

Este punto es obligatorio.

En esta fase:

**SOLO modificar lo necesario para `#propuesta`.**

NO modificar:

- Header
- Hero
- Nosotros
- Caminadores
- demás niveles educativos
- Galería
- CTA
- Footer
- rutas
- backend
- base de datos
- autenticación
- configuración no relacionada

Si necesitas modificar un componente compartido para que `#propuesta` funcione correctamente, hazlo únicamente si es estrictamente necesario y verifica que no produzca regresiones.

---

# 16. PRUEBAS

Después de implementar:

### Ejecutar:

```bash
npm run build
```

Si existen estos scripts:

```bash
npm run lint
npm run test
```

ejecutarlos también.

Además:

- revisar errores de consola
- revisar warnings importantes
- revisar imports
- revisar imágenes
- revisar rutas
- revisar responsive
- revisar navegación hacia `#propuesta`

---

# 17. VALIDACIÓN VISUAL

Comprueba específicamente:

### Desktop

1920 × 1080  
1440 × 900  
1280 × 800

### Tablet

1024 × 768  
768 × 1024

### Móvil

430 × 932  
390 × 844  
375 × 812  
360 × 800

Verificar:

- jerarquía visual
- tamaño de títulos
- legibilidad
- proporción de imágenes
- separación entre elementos
- alineación
- espaciado
- colores
- animaciones
- hover
- responsive

---

# 18. CRITERIO DE CALIDAD

La sección debe parecer desarrollada específicamente para:

**Gimnasio Huellas del Saber**

y NO parecer:

- plantilla de colegio
- landing page genérica
- dashboard
- página corporativa genérica
- diseño generado automáticamente

Debe sentirse:

**institucional + cálida + moderna + educativa + premium + humana.**

---

# 19. INFORME FINAL OBLIGATORIO

Cuando termines esta fase, NO digas simplemente "listo".

Entrega un reporte:

### FASE — NUESTRA PROPUESTA

**Implementación**
- [x] Nueva propuesta implementada
- [x] Título principal
- [x] Texto institucional
- [x] Imagen principal
- [x] Imágenes secundarias
- [x] 4 pilares educativos
- [x] Animaciones
- [x] Responsive
- [x] Accesibilidad

**Identidad**
- [x] Verde institucional
- [x] Crema
- [x] Amarillo/dorado
- [x] Blanco
- [x] Rojo del escudo preservado como acento

**Calidad**
- [x] Build
- [x] Lint
- [x] Tests
- [x] Consola
- [x] Responsive
- [x] Sin regresiones

Indica también:

- archivos modificados
- archivos creados
- imágenes utilizadas
- comandos ejecutados
- resultado de cada prueba

---

# 🔴 REGLA FINAL

Si alguna prueba falla:

**❌ FASE NO COMPLETADA**

Debes corregir el problema y volver a ejecutar las pruebas.

Si todo funciona:

**✅ FASE COMPLETADA**

No avances a otra sección.

**NO MODIFIQUES OTRAS SECCIONES.  
NO ADELANTES TRABAJO FUTURO.  
NO DEJES ERRORES PARA DESPUÉS.  
NO SUPONGAS QUE FUNCIONA.  
PRUEBA.  
VALIDA.  
CORRIGE.  
Y SOLO ENTONCES CIERRA LA FASE.**

**CALIDAD ANTES QUE VELOCIDAD.**
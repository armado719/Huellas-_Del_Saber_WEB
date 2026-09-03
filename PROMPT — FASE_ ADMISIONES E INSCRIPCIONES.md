# PROMPT — FASE: ADMISIONES E INSCRIPCIONES
## Gimnasio Huellas del Saber

Actúa como **Senior Frontend Engineer + React/TypeScript + Tailwind CSS + Framer Motion + UI/UX Designer + Accessibility + QA**, especializado en sitios web educativos modernos, institucionales y premium.

Estamos trabajando en el sitio web del:

**Gimnasio Huellas del Saber**

La sección que debes intervenir en esta fase corresponde al bloque actualmente relacionado con:

**“¿Listo para inscribirse? Esperamos conocerte pronto”**

Debes reconstruir esta sección completamente para que pertenezca al **Gimnasio Huellas del Saber**.

---

# 🔴 REGLA PRINCIPAL — FASE AISLADA

Esta es una fase independiente.

Debes trabajar exclusivamente en esta sección.

**NO avances a otras secciones hasta terminar, probar, corregir y validar completamente esta fase.**

Flujo obligatorio:

**Analizar → Implementar → Ejecutar → Probar → Detectar errores → Corregir → Volver a probar → Validar → Cerrar fase**

No acepto:

- ❌ código incompleto
- ❌ errores pendientes
- ❌ placeholders
- ❌ contenido de otra institución
- ❌ enlaces externos heredados
- ❌ imágenes de otra institución
- ❌ SVG desconocidos de la plantilla
- ❌ textos genéricos sin adaptar
- ❌ funcionalidades simuladas
- ❌ asumir que funciona sin probar

---

# 1. LIMPIEZA OBLIGATORIA DEL CONTENIDO HEREDADO

Actualmente la sección contiene contenido perteneciente a:

**Jardín Tilatá**

Esto debe desaparecer completamente.

Eliminar cualquier referencia a:

- Jardín Tilatá
- jardintilata.edu.co
- URLs de Tilatá
- teléfono `304 357 4702`
- imágenes alojadas en Tilatá
- textos de Tilatá
- SVG heredados
- botones que apunten a Tilatá
- enlaces `/adminsiones/#`
- textos incompletos como:
  - `Tor.`
  - `To`
  - `Pu`
  - `T`
  - `S`
  - `M`
- cualquier contenido basura proveniente de la plantilla original.

Realizar una búsqueda global en el proyecto para detectar referencias a Tilatá antes de cerrar la fase.

---

# 2. IDENTIDAD DE LA NUEVA SECCIÓN

La sección debe representar:

## Admisiones e Inscripciones

Concepto:

**El primer paso para formar parte de nuestra familia.**

Debe transmitir:

- confianza
- cercanía
- acompañamiento
- organización
- claridad
- seguridad
- identidad institucional

No debe parecer una sección comercial agresiva.

Debe sentirse como una invitación cálida a conocer el colegio.

---

# 3. ENCABEZADO PRINCIPAL

Crear un encabezado visual fuerte:

### ADMISIÓN E INSCRIPCIONES

# **¿Listos para comenzar esta nueva etapa?**

Texto:

> En el Gimnasio Huellas del Saber estaremos felices de conocer a tu familia. Te acompañamos durante el proceso de admisión e inscripción para que dar el primer paso hacia nuestra comunidad educativa sea sencillo, cercano y claro.

El título debe ser **grande y protagonista**.

No utilizar un heading pequeño.

---

# 4. FRASE INSTITUCIONAL

Agregar como elemento destacado:

> **Cada gran historia comienza con un primer paso.**

Puede utilizarse como frase de transición antes del proceso de inscripción.

Debe tener un tratamiento visual elegante, no parecer una cita genérica.

---

# 5. PROCESO DE INSCRIPCIÓN

Crear una línea de proceso moderna y visual.

Título:

## **Proceso de inscripción**

Mostrar **4 pasos**.

---

### 01
## Conoce nuestra propuesta

Descubre nuestro proyecto educativo, niveles, filosofía y propuesta de formación.

---

### 02
## Agenda tu visita

Conoce nuestras instalaciones y conversa con nuestro equipo para resolver tus inquietudes.

---

### 03
## Inicia tu proceso

Recibe orientación sobre requisitos, documentación y disponibilidad del nivel correspondiente.

---

### 04
## Forma parte de nuestra familia

Completa el proceso de inscripción y comienza una nueva etapa junto a nosotros.

---

# 6. DISEÑO DE LOS PASOS

NO crear simplemente cuatro cajas idénticas.

Diseñar un proceso visual conectado.

En desktop:

**01 → 02 → 03 → 04**

Puede existir una línea visual entre los pasos.

Cada paso debe incluir:

- número grande
- icono
- título
- descripción breve
- microinteracción hover

El número puede utilizar el verde institucional y detalles dorados.

Los iconos deben ser consistentes entre sí.

---

# 7. IMÁGENES REALES DEL COLEGIO

El usuario dispone de **fotografías reales del Gimnasio Huellas del Saber**.

Antes de implementar:

### BUSCAR LOS ASSETS EXISTENTES DEL PROYECTO.

Revisar:

- `src/assets`
- `public`
- carpetas de imágenes
- componentes existentes
- cualquier directorio donde se almacenen fotografías.

Utilizar fotografías reales del colegio siempre que estén disponibles.

**NO utilizar fotografías de Jardín Tilatá.**

**NO utilizar URLs externas de Tilatá.**

**NO inventar fotografías que parezcan fotografías reales del colegio.**

---

# 8. COMPOSICIÓN VISUAL CON FOTOGRAFÍAS

Crear una composición elegante:

### Imagen principal

Una fotografía grande relacionada con:

- estudiantes
- actividades educativas
- docentes
- espacios del colegio
- interacción familiar
- aprendizaje

Preferiblemente una fotografía que transmita:

**bienvenida + comunidad + educación.**

### Imagen secundaria

Utilizar otra fotografía real si existe una adecuada.

Puede utilizarse como:

- imagen vertical
- tarjeta flotante
- imagen secundaria
- composición editorial

La sección debe tener una estética fotográfica, no solamente bloques de texto.

---

# 9. DOCUMENTOS DE INSCRIPCIÓN

Crear un bloque:

## **Documentos para la inscripción**

IMPORTANTE:

No inventar requisitos oficiales.

Primero revisar si el proyecto contiene información real sobre los requisitos de inscripción.

Si existen documentos oficiales en el proyecto, utilizar esa información.

Si NO existe información oficial suficiente:

crear la estructura visual del bloque, pero utilizar una indicación clara y editable para que posteriormente se incorporen los requisitos oficiales.

No publicar como definitivos documentos que no hayan sido confirmados por el colegio.

La estructura debe estar preparada para elementos como:

- Registro civil
- Documento de identidad
- Documentación de padres/acudientes
- Certificados académicos
- Certificados médicos
- Otros documentos solicitados por la institución

Pero **solo mostrar como requisitos definitivos aquellos que estén confirmados en el proyecto o documentación oficial disponible**.

---

# 10. BOTÓN PRINCIPAL

Crear un CTA principal:

## **Iniciar inscripción**

Debe ser claramente visible.

El botón debe utilizar el estilo institucional existente.

Si existe una ruta o formulario real de inscripción dentro del proyecto:

conectarlo correctamente.

Si no existe todavía:

NO inventar una ruta.

En ese caso, dejar el CTA preparado mediante una configuración fácilmente editable.

---

# 11. CONTACTO

La sección puede incluir un bloque de contacto:

## ¿Tienes alguna pregunta?

Texto:

> Nuestro equipo estará dispuesto a orientarte y acompañarte durante todo el proceso.

Mostrar únicamente datos de contacto que estén realmente disponibles en el proyecto.

**NO reutilizar el teléfono de Jardín Tilatá.**

Si existe un teléfono, correo o WhatsApp oficial del Gimnasio Huellas del Saber en el proyecto, utilizar esos datos.

---

# 12. IDENTIDAD VISUAL

Mantener exactamente el sistema visual definido para el sitio.

### Colores

🟢 Verde institucional — principal  
🤍 Crema — fondos cálidos  
🟡 Amarillo / dorado — acentos  
⚪ Blanco — contraste  
🟢 Verde oscuro — profundidad

### Rojo

El escudo institucional contiene rojo.

El rojo debe conservarse cuando aparezca el escudo, pero:

**NO convertir el rojo en el color dominante de esta sección.**

Utilizarlo únicamente como acento estratégico.

---

# 13. ESCUDO INSTITUCIONAL

Si se utiliza el escudo:

usar el archivo oficial existente.

NO:

- recolorearlo
- rediseñarlo
- modificarlo
- convertirlo en monocromo
- deformarlo
- reemplazarlo

Mantener sus colores originales.

---

# 14. ESTILO VISUAL

La sección debe sentirse:

**moderna + institucional + cálida + elegante + premium + humana.**

Debe pertenecer visualmente al mismo sitio.

NO hacerla parecer:

- formulario gubernamental
- página comercial
- plantilla de colegio
- landing page genérica
- sección de otra institución.

Debe sentirse diseñada específicamente para:

**Gimnasio Huellas del Saber.**

---

# 15. ANIMACIONES

Si Framer Motion ya está instalado:

utilizarlo.

Animaciones:

- fade-in
- desplazamiento vertical leve
- aparición escalonada de los pasos
- transición suave de imágenes
- hover elegante

Duración aproximada:

**300–500 ms**

Evitar:

- rebotes
- zoom agresivo
- parallax excesivo
- animaciones constantes
- efectos distractores.

Respetar:

`prefers-reduced-motion`

---

# 16. RESPONSIVE

Validar obligatoriamente:

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

Mostrar:

**encabezado + fotografías + proceso de 4 pasos + documentos + CTA**

### Tablet

Adaptar la composición sin perder jerarquía.

### Móvil

Utilizar una sola columna.

El proceso puede transformarse en:

01  
↓  
02  
↓  
03  
↓  
04

No permitir:

- scroll horizontal
- textos cortados
- imágenes deformadas
- botones fuera de pantalla
- elementos superpuestos.

---

# 17. ACCESIBILIDAD

Implementar:

- HTML semántico
- headings correctos
- `alt` descriptivos
- contraste adecuado
- navegación por teclado
- `focus-visible`
- botones reales
- enlaces reales
- estados hover/focus.

No depender únicamente del color para comunicar información.

---

# 18. SEO

Mantener la jerarquía del documento.

La sección debe tener un heading coherente:

```html
<section id="admisiones">
```

o conservar el identificador actual si el sitio ya utiliza uno diferente.

**NO romper los enlaces internos existentes.**

Si actualmente existe navegación hacia esta sección, mantenerla funcionando.

---

# 19. NO TOCAR OTRAS SECCIONES

Esta fase NO incluye:

- Header
- Hero
- Nuestra propuesta
- Caminadores
- otros niveles
- Galería
- Footer
- otras secciones
- backend
- base de datos
- autenticación
- rutas no relacionadas.

Solo modificar código compartido si es estrictamente necesario.

Después verificar que no existan regresiones.

---

# 20. VALIDACIÓN TÉCNICA

Ejecutar:

```bash
npm run build
```

Si existen:

```bash
npm run lint
npm run test
```

También revisar:

- consola del navegador
- errores de React
- warnings relevantes
- imports
- imágenes
- enlaces
- responsive
- navegación interna.

---

# 21. BÚSQUEDA FINAL DE CONTENIDO DE TILATÁ

Antes de cerrar la fase ejecutar una búsqueda global del proyecto.

Buscar:

```text
Tilatá
tilata
jardintilata
304 357 4702
adminsiones
VEN_2050
VEN_2140
```

No debe quedar ninguna referencia de esa sección que continúe apuntando al contenido de la plantilla original.

---

# 22. CHECKLIST FINAL

### Contenido

- [ ] Gimnasio Huellas del Saber
- [ ] Admisiones e Inscripciones
- [ ] Nuevo texto institucional
- [ ] 4 pasos
- [ ] Documentos
- [ ] CTA
- [ ] Contacto oficial si está disponible

### Visual

- [ ] Título grande
- [ ] Fotografías reales del colegio
- [ ] Composición premium
- [ ] Verde institucional
- [ ] Crema
- [ ] Dorado
- [ ] Blanco
- [ ] Rojo del escudo preservado
- [ ] Responsive

### Interacción

- [ ] Hover
- [ ] Animaciones
- [ ] Focus
- [ ] Navegación
- [ ] CTA funcional o preparado correctamente

### Limpieza

- [ ] Sin Jardín Tilatá
- [ ] Sin teléfono de Tilatá
- [ ] Sin URLs de Tilatá
- [ ] Sin imágenes de Tilatá
- [ ] Sin SVG heredados
- [ ] Sin textos basura
- [ ] Sin placeholders visibles

### Calidad

- [ ] Build
- [ ] Lint
- [ ] Tests
- [ ] Consola
- [ ] Responsive
- [ ] Sin regresiones

---

# 🔴 CIERRE OBLIGATORIO DE LA FASE

Si algo falla:

## ❌ FASE NO COMPLETADA

Debes corregirlo y volver a probar.

NO avances.

Si todo está correctamente implementado y validado:

## ✅ FASE COMPLETADA

Entrega un informe indicando:

1. Archivos modificados.
2. Archivos creados.
3. Imágenes reales utilizadas.
4. Contenido implementado.
5. Funcionalidades implementadas.
6. Pruebas ejecutadas.
7. Resultado de `npm run build`.
8. Resultado de lint/tests si existen.
9. Resultado de revisión de consola.
10. Resultado de validación responsive.
11. Confirmación de que se eliminaron las referencias a Jardín Tilatá.
12. Confirmación de que no se modificaron otras secciones.

---

# REGLA FINAL

**NO MODIFIQUES OTRAS SECCIONES.**

**NO ADELANTES TRABAJO FUTURO.**

**NO DEJES ERRORES PARA DESPUÉS.**

**NO SUPONGAS QUE FUNCIONA.**

**PRUEBA.**

**VALIDA.**

**CORRIGE.**

**VUELVE A PROBAR.**

**Y SOLO ENTONCES CIERRA LA FASE.**

### CALIDAD ANTES QUE VELOCIDAD.
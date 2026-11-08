# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


## Edición de contenido con Decap CMS

El sitio permite al cliente (personal no técnico del jardín) editar textos e imágenes desde el panel administrativo en `/admin`, sin tocar código, manteniendo el sitio 100% estático en Vercel.

### Contenido editable

Los textos e imágenes editoriales viven en archivos JSON dentro de la carpeta `content/`:

- `content/niveles.json` — niveles educativos (Caminadores, Párvulos, Pre-Jardín, Jardín).
- `content/faq.json` — preguntas frecuentes.
- `content/cards.json` — tarjetas institucionales.
- `content/pilares.json` — pilares de la propuesta educativa.
- `content/galeria.json` — imágenes de la galería.
- `content/pasos.json` — proceso de admisión.

Los componentes React (`src/pages/Niveles.tsx`, `src/components/FAQ.tsx`, `src/components/Sections.tsx`) importan estos JSON en lugar de tener los datos hardcodeados en el JSX. Las imágenes subidas se gestionan con media folder `public/img` y public folder `/img`.

### Flujo de publicación (producción)

1. El cliente entra a `/admin`.
2. Inicia sesión con GitHub (backend `github` con OAuth en funciones serverless de Vercel: `api/begin.js` y `api/complete.js`).
3. Edita el contenido, guarda y publica.
4. Decap CMS hace commit en la rama `main` del repositorio.
5. Vercel detecta el nuevo deploy y redeploy automático.

### Configuración OAuth en Vercel

- GitHub OAuth App: Homepage URL `https://huellasdelsaber.edu.co`, Authorization callback URL `https://huellasdelsaber.edu.co/api/complete`.
- Variables de entorno en Vercel: `OAUTH_CLIENT_ID`, `OAUTH_CLIENT_SECRET`, `COMPLETE_URL`, `ORIGIN`.

### Desarrollo local

- `npm.cmd run dev`
- `npx.cmd decap-server`
- Abrir `http://localhost:5173/admin`


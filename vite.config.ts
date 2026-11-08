import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// El SPA fallback de Vite intercepta /admin antes de que llegue a
// public/admin/index.html (el panel de Decap CMS), devolviendo la app
// React en su lugar. /admin se redirige con barra final (para que las
// rutas relativas del panel, como config.yml, resuelvan contra /admin/
// y no contra la raíz) y /admin/ se sirve directamente desde el archivo real.
function adminStaticFile(): Plugin {
  return {
    name: 'admin-static-file',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/admin') {
          res.statusCode = 302
          res.setHeader('Location', '/admin/')
          res.end()
          return
        }
        if (req.url === '/admin/') {
          req.url = '/admin/index.html'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), adminStaticFile()],
})

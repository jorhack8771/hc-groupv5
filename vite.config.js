import { defineConfig } from 'vite';
import { resolve } from 'path';
import { handleDriveVideoRequest } from './drive-proxy.js';

function driveVideoMiddlewarePlugin() {
  const attach = (middlewares) => {
    middlewares.use('/api/drive-video', (req, res) => {
      void handleDriveVideoRequest(req, res);
    });
  };
  return {
    name: 'hc-drive-video-proxy',
    configureServer(server) {
      attach(server.middlewares);
    },
    configurePreviewServer(server) {
      attach(server.middlewares);
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [driveVideoMiddlewarePlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: true,
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {
      ignored: ['**/dist/**', '**/.git/**', '**/imagenes/**', '**/src/assets/**']
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mantenimiento: resolve(__dirname, 'mantenimiento.html'),
        404: resolve(__dirname, '404.html')
      }
    }
  }
});

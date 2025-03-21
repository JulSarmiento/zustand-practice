import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { ViteAliases } from 'vite-aliases';
import { compression } from 'vite-plugin-compression2';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteAliases({
      prefix: '@',
      useConfig: false,
    }),
    compression(),
    new ViteImageOptimizer({
      limit: 8192,
      quality: 85,
      inlineSizeLimit: 10000,
      name: '[name]-[hash][ext]',
      outputPath: 'dist/assets',
      publicPath: '/assets/images',
      webp: false,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        quality: 100,
      },
    }),
  ],
})

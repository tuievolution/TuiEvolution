import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Bu ayar, .js uzantılı dosyalarda da JSX desteği sağlar
      include: ['**/*.jsx', '**/*.js'], // .js dosyalarını da dahil et
    }),
  ],
  esbuild: {
    // ESBuild yapılandırması
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: {
    alias: {
      // Projenizde alias kullanmak isterseniz
    },
  },
});
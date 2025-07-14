import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    host: '0.0.0.0',
    port: 5174
  }
};

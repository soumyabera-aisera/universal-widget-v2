import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist-servicenow',
    emptyOutDir: true,
    minify: 'esbuild',
    rollupOptions: {
      input: resolve(__dirname, 'src/servicenow-entry.ts'),
      output: {
        entryFileNames: 'servicenow-component.js', // No hashing for predictable filename
      },
    },
    target: 'es2017',
  },
});
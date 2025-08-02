// universal-widget-v2/vite.config.zendesk.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-zendesk',
    emptyOutDir: true,
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      // CRITICAL FIX: The input is now 'ticketSidebar' and points to the new zendesk-entry.ts file.
      input: {
        'ticketSidebar': resolve(__dirname, 'src/zendesk-entry.ts'),
      },
      output: {
        assetFileNames: 'assets/build/[name].[hash].css',
        chunkFileNames: 'assets/build/[name].[hash].js',
        entryFileNames: 'assets/build/[name].[hash].bundle.js',
      },
    },
    
    target: 'es2017',
  },
});

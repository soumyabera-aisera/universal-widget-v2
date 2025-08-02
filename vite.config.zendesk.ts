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
      // CRITICAL FIX: The input key is now 'ticketSidebar' to match the workflow.
      input: {
        ticketSidebar: resolve(__dirname, 'src/zendesk-entry.ts'),
      },
      output: {
        // Filenames are now based on 'ticketSidebar'
        assetFileNames: 'assets/build/[name].[hash].css',
        chunkFileNames: 'assets/build/[name].[hash].js',
        // And the entry file has the .bundle.js suffix.
        entryFileNames: 'assets/build/[name].[hash].bundle.js',
      },
    },
    
    target: 'es2017',
  },
});

// universal-widget-v2/vite.config.zendesk.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

// This is the top-level configuration object
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-zendesk',
    emptyOutDir: true,
    minify: 'esbuild',
    cssMinify: 'esbuild',

    // 'rollupOptions' is a property of the 'build' object
    rollupOptions: {
      // 'input' is a property of the 'rollupOptions' object.
      // This is where you specify your entry point.
      input: {
        ticketSidebar: resolve(__dirname, 'src/zendesk-entry.ts'),
      },
      // 'output' is also a property of the 'rollupOptions' object.
      output: {
        assetFileNames: 'assets/build/[name].[hash].css',
        chunkFileNames: 'assets/build/[name].[hash].js',
        entryFileNames: 'assets/build/[name].[hash].bundle.js',
      },
    },
    target: 'es2017',
  },
});
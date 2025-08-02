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
      // FIX: The input key is now 'aisera-universal-widget' to match the existing file.
      input: {
        'aisera-universal-widget': resolve(__dirname, 'src/aisera-universal-widget.ts'),
      },
      output: {
        assetFileNames: 'assets/build/[name].[hash].css',
        chunkFileNames: 'assets/build/[name].[hash].js',
        // And the entry file has the .bundle.js suffix.
        entryFileNames: 'assets/build/[name].[hash].bundle.js',
      },
    },
    
    target: 'es2017',
  },
});

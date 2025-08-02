// universal-widget-v2/vite.config.zendesk.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    // Output directory for the Zendesk build
    outDir: 'dist-zendesk',
    emptyOutDir: true, // Clear the output directory before building
    minify: 'esbuild', // Minify JavaScript using esbuild
    cssMinify: 'esbuild', // Minify CSS using esbuild

    // Configure Rollup for the build process
    rollupOptions: {
      // Define the entry point for the application.
      // This will be your main widget file, which Vite will process
      // and generate the necessary JS and CSS bundles from.
      input: {
        main: resolve(__dirname, 'src/aisera-universal-widget.ts'),
      },
      output: {
        // Configure naming and paths for generated assets (JS, CSS, etc.)
        // This ensures they are placed into 'assets/build/' within the 'dist-zendesk' folder.
        assetFileNames: 'assets/build/[name].[hash].[ext]', // For CSS files
        chunkFileNames: 'assets/build/[name].[hash].js',    // For JS chunks
        entryFileNames: 'assets/build/[name].[hash].js',    // For the main JS entry file
      },
    },
    
    // Target modern browsers for the build output
    target: 'es2017',
  },
});
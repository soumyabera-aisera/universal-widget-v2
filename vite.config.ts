// vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // Enable library mode for a single bundle output
    lib: {
      entry: resolve(__dirname, 'src/aisera-universal-widget.ts'), // Your widget's primary entry point
      name: 'AiseraUniversalWidget', // Global variable name for UMD/IIFE formats
      formats: ['es', 'umd'], // ES Module for modern browsers, UMD for broader compatibility
      fileName: (format) => `aisera-universal-widget.${format}.js`, // Output file naming convention
    },
    // Crucial for inlining CSS and assets directly into the JS bundle
    cssCodeSplit: false, // Ensure CSS is bundled into the JS file [1]
    assetsInlineLimit: 10240, // Inline assets up to 10KB [1]
    minify: 'esbuild', // Use esbuild for fast JS minification [1]
    cssMinify: 'esbuild', // Use esbuild for fast CSS minification [1]
    rollupOptions: {
      // Keep external empty to bundle all dependencies (including Lit runtime) for self-containment
      external: [], // Corrected: Should be an empty array
      output: {
        inlineDynamicImports: true, // Ensure dynamic imports are inlined [1]
      },
    },
    // Set a target for broader browser compatibility
    target: 'es2017',
  },
});
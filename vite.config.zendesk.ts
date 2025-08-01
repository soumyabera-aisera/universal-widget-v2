// vite.config.zendesk.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteSingleFile } from 'vite-plugin-singlefile'; // [2]

export default defineConfig({
  plugins:,
  build: {
    // The entry point for the HTML file that will contain the widget
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'index.html'), // Use index.html as the entry point [2]
      },
      output: {
        inlineDynamicImports: true, // Ensure all assets are inlined into the HTML [1]
        assetFileNames: '[name].[ext]', // Keep original names for assets if not inlined
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js',
      },
    },
    outDir: 'dist-zendesk', // Output to a specific directory for Zendesk
    emptyOutDir: true,
    minify: 'esbuild',
    cssMinify: 'esbuild',
  },
});
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss";

export default defineConfig({
  
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            // input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    css: {
        postcss: {
          plugins: [tailwindcss()],
        },
      },
});


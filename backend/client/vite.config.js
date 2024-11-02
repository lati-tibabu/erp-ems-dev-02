import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from 'vite'
// import { createRequire } from 'module'
// const require = createRequire(
//     import.meta.url)
// const Buffer = require('buffer/').Buffer;

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     define: {
//         'global.Buffer': Buffer,
//     }
// });
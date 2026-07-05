import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"
import { keycloakify } from "keycloakify/vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "none",
            environmentVariables: [
                { name: "LOGO_URL", default: ""},
                { name: "HEADER_LEFT", default: ""},
                { name: "HEADER_RIGHT", default: ""}
            ]
        }),
        tailwindcss()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});

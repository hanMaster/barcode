import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
    base: '/barcode/',
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                id: '/',
                name: 'Barcode Reader',
                short_name: 'Barcode',
                description: 'Приложение для чтения штрих-кодов',
                theme_color: '#ffffff',
                orientation: 'portrait',
                icons: [
                    {
                        src: 'https://cdn-icons-png.flaticon.com/512/237/237399.png',
                        sizes: '512x512',
                    },
                ],
            },
        }),
        /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
        // devtools(),
        solidPlugin(),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});

// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://soufiane-raki.com',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true
        }
    },
    integrations: []
});

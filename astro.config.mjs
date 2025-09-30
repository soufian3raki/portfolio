// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://soufian3raki.github.io/portfolio/',
    //base: '/portfolio/',
    markdown: {
        shikiConfig: {
            theme: 'dracula',
            wrap: true
        }
    },
    integrations: []
});

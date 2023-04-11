// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',
        'nuxt-proxy-request'
    ],
    proxy: {
        options: [
            {
                target: 'https://jsonplaceholder.typicode.com',
                pathFilter: ['/apis/**'],
                pathRewrite: {
                    '^/apis': ''
                }
            }
        ]
    }
})

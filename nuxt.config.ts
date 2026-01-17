// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxt/image'],
  css: ['~/assets/scss/global.scss'],
  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/sections', extensions: ['vue'] },
  ],
  i18n: {
    defaultLocale: 'en',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        name: 'Português',
        file: 'pt.json',
      },
    ],
  },
  vite: {
    resolve: {
      alias: {
        path: 'path-browserify',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_shared.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      title: 'Henrique Costa',
      meta: [
        {
          name: 'description',
          content: 'Full-Stack Developer',
        },
        {
          name: 'msapplication-TileColor',
          content: '#001e40',
        },
        {
          name: 'msapplication-TileImage',
          content: '/mstile-144x144.png',
        },
        {
          name: 'msapplication-config',
          content: '/browserconfig.xml',
        },
        {
          name: 'theme-color',
          content: '#0075ff',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/assets/safari-pinned-tab.svg',
          color: '#003c80',
        },
        {
          rel: 'shortcut icon',
          href: '/assets/favicon.ico',
        },
      ],
    },
  },
});

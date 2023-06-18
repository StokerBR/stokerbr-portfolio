// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    precompile: {
      strictMessage: false,
    },
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'pt',
        name: 'Português',
      },
    ],
  },
  app: {
    head: {
      title: 'StokerBR',
      meta: [
        {
          name: 'description',
          content: 'This is the home page',
        },
        {
          name: 'msapplication-TileColor',
          content: '#252525',
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
          content: '#252525',
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
          color: '#252525',
        },
        {
          rel: 'shortcut icon',
          href: '/assets/favicon.ico',
        },
      ],
    },
  },
});

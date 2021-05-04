export default {
  ssr: false,
  head: {
    titleTemplate: 'OyuCode | CodeHub',
    title: 'OyuCode | CodeHub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/sass/global.sass',
    '~/assets/sass/class.sass',
    'codemirror/lib/codemirror.css',
  ],
  plugins: [{ src: '~plugins/codemirror-plugin', ssr: false }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', 'nuxt-webfontloader', '@nuxtjs/pwa'],

  axios: {
    baseURL: 'http://localhost:8000',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  webfontloader: {
    google: {
      families: ['Ubuntu+Mono', 'Exo+2', 'Play', 'Montserrat'],
      urls: [
        'https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap',
        'https://fonts.googleapis.com/css2?family=Exo+2&display=swap',
        'https://fonts.googleapis.com/css2?family=Play&display=swap',
        'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
      ],
    },
  },
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: true,
    },
  },

  build: {},
}

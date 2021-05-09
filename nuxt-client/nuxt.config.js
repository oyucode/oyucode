export default {
  target: 'static',
  ssr: false,
  head: {
    titleTemplate: 'OyuCode | CodeHub',
    title: 'OyuCode | CodeHub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],
  },
  css: [
    '~/assets/sass/theme.sass',
    '~/assets/sass/class.sass',
    'codemirror/lib/codemirror.css',
  ],
  plugins: [{ src: '~/plugins/codemirror-plugin', ssr: false }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  auth: {
    strategies: {
      google: {
        clientId: process.env.G_CLIENT_ID,
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: 'http://localhost:8000/api/v1/core/google/',
          userInfo: 'http://localhost:8000/api/v1/core/auth/user/',
          logout: {
            url: 'http://localhost:8000/api/v1/core/auth/logout/',
            method: 'post',
          },
        },
        redirectUri: '',
      },
    },
    redirect: {
      callback: '/callback',
      login: '/',
      home: '/',
    },
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  webfontloader: {
    google: {
      families: ['Ubuntu+Mono', 'Exo+2', 'Open+Sans', 'Montserrat', 'Jura'],
      urls: [
        'https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap',
        'https://fonts.googleapis.com/css2?family=Exo+2&display=swap',
        'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
        'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
        'https://fonts.googleapis.com/css2?family=Jura&display=swap',
      ],
    },
  },
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
  },

  build: {},
}

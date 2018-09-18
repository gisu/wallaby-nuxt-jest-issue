const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

class TailwindExtractor {
  static extract(content) {
    // eslint-disable-next-line
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | jesttest',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Load global CSS
  */
  css: ['@/assets/css/main.css'],
  /*
    ** Load Plugins
    */
  plugins: [
    { src: '~plugins/responsiveComponents.js', ssr: false },
    { src: '~plugins/bowser.js', ssr: false },
    { src: '~plugins/hasScrollbars.js', ssr: false }
  ],

  /*
  ** Load Modules
  */
  modules: [
    'nuxt-sass-resources-loader',
    '@nuxtjs/axios'
  ],

  /*
   * Sass Resources Config
   */
  sassResources: ['@/assets/framework/_framework.scss'],

  /*
  ** Axios Config
  */
  axios: {
    baseURL: process.env.BASE_URL || '',
    credentials: false
  },

  /*
  ** This option is given directly to the vue-router Router constructor
  */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Extract CSS
    */
    extractCSS: true,
    vendor: ['bowser'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });

        /**
         * SVG Inline Loader
         */
        const urlLoader = config.module.rules.find((rule) => {
          if (rule.use && rule.use[ 0 ]) {
            return rule.use[ 0 ].loader == 'url-loader';
          }
        });

        urlLoader.test = /\.(png|jpe?g|gif)$/;

        config.module.rules.push({
          test: /\.svg$/,
          loader: 'svg-inline-loader',
          exclude: /node_modules/
        });
      }

      /*
      ** Cleanup CSS with PurgeCSS
      */
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['html', 'js', 'php', 'vue']
              }
            ],
            whitelist: ['html', 'body']
          })
        );
      }
      return config;
    }
  }
};

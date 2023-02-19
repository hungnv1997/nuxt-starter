// import fs from "fs";
// import path from "path";
import webpack from "webpack";

const environment = process.env.NODE_ENV || "development";
const envSet = require(`./env.${environment}.js`);
const envConfig = {
  router: {
    base: envSet.base,
    // middleware: ["initUser", "auth", "initMenu"],
  },
  env: envSet,
  generate: {
    dir: `dist/${environment}/${envSet.base}`,
  },
};
export default {
  ...envConfig,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "hungnv1997",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { hid: "icon", rel: "icon", type: "image/x-icon", href: "/logo.png" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.css",
    // '@mdi/font/css/materialdesignicons.css',
    // 'element-ui/lib/theme-chalk/index.css',
  ],
  vender: [
    // 'element-ui'
  ],
  // babel: {
  //     "plugins": [
  //         ["component", [{
  //                 "libraryName": "element-ui",
  //                 "styleLibraryName": "theme-default"
  //             },
  //             'transform-async-to-generator',
  //             'transform-runtime'
  //         ]]
  //     ],
  //     comments: true
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/i18n.js",
    "@/plugins/vuetify.js",
    // { src: '~plugins/element-ui', ssr: true },
    "~plugins/bootstrap.js",
    "~plugins/mixins-global.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/vuetify
    // '@nuxtjs/vuetify',
    // "@nuxtjs/router",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //     // customVariables: ['~/assets/css/vuetifyVariables.scss'],
  //     defaultAssets: false
  // },
  // routerModule: {
  //   /* module options */
  //   path: "router/",
  //   fileName: "index.js",
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /**
     * add external plugins
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
      }),
    ],
    // transpile: ['vuetify/lib'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
  // For package need https hosting
  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // },
    // host: '192.168.1.100',
    // port: '443'
  },
};

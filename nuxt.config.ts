import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },

  devtools: { enabled: true},
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt'],

  extends: ['@sidebase/core'],

  typescript: {
    shim: false
  },

  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased h-full'
      },
      htmlAttrs: {
        class: 'h-full'
      }
    },
    rootAttrs: {
      class: 'h-full'
    },
  },

  compatibilityDate: '2024-10-12'
})

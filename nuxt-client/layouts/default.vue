<template>
  <v-app>
    <AppBar />
    <AppView />
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import('./AppBar'),
    AppView: () => import('./AppView'),
    AppFooter: () => import('./AppFooter'),
  },
}
</script>

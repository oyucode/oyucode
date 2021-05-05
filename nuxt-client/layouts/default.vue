<template>
  <v-app>
    <AppView />
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
export default {
  components: {
    AppView: () => import('./AppView'),
    // AppFooter: () => import('./AppFooter'),
  },
}
</script>

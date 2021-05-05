<template>
  <v-container class="py-0 px-0" fluid>
    <v-row cols="12">
      <AppBar />
    </v-row>
    <v-row class="mt-5" justify="center">
      <v-col cols="8">
        <LandingDetail />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    AppBar: () => import('../layouts/Landing/AppBar'),
    LandingDetail: () => import('../layouts/Landing/Detail'),
  },
}
</script>

<template>
  <v-app-bar app>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-5" size="42">
        <v-img
          src="https://avatars.githubusercontent.com/u/43212232?v=4"
          alt="John"
        >
        </v-img>
      </v-avatar>
      <v-btn
        v-for="link in links"
        :key="link"
        text
        style="text-transform: none"
        class="font-play col-gray-200 font-weight-bold f-17"
        v-text="link"
      />

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    links: ['Profile', 'Dashboard', 'OyuCode', 'CodeHub'],
  }),
}
</script>

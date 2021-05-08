<template>
  <v-dialog transition="scale-transition" max-width="350">
    <template #activator="{ on, attrs }">
      <v-btn
        class="text-white normal-case tracking-normal text-sm"
        text
        v-bind="attrs"
        v-on="on"
        >Нэвтрэх</v-btn
      >
    </template>
    <v-card class="text-center" style="border-top: 5px solid #4285f4">
      <v-card-title class="justify-center">
        <h3 class="font-thin">Нэвтрэх</h3>
      </v-card-title>
      <v-card-text class="px-2 text-base">
        <span>Цагаа хэмнэж ихийг бүтээе. Бид хаана ч байршуулахгүй</span>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="#f4b400e6"
          class="google-auth mb-3 justify-start normal-case tracking-normal text-xl white--text"
          @click="googleAuth"
        >
          <v-icon left dark size="25"> mdi-google </v-icon>
          <span class="ml-n2 font-medium"> oogle </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    googleAuth() {
      console.log('clicked')
      this.$auth.loginWith('google')
    },
  },
}
</script>

<style lang="sass" scoped>
.google-auth
  &:hover
    transform: translateY(-3px)
    box-shadow: 0px 5px 7px 1px rgb(0 0 0 / 35%)
    // background-color: red !important
</style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <h1>What is OyuCode ?</h1>
        <v-btn
          color="deep-purple darken-1"
          outlined
          large
          class="mt-5 text-base text-white normal-case"
        >
          <v-icon left>mdi-play-circle </v-icon>
          Play Introduction</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col v-for="i in 3" :key="i" cols="4">
        <v-hover v-slot="{ hover }">
          <v-card
            height="300"
            :elevation="hover ? 12 : 0"
            class="bg-transparent py-5"
          >
            <v-img height="50" contain src="coding.svg" />
            <v-card-title class="justify-center">
              <h4 style="color: #02203c">Code-Execution environment</h4>
            </v-card-title>
            <v-card-text>
              <p class="text-center text-base" style="color: #445d6e">
                Algorithms are tough to learn on paper. Each and every one of
                our questions is accompanied by a two-part video explanation to
                maximize learning. That's over 100 hours of content, all at your
                fingertips. Learn more.
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="sass">
.v-card:hover
  cursor: pointer
  transition-duration: 0.5s
</style>

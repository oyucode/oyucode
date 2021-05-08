<template>
  <v-container
    style="background: linear-gradient(-90deg, #02203c, #001528)"
    fluid
  >
    <v-row align="center" justify="center">
      <v-col cols="3">
        <div class="d-flex justify-center">
          <v-img src="test.svg" max-width="160" max-height="160" contain>
          </v-img>
        </div>
      </v-col>
      <v-col cols="5">
        <v-btn
          v-for="link in links"
          :key="link.name"
          text
          class="normal-case font-sans text-white tracking-normal text-sm"
          :to="link.to"
          v-text="link.name"
        />
      </v-col>

      <!--  -->
      <v-col cols="2" align="end">
        <template v-if="$auth.loggedIn">
          <v-btn @click="$auth.logout">Log out</v-btn>
        </template>
        <template v-else>
          <LandingLogin />
        </template>
        <!--  -->
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="4">
        <span class="font-exo text-white text-5lg font-normal">AlgoExpert</span>
        <p class="mt-5 text-white text-justify text-xl">
          The ultimate resource to prepare for coding interviews. Everything you
          need, in one streamlined platform.
        </p>
        <v-btn
          color="deep-purple darken-1"
          large
          class="mt-5 text-base text-white normal-case"
        >
          <v-icon left>mdi-credit-card-check </v-icon>
          Buy Tutorials</v-btn
        >
      </v-col>
      <v-col cols="4">
        <v-img src="hero.png" height="400" contain />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        name: 'What is OyuCode ?',
      },
      {
        name: 'What is CodeHub ?',
      },
      {
        name: 'Problems',
        to: '/problems',
      },
      {
        name: 'Meet the Team',
      },
    ],
  }),
}
</script>
<style lang="sass">
.logo-text
  background: -webkit-linear-gradient(0deg, rgba(0,115,186,1) 0%, rgba(0,205,53,1) 10%, rgba(255,255,255,1) 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
</style>

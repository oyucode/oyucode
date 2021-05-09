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
          <v-menu
            open-on-hover
            rounded
            transition="slide-x-transition"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-avatar v-bind="attrs" v-on="on">
                <v-img :src="$auth.user.picture" :alt="$auth.user.username" />
              </v-avatar>
            </template>
            <v-list nav dense>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
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
    items: [
      { text: 'My Files', icon: 'mdi-folder' },
      { text: 'Shared with me', icon: 'mdi-account-multiple' },
      { text: 'Starred', icon: 'mdi-star' },
      { text: 'Recent', icon: 'mdi-history' },
      { text: 'Offline', icon: 'mdi-check-circle' },
      { text: 'Uploads', icon: 'mdi-upload' },
      { text: 'Backups', icon: 'mdi-cloud-upload' },
    ],
  }),
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
<style lang="sass">
.logo-text
  background: -webkit-linear-gradient(0deg, rgba(0,115,186,1) 0%, rgba(0,205,53,1) 10%, rgba(255,255,255,1) 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
</style>

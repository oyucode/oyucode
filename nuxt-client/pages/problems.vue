<template>
  <v-container fluid class="py-0 px-0">
    <v-app-bar hide-on-scroll dense app dark elevation="0">
      <v-btn
        v-for="link in links"
        :key="link.name"
        text
        class="normal-case font-sans text-white tracking-normal text-sm"
        :to="link.to"
        v-text="link.name"
      />
      <v-spacer></v-spacer>
      <v-btn
        outlined
        color="orange lighten-1"
        class="text-white normal-case"
        small
      >
        <v-icon left>mdi-star</v-icon>
        Premium
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-row class="mt-10 px-10">
      <v-col cols="8">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        ></v-data-table>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
          <v-text-field
            :value="itemsPerPage"
            label="Items per page"
            type="number"
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
          ></v-text-field>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card
          v-for="item in cards"
          :key="item.title"
          :color="item.color"
          dark
          class="mt-10"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  v-if="item.artist === 'Ellie Goulding'"
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>

                <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                  START RADIO
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="6" class="pa-10 font-exo">
        <h1 class="font-exo">Magician versus Chef</h1>
        <p class="f-18 text-justify col-gray-300" style="line-height: 1.6">
          When Chef was visiting a fair in Byteland, he met a magician. The
          magician had <strong>N</strong> boxes (numbered 1 through N) and a
          gold coin. He challenged Chef to play a game with him; if Chef won the
          game, he could have the coin, but if he lost, the magician would
          kidnap Chef.
        </p>
        <p class="f-18 text-justify col-gray-300" style="line-height: 1.6">
          At the beginning of the game, the magician places the gold coin into
          the
          <strong>X</strong>-th box. Then, he performs <strong>S</strong> swaps.
          To win, Chef needs to correctly identify the position of the coin
          after all swaps.
        </p>
        <p class="f-18 text-justify col-gray-300" style="line-height: 1.6">
          In each swap, the magician chooses two boxes <strong>A</strong> and
          <strong>B</strong>, moves the contents of box
          <strong>A</strong> (before the swap) to box <strong>B</strong> and the
          contents of box <strong>B</strong> (before the swap) to box
          <strong>A</strong>.
        </p>
        <v-tabs v-model="tab" hide-slider>
          <v-tab>
            <v-icon left>mdi-code-tags</v-icon>
            <span> Input & Output </span>
          </v-tab>
          <v-tab>
            <v-icon left>mdi-cube-scan</v-icon>
            <span> Result</span>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="bg-transparent">
          <v-tab-item class="mt-3">
            <h2>Input</h2>
            <div class="font-ubuntu ex">
              <div class="d-flex d-block">
                <span class="white--text">prices =&nbsp;</span>
                <span>[5, 11, 3, 50, 60, 90]</span>
              </div>
              <div class="d-flex d-block">
                <span class="white--text">k =&nbsp;</span>
                <span>2</span>
              </div>
            </div>
            <h2 class="mt-5">Output</h2>
            <div class="font-ubuntu ex">
              <div class="d-flex d-block">
                <span class="white--text">prices =&nbsp;</span>
                <span>[5, 11, 3, 50, 60, 90]</span>
              </div>
              <div class="d-flex d-block">
                <span class="white--text">k =&nbsp;</span>
                <span>2</span>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col cols="6">
        <vue-codemirror ref="code" />
        <div class="mt-5 d-flex justify-end">
          <v-btn color="warning" class="mr-5" outlined>Hint</v-btn>
          <v-btn color="primary" class="mr-5" elevation="6" @click="submitCode"
            >Submit</v-btn
          >
        </div>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
    links: [
      {
        name: 'Problems',
        to: '/problems',
      },
      {
        name: 'Contest',
      },
      {
        name: 'Discuss',
      },
    ],
    tab: 0,
  }),
  methods: {
    async submitCode() {
      // this.tab = 1
      const { code } = this.$refs.code.$data
      const { data } = await this.$axios.post(`api/v1/code/`, {
        source: code,
      })
      console.log(data)
    },
  },
}
</script>

<style lang="sass">
strong
  color: #fff !important
code
  color: #feb32b !important
  padding: 2px 4px !important
  font-size: 90% !important
  background-color: #ffffff10 !important
  border-radius: 4px !important
  word-break: break-all !important
.ex
  color: #feb32b !important
  padding: 10px 10px !important
  background-color: #ffffff10 !important
  border-radius: 4px !important
  word-break: break-all !important
</style>

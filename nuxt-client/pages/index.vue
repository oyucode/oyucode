<template>
  <v-row>
    <v-col cols="6" class="pa-10 font-exo">
      <h1 class="font-exo">Magician versus Chef</h1>
      <p class="f-18 text-justify col-gray-300" style="line-height: 1.6">
        When Chef was visiting a fair in Byteland, he met a magician. The
        magician had <strong>N</strong> boxes (numbered 1 through N) and a gold
        coin. He challenged Chef to play a game with him; if Chef won the game,
        he could have the coin, but if he lost, the magician would kidnap Chef.
      </p>
      <p class="f-18 text-justify col-gray-300" style="line-height: 1.6">
        At the beginning of the game, the magician places the gold coin into the
        <strong>X</strong>-th box. Then, he performs <strong>S</strong> swaps.
        To win, Chef needs to correctly identify the position of the coin after
        all swaps.
      </p>
      <p class="f-18 text-justify col-gray-300" style="line-height: 1.6">
        In each swap, the magician chooses two boxes <strong>A</strong> and
        <strong>B</strong>, moves the contents of box <strong>A</strong> (before
        the swap) to box <strong>B</strong> and the contents of box
        <strong>B</strong> (before the swap) to box <strong>A</strong>.
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
  </v-row>
</template>

<script>
export default {
  data: () => ({
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

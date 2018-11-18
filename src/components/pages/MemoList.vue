<template>
  <div>
    <div style="margin-top:100px;" class="hogehoge">
      {{ memo }}
    </div>
    <button class="btn-sm btn-secondary" type="submit" v-on:click.prevent="increment">
      increment
    </button>
  </div>
</template>
<script>

export default {
  name: 'MemoList',
  data () {
    return {
      number: 5
    }
  },
  computed: {
    memo () {
      return this.$store.getters.memo
    }
  },
  mounted () {
  },
  methods: {
    /* addMemo () {
      this.$store.commit('addMemo', this.number)
    }, */
    increment () {
      this.$store.dispatch('increment', this.number)
    }
  }
}
</script>

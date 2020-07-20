<template>
  <div class="artical">
    <router-view :key="key"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  components: {},
  methods: {},
  mounted () {},
  computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
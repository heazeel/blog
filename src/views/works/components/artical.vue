<template>
  <div class="markdown-body">
    <component :is="currentComponent">
    </component>
  </div>
</template>
<script>
import {A,B,C,D,E,F} from '@/utils/import.js';
export default {
  data () {
    return {
      currentComponent:this.$route.params.id
    }
  },
  components: {
    A,B,C,D,E,F
  },
  methods: {
    
  },
  mounted () {
    
  }
}
</script>
<style lang="scss" scoped>

</style>
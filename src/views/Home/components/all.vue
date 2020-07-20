<template>
  <div>
    <studies/>
    <notes/>
    <drafts/>
  </div>
</template>
<script>
import Studies from "./studies.vue";
import Notes from "./notes.vue";
import Drafts from "./drafts.vue";
export default {
  name: "all",
  components: {
    Studies,
    Notes,
    Drafts
  }
};
</script>
<style lang="scss" scope>

</style>
<template>
  <panel title="Tab">
    <v-textarea
      readonly
      v-model="song.tab"
    ></v-textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <panel title="Tab">
    <v-textarea
      readonly
      v-model="song.tab"
    ></v-textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

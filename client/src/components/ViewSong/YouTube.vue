<template>
  <panel title='YouTube Video'>
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="200">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

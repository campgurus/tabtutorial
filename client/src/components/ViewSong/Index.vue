<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song"/>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Tab from './Tab'
import Lyrics from './Lyrics'
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
export default {
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="title"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="artist"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="genre"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="album"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube Id"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-textarea
          label="Tab"
          v-model="song.tab"
        ></v-textarea>

        <v-textarea
          label="Lyrics"
          v-model="song.lyrics"
        ></v-textarea>
      </panel>

      <v-btn
        dark
        class="cyan"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

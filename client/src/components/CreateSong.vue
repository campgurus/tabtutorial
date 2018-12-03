<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="title"
          v-model="title"
        ></v-text-field>

        <v-text-field
          label="artist"
          v-model="artist"
        ></v-text-field>

        <v-text-field
          label="genre"
          v-model="genre"
        ></v-text-field>

        <v-text-field
          label="album"
          v-model="album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube Id"
          v-model="youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-textarea
          label="Album Image Url"
          v-model="albumImageUrl"
        ></v-textarea>

        <v-textarea
          label="Album Image Url"
          v-model="albumImageUrl"
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

export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
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

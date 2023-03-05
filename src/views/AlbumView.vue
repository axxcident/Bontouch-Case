<template>
  <header>
    <h2>{{ albums[$route.params.albumId - 1].title }}</h2>
    <p>{{ albums.length }} photos</p>
  </header>
  <div class="photos">
    <div class="photo" v-for="(album, index) in albums" @click="albumId(index)">
      <img src="../assets/helloWorld.jpg" :alt="album.title">
    </div>
    <img class="overlay-img" src="../assets/helloWorld.jpg" :alt="`{altPlaceholder.value}`"
      :style="{ display: showImage ? 'block' : 'none' }">
    <span class="exitspan" @click="showImage = !showImage">&times;</span>
    <div class="popup" :style="{ display: showImage ? 'block' : 'none' }" @click="klickas"></div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useEmployeeStore } from '../stores/EmpStore'
export default {
  setup() {
    const EmpStore = useEmployeeStore()
    const { employees, albums } = storeToRefs(EmpStore)

    let showImage = ref(false)
    let altPlaceholder = ref("")
    function albumId(indexet) {
      altPlaceholder.value = this.albums[indexet].title;
      showImage.value = !showImage.value
    }

    function klickas() {
      console.log("klickas outside")
      showImage.value = !showImage.value
    }

    return { EmpStore, employees, albums, altPlaceholder, albumId, showImage, klickas }
  }
}
</script>

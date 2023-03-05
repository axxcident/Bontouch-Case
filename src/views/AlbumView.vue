<template>
  <header>
    <!-- $route.params här: { "userId": "1", "albumId": "1" } -->
    <h2>{{ albums[$route.params.albumId - 1].title }}</h2>
    <p>{{ albums.length }} photos</p>
  </header>
  <div class="photos">
    <div class="photo" v-for="(album, index) in albums" @click="albumId(index)">
      <img src="../assets/helloWorld.jpg" :alt="album.title">
      <!-- <p>600 x 600</p> -->
    </div>
  </div>
  <div class="popup">
    <span>&times;</span>
    <img src="../assets/helloWorld.jpg" :alt=altPlaceholder.value>
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

    let altPlaceholder = ref("")
    function albumId(indexet) {
      altPlaceholder.value = this.albums[indexet].title;
      console.log(this.albums[indexet].title)
      console.log(altPlaceholder.value)
    }

    return { EmpStore, employees, albums, altPlaceholder, albumId }
  }
}
</script>

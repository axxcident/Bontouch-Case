<template>
  <header>
    <!-- $route.params här: { "userId": "1", "albumId": "1" } -->
    <h2>{{ albums[$route.params.albumId - 1].title || albums[lastLetter - 1].title }}</h2>
    <p>{{ albums.length }} photos</p>
  </header>
  <div class="photos">
    <div class="photo" v-for="album in albums">
      <img src="" :alt="album.title">
      <p>600 x 600</p>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
// import { ref, onMounted, onUnmounted } from 'vue'
// import { useRoute } from 'vue-router'
import { useEmployeeStore } from '../stores/EmpStore'
export default {
  setup() {
    const EmpStore = useEmployeeStore()
    const { employees, albums } = storeToRefs(EmpStore)

    // const route = useRoute()
    // const sak = ref(localStorage.getItem("UserAlbumRoutes") || route.fullPath)

    // const handlePopstate = () => {
    //   localStorage.setItem("UserAlbumRoutes", sak.value)
    // }

    // // Add event listener on component mount
    // onMounted(() => {
    //   window.addEventListener('popstate', handlePopstate)
    // })

    // // Remove event listener on component unmount
    // onUnmounted(() => {
    //   window.removeEventListener('popstate', handlePopstate)
    // })

    return { EmpStore, employees, albums }
  }
}
</script>

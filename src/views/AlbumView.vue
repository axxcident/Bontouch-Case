<template>
  <header>
    <!-- $route.params här: { "userId": "1", "albumId": "1" } -->
    <h2>{{ albums[$route.params.albumId - 1].title }}</h2>
    <p>{{ albums.length }} photos</p>
    <p>{{ sak }}</p>
  </header>
  <div class="photos">
    <div class="photo" v-for="album in albums">
      <p>600 x 600</p>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useEmployeeStore } from '../stores/EmpStore'
export default {
  setup() {
    const EmpStore = useEmployeeStore()
    const { employees, albums } = storeToRefs(EmpStore)

    const route = useRoute()
    const sak = ref(route.fullPath)

    // Add event listener on component mount
    // onMounted(() => {
    //   window.addEventListener('popstate', () => {
    //     localStorage.setItem("urlkey", sak)
    //   })
    // })

    // Remove event listener on component unmount
    // onUnmounted(() => {
    //   window.removeEventListener('popstate', () => {
    //     sak = localStorage.getItem("urlkey")
    //   })
    // })

    return { EmpStore, employees, albums, sak }
  }
}
</script>

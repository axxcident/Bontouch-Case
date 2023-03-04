<template>
  <header>
    <!-- $route.params här: { "userId": "1", "albumId": "1" } -->
    <h2>{{ albums[$route.params.albumId - 1].title }}</h2>
    <p>{{ albums.length }} photos</p>
  </header>
  <div class="photos">
    <div class="photo" v-for="album in albums">
      <p>600 x 600</p>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useEmployeeStore } from '../stores/EmpStore'
export default {
  setup() {
    const EmpStore = useEmployeeStore()
    const { employees, albums } = storeToRefs(EmpStore)

    return { EmpStore, employees, albums }
  }
}
</script>

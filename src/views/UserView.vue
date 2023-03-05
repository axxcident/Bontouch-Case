<template>
  <header>
    <h1>{{ capitalize(employees[$route.params.userId - 1].namn) }} {{ capitalize(employees[$route.params.userId -
      1].efter) }}
    </h1>
    <div class="italic-section">
      <p>Bontouch AB</p>
      <p>{{ employees[$route.params.userId - 1].namn }}.{{ employees[$route.params.userId - 1].efter }}{{
        employees[$route.params.userId - 1].email }}</p>
      <p>Kungsgatan 55, 111 22, Stockholm</p>
    </div>
  </header>
  <h2 class="albums">Albums</h2>
  <div class="album-list">
    <AlbumDetails v-for="(alb, index) in albums" :key="index" :title="alb.title" :id="alb.id" />
  </div>
</template>

<script>
import AlbumDetails from '../components/AlbumDetails.vue'
import { storeToRefs } from 'pinia'
import { useEmployeeStore } from '../stores/EmpStore'

export default {
  components: {
    AlbumDetails
  },
  setup() {
    const EmpStore = useEmployeeStore()
    const { employees, albums } = storeToRefs(EmpStore)

    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return { EmpStore, employees, albums, capitalize }
  }
}
</script>

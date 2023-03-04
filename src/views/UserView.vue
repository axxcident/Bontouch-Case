<template>
  <div class="task">
    $route.params.userId: {{ $route.params.userId }}
  </div>
  <div class="task">
    <h3>{{ employees[$route.params.userId - 1].namn }} {{ employees[$route.params.userId - 1].efter }}</h3>
  </div>
  <div class="italic section">
    <p>Bontouch AB</p>
    <p>{{ employees[$route.params.userId - 1].namn }}.{{ employees[$route.params.userId - 1].efter }}{{
      employees[$route.params.userId - 1].email }}</p>
    <p>Kungsgatan 55, 111 22, Stockholm</p>
  </div>
  <h4>Albums</h4>
  <div class="albums">
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

    return { EmpStore, employees, albums }
  }
}
</script>

    <!-- <AlbumDetails v-for="employ in EmpStore.employees" :album="employ.albums[0][0].title" /> -->
    <!-- :album="EmpStore.employees[Number(id) - 1].albums[0][0].title"/> -->

<template>
  <div class="task">
    <h3>{{ EmpStore.employees[Number(id) - 1].namn }} {{ EmpStore.employees[Number(id) - 1].efter }}</h3>
  </div>
  <div class="italic section">
    <p>Bontouch AB</p>
    <p>{{ EmpStore.employees[Number(id) - 1].namn }}.{{ EmpStore.employees[Number(id) - 1].efter }}{{
      EmpStore.employees[Number(id) - 1].email }}</p>
    <p>Kungsgatan 55, 111 22, Stockholm</p>
  </div>
  <h4>Albums</h4>
  <div class="albums">
    <AlbumDetails v-for="alb in EmpStore.albums" :key="alb.id" :id="alb.id" :title="alb.title" :anotherid=id />
    <!-- <AlbumDetails v-for="employ in EmpStore.employees" :album="employ.albums[0][0].title" /> -->
    <!-- :album="EmpStore.employees[Number(id) - 1].albums[0][0].title"/> -->
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
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup() {
    const EmpStore = useEmployeeStore()
    const { employees, favvosTotal, totalUppgifter, favoriter } = storeToRefs(EmpStore)

    return { EmpStore, employees, favvosTotal, totalUppgifter, favoriter }
  }
}
</script>

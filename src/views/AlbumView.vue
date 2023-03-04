<template>
  <div>
    <!-- $route.params här: { "userId": "1", "albumId": "1" } -->
    <h5>{{ albums[$route.params.albumId - 1].title }}</h5>
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

<template>
  <RouterLink class="task" :to="`/user/${$route.params.userId}/albums/${id}`">
    <p> {{ title }}</p>
  </RouterLink>
</template>

<script>
import { useEmployeeStore } from '../stores/EmpStore'
import { RouterLink } from 'vue-router'

export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: Number
    }
  },
  setup() {
    const EmpStore = useEmployeeStore()
    return { EmpStore }
  }
}
</script>

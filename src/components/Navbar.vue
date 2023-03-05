<template>
  <!-- Breadcrumb Navigation -->
  <!-- <p> $route.params här: {{ $route.params }}</p>
  <p> $route.params.id här: {{ $route.params.id }}</p> -->
  <nav class="breadcrumb">
    <RouterLink to="/">Users</RouterLink>
    <div class="userbreadcrumb" v-if="$route.params.userId">
      <p class="spaceslash"> / </p>
      <RouterLink :to="`/user/${$route.params.userId}`">{{ capitalize(employees[$route.params.userId - 1].namn) }} {{
        capitalize(employees[$route.params.userId - 1].efter) }}
      </RouterLink>
    </div>
    <div class="albumbreadcrumb" v-if="$route.params.albumId">
      <p class="spaceslash"> / </p>
      <RouterLink :to="`/user/${$route.params.userId}/albums/${$route.params.albumId}`">{{
        capitalize(albums[$route.params.albumId - 1].title) }}</RouterLink>
    </div>
  </nav>
  <RouterView></RouterView>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useEmployeeStore } from '../stores/EmpStore'
export default {
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

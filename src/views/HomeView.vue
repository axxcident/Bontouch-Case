<template>
  <main>
    <!-- Employee favorites list -->
    <div class="task-list">
      <h2>Favorites</h2>
      <div v-for="empl in EmpStore.favoriter">
        <UserDetails :empl="empl" :key="empl.id" />
      </div>
    </div>
    <!-- Employee favorites list -->
    <div class="task-list">
      <h2>Users</h2>
      <div v-for="empl in EmpStore.nonfavvos">
        <UserDetails :empl="empl" :key="empl.id" />
      </div>
    </div>

  </main>
</template>

<script>
import UserDetails from '../components/UserDetails.vue'
import { useEmployeeStore } from '../stores/EmpStore'

export default {
  components: { UserDetails },
  setup() {
    const EmpStore = useEmployeeStore()

    EmpStore.getAlbums

    return { EmpStore }
  }
}
</script>

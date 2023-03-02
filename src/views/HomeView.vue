<template>
  <main>
    <!-- Favoriter -->
    <div>
      <p>Alla anställda totalt: {{ EmpStore.totalUppgifter }}</p>
      <p>Alla favoriter: {{ EmpStore.favvosTotal }}</p>
      <!-- <uppgiftsTagare /> -->
    </div>

    <!-- Employee list -->
    <div class="task-list">
      <h2>Favorites</h2>
      <div v-for="empl in EmpStore.favoriter">
        <UserDetails :empl="empl" />
      </div>
    </div>
    <div class="task-list">
      <h2>Users</h2>
      <div v-for="empl in EmpStore.nonfavvos">
        <UserDetails :empl="empl" />
      </div>
    </div>

  </main>
</template>

<script>
// import { ref } from 'vue'

// import UserView from '../views/UserView.vue'
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

<template>
  <div class="task">
    <!-- @click="userPage(empl.id)" -->
    <RouterLink class="namninfo" :to="`/user/${empl.id}`">
      <h3>{{ empl.namn }}</h3>
      <h4>{{ empl.company }}</h4>
      <h5>{{ empl.namn }}.{{ empl.efter }}{{ empl.email }}</h5>
    </RouterLink>
    <i class="fa-star" :class="empl.isFav ? 'fa-solid' : 'fa-regular'" @click="EmpStore.ToggleFavEmployee(empl.id)"></i>
  </div>
</template>

<script>
import { useEmployeeStore } from '../stores/EmpStore';
import { RouterLink } from 'vue-router'

export default {
  props: {
    empl: {
      type: Object,
      required: true
    }
  },
  setup() {
    const EmpStore = useEmployeeStore();
    return { EmpStore };
  }
}
</script>

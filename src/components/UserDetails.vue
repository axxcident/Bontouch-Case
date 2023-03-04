<template>
  <div class="task">
    <!-- @click="userPage(empl.id)" -->
    <div class="namninfo">
      <RouterLink :to="`/user/${empl.id}`">Länk till rymden</RouterLink>
      <!-- <RouterLink :to="{ name: 'UserView', params: { emplId: empl.id } }">Länk till rymden</RouterLink> -->
      <h3>{{ empl.namn }}</h3>
      <h4>{{ empl.company }}</h4>
      <h5>{{ empl.namn }}.{{ empl.efter }}{{ empl.email }}</h5>
    </div>
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

<template>
  <div class="user">
    <RouterLink class="namninfo" :to="`/user/${empl.id}`">
      <h3>{{ capitalize(empl.namn) }}</h3>
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

    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return { EmpStore, capitalize };
  }
}
</script>

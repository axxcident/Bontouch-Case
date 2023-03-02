<template>
  <div class="task">
    <div class="namninfo" @click="userPage(parseInt(siffra))">
      <!-- <RouterLink to="/user/id"></RouterLink> -->
      <h3>{{ empl.namn }}</h3>
      <h4>{{ empl.company }}</h4>
      <h5>{{ empl.namn }}.{{ empl.efter }}{{ empl.email }}</h5>
    </div>
    <i class="fa-star" :class="empl.isFav ? 'fa-solid' : 'fa-regular'" @click="EmpStore.ToggleFavEmployee(empl.id)"></i>
  </div>
</template>

<script>
import { useEmployeeStore } from '../stores/EmpStore';
import { RouterLink, useRouter } from 'vue-router'

export default {
  // props: ["empl"],
  props: {
    empl: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      siffra: this.empl.id
    }
  },
  setup() {
    const EmpStore = useEmployeeStore();
    const router = useRouter();
    const userPage = (id) => {
      parseInt(id)
      router.push(`/user/${id}`);
      console.log(`/user/${id}`);
    };
    return { EmpStore, userPage };
  },
  components: { RouterLink }
}
</script>

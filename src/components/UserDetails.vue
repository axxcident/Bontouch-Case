<template>
  <div class="task">
    <div class="namninfo" @click="userPage(empl.id)">
      <h3>{{ empl.namn }}</h3>
      <h4>{{ empl.company }}</h4>
      <h5>{{ empl.namn }}.{{ empl.efter }}{{ empl.email }}</h5>
    </div>
    <i class="fa-star" :class="empl.isFav ? 'fa-solid' : 'fa-regular'" @click="EmpStore.ToggleFavEmployee(empl.id)"></i>
  </div>
</template>

<script>
import { useEmployeeStore } from '../stores/EmpStore';
import { useRouter } from 'vue-router'

// import { Router } from 'vue-router';

export default {
  props: ["empl"],
  setup() {
    const EmpStore = useEmployeeStore()

    const router = useRouter();
    const userPage = (id) => {
      // console.log(this.$router)
      router.push(`/user/${id}`)
      console.log(`/user/${id}`)
      // this.$router.push(`/user/:${id}`)
    }
    return { EmpStore, userPage }
  }

}
</script>

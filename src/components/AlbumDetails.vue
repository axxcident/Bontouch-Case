<template>
  <!-- <div class="task" v-for="alb in EmpStore.albums" :key="alb.id"> -->
  <div class="task">
    <p> {{ title }}</p>
    <p> {{ key }}</p>
    <!-- <button @click="albumPage(siffra)">click</button> -->
    <!-- <p>{{ employeeAlbum(id) }}</p> -->
    <!-- <p>{{ EmpStore.employees[employeeID - 1].albums[0][0].title }}</p> -->
  </div>
</template>

<script>
// import { useRouter } from 'vue-router'
import { useEmployeeStore } from '../stores/EmpStore'
import { storeToRefs } from 'pinia'

export default {
  props: {
    alb: {
      type: Object
    },
    key: "key",
    title: {
      type: String
    }
  },

  setup() {
    const EmpStore = useEmployeeStore()
    const { employeeAlbum } = storeToRefs(EmpStore)

    // const router = useRouter();
    // const albumPage = (nr) => {
    // parseInt(nr)
    // router.push(`/user/${this.laggdags}/album${nr}`);
    // console.log(`/user/${this.laggdags}/album/${nr}`);
    // };
    return { EmpStore, employeeAlbum }
  }
}
</script>

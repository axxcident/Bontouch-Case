<template>
  <!-- <div class="task" v-for="alb in EmpStore.albums" :key="alb.id"> -->
  <div class="task">
    <p> {{ text }}</p>
    <p> {{ siffra }}</p>
    <button @click="albumPage(siffra)">click</button>
    <!-- <p>{{ employeeAlbum(id) }}</p> -->
    <!-- <p>{{ EmpStore.employees[employeeID - 1].albums[0][0].title }}</p> -->
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useEmployeeStore } from '../stores/EmpStore'
import { storeToRefs } from 'pinia'
export default {

  props: {
    anotherid: {
      type: String
    },
    id: {
      type: Number
    },
    title: {
      type: String
    }
  },

  data() {
    return {
      text: this.title,
      siffra: this.id,
      laggdags: this.anotherid
    }
  },

  setup() {
    const EmpStore = useEmployeeStore()
    const { employeeAlbum } = storeToRefs(EmpStore)

    const router = useRouter();
    const albumPage = (nr) => {
      parseInt(nr)
      router.push(`/user/${this.laggdags}/album${nr}`);
      console.log(`/user/${this.laggdags}/album/${nr}`);
    };
    return { EmpStore, employeeAlbum, albumPage }
  }
}
</script>

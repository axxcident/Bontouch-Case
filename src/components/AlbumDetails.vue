<template>
  <div class="task">
    <p> {{ title }}</p>
    <button @click="testet(id)">test</button>
    <RouterLink :to="`/user/${$route.params.userId}/albums/${id}`">Länk till rymden</RouterLink>
    <!-- <RouterLink :to="{ name: 'album', params: { userId: $route.params.userId, albumId: id } }"> album titel </RouterLink> -->
    <p> {{ id }}</p>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router'
import { useEmployeeStore } from '../stores/EmpStore'
import { RouterLink } from 'vue-router'

export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: Number
    }
  },

  setup() {
    const EmpStore = useEmployeeStore()

    const testet = (nr) => {
      console.log(nr, typeof nr)
    };
    // const router = useRouter();
    // const albumPage = (nr) => {
    // parseInt(nr)
    // router.push(`/user/${this.laggdags}/album${nr}`);
    // console.log(`/user/${this.laggdags}/album/${nr}`);
    // };
    return { EmpStore, testet }
  }
}
</script>

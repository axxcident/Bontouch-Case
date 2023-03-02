<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Att göra.." v-model="nyUppgift">
    <button>Addera</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useTaskigStore } from '../stores/EmpStore';

export default {
  setup() {
    const taskigStore = useTaskigStore()

    const nyUppgift = ref('')

    const handleSubmit = () => {
      if (nyUppgift.value.length > 0) {
        taskigStore.adderaUppgift({
          title: nyUppgift.value,
          isFav: false,
          // id: taskigStore.taskiga.length + 1, Funkar ej om man fukkar lite med listan.
          id: Math.floor(Math.random() * 10000)
        })
        nyUppgift.value = ''
      }
    }

    return { handleSubmit, nyUppgift }
  }
}
</script>

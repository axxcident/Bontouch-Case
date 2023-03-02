<template>
  <div class="task">
    <h3>{{ uppgifter.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskigStore.ToggleFavUppgift(uppgifter.id)"
        v-bind:class="{ active: uppgifter.isFav }">favorite</i>
    </div>
  </div>
</template>

<script>
import { useTaskigStore } from '../stores/EmpStore';

export default {
  props: ['uppgifter'],
  setup() {
    const taskigStore = useTaskigStore()

    return { taskigStore }
  }
}
</script>

<template>
  <div class="task">
    <h3>{{ EmpStore.employees[id - 1].namn }} {{ EmpStore.employees[id - 1].efter }}</h3>
  </div>
  <div class="italic section">
    <p>Bontouch AB</p>
    <p>{{ EmpStore.employees[id - 1].namn }}.{{ EmpStore.employees[id - 1].efter }}{{ EmpStore.employees[id - 1].email
    }}</p>
    <p>Kungsgatan 55, 111 22, Stockholm</p>
  </div>
  <h4>Albums</h4>
  <div class="albums">

  </div>
</template>

<script>
// import { Ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useEmployeeStore } from '../stores/EmpStore'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup() {
    const EmpStore = useEmployeeStore()
    const { employees, favvosTotal, totalUppgifter, favoriter } = storeToRefs(EmpStore)

    return { EmpStore, employees, favvosTotal, totalUppgifter, favoriter }
  }
}
</script>

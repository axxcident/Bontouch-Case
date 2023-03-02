import { defineStore } from "pinia";


export const useEmployeeStore = defineStore('employeeStore', {
  state: () => ({
    employees: [
      { id: 1, namn: "tobias", efter: "arfors", company: "Bontouch AB", email: `@bontouch.com`, isFav: true },
      { id: 2, namn: "andreas", efter: "valegard", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
      { id: 3, namn: "isabella", efter: "gross", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
      { id: 4, namn: "nicklas", efter: "ansman", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
    ]
  }),
  getters: {
    favoriter() {
      return this.employees.filter(tas => tas.isFav)
    },
    nonfavvos() {
      return this.employees.filter(tas => !tas.isFav)
    },
    favvosTotal() {
      return this.employees.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev
      }, 0)
    },
    totalUppgifter: (state) => {
      return state.employees.length;
    }
  },
  actions: {
    ToggleFavEmployee(id) {
      const favvoemployees = this.employees.find(t => t.id === id)
      favvoemployees.isFav = !favvoemployees.isFav
    }
  }
})

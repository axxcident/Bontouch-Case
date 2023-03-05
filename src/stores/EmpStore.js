import { defineStore } from "pinia";

export const useEmployeeStore = defineStore('employeeStore', {
  state: () => ({
    employees: [
      { id: 1, namn: "tobias", efter: "arfors", company: "Bontouch AB", email: `@bontouch.com`, isFav: true },
      { id: 2, namn: "andreas", efter: "valegard", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
      { id: 3, namn: "isabella", efter: "gross", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
      { id: 4, namn: "nicklas", efter: "ansman", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
    ],
    albums: []
  }),
  getters: {
    async getAlbums() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/albums')
      const data = await res.json()
      this.albums = data
    },
    favoriter() {
      return this.employees.filter(tas => tas.isFav)
    },
    nonfavvos() {
      return this.employees.filter(tas => !tas.isFav)
    }
  },
  actions: {
    ToggleFavEmployee(id) {
      const favvoemployees = this.employees.find(t => t.id === id)
      favvoemployees.isFav = !favvoemployees.isFav
    }
  }
})

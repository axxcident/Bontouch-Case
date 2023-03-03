import { defineStore } from "pinia";
import { ref } from 'vue'

export const useEmployeeStore = defineStore('employeeStore', {
  state: () => ({
    employees: [
      { id: 1, namn: "tobias", efter: "arfors", company: "Bontouch AB", email: `@bontouch.com`, isFav: true },
      { id: 2, namn: "andreas", efter: "valegard", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
      { id: 3, namn: "isabella", efter: "gross", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
      { id: 4, namn: "nicklas", efter: "ansman", company: "Bontouch AB", email: `@bontouch.com`, isFav: false },
    ],
    countUser: ref(0),
    currentUser: Number,
    albums: []
  }),
  getters: {

    async getAlbums() {

      const res = await fetch('https://jsonplaceholder.typicode.com/users/1/albums')
      const data = await res.json()
      this.albums = data
      // for (let i = 0; i < this.employees.length; i++) {
      //   this.employees[i].albums.push(data)
      // }
      // this.employees.forEach((index, employee) => {
      //   this.employees[index].albums = data.filter(album => album.userId === employee.id)
      // })
    },
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
    },
    // getCurrentUser() {
    //   return state.employees.countUser
    // }
  },
  // setters: {
  //   setCountUser(count) {
  //     state.employees.countUser = count
  //   }
  // },
  actions: {
    ToggleFavEmployee(id) {
      const favvoemployees = this.employees.find(t => t.id === id)
      favvoemployees.isFav = !favvoemployees.isFav
    },
    setCurrentUser(id) {
      this.employees.currentUser = id;
    }
  }
})

const app = Vue.createApp({
    data() {
        return {
            friends: [
                {id: 'Manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com'},
                {id: 'Julie', name: 'Julie Jones', phone: '09876 543 221', email: 'julie@loclhost.com'}
            ]
        }
    },

})

app.component('friend-contact', {
    template: `
        <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-show="showDetails">
          <li><strong>Phone:</strong>{{ friend.phone }}</li>
          <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
        </li>`,
    data(){
        return {
            showDetails: false,
            friend: {id: 'Manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com'},
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        }
    }
})
app.mount("#app")

const app = Vue.createApp({
    template : '',
    data() {
        return {
            firstName : 'Suraj',
            lastName : 'Dubey',
            email: 'suraj@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/43.jpg',
        }
    },
    methods: {
        async getUser(){
            const res = await fetch ('https://randomuser.me/api')
            const {results} = await res.json()
            // console.log(result)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email= results[0].email
            this.gender= results[0].gender
            this.picture= results[0].picture.large
        },
    },
})

app.mount('#app')
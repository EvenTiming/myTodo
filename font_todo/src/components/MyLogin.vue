<template>
    <div>
        <!-- TODO improve the ui ,this version is for testing data interaction-->
        <input v-model="username">
        <input v-model="password">
        <button @click="login">Login</button>
    </div>
</template>
<script>
import http from '../http'
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            http.get('/login', { params: { username: this.username, password: this.password } }).then(
                Response => {
                    //output the response
                    console.log(Response.data)
                }
            ).catch(
                error => {
                    //outpit the error
                    console.log(error)
                }
            )
        }
    }
}
</script>

<style scoped></style>

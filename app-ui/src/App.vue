<template>
  <div id="app">
    <Header />
    <div v-if="users.length === 0" class="loader">
      <Loader />
    </div>
    <div class="row mrgnbtm">
        <Users v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from './components/Header.vue'
import Users from './components/Users.vue'
import Loader from './components/Loader.vue'
import { UserService } from './services/UserService'

@Component({
  components: {
    Header,
    Users,
    Loader
  }
})
export default class App extends Vue {

  data() {
    return {
        users: []
    }
  }

  getAllUsers() {
    const userService = new UserService();
    userService.getUserInfo().then(response => {
      console.log(response)
      this.users = response
    })
  }

  mounted () {
    console.log("I am in mounted!!!")
    this.getAllUsers();
  }

}
</script>
<style>
  @import './assets/styles/global.css';
</style>
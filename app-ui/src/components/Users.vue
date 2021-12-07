<template>
    <div class="container">
        <h2>Users</h2>
        <table class="table table-dark table-striped">
            <thead>
            <tr>
                <th>User Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Fax</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.id">
                  <td>{{ item.userId }}</td>
                  <td>{{ item.firstName }}</td>
                  <td>{{ item.lastName }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.fax }}</td>
                  <td>{{`${item.streetNumber} ${item.streetName} ${item.city} ${item.state}, ${item.zipcode}`}}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator'


@Component
export default class Users extends Vue {
  
  @Prop([]) users;
  
}
</script>

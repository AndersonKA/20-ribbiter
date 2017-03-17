<template lang="html">
  <div class="registerindex">
    <div v-if="users.loading === 'error'" class="alert">
      <h2>There was an eror creating this user</h2>
    </div>
    <div class="section">
      <div class="container">
        <div class="card">
          <div class="nav-thing">Create an Account</div>
          <form class="form" v-on:submit.prevent="save"><!---->

          <div class="category">
            <div class="title username">Username</div>
            <input type="text" class="field" placeholder="Username" v-model="formValues.username">
          </div>
          <div class="category">
            <div class="title email">Email</div>
            <input type="text" class="field" placeholder="Email" v-model="formValues.email">
          </div>
          <div class="category">
            <div class="title password">Password</div>
            <input type="password" class="field" placeholder="Password" v-model="formValues.password">
          </div>

          </form>

          <div class="buttons">
            <!--this shouldn't be a button?-->
            <router-link class="button button-white" :to="{ name: 'users' }">Login</router-link>
            <router-link class="button" :to="{ name: 'login' }">Sign Up</router-link>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
const { actionCreators: { create } } = userResource;
// const create = userResouce.actionCreators.create;

export default {
  data() {
    return {
      users: this.$select('users'),
      formValues: {
        username: '',
        email: '',
        password: ''
      },
    };
  },

  methods: {
    save() {
      // Dispatch a new create action
      store.dispatch(create(this.formValues))
        .then(() => {
          this.$router.push({ name: 'login' });
        }).catch(() => {});
    },

  },
};
</script>

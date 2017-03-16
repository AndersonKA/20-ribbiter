<template lang="html">
  <div class="registerindex">
    <div class="section">
      <div class="container">
        <div class="card">
          <div class="nav-thing">Create an Account</div>
          <form class="form"><!--v-on:submit.prevent-->

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
            <input type="text" class="field" placeholder="Password" v-model="formValues.password">
          </div>

          </form>

          <div class="buttons">
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

export default {
  data() {
    return {
      formValues: {
        username: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    add(data) {
      store.dispatch(create(data)).then(() => {
        Promise.prototype.then({ name: 'users' });
      });
    },
  },
};
</script>

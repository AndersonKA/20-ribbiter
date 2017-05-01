<template lang="html">
  <div class="registerindex">
    <div class="alert alert-danger" v-if="error">
      <h2>There was an error logging in</h2>
    </div>
    <div class="section">
      <div class="container">
        <div class="card">
          <div class="nav-thing">Login</div>
          <form class="form"><!--v-on:submit.prevent-->

          <div class="category">
            <div class="title">Username</div>
            <input type="text" class="field" placeholder="Username">
          </div>
          <div class="category">
            <div class="title">Password</div>
            <input type="password" class="field" placeholder="Password">
          </div>

          </form>

          <div class="buttons">
            <router-link class="button button-white" :to="{ name: 'register' }">Register</router-link>
            <router-link class="button" :to="{ name: 'login' }">Login</router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      formValues: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    save() {
      fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formValues)
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(res.json());
      }).then((data) => {
        localStorage.jwt = data.token;
      }).catch(() => {
        this.error = true;
      });
    },
  },
};
</script>

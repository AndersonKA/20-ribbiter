<template lang="html">
  <div class="registerindex">
    <div class="section">
      <div class="container">
        <div class="card">
          <div class="nav-thing">Login</div>
          <form class="form"><!--v-on:submit.prevent-->

          <div class="category">
            <div class="title username">Username</div>
            <input type="text" class="field" placeholder="Username">
          </div>
          <div class="category">
            <div class="title password">Password</div>
            <input type="text" class="field" placeholder="Password">
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
    };
  },

  methods: {

  },
};
</script>

<template lang="html">
  <div class="appindex">
    <div class="card">
      <h2 class="welcome">Welcome to Ribitter!</h2>
        <div class="buttons">
          <router-link class="button" :to="{ name: 'register' }">Register</router-link>
          <router-link class="button" :to="{ name: 'login' }">Login</router-link>
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

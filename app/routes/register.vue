<template lang="html">
  <div class="registerindex">
    <div class="section">
      <div class="container">
        <div class="card">
          <div class="nav">Create an Account</div>
          <form class="form"><!--v-on:submit.prevent-->

            <div class="title username">Username</div>
            <input type="text" placeholder="Username">
            <div class="title email">Email</div>
            <input type="text" placeholder="Email">
            <div class="title password">Password</div>
            <input type="text" placeholder="Password">

          </form>
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

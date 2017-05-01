<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="left">
        <router-link class="nav-link" :to="{ name: 'index' }">Ribbiter</router-link>
      </div>
      <div class="right">
        <router-link class="nav-link nav-link-right" :to="{ name: 'ribbits' }">Ribbits</router-link>
        <!--<router-link class="nav-link nav-link-right" :to="{ name: 'frogs???' }">Frogs</router-link>-->
        <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>

      </div>
    </div>

      <router-view></router-view>

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

<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="left">
        <router-link class="button" :to="{ name: 'index' }">Ribbiter</router-link>
      </div>
      <div class="right">
        <!--<div class="right__words">Ribbits</div>
        <div class="right__words">Frogs</div>-->
        <router-link class="button" :to="{ name: 'login' }">Login</router-link>

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

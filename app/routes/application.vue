<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="left">
        <div class="left__words">Ribbiter</div>
      </div>
      <div class="right">
        <div class="right__words">Ribbits</div>
        <div class="right__words">Frogs</div>
        <div class="right__words">Login</div>
      </div>
    </div>

  <div class="section">
    <div class="container">
      <router-view></router-view>
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

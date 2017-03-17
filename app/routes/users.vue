<template lang="html">
  <div class="registerindex">
    <div class="section">
      <div class="container">
        <div class="heading">Users</div>
        <div class="grid">

            <div class="usercard">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/92/9d/3d/929d3d9f76f406b5ac6020323d2d32dc.jpg" alt="" class="usercard__pic">
              <div class="usercard__names">
                <div class="usercard__name">Queenie</div>
                <div class="username">$queenie</div>
              </div>
            </div>
            <div class="usercard">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/92/9d/3d/929d3d9f76f406b5ac6020323d2d32dc.jpg" alt="" class="usercard__pic">
              <div class="usercard__names">
                <div class="usercard__name">Queenie</div>
                <div class="username">$queenie</div>
              </div>
            </div>
            <div class="usercard">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/92/9d/3d/929d3d9f76f406b5ac6020323d2d32dc.jpg" alt="" class="usercard__pic">
              <div class="usercard__names">
                <div class="usercard__name">Queenie</div>
                <div class="username">$queenie</div>
              </div>
            </div>
            <div class="usercard">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/92/9d/3d/929d3d9f76f406b5ac6020323d2d32dc.jpg" alt="" class="usercard__pic">
              <div class="usercard__names">
                <div class="usercard__name">Queenie</div>
                <div class="username">$queenie</div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
const { actionCreators: { findAll } } = userResource;

export default {
  data() {
    return {
      users: this.$select('users'),
    };
  },

  mounted() {
    store.dispatch(findAll(this.$route.params.id));
  },

  methods: {

  },
};
</script>

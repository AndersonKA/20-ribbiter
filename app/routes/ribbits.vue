<template lang="html">
  <div class="ribbitsindex">
    <div class="section">
      <div class="container">
        <div class="heading">Recent Ribbits</div>
          <div class="outer">

            <div class="newcard">
              <div class="nav-thing">New Ribbit</div>
                <div class="newcard__middle">
                  <div class="title newcard__title">What's Going On?</div>
                  <textarea cols="46" rows="10" class="newcard__field"></textarea>
                </div>
              <div class="buttons">
                <router-link class="button button-white" :to="{ name: 'ribbits' }">Clear</router-link>
                <router-link class="button" :to="{ name: 'login' }">Save</router-link>
              </div>
            </div>


            <div class="happeningcard">
              <div class="nav-thing">See What's Happening</div>
              <div class="happeningcard__main">
                <!--these probably need to be links?-->

                <div class="happeningcard__new">
                  <div class="happeningcard__new--words">Load new ribbits</div>
                </div>

                <div class="happeningcard__post">
                  <div class="username">$username</div>
                  <div class="happeningcard__post--text">text</div>
                </div>

                <div class="happeningcard__post">
                  <div class="username">$username</div>
                  <div class="happeningcard__post--text">text</div>
                </div>

                <div class="happeningcard__post">
                  <div class="username">$username</div>
                  <div class="happeningcard__post--text">text</div>
                </div>

                <div class="happeningcard__post">
                  <div class="username">$username</div>
                  <div class="happeningcard__post--text">text</div>
                </div>

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
      posts: this.$select('posts'),
    };
  },

  mounted() {
    store.dispatch(findAll(this.$route.params.id));
  },

  methods: {

  },
};
</script>

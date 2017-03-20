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

            <div class="rightside">
            <div class="happeningcard" v-for="posts in posts.items">
              <div class="nav-thing">See What's Happening</div>
              <div class="happeningcard__main">
                <!--these probably need to be links?-->

                <div class="happeningcard__new">
                  <div class="happeningcard__new--words">Load new ribbits</div>
                </div>

                <div class="happeningcard__post">
                  <div class="username">{{ posts.username }}</div>
                  <div class="happeningcard__post--text">{{ posts.body }}</div>
                </div>
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
const { actionCreators: { create } } = userResource;

export default {
  data() {
    return {
      posts: this.$select('posts'),
      formValues: {
        body: ''
      },
    };
  },

  mounted() {
    store.dispatch(findAll(this.$route.params.id));
  },

  methods: {
    save() {
      // Dispatch a new create action
      store.dispatch(create(this.formValues))
        .then(() => {
          this.$router.push({ name: 'login' });
        }).catch(() => {});
    },
  },
};
</script>

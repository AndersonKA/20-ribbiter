<template lang="html">
  <div class="ribbitsindex">
    <div class="section">
      <div class="container">
        <div class="heading">Recent Ribbits</div>
          <div class="outer">

            <form v-on:submit.prevent="saveRibbit" class="newcard">
              <div class="nav-thing">New Ribbit</div>
              <div class="newcard__middle">
                <div class="title newcard__title">What's Going On?</div>
                <textarea v-model="formValues.body" cols="46" rows="10" class="newcard__field"></textarea>
              </div>
              <div class="buttons">
                <router-link class="button button-white" :to="{ name: 'ribbits' }">Clear</router-link>
                <button class="button">doesn't work yet!</button>
              </div>
            </form>

            <div class="rightside">
            <div class="happeningcard" >
              <div class="nav-thing">See What's Happening</div>
              <div class="happeningcard__main">
                <!--these probably need to be links?-->

                <div class="happeningcard__new" >
                  <div class="happeningcard__new--words">Load new ribbits</div>
                </div>

                <div class="happeningcard__post" v-for="post in posts.items">
                  <div class="username">${{ post.user.username }}</div>
                  <div class="happeningcard__post--text">{{ post.body }}</div>
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
import postResource from '../resources/post';
const { actionCreators: { findAll } } = postResource;
const { actionCreators: { create } } = postResource;

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
    store.dispatch(findAll());
  },

  methods: {
    saveRibbit() {
      store.dispatch(create(this.formValues));
    },
    clear() {
    },
  },
};
</script>

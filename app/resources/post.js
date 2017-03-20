import createResource from 'redux-thunk-rest';

export default createResource('post', {
  url: 'http://ribbiterapi.herokuapp.com/posts',

  // need to add in the createHeaders part from resources/restaurant.js
});

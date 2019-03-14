//import store from './store.js';
//import { Store } from 'vuex';
export default {
  name: 'dashboardPage',
  computed: {
    firstName() {
      return this.$store.getters.USER.firstName
    }
  },
};

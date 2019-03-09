import store from './store.js';
//import { Store } from 'vuex';
export default {
  name: 'dashboardPage',
  data() {
    return {
      computed: {
        firstName: {
          get: store() {}
        }
      }
    }
  },
};

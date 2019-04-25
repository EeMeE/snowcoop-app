import mapView from '../../shared/map-view/map-view.component.vue'

export default {
  name: 'dashboardPage',
  components: {
    mapView
  },
  data() {
    return {
      addressList: null
    }
  },
  computed: {
    firstName() {
      return this.$store.getters.USER.firstName
    }
  },
  mounted() {
    //  console.log('mounted...')
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      //  console.log(addressList)
      this.addressList = addressList
    })
  }
}

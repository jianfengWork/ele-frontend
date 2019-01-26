<template>
  <div id="app">
    <v-header :seller="seller" />
    <h-detail :seller="seller" />
  </div>
</template>

<script>
import VHeader from 'components/v-header/header'
import HDetail from 'components/h-detail/h-detail'
import { getSeller } from 'api'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    getSeller().then((res) => {
      console.log(res)
      this.seller = res
    })
  },
  components: {
    VHeader, HDetail
  }
}
</script>
<style lang="stylus">

</style>

<template>
  <div id="app">
    <v-header :seller="seller" />
  </div>
</template>

<script>
import VHeader from 'components/v-header/header'
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
    VHeader
  }
}
</script>
<style lang="stylus">

</style>

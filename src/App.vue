<template>
  <div id="app">
    <v-header :seller="seller" />
    <div class="tab-wrapper">
      <tab :tabs="tabItem" />
    </div>
  </div>
</template>

<script>
  import VHeader from '@/view/v-header/header'
  import Goods from '@/view/goods/goods'
  import Ratings from '@/view/ratings/ratings'
  import Seller from '@/view/seller/seller'
  import Tab from '@/components/tab/tab'
  import { getSeller } from 'api'

  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    computed: {
      tabItem() {
        return [
          {
            label: '商品',
            component: Goods,
            data: {
              seller: this.seller
            }
          },
          {
            label: '评论',
            component: Ratings,
            data: {
              seller: this.seller
            }
          },
          {
            label: '商家',
            component: Seller,
            data: {
              seller: this.seller
            }
          }
        ]
      }
    },
    created() {
      getSeller().then((res) => {
        console.log(res)
        this.seller = res
      })
    },
    components: {
      VHeader, Tab
    }
  }
</script>
<style lang="stylus" scoped>
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>

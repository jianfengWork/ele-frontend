<template>
  <div class="tab">
    <cube-tab-bar
      :useTransition=false
      :showSlider=true
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px"
    />
    <div class="slide-wrapper">
      <cube-slide
        :loop=false
        :auto-play=false
        :show-dots=false
        :initial-index="index"
        ref="slide"
        :options="slideOptions"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <!-- vue动态组件 -->
          <component ref="component" :is="tab.component" :data="tab.data" />
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    props: {
      tabs: {
        type: Array,
        default: () => {
          return []
        }
      },
      initialIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        index: this.initialIndex,
        slideOptions: { // scroll配置
          listenScroll: true,
          probeType: 3,
          directionLockThreshold: 0
        }
      }
    },
    computed: {
      selectedLabel: {
        get() { // 初始化的值
          return this.tabs[this.index].label
        },
        set(newVal) { // 更新之后的值
          this.index = this.tabs.findIndex((value) => {
            return value.label === newVal
          })
        }
      }
    },
    mounted() {
      this.onChange(this.index)
    },
    methods: {
      onScroll(pos) {
        const tabBarWidth = this.$refs.tabBar.$el.clientWidth
        const slideWidth = this.$refs.slide.slide.scrollerWidth
        const transform = -pos.x / slideWidth * tabBarWidth
        this.$refs.tabBar.setSliderTransform(transform)
      },
      onChange(current) {
        this.index = current
        const instance = this.$refs.component[current]
        // console.log(instance)
        if (instance && instance.fetch) { // 调用每个组件fetch方法
          instance.fetch()
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable"

  .tab
    display: flex
    flex-direction: column // 分配比例很重要，上下占比分配
    height: 100%
    >>> .cube-tab
      padding: 10px 0
    .slide-wrapper
      flex: 1
      overflow: hidden
</style>

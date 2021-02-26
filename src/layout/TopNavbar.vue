<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rigthText"
    :left-arrow="leftArrow"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <slot />
</template>


<script setup>
import router from '@/router'
import { defineProps } from 'vue'
defineProps({
  title: String,
  leftText: {
    type: String,
    default: '返回'
  },
  leftArrow: {
    type: Boolean,
    default: true,
  },
  rigthText: String,
  onClickLeft: {
    type: Function,
    default: () => { router.back() }
  },
  onClickRight: {
    type: Function,
    default: () => { }
  }

})

</script>

<style>
</style>
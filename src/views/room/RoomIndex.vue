<template>
  <TopNavbar title="房间列表" />
  <van-cell
    v-for="item in state.list"
    :key="item._id"
    :title="item.no"
    @click="toDetail(item.no)"
  />
</template>

<script setup>
import TopNavbar from '@/layout/TopNavbar.vue'
import { queryRoomList } from '@/model/room'
import router from '@/router'
import { reactive } from 'vue'

const state = reactive({
  list: [],
})

const init = async () => {
  const { data } = await queryRoomList()
  state.list = data
  console.log(data);
}
init()

const toDetail = (no) => {
  router.push({ path: `/room/detail/${no}` })
}
</script>

<style>
</style>
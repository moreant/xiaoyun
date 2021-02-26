<template>
  <TopNavbar :title="navTitle" />
  <div
    v-for="(item,index) in contract"
    :key="index"
  >
    <div>
      <van-cell
        title="交租日"
        :value="item.billDate"
      />
      <van-cell
        title="交租日"
        :value="item.billDate"
      />
    </div>
  </div>
</template>

<script setup name="RoomDetail">
import TopNavbar from '@/layout/TopNavbar.vue'
import { defineProps, ref } from 'vue'
import { getContractByNo } from '@/model/room'

const props = defineProps({
  no: String
})

const navTitle = `${props.no} 房间详情`

const contract = ref([])

const init = (async () => {
  const { data } = await getContractByNo(props.no)
  console.log(data);
  contract.value = data
})()



</script>

<style>
</style>
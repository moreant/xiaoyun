<template>
  <van-button type="primary">主要按钮</van-button>
</template>

<script setup>
import { db } from '@/utils/tcb'


const res = await db.collection('bill').get()
console.log(res);

</script>
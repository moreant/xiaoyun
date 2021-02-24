<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <van-button type="primary">主要按钮</van-button>
</template>

<script>
import { ref } from 'vue';
import { cb } from './utils/tcb'

export default {
  name: 'App',
  async setup () {
    const bill = cb.database().collection('bill')
    const res = await bill.get()
    console.log(res);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
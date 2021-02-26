
<template>
  <div
    id="list-rendering"
    class="text-6xl"
  >
    {{ todos.text }}
  </div>
  <div v-for="item in state.list"> {{item.id}} </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { bill } from '@/model/bill'

const { state, getList } = bill()
const todos = ref({ text: 'Learn JavaScript' })
console.log(state);

</script>
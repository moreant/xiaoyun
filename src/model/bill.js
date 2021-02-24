import { db } from '@/utils/tcb'
import { reactive } from 'vue'



export function bill () {
  const state = reactive({
    list: []
  })

  const getList = () => {
    db.collection('bill').get().then(res => {
      state.list = res.data
    })
  }

  getList()


  return { state, getList }
}


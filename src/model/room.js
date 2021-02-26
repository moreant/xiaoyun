import { db } from '@/utils/tcb/index'

const collection = db.collection('room')

export function queryRoomList () {
  return collection.field({
    no: true,
  }).get()
}

export function getRoomByNo (no) {
  return collection.where({ no }).get()
}

export function getContractByNo (no) {
  return collection.where({ no }).get().then(res => {
    const data = res.data[0].contract
    return {
      data
    }
  })
}
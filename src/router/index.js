import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/room',
    component: () => import('@/views/room/RoomIndex.vue'),
    name: 'room'
  },
  {
    path: '/room/detail/:no',
    component: () => import('@/views/room/RoomDetail.vue'),
    name: 'RoomDetail',
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
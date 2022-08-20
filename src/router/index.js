import Vue from 'vue';
import VueRouter from 'vue-router';
import MyReceipt from '../pages/MyReceipt.vue';
import LogIn from '../pages/LogIn.vue';
import JoinIn from '../pages/JoinIn.vue';
import WriteReceipt from '../pages/WriteReceipt.vue';

//Vue와 VueRouter 연결
Vue.use(VueRouter);

//우리가 사용할 route 생성 및 설정
const routes = [
  {
    path: '/',
    name: 'MyReceipt',
    component: MyReceipt,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,

  },
  {
    path: '/join',
    name: 'JoinIn',
    component: JoinIn,

  },
  {
    path: '/write',
    name: 'WriteReceipt',
    component: WriteReceipt,

  },
];

//VueRouter에 route를 등록하고 설정한다.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

//설정한 VueRouter 내보낸다.
export default router;
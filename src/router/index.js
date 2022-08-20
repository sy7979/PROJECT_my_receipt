import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import JoinPage from '../pages/JoinPage.vue';
import WritePage from '../pages/WritePage.vue';

//Vue와 VueRouter 연결
Vue.use(VueRouter);

//우리가 사용할 route 생성 및 설정
const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,

  },
  {
    path: '/join',
    name: 'JoinPage',
    component: JoinPage,

  },
  {
    path: '/write',
    name: 'WritePage',
    component: WritePage,

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
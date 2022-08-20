<template>
  <div>
    <v-app-bar
      flat
      fixed
      class="header"
    >
      <!-- 타이틀 -->
      <div class="header__tit">{{ headerTit }}</div>
      <!-- // 타이틀 -->

      <!-- 홈 로고 -->
      <router-link 
        to="/"
        v-if="headerLogo"
      >
        <!-- 로고 -->
        <logo-compo
          :width="'80'"
          :type="'mark'"
        ></logo-compo>
        <!-- // 로고 -->
      </router-link>
      <!-- // 홈 로고 -->

      <!-- 뒤로가기 버튼 -->
      <v-btn 
        v-if="headerBack"
        icon
      >
        <font-awesome-icon 
          icon="angle-left" 
          class="header__ico_back"
        />
      </v-btn>
      <!-- // 뒤로가기 버튼 -->
      <v-spacer></v-spacer>

      <!-- 헤더 메뉴 -->
      <v-btn 
        v-if="headerMenu"
        @click.stop="drawer = !drawer"
        icon
      >
        <font-awesome-icon 
          icon="bars" 
          class="header__ico_bars"
        />
      </v-btn>
      <!-- // 헤더 메뉴 -->
    </v-app-bar>

    <!-- 메뉴 -->
    <drawer-compo
      :drawerProps="drawer"
      @toggleDrawer="toggleDrawer"
    ></drawer-compo>
    <!-- // 메뉴 -->
  </div>
</template>

<script>
  import LogoCompo from '@/components/LogoCompo.vue';
  import DrawerCompo from '@/components/DrawerCompo.vue';

  export default {
    name: 'HeaderCompo',
    components: {
      LogoCompo,
      DrawerCompo,
    },
    props: {
      headerLogo: Boolean,
      headerBack: Boolean,
      headerMenu: Boolean,
      headerTit: String,
    },
    data() {
      return {
        drawer: false,
      }
    },
    methods: {
      toggleDrawer(drawer) {
        this.drawer = drawer
      }
    },
  }
</script>

<style scoped>
  @import '@/css/header.css';
</style>
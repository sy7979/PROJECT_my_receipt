<template>
<div>
  <v-navigation-drawer
    right
    disable-route-watcher
    disable-resize-watcher
    overlay-opacity='0.1'
    class="nav"
    v-model="drawer"
  >
    <!-- 로고 -->
    <logo-compo
      :width="'60'"
      :type="'logo'"
      class="py-4"
    ></logo-compo>
    <!-- // 로고 -->
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        class="nav__item"
      >
        <v-list-item-icon>
          <v-icon color="#b8b8b8">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
        <router-link
          :to="item.link"
          class="nav__link"
        >
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
  import LogoCompo from '@/components/LogoCompo.vue';

  export default {
    name: 'DrawerCompo',
    components: {
      LogoCompo,
    },
    props: {
      drawerProps: Boolean,
    },
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-home', link: "/" },
          { title: '글쓰기', icon: 'mdi-pencil-plus', link: "write" },
          { title: '로그인', icon: 'mdi-account-arrow-right', link: "login" },
          { title: '회원가입', icon: 'mdi-account-edit', link: "join" },
        ],
      }
    },
    watch: {
      drawerProps() {
        this.drawer = this.drawerProps
      },
      drawer() {
        this.$emit('toggleDrawer', this.drawer)
      },
    },
  }
</script>

<style scoped>
  @import '@/css/nav.css';
</style>
<template>
  <v-btn
    :disabled="!valid"
    :class="['btn', outline]"
    @click="clickEvent"
  >
    <span class="btn__txt">{{ btnTxt }}</span>
  </v-btn>
</template>

<script>
  export default {
    name: "BtnCompo",
    props: {
      clickEvent: Function,
      valid: Boolean,
      btnTxt: String,
      outline: String
    },
  }
</script>

<style scoped>
  @import '@/css/btn.css';
</style>
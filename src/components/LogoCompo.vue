<template>
  <div>
      <!-- :src="'@/img/'+(type)+'.png'" -->
      <!-- src="@/img/logo.png" -->
    <v-img
      v-if="type === 'logo'"
      :width="width"
      src="@/img/logo.png"
      class="mx-auto"
    ></v-img>
    
    <v-img
      v-else-if="type === 'mark'"
      :width="width"
      src="@/img/mark.png"
      class="mx-auto"
    ></v-img>
  </div>

</template>

<script>
  export default {
    name: "LogoCompo",
    props: {
      width: String,
      type: String,
    },
  }
</script>
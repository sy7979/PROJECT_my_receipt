<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <!-- 
      <v-card-title>Cafe Badilico</v-card-title>
    -->
      <div class="card__top">
        <div class="card__category">
          <v-chip color="orange">식비</v-chip>
          <v-chip color="orange">지출</v-chip>
        </div>
        <font-awesome-icon icon="fa-ellipsis-vertical" class="card__icon_ellipsis" />
      </div>


    <v-card-text>
      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
  export default {
    name: 'MainList',
  }
</script>

<style scoped>
  .card__top {
    display: flex;
    align-items: center;
    padding: 16px;
  }
  .card__category{
    display: flex;
    gap: 0 8px;
  }
  .card__icon_ellipsis{
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #505050
  }
</style>

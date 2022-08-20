<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ content }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :color="primaryColor"
          text
          @click="dialog = false"
        >{{ btn2 }}</v-btn>
        <v-btn
          :color="primaryColor"
          text
          @click="dialog = false"
        >{{ btn1 }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'PopCompo',
    props: {
      dialogProps: Boolean,
      title: String,
      content: String,
      btn1: String,
      btn2: String,
    },
    data () {
      return {
        // primary-color
        primaryColor: '#40b3f1',

        //dialog
        dialog: null,
      }
    },
    watch: {
      dialogProps() {
        this.dialog = this.dialogProps
      },
    }
  }
</script>
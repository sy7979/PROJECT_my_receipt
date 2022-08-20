<template>
  <div class="lt_container">
    <div class="lt_content">
      <!-- 헤더 -->
      <main-header 
        :headerBack="true"
        :headerMenu="true"
        :headerTit="'글쓰기'"
      ></main-header>
      <!-- // 헤더 -->

      <!-- 글쓰기 폼 -->
      <div class="form">
        <v-form
          v-model="valid"
          lazy-validation
          ref="form"
          class="form__form"
        > 
          <div class="form__flex_row">
            <!-- 날짜 -->
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="0"
              offset-y
              transition="scale-transition"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  v-model="date"
                  :rules="dateRules"
                  :color="primaryColor"
                  label="날짜"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu = false"
                :color="primaryColor"
                locale="ko"
              ></v-date-picker>
            </v-menu>
            <div class="pr-4"></div>
            <!-- // 날짜 -->

            <!-- 시간 -->
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="0"
              :return-value.sync="time"
              offset-y
              transition="scale-transition"
              ref="menu"
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  v-model="time"
                  :color="primaryColor"
                  readonly
                  label="시간"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="time"
                :color="primaryColor"
                @click:minute="$refs.menu.save(time)"
                full-width
              ></v-time-picker>
            </v-menu>
            <!-- // 시간 -->
          </div>

          <!-- 카테고리 -->
          <v-combobox
            v-model="select"
            :items="items"
            :error="!error"
            :error-messages="errorMessage"
            :color="primaryColor"
            small-chips
            label="지출/수입"
            error-count="1"
          ></v-combobox>
          <v-combobox
            v-model="select2"
            :items="items2"
            :color="primaryColor"
            small-chips
            label="카테고리"
          ></v-combobox>
          <!-- // 카테고리 -->

          <!-- 금액 -->
          <v-text-field
            v-model="price"
            :rules="priceRules"
            :color="primaryColor"
            required
            label="금액"
            type="number"
            class="mb-2"
          ></v-text-field>
          <!-- // 금액 -->

          <!-- 코멘트 -->
          <v-textarea
            v-model="comment"
            :rules="commentRules"
            :color="primaryColor"
            filled
            auto-grow
            required
            label="코멘트"
          ></v-textarea>
          <!-- // 코멘트 -->

          <div class="form__btn_wrap mt-4">
            <div class="form__btn_small"
              @click="dialog = !dialog"
            >
              <!-- 버튼 : 취소 -->
              <default-button
                :valid="true"
                :btnTxt="'취소'"
                :outline="'btn-outline'"
              ></default-button>
              <!-- // 버튼 : 취소 -->
            </div>
            <div class="form__btn_large">
              <!-- 버튼 : 등록 -->
              <default-button
                :clickEvent="validate"
                :valid="valid"
                :btnTxt="'등록'"
              ></default-button>
              <!-- // 버튼 : 등록 -->
            </div>
          </div>
        </v-form>
      </div>
      <!-- // 글쓰기 폼 -->

      <!-- 팝업 -->
      <pop-up
        :title="'진짜 취소 하겠습니까???'"
        :content="'그러면 글 저장 안된다구!!'"
        :btn1="'계속 작성하기'"
        :btn2="'나가기'"
        :dialogProps="dialog"
      ></pop-up>
    </div> 
  </div>
</template>

<script>
  import DefaultButton from '@/components/DefaultButton.vue';
  import MainHeader from '@/components/MainHeader.vue';
  import PopUp from '@/components/PopUp.vue'

  export default {
    name: 'WriteReceipt',
    components: {
      DefaultButton,
      MainHeader,
      PopUp
    },
    data: () => ({
      // primary color
      primaryColor: '#40b3f1',

      // 폼 인증
      valid: true,

      // 날짜
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      dateRules: [
        v => !!v || '생년월일을 선택해주세요.',
      ],

      // 시간
      time: (new Date().getHours() + ":" + new Date().getMinutes()),
      menu2: false,

      // 카테고리 대분류
      select: null,
      items: [
        '지출',
        '수입'
      ],
      error: true,
      errorMessage: "지출/수입을 선택해주세요.",
      
      // 카테고리
      select2: null,
      items2: [
        '식비',
        '교통비',
        '취미',
        '생활비',
      ],

      // 금액
      price: '',
      priceRules: [
        v => !!v || '금액을 입력해주세요.',
      ],

      // 코멘트
      comment: '',
      commentRules: [
        v => !!v || '코멘트를 입력해주세요.'
      ],

      // 팝업 dialog
      dialog: false,

    }),
    
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
      dialog() {}

    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      save (date) {
        this.$refs.menu.save(date)
      },
    },
  }
</script>

<style scoped>
@import '@/css/form.css';
</style>
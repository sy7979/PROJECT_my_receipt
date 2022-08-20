<template>
  <div class="lt_container">
    <div class="lt_content">

      <!-- 로고 -->
      <logo-compo
        :width="'100'"
        :type="'logo'"
        class="mb-12"
      ></logo-compo>
      <!-- // 로고 -->

      <!-- 로그인 폼 -->
      <div class="form">
        <v-form
          v-model="valid"
          lazy-validation
          ref="form"
          class="form__form"
        >
          <!-- 아이디 -->
          <v-text-field
            v-model="id"
            :counter="10"
            :rules="idRules"
            :color="primaryColor"
            label="아이디"
            required
            class="mb-2"
          ></v-text-field>
          <!-- // 아이디 -->

          <!-- 비밀번호 -->
          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show ? 'text' : 'password'"
            :color="primaryColor"
            @click:append="show = !show"
            required
            label="비밀번호"
          ></v-text-field>
          <!-- // 비밀번호 -->

          <!-- // 버튼 : 로그인 -->
          <btn-comp
            :clickEvent="validate"
            :valid="valid"
            :btnTxt="'로그인'"
            class="mt-4"
          ></btn-comp>
          <!-- // 버튼 : 로그인 -->

          <!-- 회원가입 -->
          <router-link to="/join">
            <div class="form__join_btn">회원가입</div>
          </router-link>
          <!-- // 회원가입 -->
        </v-form>
      </div>
      <!-- // 로그인 폼 -->
    </div>
  </div>
</template>

<script>
  import BtnComp from '@/components/BtnCompo.vue';
  import LogoCompo from '@/components/LogoCompo.vue';

  export default {
    name: 'LoginPage',
    components: {
      BtnComp,
      LogoCompo,
    },
    data: () => ({
      // primary color
      primaryColor: '#40b3f1',

      // 폼 인증
      valid: true,

      // 아이디
      id: '',
      idRules: [
        v => !!v || '아이디를 입력해주세요.',
        v => (v && v.length <= 10) || '아이디는 최대 10글자 입니다.',
      ],

      // 비밀번호
      show: false,
      password: '',
      passwordRules: {
        required: value => !!value || '비밀번호를 입력해주세요.',
        min: v => v.length >= 8 || '비밀번호는 최소 8글자 입니다.',
      },

    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
@import '@/css/form.css';
</style>
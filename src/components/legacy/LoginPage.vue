<template>
  <div class="login">
    <div class="login__top">
    <div class="login__top_txt">로그인</div>
    </div>
    <div class="login__form_wrap">
      <v-form
        ref="form"
        v-model="form"
      >
        <v-text-field
          v-model="email"
          :rules="[]"
          filled
          color="#1AB8FF"
          label="아이디"
          type="text"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.length(6)]"
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          filled
          color="#1AB8FF"
          counter="6"
          label="비밀번호"
          style="min-height: 96px"
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-form>
      <v-card-actions>
        <v-btn
          text
        >
          회원가입
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="#1AB8FF"
          depressed
        >
          로그인
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'LoginPage',
    data: () => ({
      show1: false,
      email: undefined,
      form: false,
      isLoading: false,
      password: undefined,
      phone: undefined,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),
  }
</script>

<style>
  @import '@/css/login.css';
</style>

<template>
  <div class="login">
    <div class="login__top">
    <div class="login__top_txt">회원가입</div>
    </div>
    <div class="login__form_wrap">

      <v-form
        ref="form"
        v-model="form"
        class="pa-4 pt-6"
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
        <v-checkbox
          v-model="agreement"
          :rules="[rules.required]"
          color="#1AB8FF"
        >
          <template v-slot:label>
            I agree to the&nbsp;
            <a
              href="#"
              @click.stop.prevent="dialog = true"
            >Terms of Service</a>
            &nbsp;and&nbsp;
            <a
              href="#"
              @click.stop.prevent="dialog = true"
            >Privacy Policy</a>*
          </template>
        </v-checkbox>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          text
          @click="$refs.form.reset()"
        >
          초기화
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!form"
          :loading="isLoading"
          class="white--text"
          color="deep-purple accent-4"
          depressed
        >
          로그인
        </v-btn>
      </v-card-actions>
    </div>

    <v-dialog
      v-model="dialog"
      absolute
      max-width="400"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-3">
          Legal
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            text
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="deep-purple accent-4"
            @click="agreement = true, dialog = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    name: 'JoinPage',
    data: () => ({
      show1: false,
      agreement: false,
      bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
      dialog: false,
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

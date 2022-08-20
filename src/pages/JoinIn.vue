<template>
  <div class="lt_container">
    <div class="lt_content">
      <!-- 헤더 -->
      <main-header 
        :headerBack="true"
        :headerTit="'회원가입'"
      ></main-header>
      <!-- // 헤더 -->

      <!-- 회원가입 폼 -->
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
            :rules="idRules"
            :counter="10"
            :color="primaryColor"
            required
            label="아이디"
            class="mb-2"
          ></v-text-field>
          <!-- // 아이디 -->

          <!-- 비밀번호 -->
          <v-text-field
            v-model="password"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :color="primaryColor"
            @click:append="show = !show"
            required
            label="비밀번호"
            class="mb-2"
          ></v-text-field>
          <!-- // 비밀번호 -->

          <!-- 비밀번호 확인 -->
          <v-text-field
            v-model="password2"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :color="primaryColor"
            @click:append="show = !show"
            required
            label="비밀번호 확인"
            class="mb-2"
          ></v-text-field>
          <!-- // 비밀번호 확인 -->

          <!-- 이름 -->
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            :color="primaryColor"
            required
            label="이름"
            class="mb-2"
          ></v-text-field>
          <!-- // 이름 -->

          <!-- 생년월일 -->
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="0"
            offset-y
            ref="menu"
            transition="scale-transition"
            min-width="auto"
            class="mb-2"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                v-model="date"
                :rules="dateRules"
                :color="primaryColor"
                label="생년월일"
                readonly
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              :active-picker.sync="activePicker"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
              :color="primaryColor"
              @change="save"
              locale="ko"
              min="1900-01-01"
            ></v-date-picker>
          </v-menu>
          <!-- // 생년월일 -->

          <!-- 이메일 -->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :color="primaryColor"
            required
            label="이메일"
            class="mb-2"
          ></v-text-field>
          <!-- // 이메일 -->

          <!-- 이용약관 동의 -->
          <div class="form__agree">
            <v-checkbox 
              v-model="checkbox"
            ></v-checkbox>
            <v-dialog
              width="420"
              scrollable
            >
              <template v-slot:activator="{ on, attrs }">
                <div
                  v-bind="attrs"
                  v-on="on"
                  class="form__agree_policy_btn"
                >이용 약관</div>
              </template>
              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  이용 약관
                </v-card-title>
                <v-card-text style="height: 300px">
                  {{ policy }}
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                  >
                    동의
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            에 동의합니다.
          </div>
          <!-- // 이용약관 동의 -->

          <!-- 버튼 : 회원가입 -->
          <default-button
            :clickEvent="validate"
            :valid="valid"
            :btnTxt="'회원가입'"
            class="mt-4"
          ></default-button>
          <!-- // 회원가입 버튼 -->
        </v-form>
      </div>
      <!-- // 버튼 : 회원가입 -->
    </div>
  </div>
</template>

<script>
  import DefaultButton from '@/components/DefaultButton.vue';
  import MainHeader from '@/components/MainHeader.vue';

  export default {
    name: 'JoinIn',
    components: {
      MainHeader,
      DefaultButton,
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
      password2: '',
      passwordRules: {
        required: value => !!value || '비밀번호를 입력해주세요.',
        min: v => v.length >= 8 || '비밀번호는 최소 8글자 입니다.',
      },

      // 이름
      name: '',
      nameRules: [
        v => !!v || '이름을 입력해주세요.',
        v => (v && v.length <= 10) || '이름은 최대 10글자 입니다.',
      ],

      // 생년월일
      activePicker: null,
      date: null,
      menu: false,
      dateRules: [
        v => !!v || '생년월일을 선택해주세요.',
      ],      

      // 이메일
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => /.+@.+/.test(v) || '올바른 이메일 형식을 입력해주세요.',
      ],
      
      // 이용약관
      checkbox: false,

      // 약관 내용
      policy: `  제1장 총칙
제1조(목적) 이 약관은 회사가 온라인으로 제공하는 디지털콘텐츠(이하 "콘텐츠"라고 한다) 및 제반서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다. 
제2조(정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.   
1. "회사"라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다. 
2. "이용자"라 함은 "회사"의 사이트에 접속하여 이 약관에 따라 "회사"가 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을 말합니다. 
3. "회원"이라 함은 "회사"와 이용계약을 체결하고 "이용자" 아이디(ID)를 부여받은 "이용자"로서 "회사"의 정보를 지속적으로 제공받으며 "회사"가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다. 
4. "비회원"이라 함은 "회원"이 아니면서 "회사"가 제공하는 서비스를 이용하는 자를 말합니다.`
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      save (date) {
        this.$refs.menu.save(date)
      },
      toggleDrawerParents(state) {
        this.drawerStateParents = state
      }
    },
  }
</script>

<style scoped>
@import '@/css/form.css';
</style>
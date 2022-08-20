<template>
  <div class="lt_container lt_container-bg_fa">
    <div class="lt_content">
      <!-- 헤더 -->
      <header-compo 
        :headerLogo="true"
        :headerMenu="true"
      ></header-compo>
      <!-- // 헤더 -->
      
      <!-- 영수증 -->
      <div class="receipt">
        <!-- 영수증 헤더 -->
        <div class="receipt__header">
          <span class="receipt__header_nick">여름엔감자전</span> 님의 영수증
        </div>
        <!-- // 영수증 헤더 -->

        <!-- 영수증 리스트 -->
        <div class="receipt__list">
          <!-- [ CASE 1 ] 영수증 내역 없을 때 -->
          <div
            v-if="items.length == 0"
          >
            <div class="receipt__empty">영수증 내역이 없습니다<br> 새로운 글을 작성해 주세요<br>ヽ(✿ﾟ▽ﾟ)ノ</div>
          </div>
          <!-- // [ CASE 1 ] 영수증 내역 없을 때 -->

          <!-- [ CASE 2 ] 영수증 내역 있을 때 -->
          <div
            v-else
            v-for="item in items"
            :key="item.id" 
          >
            <!-- item.type: true('')(수입) / false('card-green')(지출)  -->
            <div
              class="receipt__card"
              :class="[item.type ? '' : 'receipt__card-green']"
            >
              <div class="receipt__card_top">
                <div class="receipt__card_category">
                  <!-- item.type: true(수입) / false(지출)  -->
                  <div class="receipt__card_chip">{{ item.type ? '수입' : '지출'}}</div>
                  <!-- item.type: 세부 카테고리 -->
                  <div class="receipt__card_chip">{{ item.category }}</div>
                </div>
                <!-- item.date: 날짜 -->
                <div class="receipt__card_date">{{ item.date }}</div>

                <!-- 더보기 메뉴 -->
                <v-menu
                  bottom
                  left
                  content-class="elevation-2"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <font-awesome-icon 
                      class="receipt__card_icon_ellipsis"
                      icon="fa-ellipsis-vertical"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-list class="py-0">
                    <v-list-item class="receipt__card_menu_item">
                      <v-list-item-title class="receipt__card_menu_txt"><font-awesome-icon icon=" fa-pen-to-square" class="mr-1" />수정</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      @click.stop="dialog = !dialog"
                      class="receipt__card_menu_item"
                    >
                      <v-list-item-title class="receipt__card_menu_txt"><font-awesome-icon icon="fa-trash-can" class="mr-1" />삭제</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <!-- // 더보기 메뉴 -->
              </div>
              <div class="receipt__card_money">
                <font-awesome-icon class="receipt__card_icon_won" icon="won-sign" />
                <!-- item.price: 지출 / 수입 금액 -->
                <div class="receipt__card_money_num">{{ item.price }}</div>
              </div>
              <div class="receipt__card_memo">
                <!-- item.memo: 메모 -->
                <div class="receipt__card_memo_txt">{{ item.memo }}</div>
              </div>
            </div>
          </div>
          <div class="receipt__end">* * * * * </div>
          <!-- // [ CASE 2 ] 영수증 내역 있을 때 -->
        </div>
        <!-- // 영수증 리스트 -->

        <!-- 글쓰기 버튼 -->
        <v-fab-transition>
          <router-link to="/write">
            <v-btn
              class="receipt__card_write"
              color="#26b2ff"
              fixed
              bottom
              right
              fab
              elevation="2"
            >
              <v-icon color="#FFF">mdi-pencil-plus</v-icon>
            </v-btn>
          </router-link>
        </v-fab-transition>
        <!-- // 글쓰기 버튼 -->
      </div>
      <!-- // 영수증 -->

      <!-- 팝업 -->
      <pop-compo
        :title="'삭제하시겠습니까?'"
        :content="'삭제된 글은 다시 복구할 수 없습니다.'"
        :btn1="'삭제'"
        :btn2="'취소'"
        :dialogProps="dialog"
      ></pop-compo>
      <!-- // 팝업 -->
    </div>
  </div>
</template>

<script>
  import HeaderCompo from '@/components/HeaderCompo.vue';
  import PopCompo from '@/components/PopCompo.vue'

  export default {
    name: 'MainPage',
    components: {
      HeaderCompo,
      PopCompo,
    },
    data () {
      return {
        items: [
          { id: '0', type: false, category: '식비', date: '2022.07.07', price: '24,560', memo: '오늘 점심으로 오랜만에 외식! 저번주부터 먹고싶었던 떡볶이 먹었다 히히힣'},
          { id: '1', type: true, category: '알바비', date: '2022.07.04', price: '24,560', memo: '알바비 받았다! 한달동안 고생했어!! 뿌듯뿌듯 앞으로도 잘 해보자~~ 나 대견해 잘했어 우쭈쭈 짱이야 ㅎㅇㅎ 알바비 받은거는 고대로 저축~ 여력 닿는데 까지 계속 알바 할거다! 아무도 날 말리지 못할거시야!'},
          { id: '2', type: true, category: '월급', date: '2022.06.28', price: '24,560', memo: '꺄하 ♡'},
          { id: '3', type: false, category: '생필품', date: '2022.06.15', price: '24,560', memo: '아니 코로나 언제 끝나!!!! 마스크 값 장난아니네 ㅜㅜ 그만 끼고싶어어어어어어ㅠㅠㅠㅠㅠ'},
          { id: '4', type: false, category: '교통비', date: '2022.06.11', price: '100,000', memo: '하이패스 충전 완!'},
          { id: '5', type: false, category: '화장품', date: '2022.06.02', price: '14,560', memo: '기미 올라오길래 선크림 삼.. 슬프군'},
          { id: '6', type: true, category: '적립금', date: '2022.05.19', price: '580', memo: '후기써서 적립금 받음 ㅋ 영수증이랑 같이 올리니까 좀 더 많이 준다. 근데 내 개인정보 다 빼갈것같은건 기분탓? 돈이냐 개인정보냐 그게 문제로다'},
        ],

        // 팝업
        dialog: false,
      }
    },
  }
</script>

<style scoped>
  @import '@/css/receipt.css';

</style>
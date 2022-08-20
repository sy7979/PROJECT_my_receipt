import Vue from "vue"

// FontAwesome Icon 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// 필요한 아이콘 import
import { faEllipsisVertical, faWonSign, faPenToSquare, faTrashCan, faAngleLeft, faBars } from '@fortawesome/free-solid-svg-icons'

// library 추가
library.add(faEllipsisVertical, faWonSign, faPenToSquare, faTrashCan, faAngleLeft, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)
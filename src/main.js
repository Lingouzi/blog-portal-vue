import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// 引入 fontawesomeicon
import { library } from '@fortawesome/fontawesome-svg-core'
// 引入所有的图标,
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// 为了减少体积,可以指定引入的图标
import { faGithub, faWeibo, faWeixin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import router from './router'

import '@/permission'

// library.add(fas)
// library.add(fab)
library.add(faGithub) // github 图标
library.add(faWeixin) // 微信
library.add(faWeibo) // 微博
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* 完整引入element */
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app')

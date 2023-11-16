import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入样式文件
import "./styles/index.scss"
// 引入自定义组件
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'

//使用fontawesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

const app = createApp(App)
app.use(router)
//注册自定义或外部组件
app.component('Henry-Icon',Icon)
app.component('Henry-Button',Button)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

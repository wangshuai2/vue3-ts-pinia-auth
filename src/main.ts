import { createApp, type App } from 'vue'
import RootApp from './App.vue'
import { useCreatePinia } from './stores'
import { setupRouter } from './router'

import './assets/main.css'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'

async function setupApp() {
  const app: App = createApp(RootApp)

  // 初始化store
  useCreatePinia(app)

  // 初始化路由
  await setupRouter(app)

  app.component('SvgIcon', SvgIcon)

  app.mount('#app')
}
setupApp()

import { createApp, type App } from 'vue'
import RootApp from './App.vue'
import { useCreatePinia } from './stores'
import { setupRouter } from './router'

import './assets/main.css'

async function setupApp() {
  const app: App = createApp(RootApp)

  // 初始化store
  useCreatePinia(app)

  // 初始化路由
  await setupRouter(app)

  app.mount('#app')
}
setupApp()

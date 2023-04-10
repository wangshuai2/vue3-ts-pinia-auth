import type { App } from 'vue'
import { createPinia } from 'pinia'
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)

export const useCreatePinia = (app: App) => {
  app.use(pinia)
}

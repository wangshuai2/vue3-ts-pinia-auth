import { StoreEnum } from '@/config/store.enum'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// interface ISystemState {
//   collapsed: boolean
// }

export const useSystemStore = defineStore(StoreEnum.SYSTEM_STORE, () => {
  const collapsed = ref(false)

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  return {
    collapsed,
    toggleCollapsed
  }
})

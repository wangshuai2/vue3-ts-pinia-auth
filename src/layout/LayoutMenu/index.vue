<template>
  <el-menu
    :default-active="currentRoute"
    unique-opened
    router
    collapse-transition
    @open="handleOpen"
    @close="handleClose"
  >
    <MenuItem v-for="item in menuList" :key="item.path" :item="item" />
  </el-menu>
</template>

<script setup lang="ts">
import { useRouteStore } from '@/stores/modules/route.store'
import { storeToRefs } from 'pinia'
import MenuItem from './MenuItem.vue'
import { useRoute } from 'vue-router'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const { menuList } = storeToRefs(useRouteStore())
console.log(menuList.value)

const route = useRoute()
const currentRoute = route.fullPath
</script>

<style scoped></style>

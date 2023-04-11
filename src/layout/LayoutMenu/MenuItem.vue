<template>
  <el-sub-menu v-if="props.item.children" :index="props.item.path">
    <template #title>
      <!-- <el-icon><location /></el-icon> -->
      <span>{{ props.item.name }}</span>
    </template>
    <MenuItem v-for="item in props.item.children" :key="item.path" :item="item" />
  </el-sub-menu>

  <el-menu-item v-else :index="props.item.path">
    <!-- <el-icon><icon-menu /></el-icon> -->
    <span>{{ props.item.name }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import { resolve } from 'path-browserify'
interface MenuItem {
  name: string
  path: string
  children?: MenuItem[]
}

const tmpPath = resolve(path || '', menuItem.path)

const _path = tmpPath === '/' ? '/' : tmpPath.replace(/\/$/, '')

const props = defineProps<{
  item: MenuItem
}>()
</script>

<style scoped></style>

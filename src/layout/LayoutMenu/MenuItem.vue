<template>
  <el-sub-menu v-if="props.item.children" :index="props.item.path">
    <template #title>
      <!-- <el-icon><location /></el-icon> -->
      <MenuIcon :name="props.item.meta?.icon" />
      <span>{{ props.item.name }}</span>
    </template>
    <MenuItem v-for="item in props.item.children" :key="item.path" :item="item" />
  </el-sub-menu>

  <el-menu-item v-else :index="props.item.path">
    <!-- <el-icon><icon-menu /></el-icon> -->
    <MenuIcon :name="props.item.meta?.icon" />
    <span>{{ props.item.name }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import MenuIcon from './MenuIcon.vue'

const props = defineProps<{
  item: RouteRecordRaw
}>()
</script>

<style scoped></style>

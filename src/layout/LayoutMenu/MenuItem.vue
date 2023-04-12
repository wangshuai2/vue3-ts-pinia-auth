<template>
  <div v-if="!props.item.meta?.hidden">
    <!-- 当只有一个子元素可以展示的时候 -->
    <!-- 把这个子元素提升到父级 -->
    <el-menu-item
      v-if="hasOneChild(props.item.children) && !oneChild?.children?.length"
      :index="oneChild?.path"
    >
      <MenuIcon :name="oneChild?.meta?.icon" />
      <span>{{ oneChild?.meta?.title || oneChild?.name }}</span>
    </el-menu-item>

    <!-- 当只有一个子元素的时候 -->
    <el-menu-item v-else-if="!props.item?.children?.length" :index="props.item?.path">
      <MenuIcon :name="props.item?.meta?.icon" />
      <span>{{ props.item?.meta?.title || props.item?.name }}</span>
    </el-menu-item>

    <!-- 当有多个子元素可以展示的时候 -->
    <!-- 正常展示下拉菜单 -->
    <el-sub-menu v-else :index="props.item?.path">
      <template #title>
        <MenuIcon :name="props.item?.meta?.icon" />
        <span>{{ props.item?.meta?.title || props.item?.name }}</span>
      </template>
      <MenuItem v-for="item in props.item?.children" :key="item.path" :item="item" />
    </el-sub-menu>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import MenuIcon from './MenuIcon.vue'
import { ref } from 'vue'

const props = defineProps<{
  item: RouteRecordRaw
}>()

const oneChild = ref<RouteRecordRaw>()
const hasOneChild = (child: RouteRecordRaw[] | undefined) => {
  if (!child) return false

  const showing = child.filter((item) => {
    if (item.meta?.hidden) {
      return false
    } else {
      oneChild.value = item
      return true
    }
  })

  if (showing.length === 1) {
    return true
  }

  if (showing.length === 0) {
    oneChild.value = { ...props.item, path: '' }
    return true
  }

  return false
}
</script>

<style scoped></style>

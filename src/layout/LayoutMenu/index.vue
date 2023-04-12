<template>
  <div class="aside">
    <div class="layout-logo">
      <div class="layout-logo-img"></div>
      <div class="layout-logo-text">LOGO</div>
    </div>
    <el-scrollbar class="aside-scrollbar">
      <el-menu
        :default-active="currentRoute"
        :collapse="true"
        unique-opened
        router
        collapse-transition
        @open="handleOpen"
        @close="handleClose"
      >
        <MenuItem v-for="item in routesList" :key="item.path" :item="item" />
      </el-menu>
    </el-scrollbar>
    <div class="collpase">
      <div class="collpase-icon">
        <el-icon :size="26"><DArrowLeft /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouteStore } from '@/stores/modules/route.store'
import { storeToRefs } from 'pinia'
import MenuItem from './MenuItem.vue'
import { useRoute } from 'vue-router'
import { DArrowLeft } from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const { routesList } = storeToRefs(useRouteStore())
console.log(routesList.value)

const route = useRoute()
const currentRoute = route.meta.activeMenu || route.fullPath
</script>

<style scoped lang="scss">
$logo-height: 80px;
$collpase-height: 135px;

.aside {
  height: 100vh;
  border-right: 1px solid #061f37;
  background-color: #061f37;
  padding: 0 10px;
  box-sizing: border-box;
  user-select: none;

  &-scrollbar {
    height: calc(100vh - $logo-height - $collpase-height);
  }

  :deep(.el-menu) {
    border-right: none;
    background-color: #061f37;
  }
  :deep(.el-sub-menu__title) {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    height: 68px;
    line-height: 68px;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.16);
      border-radius: 10px;
    }
  }

  :deep(.el-menu-item) {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    height: 68px;
    line-height: 68px;

    &:hover,
    &.is-active {
      background-color: hsla(0, 0%, 100%, 0.16);
      border-radius: 10px;
    }
  }

  .layout-logo {
    height: $logo-height;
    line-height: $logo-height;
    text-align: center;
    &-img {
      vertical-align: middle;
    }
    &-text {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
    }
  }
  .collpase {
    height: $collpase-height;
    text-align: center;
    &-icon {
      display: inline-block;
      cursor: pointer;
      background: #fff;
      padding: 3px;
      border-radius: 4px;
      font-size: 0;
    }
  }
}
</style>

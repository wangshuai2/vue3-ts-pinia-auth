<template>
  <div class="common-layout bg-gray-100 dark:bg-gray-600">
    <el-container>
      <el-aside :style="collapsed ? { width: '85px' } : { width: '262px' }">
        <LayoutMenu />
      </el-aside>
      <el-container>
        <el-header class="bg-white dark:bg-gray-700 shadow-md">
          <LayoutHeader />
        </el-header>
        <el-main>
          <div
            class="h-full box-border bg-white dark:bg-gray-700 shadow-md rounded-md overflow-y-auto"
          >
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LayoutMenu from './LayoutMenu/index.vue'
import LayoutHeader from './LayoutHeader/index.vue'
import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/stores/modules/system.store'

const { collapsed } = storeToRefs(useSystemStore())
</script>

<style scoped lang="scss">
.common-layout {
  --el-aside-width: 262px;

  // background-color: #f1f4f6;
  .maincont-scrollbar {
    height: 100%;
  }
  :deep(.el-aside) {
    transition: width 0.3s;
  }
  :deep(.el-header) {
    --el-header-padding: 0;
    --el-header-height: 60px;
  }
  :deep(.el-main) {
    height: calc(100vh - 100px);
  }
}
</style>

<template>
  <div class="aside">
    <div class="layout-logo">
      <div class="layout-logo-img"></div>
      <div class="layout-logo-text">LOGO</div>
    </div>
    <el-scrollbar class="aside-scrollbar">
      <el-menu
        :default-active="currentRoute"
        :collapse="collapsed"
        popper-effect="dark"
        unique-opened
        router
        collapse-transition
      >
        <MenuItem v-for="item in routesList" :key="item.path" :item="item" />
      </el-menu>
    </el-scrollbar>
    <div class="collpase">
      <div class="collpase-icon" @click="handleToggleCollapse">
        <el-icon :size="26" color="#000">
          <DArrowRight v-show="collapsed" />
          <DArrowLeft v-show="!collapsed" />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useRouteStore } from '@/stores/modules/route.store'
import { useSystemStore } from '@/stores/modules/system.store'
import MenuItem from './MenuItem.vue'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

// 获取路由列表
const { routesList } = storeToRefs(useRouteStore())
// console.log(routesList.value)

// 获取当前路由
const route = useRoute()
// 获取当前路由的 meta.activeMenu || route.fullPath
const currentRoute = route.meta.activeMenu || route.fullPath

const systemStore = useSystemStore()
const collapsed = computed(() => systemStore.collapsed)
// 折叠菜单
const handleToggleCollapse = () => {
  console.log('折叠菜单')
  systemStore.toggleCollapsed()
}
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

    .el-icon {
      font-size: 24px;
    }

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

    .el-icon {
      font-size: 24px;
    }

    &:hover,
    &.is-active {
      background-color: hsla(0, 0%, 100%, 0.16);
      border-radius: 10px;
    }
  }

  :deep(.el-menu--collapse) {
    span {
      display: none;
    }
    .el-sub-menu__icon-arrow {
      display: none;
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

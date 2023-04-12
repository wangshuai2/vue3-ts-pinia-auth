<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <LayoutMenu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          Main
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LayoutMenu from './LayoutMenu/index.vue'
</script>

<style scoped>
.common-layout {
  --el-aside-width: 262px;
}
</style>

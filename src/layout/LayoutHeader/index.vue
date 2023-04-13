<template>
  <div class="h-full flex flex-row justify-end items-center">
    <div class="h-full flex items-center px-7 border-x border-gray-300 border-r-solid">
      <el-icon :size="iconSize" class="cursor-pointer" @click="toggleDark()">
        <Sunny v-show="isDark" />
        <Moon v-show="!isDark" />
      </el-icon>
    </div>
    <div class="h-full flex items-center px-7 border-x border-gray-300 border-r-solid">
      <el-icon :size="iconSize" class="cursor-pointer" @click="toggleFullScreen">
        <FullscreenExitOutlined v-show="isFullscreen" />
        <FullscreenOutlined v-show="!isFullscreen" />
      </el-icon>
    </div>
    <div class="h-full flex items-center px-7 border-x border-gray-300 border-r-solid">
      <el-badge :value="12">
        <el-icon :size="iconSize" class="cursor-pointer" @click="toggleFullScreen">
          <BellOutlined />
        </el-icon>
      </el-badge>
    </div>
    <div class="h-full flex items-center px-7 border-x border-gray-300 border-r-solid">
      <el-avatar :size="32" fit="cover" class="vertical-middle">
        <img src="https://pharmacyimg.docbook.com.cn/mini_doctor/man.png" alt="avatar" />
      </el-avatar>
      <span class="vertical-middle pl-2 text-base">王大帅</span>
    </div>
    <div class="h-full flex items-center px-5">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link cursor-pointer">
          <span class="text-base vertical-middle pr-3">sss</span>
          <el-icon :size="16" class="vertical-middle">
            <DownOutlined />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>切换应用</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle, useFullscreen } from '@vueuse/core'
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  BellOutlined,
  DownOutlined
} from '@vicons/antd'
import { Sunny, Moon } from '@element-plus/icons-vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { isFullscreen, toggle } = useFullscreen(document.documentElement)
const toggleFullScreen = () => {
  toggle()
}

const iconSize = 30
</script>

<style scoped></style>

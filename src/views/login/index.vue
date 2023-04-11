<template>
  <div>
    <h1>登录页面</h1>
    <button type="button" @click="handleLoginBtn">测试登录</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user.store'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const handleLoginBtn = () => {
  login('wang', '123')
}

const login = async (username: string, pwd: string) => {
  await userStore.login(username, pwd)
  await router.replace('/permission/page')
}
</script>

<style scoped></style>

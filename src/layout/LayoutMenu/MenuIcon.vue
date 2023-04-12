<template>
  <el-icon>
    <svg-icon v-if="typeof props.name === 'string'" :name="props.name" />
    <component v-else :is="props.name"></component>
  </el-icon>
</template>

<script setup lang="ts">
// import type { DefineComponent } from 'vue'

const props = defineProps<{
  name: any
  size?: string
  color?: string
}>()
</script>

<style scoped></style>

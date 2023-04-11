<template>
  <svg-icon v-if="symbolId" :name="symbolId" />
  <component v-else :is="props.name"></component>
</template>

<script setup lang="ts">
import { ref, type DefineComponent } from 'vue'

const props = defineProps<{
  name: string | DefineComponent | undefined
  size?: string
  color?: string
}>()

console.log(typeof props.name)
console.log(props.name)
const symbolId = ref('')
// const elIcon = ref()
if (props.name) {
  if (typeof props.name === 'string') {
    const [type, name] = props.name.split(':')
    if (type === 'virtual') {
      symbolId.value = name
    }
  }
}
</script>

<style scoped></style>

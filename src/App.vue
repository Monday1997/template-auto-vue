<script setup lang="ts">
import type { Component } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const route = useRoute()
let a = ref(2)
setTimeout(() => {
  a.value = 3
}, 1000)
const com = computed(() => {
  return route.meta.routerview as Component
})
</script>

<template>
  <component :is="com">
    <RouterView />
  </component>
</template>

<style scoped></style>

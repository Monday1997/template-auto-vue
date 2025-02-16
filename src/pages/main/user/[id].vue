<template>
  <div>{{ route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute('/user/[id]')
console.log(route.params.id)
</script>

<style scoped></style>

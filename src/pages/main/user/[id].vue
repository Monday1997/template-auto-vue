<template>
  <div>{{ route.params.id }}</div>
  <div>{{ data1 }}</div>
</template>

<script setup lang="ts">
const route = useRoute('/user/[id]')
console.log(route.params.id)
const data1 = ref(13)
</script>

<style scoped></style>

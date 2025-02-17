<template>
  <div>{{ route.params.id }}</div>
  <div>{{ data1 }}</div>
  <Com></Com>
  <ComTwo />
</template>

<script setup lang="ts">
const route = useRoute('/user/[id]')
const data1 = ref(13)
</script>

<route lang="json">
{
  "meta": {
    "title": "用户页面",
    "layout": "lhome"
  }
}
</route>

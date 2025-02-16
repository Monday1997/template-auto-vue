<template>
  <div>home</div>
  <!-- <ReloadPrompt /> -->
  hellow
</template>

<script lang="ts" setup>
import { registerSW } from 'virtual:pwa-register'
onMounted(() => {
  registerSW({
    immediate: true,
    // onNeedRefresh() {
    //   console.log('need refresh')
    // },
    onRegisteredSW(_swScriptUrl, registration) {
      setInterval(() => {
        // 每5秒钟像服务器获取刷新
        registration?.update()
      }, 5000)
    },
  })
})
</script>

<style scoped></style>
<route lang="json">
{
  "name": "home",
  "meta": {
    "title": "首页"
  }
}
</route>

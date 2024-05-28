<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const active = ref(0)

const onChange = (path) => {
  router.push(path)
}
</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="onChange('/')">标签</van-tabbar-item>
    <van-tabbar-item icon="search" @click="onChange('/my')">标签</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss" scoped>
.my-tabbar {
  .my-tabbar-title {
    font-size: 12px;
  }

  .my-tabbar-icon {
    width: 24px;
    height: 24px;
  }
}
</style>

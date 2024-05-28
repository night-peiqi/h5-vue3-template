<script setup>
import { computed } from 'vue'
import { PAGE_CONFIG } from '@/constants/page'
import { useRoute } from 'vue-router'
import Tabbar from '../Tabbar/index.vue'

const route = useRoute()
console.log('route', route)

const props = defineProps({
  className: String,
  contentPadding: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <view :class="`page-wrap layout ${props.className || ''}`">
    <!-- <div class="layout-top"></div> -->
    <div class="layout-content">
      <slot></slot>
    </div>
    <div class="layout-bottom">
      <Tabbar />
    </div>
  </view>
</template>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  .layout-content {
    width: 100%;
    flex: 1;
    overflow-y: auto;
    /* For Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    /* For Firefox */
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }

  .layout-bottom {
    width: 100%;
    height: 102px;
    flex-shrink: 0;
  }
}
</style>

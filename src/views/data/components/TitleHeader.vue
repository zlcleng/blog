<template>
  <div class="data-header">
    大数据
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TitleHeader'
})
</script>
<style lang="less" scoped>
.data-header {
  height: 65px;
  line-height: 65px;
  background: url('~@/assets/dataNav.png') no-repeat;
  background-size: 100% 100%;
}
</style>

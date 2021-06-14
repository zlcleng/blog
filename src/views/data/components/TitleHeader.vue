<template>
  <div class="data-header">
    大数据可视化系统
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
  color: #b3efff;
  text-align: center;
  font-size: 24px;
  line-height: 46px;
}
</style>

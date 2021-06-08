<template>
  <div class="data-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <line-chart class="card-item" />
        <pie-chart class="card-item" />
      </el-col>
      <el-col :span="12">
        <line-chart class="card-item" />
      </el-col>
      <el-col :span="6">
        <line-chart class="card-item" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { LineChart, pieChart } from './components'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LineChart, pieChart },
  name: 'Data',
  setup () {
    return {}
  }
})
</script>
<style lang="less" scoped>
.data-container {
  width: 100vw;
  height: 100vh;
  .card-item {
    height: 32%
  }
}
</style>

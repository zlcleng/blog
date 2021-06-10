<template>
  <div class="data-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <box-container>
          <line-chart class="card-item" />
        </box-container>
      </el-col>
      <el-col :span="12">
        <line-chart class="card-item" />
      </el-col>
      <el-col :span="6">
        <pie-chart class="card-item" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { BoxContainer } from '@/components'
import { LineChart, pieChart } from './components'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LineChart, pieChart, BoxContainer },
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
  background: url('../../assets/dataBg.jpg') no-repeat;
  background-size: cover;
  .card-item {
    height: 32vh
  }
}
</style>

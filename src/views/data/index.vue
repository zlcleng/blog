<template>
  <div class="data-container">
    <title-header />
    <el-row :gutter="20">
      <el-col :span="6">
        <box-container title="厦门市2020年降水量">
          <line-chart class="card-item" />
        </box-container>
        <box-container>
          <scatter-chart class="card-item" />
        </box-container>
        <box-container>
          <gauge-chart class="card-item" />
        </box-container>
      </el-col>
      <el-col :span="12">
        <scatter-map />
      </el-col>
      <el-col :span="6">
        <box-container>
          <pie-chart class="card-item" />
        </box-container>
        <box-container>
          <line-chart class="card-item" />
        </box-container>
        <box-container>
          <custom-chart class="card-item" />
        </box-container>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { BoxContainer } from '@/components/index'
import { LineChart, pieChart, TitleHeader, GaugeChart, CustomChart, ScatterChart, ScatterMap } from './components'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LineChart, pieChart, TitleHeader, BoxContainer, GaugeChart, CustomChart, ScatterChart, ScatterMap }, //, CustomChart
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
  padding: 0 10px;
  box-sizing: border-box;
  .card-item {
    height: 26vh
  }
}
/deep/ .el-col {
  height: 100%;
}
</style>

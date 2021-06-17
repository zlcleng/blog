<!--
 * @Author: your name
 * @Date: 2021-06-16 12:48:21
 * @LastEditTime: 2021-06-16 13:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\views\data\index.vue
-->
<template>
  <div class="data-container">
    <div class="data-header">
      大数据可视化系统
    </div>
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
          <funnel-chart class="card-item" />
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
import { LineChart, pieChart, GaugeChart, CustomChart, ScatterChart, ScatterMap, FunnelChart } from './components'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { LineChart, pieChart, BoxContainer, GaugeChart, CustomChart, ScatterChart, ScatterMap, FunnelChart },
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
}
/deep/ .el-col {
  height: 100%;
}
</style>

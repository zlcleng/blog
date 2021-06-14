<template>
  <div ref="scatterChart" class="scatter-container" />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  setup () {
    const scatterChart = ref(null)

    const initLineChart = (ele: HTMLElement) => {
      const myChart = echarts.init(ele)
      const option = {
        xAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [{
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.20],
            [11.5, 7.20],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
          ],
          itemStyle: {
            color: '#83bff6'
          },
          type: 'scatter'
        }]
      }

      option && myChart.setOption(option)
      const sizeFun = function () {
        myChart.resize()
      }
      window.addEventListener('resize', sizeFun)
    }

    onMounted(() => {
      initLineChart(scatterChart.value)
    })
    return {
      scatterChart
    }
  }
})
</script>

<style lang="less" scoped>

</style>

<template>
  <div ref="lineChart" class="line-chart" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'LineChart',
  setup () {
    const lineChart = ref(null)

    const initLineChart = (ele: HTMLElement) => {
      const myChart = echarts.init(ele)
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            },
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                ]
              )
            }
          }
        ]
      }

      option && myChart.setOption(option)
      const sizeFun = function () {
        myChart.resize()
      }
      window.addEventListener('resize', sizeFun)
    }

    onMounted(() => {
      initLineChart(lineChart.value)
    })
    return {
      lineChart
    }
  }
})
</script>
<style lang="less" scoped>

</style>

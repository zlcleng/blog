<!--
 * @Author: your name
 * @Date: 2021-06-16 13:07:55
 * @LastEditTime: 2021-06-16 13:19:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\views\data\components\funnelChart.vue
-->
<template>
  <div ref="funnelChart" class="funnel-container" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'FunnelChart',
  setup () {
    const funnelChart = ref(null)

    const initFunnelChart = (elem: HTMLElement) => {
      const myChart = echarts.init(elem)
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}%'
        },
        legend: {
          left: 10,
          top: 20,
          orient: 'vertical',
          data: ['展现', '点击', '访问', '咨询', '订单']
        },
        series: [
          {
            name: '实际',
            type: 'funnel',
            left: '20%',
            top: '5%',
            width: '75%',
            height: '90%',
            label: {
              formatter: '{b}预期'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              opacity: 0.7
            },
            emphasis: {
              label: {
                position: 'inside',
                formatter: '{b}预期: {c}%'
              }
            },
            data: [
              { value: 30, name: '访问' },
              { value: 10, name: '咨询' },
              { value: 5, name: '订单' },
              { value: 50, name: '点击' },
              { value: 80, name: '展现' }
            ],
            z: 100
          }
        ]
      }

      option && myChart.setOption(option)
    }
    onMounted(() => {
      initFunnelChart(funnelChart.value)
    })
    return {
      funnelChart
    }
  }
})
</script>

<style lang="less" scoped>

</style>

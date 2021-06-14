<template>
  <div ref="pieChart" class="pie-chart" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'PieChart',
  setup () {
    const pieChart = ref(null)

    const initPieChart = (elem: HTMLElement) => {
      const myChart = echarts.init(elem)
      const option = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    }
    onMounted(() => {
      initPieChart(pieChart.value)
    })
    return {
      pieChart
    }
  }
})
</script>
<style lang="less" scoped>

</style>

<template>
  <div ref="gaugeChart" class="gauge-conatienr" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'GaugeChart',
  setup () {
    const gaugeChart = ref(null)
    const initGaugeChart = (elem: HTMLElement) => {
      const myChart = echarts.init(elem)
      const option = {
        series: [{
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          splitNumber: 12,
          itemStyle: {
            color: '#188df0'
          },
          progress: {
            show: true,
            width: 30
          },

          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 30
            }
          },
          axisTick: {
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#fefefe'
            }
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: '#fefefe'
            }
          },
          axisLabel: {
            distance: -10,
            color: '#fefefe',
            fontSize: 16
          },
          anchor: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 40,
            height: '15%',
            borderRadius: 8,
            offsetCenter: [0, '-5%'],
            fontSize: 20,
            fontWeight: 'bolder',
            formatter: '{value} °C',
            color: 'auto'
          },
          data: [{
            value: 20
          }]
        },
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          itemStyle: {
            color: '#83bff6'
          },
          progress: {
            show: true,
            width: 8
          },
          pointer: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            show: false
          },
          data: [{
            value: 20
          }]
        }]
      }

      const _randNum:number = Math.random() * 60
      const random:number = parseFloat(_randNum.toFixed(2))
      option.series[0].data[0].value = random
      option.series[1].data[0].value = random
      myChart.setOption(option, true)
      const sizeFun = function () {
        myChart.resize()
      }
      window.addEventListener('resize', sizeFun)
    }
    onMounted(() => {
      initGaugeChart(gaugeChart.value)
    })
    return {
      gaugeChart
    }
  }
})
</script>
<style lang="less" scoped>

</style>

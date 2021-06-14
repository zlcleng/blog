<template>
  <div class="box-container">
    <div class="border-left-top" />
    <div class="border-left-bottom" />
    <div class="border-right-top" />
    <div class="border-right-bottom" />
    <h4 class="title"> {{ title }} </h4>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '图表'
    }
  },
  data () {
    return {}
  }
})
</script>

<style lang="less" scoped>
.box-container {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: rgba(75, 139, 247, 0.05);
  box-shadow: 1px 1px 16px #7ccef4 inset;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  .title {
    color: #b3efff;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    line-height: 30px;
  }
  .border-left-top,
  .border-left-bottom,
  .border-right-top,
  .border-right-bottom {
    position: absolute;
    width: 10px;
    height: 10px;
  }
  .border-left-top {
    left: -1px;
    top: -1px;
    border-left: 2px solid #7bc6e9;
    border-top: 2px solid #7bc6e9;
  }
  .border-left-bottom {
    left: -1px;
    bottom: -1px;
    border-left: 2px solid #7bc6e9;
    border-bottom: 2px solid #7bc6e9;;
  }
  .border-right-top {
    right: -1px;
    top: -1px;
    border-right: 2px solid #7bc6e9;
    border-top: 2px solid #7bc6e9;
  }
  .border-right-bottom {
    right: -1px;
    bottom: -1px;
    border-right: 2px solid #7bc6e9;
    border-bottom: 2px solid #7bc6e9;;
  }
}
</style>

<template>
  <div class="box">
    <div class="box-header">
      <div class="box-title">{{title}}</div>
    </div>
    <div class="box-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-area',
    props: {
      title: {
        type: String,
        default: '默认标题'
      }
    }
  }
</script>

<style scoped lang="less">
  .box {
    /deep/ div.el-form-item {
      margin-bottom: 3px;
    }
  }

  .box-header {
    margin-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
  }

  .box-header .box-title {
    font-size: 16px;
    line-height: 32px;
  }
</style>

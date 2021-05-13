<template>
  <button
    class="xm-button"
    :class="[`xm-button--${type}`]"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'XmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.xm-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  margin-right: 20px;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &.focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.xm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &.focus {
    color: #fff;
    border-color: #66b1ff;
    background-color: #66b1ff;
  }
}
.xm-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &.focus {
    color: #fff;
    border-color: #909399;
    background-color: #909399;
  }
}
.xm-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &.focus {
    color: #fff;
    border-color: #d6a9ad;
    background-color: #d6a9ad;
  }
}
.xm-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &.focus {
    color: #fff;
    border-color: #ebb563;
    background-color: #ebb563;
  }
}
.xm-button--warning {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &.focus {
    color: #fff;
    border-color: #c78989;
    background-color: #c78989;
  }
}
</style>

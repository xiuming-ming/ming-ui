<template>
  <div class="acticle">
    <!-- <xm-button>按钮</xm-button> -->
    <!-- <xm-button type="primary">按钮</xm-button>
    <xm-button type="success">按钮</xm-button>
    <xm-button type="info">按钮</xm-button>
    <xm-button type="warning">按钮</xm-button>
    <xm-button type="danger">按钮</xm-button> -->
    <xm-button
      type="danger"
      @click.native="shwoMessage"
    >按钮</xm-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    shwoMessage () {
      // this.$Message({
      //   type: 'success',
      //   message: '1111'
      // })
      // this.$Message.success('1111222')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

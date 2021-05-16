<!-- message.vue 可配置版 -->
<template>
  <div
    class="echojoy-message"
    :class="type ? `echojoy-message--${type}` : ''"
  >
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
// 主要就改了 data
export default {
  name: 'XmMessage',
  data () {
    return {
      duration: 3000,
      typw: '',
      message: ''
    }
  },
  mounted () {
    if (typeof this.duration !== 'number') {
      console.error('the duration must be a number!')
      this.duration = 1000
    }
    if (this.duration > 0) {
      setTimeout(() => {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }, this.duration)
    }
  },
  methods: {
    close () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
<style lang="scss" scoped>
.echojoy-message {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 9999;
  background: transparent;
  > p {
    padding: 12px 22px;
    font-size: 18px;
    border-radius: 4px;
    background: rgba(17, 17, 17, 0.7);
  }
  &--error p {
    background: rgba(255, 0, 0, 0.5);
  }
  &--success p {
    background: rgba(0, 255, 0, 0.5);
  }
}
</style>

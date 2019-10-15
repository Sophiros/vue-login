<template>
  <div class="failed-background" v-show="show">
    <div class="failed-container">
      <div class="failed-header">
        <i class="iconfont icon-cha-tianchong"></i>
        <div class="failed-header-title">
          {{ title }}
        </div>
      </div>
      <div class="failed-main">
        <div class="failed-message">
          {{ message }}
        </div>
      </div>
      <div class="failed-footer">
        <button class="failed-footer-button-clear" @click="clear">清空</button>
        <button class="failed-footer-button-confirm" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginFailed',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '登录失败'
      },
      message: {
        type: String,
        default: ''
      }
    },
    methods: {
      // 清空
      clear () {
        this.$emit('clear')
      },
      // 确认
      confirm () {
        this.$emit('confirm')
      }
    }
  }
</script>

<style scoped>
  .failed-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: 10;
  }

  .failed-container {
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    background: #ffffff;
    border-radius: 5px;
    transform: translate(-50%, -50%);
  }

  .failed-header {
    display: flex;
    height: 60px;
    background: #ffffff;
    align-items: center;
    justify-content: left;
    cursor: move;
  }

  .iconfont {
    position: absolute;
    left: 10px;
    top: 10px;
  }

  .failed-header-title {
    position: absolute;
    left: 70px;
    font-size: 20px;
    color: #404040;
  }

  .failed-main {
    display: flex;
    height: 60px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
  }

  .failed-message {
    position: absolute;
    left: 70px;
    font-size: 15px;
    color: rgba(60, 58, 72, 0.61);
  }

  .failed-footer {
    display: flex;
    height: 80px;
    width: 500px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
  }

  .failed-footer-button-clear {
    display: flex;
    position: absolute;
    right: 110px;
    width: 70px;
    height: 40px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid rgba(75, 72, 87, 0.65);
    background-color: #ffffff;
    color: rgba(60, 58, 72, 0.61);
    justify-content: center;
  }

  .failed-footer-button-confirm {
    display: flex;
    position: absolute;
    right: 20px;
    width: 70px;
    height: 40px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #348fff;
    background-color: #348fff;
    color: white;
    justify-content: center;
  }
</style>

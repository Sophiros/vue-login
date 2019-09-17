<template>
  <div class="success-background" v-show="show">
    <div class="success-container">
      <div class="success-header">
        <i class="iconfont icon-gou1"></i>
        <div class="success-header-title">
          {{ title }}
        </div>
      </div>
      <div class="success-main">
        <div class="success-message">
          {{ message}}
        </div>
      </div>
      <div class="success-footer">
        <button class="success-footer-button-confirm" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginSuccess',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '登录成功'
      },
      message: {
        type: String,
        default: ''
      }
    },
    methods: {
      confirm () {
        this.$emit('confirm')
      }
    }
  }
</script>

<style scoped>
  .success-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: 10;
  }

  .success-container {
    background: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .success-header {
    display: flex;
    height: 60px;
    background: #ffffff;
    align-items: center;
    justify-content: left;
    cursor: move;
  }

  .iconfont {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .success-header-title {
    position: absolute;
    left: 70px;
    font-size: 20px;
    color: black;
  }

  .success-main {
    display: flex;
    height: 60px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
  }

  .success-message {
    position: absolute;
    left: 70px;
    font-size: 15px;
    color: rgba(60, 58, 72, 0.61);
  }
  .success-footer {
    display: flex;
    height: 80px;
    width: 500px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
  }

  .success-footer-button-confirm {
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

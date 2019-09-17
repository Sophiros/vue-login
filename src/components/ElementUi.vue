<template>
  <div>
    <el-menu class="el-menu-demo" default-active="activeIndex" mode = "horizontal" @select = "handleSelect">
      <el-menu-item index="1">
        <a href="https://www.bilibili.com" target="_blank">哔哩哔哩</a>
      </el-menu-item>
      <el-menu-item index="2">
        <a href="https://github.com" target="_blank">Github</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="https://www.runoob.com" target="_blank">菜鸟教程</a>
      </el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.kuaidi100.com/?from=openv" target="_blank">查快递</a>
      </el-menu-item>
    </el-menu>
    <img src="./assets/mao.jpg">
    <br>
    <div class="button" >
      <el-button @click="submit">返回登录界面</el-button>
    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      submit () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .el-menu-demo {
    background-color : #578eff;
  }
  a {
    background-color: #ffffff;
    color: red;
  }
</style>

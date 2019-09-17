<template>
  <div class="login-without-element-ui">
    <form id="login-form">
      <div>
        <label>&nbsp;&nbsp;&nbsp;名&nbsp;&nbsp;字&nbsp;&nbsp;：</label>
        <input class="input-ui" type="text" placeholder="请输入名字" v-model="name">
      </div>
      <div class="error-info">
        {{ nameErrorInfo }}
      </div>
      <br>
      <div>
        <label>&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;码&nbsp;&nbsp;：</label>
        <input class="input-ui" type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="error-info">
        {{ passwordErrorInfo }}
      </div>
      <br>
      <div>
        <label>确认密码：</label>
        <input class="input-ui" type="password" placeholder="输入确认密码" v-model="checkPassword">
      </div>
      <div class="error-info">
        {{ checkPasswordErrorInfo }}
      </div>
      <br>
      <button class="login" type="button" @click="login()">提交</button>
    </form>
    <LoginSuccess :show="loginInfo.successShow" :message="loginInfo.successMessage"
                  @confirm="successConfirm">
    </LoginSuccess>
    <LoginFailed :show="loginInfo.failedShow" :message="loginInfo.failedMessage"
                 @confirm="failedConfirm" @clear="failedClear">
    </LoginFailed>
  </div>
</template>

<script>
  // 导入登录成功和登录失败的弹窗
  import LoginSuccess from './LoginSuccess'
  import LoginFailed from './LoginFailed'

  export default {
    name: 'loginWithoutElementUi',
    components: {
      LoginFailed,
      LoginSuccess
    },
    data () {
      return {
        // 登录框的三个变量
        name: '',
        password: '',
        checkPassword: '',
        // 登录信息
        loginInfo: {
          successMessage: '',
          successShow: false,
          failedMessage: '',
          failedShow: false
        },
        // 错误标识
        errorFlag: {
          flagOfName: '1',
          flagOfPassword: '1',
          flagOfCheckPassword: '1'
        }
      }
    },
    watch: {
      // 检查名字是否为中文
      name: function (name) {
        var reg = /^[\u4E00-\u9FA5]+$/
        if (name === '') {
          this.nameErrorInfo = '名字不能为空'
          this.errorFlag.flagOfName = '1'
        } else if (!reg.test(name)) {
          this.nameErrorInfo = '名字只能为中文'
          this.errorFlag.flagOfName = '2'
        } else {
          this.nameErrorInfo = ''
          this.errorFlag.flagOfName = ''
        }
      },
      // 检查密码是否为6位，且包含字母和数字，
      password: function (password) {
        var reg = /^(?=.*[a-z])(?=.*\d).{6,6}$/
        if (password === '') {
          this.passwordErrorInfo = '密码不能为空'
          this.errorFlag.flagOfPassword = '1'
        } else if (!reg.test(password)) {
          this.passwordErrorInfo = '密码应为6位,包含数字和小写字母'
          this.errorFlag.flagOfPassword = '2'
        } else {
          this.passwordErrorInfo = ''
          this.errorFlag.flagOfPassword = ''
        }
      },
      // 检查确认密码是否和密码一致
      checkPassword: function (checkPassword) {
        if (checkPassword !== this.password) {
          this.checkPasswordErrorInfo = '确认密码必须与密码一致'
          this.errorFlag.flagOfCheckPassword = '1'
        } else {
          this.checkPasswordErrorInfo = ''
          this.errorFlag.flagOfCheckPassword = ''
        }
      }
    },
    methods: {
      login () {
        // 登录名字为张涵文
        // 密码为12345z
        if (
          this.name === '张涵文' &&
          this.password === '12345z' &&
          this.checkPassword === this.password
        ) {
          // 弹出登录成功的弹窗，并显示相关信息
          this.loginInfo.successShow = true
          this.loginInfo.successMessage = this.name + ',欢迎使用'
        } else {
          // 弹出登录失败的弹窗，并显示相关的错误信息
          this.loginInfo.failedShow = true
          if (this.name !== '张涵文') {
            // 名字出错的相关信息
            switch (this.errorFlag.flagOfName) {
              case '1':
                this.loginInfo.failedMessage = '名字为空，请输入您的名字'
                break
              case '2':
                this.loginInfo.failedMessage = '名字不为中文，请重新输入您的名字'
                break
              default:
                this.loginInfo.failedMessage = '名字不正确，请检查您的名字'
            }
          } else if (this.password !== '12345z') {
            // 密码错误的相关信息
            switch (this.errorFlag.flagOfPassword) {
              case '1':
                this.loginInfo.failedMessage = '密码为空，请输入您的密码'
                break
              case '2':
                this.loginInfo.failedMessage = '密码格式不正确，请重新输入您的密码'
                break
              default:
                this.loginInfo.failedMessage = '密码不正确，请检查您的密码'
            }
          } else if (this.errorFlag.flagOfCheckPassword === '1') {
            // 确认密码的信息
            this.loginInfo.failedMessage = '密码和确认密码不一致,请检查您的确认密码'
          }
        }
      },
      successConfirm () {
        // 让登录成功的弹窗消失，并跳转到ElementUi页面
        this.loginInfo.successShow = false
        this.$router.push('/ElementUi')
      },
      failedConfirm () {
        // 让登录失败的弹窗消失
        this.loginInfo.failedShow = false
      },
      failedClear () {
        // 清空输入框
        this.name = ''
        this.password = ''
        this.checkPassword = ''
        // 弹窗消失
        this.loginInfo.failedShow = false
      }
    }
  }
</script>

<style>
  .login-without-element-ui {
    width: 30%;
    position: fixed;
    top: 270px;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 5px;
    border: 2px solid white;
    padding: 30px;
  }

  .input-ui {
    position: center;
    width: 180px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid rgba(83, 85, 87, 0.65);
    font-size: 20px;
    text-align: left;
  }

  .error-info {
    position: absolute;
    color: red;
    font-size: 12px;
    left: 170px;
  }

  .login {
    width: 70px;
    height: 40px;
    color: white;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    background-color: dodgerblue;
    border-radius: 5px;
    border: 1px solid white;
  }
</style>

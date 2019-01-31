<template>
  <div class="box">
    <ul class="headTab">
        <li></li>
        <li>用户登录</li>
        <li></li>
    </ul>
    <div class="content">
        <v-from :inintData='inintForm' v-on:submitForm='submitForm'></v-from>
        <div class="passBox">
            <el-button type="text" style="float: right" @click="skipWeb('/register')">注册</el-button>
            <el-button type="text" style="float: left" @click="skipWeb('/forgetPass')">忘记密码</el-button>
        </div>
    </div>
  </div>
</template>
<script>
import vfrom from '../components/from'
import {jsajx} from '../url/jsajx'
export default {
  components: {
    'v-from': vfrom
  },
  data () {
    var phoneyz = (rule, value, callback) => {
      if (!/^1[34578]\d{9}$/.test(value)) {
        callback(new Error('手机号码有误，请重填'))
      } else {
        callback()
      }
    }
    var useaccount = localStorage.useAccount
    if (useaccount != 'undefined') {
       useaccount = localStorage.useAccount
    } else {
      useaccount = ''
    }
    
    return {
      inintForm: {
        fromData: [
           {
            type: 'input',
            paramter: 'account',
            name: '电话：',
            value: useaccount,
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' },
              {
                validator: phoneyz,
                message: '手机号码有误，请重填',
                trigger: 'blur'
              }
            ]
          },
          {
            type: 'passBox',
            paramter: 'pwd',
            name: '密码：',
            value: '',
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          }
        ],
        btn: {
          succeed: '登陆'
        //   reset: '重置'
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    submitForm (data) {
      console.log(data)
      var dataJson = JSON.parse(data)
      var phone = dataJson.account;
      var  pass = dataJson.pwd;
      if (pass&&phone) {
        jsajx(
          '',
          "post",
          "/doctor/account/loginbypwd.json",
          data,
          res => {
            res = JSON.parse(res)
            const data = res.data || []
            console.log(data)
            if (res.status === 200) {
              // 请求成功
              this.$message({
                message: '登陆成功',
                type: 'success'
              })
              localStorage.useAccount = phone
              localStorage.login = true
              localStorage.token = data.token
              this.$router.push('/')
            } else {
              this.$message.error(res.msg || '登陆失败')
            }
        })
      }
    },
    skipWeb (url) {
        this.$router.push(url)
    }
  }
}
</script>
<style scoped>
.text-center{
  text-align: center;
}
.passBox{
    padding: 0 1rem;
}
</style>

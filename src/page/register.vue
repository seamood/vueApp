<template>
  <div>
    <ul class="headTab">
        <li><i class="el-icon-arrow-left" @click="back"></i></li>
        <li>注册</li>
        <li></li>
    </ul>
    <div class="content">
        <v-from :inintData='inintForm' v-on:submitForm='submitForm' v-on:onyzm='getyzm'></v-from>
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
    var passyz = (rule, value, callback) => {
      if (!/^[a-zA-Z0-9]{8,12}$/.test(value)) {
        callback(new Error('8-12 位数字+字母组合，请重填'))
      } else {
        callback()
      }
    }
    return {
      account: '',
      inintForm: {
        fromData: [
          // {
          //   type: 'input',
          //   paramter: 'nickname',
          //   name: '昵称：',
          //   value: '',
          //   placrholder: '请输入...',
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // },
          // {
          //   type: 'input',
          //   paramter: 'name',
          //   name: '姓名：',
          //   value: '',
          //   placrholder: '请输入...',
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // },
          // {
          //   type: 'input',
          //   paramter: 'IdNumber',
          //   name: '身份证号：',
          //   value: '',
          //   placrholder: '请输入...',
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // },
          {
            type: 'input',
            paramter: 'account',
            name: '电话：',
            value: '',
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
            type: 'input',
            paramter: 'checkCode',
            name: '短信验证',
            value: '',
            yzm: true,
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          // {
          //   type: 'upImg',
          //   paramter: 'file',
          //   name: '头像：',
          //   value: '',
          //   file: '',
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // },
          {
            type: 'input',
            paramter: 'pwd',
            name: '密码：',
            value: '',
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' },
              {
                validator: passyz,
                message: '8-12 位数字+字母组合，请重填',
                trigger: 'blur'
              }
            ]
          },
          // {
          //   type: 'upImg',
          //   paramter: 'docFile',
          //   name: '医生执业证明：',
          //   value: '',
          //   file: '',
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // },
          // {
          //   type: 'upImg',
          //   paramter: 'jobFile',
          //   name: '职称证书：',
          //   value: '',
          //   file: '',
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // },
          // {
          //   type: 'upImg',
          //   paramter: 'studyFile',
          //   name: '医生工牌：',
          //   value: '',
          //   file: '',
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // }
        ],
        btn: {
          succeed: '注册',
          reset: '重置'
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    submitForm (data) {
      console.log(data)
        var data = JSON.parse(data)
        jsajx(
          '',
          "post",
          "/doctor/account/register.json",
          data,
          res => {
            res = JSON.parse(res)
            const data = res.data || []
            console.log(data)
            if (res.status === 200) {
              // 请求成功
              this.$message({
                message: '注册成功',
                type: 'success'
              })
              localStorage.useAccount = data.account
              this.$router.push('/login')
            } else {
              this.$message.error(res.msg || '注册失败')
            }
        })

    },
    back () {
        window.history.back(-1)
    },
    getyzm (account) {
      console.log(account)
      if (account) {
        var paramData = {
          'account': account
        }
        paramData = JSON.stringify(paramData)
        jsajx(
          '',
          "post",
          "/doctor/account/getregisterck.json",
          paramData,
          res => {
            res = JSON.parse(res)
            const data = res.data || []
            console.log(data)
            if (res.status === 200) {
              // 请求成功
              this.$message({
                message: '发送成功！',
                type: 'success'
              });
            }
        })
      }
    }
  }
}
</script>
<style scoped>
.text-center{
  text-align: center;
}
</style>

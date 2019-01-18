<template>
  <div>
    <P class="text-center">用户登录</P>
    <v-from :inintData='inintForm' v-on:submitForm='submitForm'></v-from>
    <div class="passBox">
        <el-button type="text" style="float: right" @click="skipWeb('/register')">注册</el-button>
        <el-button type="text" style="float: left" @click="skipWeb('/forgetPass')">忘记密码</el-button>
    </div>
  </div>
</template>
<script>
import vfrom from '../components/from'
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
    return {
      inintForm: {
        fromData: [
           {
            type: 'input',
            paramter: 'phone',
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
            paramter: 'pass',
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
    // jsajx('json', 'get', '/admin/role/getrolekv.json', '', res => {
    //   res = JSON.parse(res)
    //   res.data.forEach(element => {
    //     element.value = element.id
    //   })
    //   this.inintForm.fromData[4].option = res.data || []
    // })
  },
  methods: {
    submitForm (data) {
      console.log(data)
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

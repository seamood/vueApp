<template>
  <div>
    <ul class="headTab">
        <li><i class="el-icon-arrow-left" @click="back"></i></li>
        <li>注册</li>
        <li></li>
    </ul>
    <div class="content">
        <v-from :inintData='inintForm' v-on:submitForm='submitForm'></v-from>
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
    var passyz = (rule, value, callback) => {
      if (!/^[a-zA-Z0-9]{8,12}$/.test(value)) {
        callback(new Error('8-12 位数字+字母组合，请重填'))
      } else {
        callback()
      }
    }
    return {
      inintForm: {
        fromData: [
          {
            type: 'input',
            paramter: 'nickname',
            name: '昵称：',
            value: '',
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          {
            type: 'input',
            paramter: 'name',
            name: '姓名：',
            value: '',
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          {
            type: 'input',
            paramter: 'IdNumber',
            name: '身份证号：',
            value: '',
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
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
            paramter: 'phoneyz',
            name: '短信验证',
            value: '',
            yzm: true,
            placrholder: '请输入...',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          {
            type: 'upImg',
            paramter: 'file',
            name: '头像：',
            value: '',
            file: '',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          {
            type: 'input',
            paramter: 'pass',
            name: '密码：',
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
            type: 'upImg',
            paramter: 'docFile',
            name: '医生执业证明：',
            value: '',
            file: '',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          {
            type: 'upImg',
            paramter: 'jobFile',
            name: '职称证书：',
            value: '',
            file: '',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          {
            type: 'upImg',
            paramter: 'studyFile',
            name: '医生工牌：',
            value: '',
            file: '',
            rules: [
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          }
        ],
        btn: {
          succeed: '注册',
          reset: '重置'
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
    back () {
        window.history.back(-1);
    }
  }
}
</script>
<style scoped>
.text-center{
  text-align: center;
}
</style>

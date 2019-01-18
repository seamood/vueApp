<template>
  <div>
    <v-from :inintData='inintForm' v-on:submitForm='submitForm'></v-from>
  </div>
</template>
<script>
import vfrom from './from'
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
              { required: true, message: '此处不能为空', trigger: 'blur' }
            ]
          },
          // {
          //   type: 'select',
          //   multiple: true,
          //   paramter: 'name',
          //   name: '角色：',
          //   value: [],
          //   option: [],
          //   rules: [
          //     {
          //       type: 'array',
          //       required: true,
          //       message: '此处不能为空',
          //       trigger: 'change'
          //     }
          //   ]
          // },
          // {
          //   type: 'treeSelect',
          //   paramter: 'name',
          //   name: '部门：',
          //   value: '',
          //   option: [],
          //   rules: [
          //     { required: true, message: '此处不能为空', trigger: 'blur' }
          //   ]
          // },
          {
            type: 'slideButton',
            paramter: 'isIf',
            name: '是否启用',
            value: true
          }
        ]
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
    }
  }
}
</script>

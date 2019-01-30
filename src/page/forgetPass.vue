<template>
    <div class="box">
       <ul class="headTab">
           <li><i class="el-icon-arrow-left" @click="back"></i></li>
           <li>找回密码</li>
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.inintForm.fromData[1].value) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var passyz = (rule, value, callback) => {
        if (!/^[a-zA-Z0-9]{8,12}$/.test(value)) {
            callback(new Error('8-12 位数字+字母组合，请重填'))
        } else {
            callback()
        }
     }
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
                    type: 'passBox',
                    paramter: 'newPwd',
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
                {
                    type: 'passBox',
                    paramter: 'resPass',
                    name: '确认密码：',
                    value: '',
                    placrholder: '请输入...',
                    rules: [
                        { required: true, message: '此处不能为空', trigger: 'blur' },
                        {
                            validator: validatePass2,
                            message: '两次输入密码不一致！',
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
                }
            ],
            btn: {
                succeed: '确定',
                reset: '重置'
            }
        }
    }
    },
    methods: {
        back () {
            window.history.back(-1);
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
                "/doctor/account/getforgotpwdck.json",
                paramData,
                res => {
                    res = JSON.parse(res)
                    const data = res.data || []
                    if (res.status === 200) {
                        // 请求成功
                        this.$message({
                            message: res.msg || '发送成功',
                            type: 'success'
                        });
                    }
                })
            }
        },
        submitForm (data) {
            console.log(data)
            // var data = JSON.parse(data)
            jsajx(
            '',
            "post",
            "/doctor/account/nologinupdateaccountpwd.json",
            data,
            res => {
                res = JSON.parse(res)
                const data = res.data || []
                console.log(data)
                if (res.status === 200) {
                    // 请求成功
                    this.$message({
                        message: '更改密码',
                        type: 'success'
                    })
                    localStorage.useAccount = data.account
                    this.$router.push('/login')
                } else {
                    this.$message.error(res.msg || '更改密码失败')
                }
            })

        }
    }
}
</script>

<style scoped>

</style>


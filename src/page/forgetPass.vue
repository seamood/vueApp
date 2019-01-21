<template>
    <div class="box">
       <ul class="headTab">
           <li><i class="el-icon-arrow-left" @click="back"></i></li>
           <li>找回密码</li>
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.inintForm.fromData[1].value) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            inintForm: {
                fromData: [
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
                        type: 'passBox',
                        paramter: 'newPass',
                        name: '密码：',
                        value: '',
                        placrholder: '请输入...',
                        rules: [
                            { required: true, message: '此处不能为空', trigger: 'blur' }
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
                    }
                ],
                btn: {
                    succeed: '注册',
                    reset: '重置'
                }
            }
        }
    },
    methods: {
        back () {
            window.history.back(-1);
        }
    }
}
</script>

<style scoped>

</style>


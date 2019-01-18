<template>
  <div>
    <el-form ref='inintData' :model="inintData" v-if="true" label-width="100px">
      <div v-for="(item, index) of inintData.fromData" :key="index">
        <el-form-item :label="item.name" :prop="'fromData.' + index + '.value'" :rules="item.rules">
          <div v-if="item.type == 'input'">
            <el-input v-model="item.value" :placeholder="item.placeholder"></el-input>
          </div>
          <div v-if="item.type == 'select'">
            <el-select v-model="item.value" :multiple='item.multiple' >
              <el-option
                v-for="(item, index) in item.option"
                :key="index"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div v-if="item.type == 'slideButton'">
            <el-switch v-model="item.value"></el-switch>
          </div>
          <div v-if="item.type == 'checkbox'">
            <el-checkbox-group v-model="item.value">
              <el-checkbox v-for="key of item.option" :key="key" :label="key" :name="item.btnType"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div v-if="item.type == 'radio'">
            <el-radio-group v-model="item.value">
              <el-radio v-for="key of item.option" :key="key" :label="key"></el-radio>
            </el-radio-group>
          </div>
          <div v-if="item.type == 'textread'">
            <el-input type="textarea" v-model="item.value"></el-input>
          </div>
          <div v-if="item.type == 'upImg'">
            <label >
              <input type="file" name="fileUpload" @change="upimg($event, item)" hidden>
              <img v-if="item.value" :src="item.value" alt="图片不存在" class="imgstyle">
              <i v-if="item.value">修改</i>
              <i v-else>新增</i>
            </label>
          </div>
          <div v-if="item.type == 'treeSelect'" class="box-department">
              <el-input v-model="item.value.name" :placeholder="item.placeholder" readonly></el-input>
              <div class='department'>
                <v-departed v-on:clickRow='clickRow($event,item)'></v-departed>
              </div>
          </div>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('inintData')">立即创建</el-button>
        <el-button @click="resetForm('inintData')">重置</el-button>
      </el-form-item>
    </el-form>
    <div v-else class="emptybox">
        <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
import vdeparted from './departed'
export default {
  props: ['inintData'],
  components: {
    'v-departed': vdeparted
  },
  data () {
    return {
      from: {
        fromData: [
          { 
            type: 'input',
            parameter: 'name',
            name: '电话号码：',
            value: '',
            placeholder: '请输入...',
            rules: [
              { required: true, message: '请输入电话号码', trigger: 'blur' }
            ]
          },
          {
            type: 'select',
            parameter: 'name',
            name: '下拉框',
            value: '',
            placeholder: '请选择...',
            option: [
              { name: 'select1', value: '1' },
              { name: 'select2', value: '2' },
              { name: 'select3', value: '3' }
            ]
          },
          {
            type: 'slideButton',
            parameter: 'name',
            name: '按钮一',
            value: true
          },
          {
            type: 'checkbox',
            parameter: 'name',
            name: '复选框',
            btnType: 'city',
            value: [],
            option: ['cheked1', 'cheked2', 'cheked3']
          },
          {
            type: 'radio',
            parameter: 'name',
            name: '单选框',
            btnType: 'name',
            value: [],
            option: ['备选一', '备选二', '备选三']
          },
          {
            type: 'textread',
            parameter: 'name',
            name: '多选文本框',
            value: ''
          },
          {
            type: 'upImg',
            parameter: 'name',
            name: '图片上传',
            file: '',
            value: ''
          },
          {
            type: 'treeSelect',
            parameter: 'name',
            name: 'treeSelect',
            placeholder: '请输入...',
            value: ''
          }
        ]
      }
    }
  },
  mounted () {
    this.from = this.inintData || this.from.fromData
  },
  methods: {
    //   获取图片的内容
    upimg (data, param) {
      const file = data.target.files[0]
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/gif'
      const isLt2M = file.size / 1024 / 1024 < 2
      param.value = window.URL.createObjectURL(file)
      param.file = file
    },
    // 下拉树的值
    clickRow (data, param) {
      // console.log(data, param)
      param.value = data
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const data = this.formatting(this.from.fromData)
          this.$emit('submitForm', data)
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    resetForm (formName) {
      // this.$refs[formName].resetFields()
      console.log(this.from)
      // console.log(this.inintData)
    },
    formatting (formName) {
      var json = {}
      formName.forEach(element => {
        if (Array.isArray(element.value)) {
          json[element.paramter] = element.value.join(',')
        } else {
          if (element.type === "upImg") {
            json[element.paramter] = element.file
          } else {
            json[element.paramter] = element.value
          }
        }
      })
      json = JSON.stringify(json)
      console.log(json)
      return json
    }
  }
}
</script>
<style scoped>
.el-form-item {
  margin-bottom: 22px !important;
}
.imgstyle{
  width: 3rem;
  /* vertical-align: middle; */
}
.emptybox{
    text-align: center;
    padding: .5rem;
}
.department{
  display: none
}
.box-department:hover .department {
  display: block
}
</style>

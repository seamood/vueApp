<template>
  <div class="box">
    <div class="box-left" :style="leftStyle">
      <ul class="inforBox">
        <li><img src="./imge/288535-106.jpg" alt="" class="portrait"> <span>昵称</span></li>
        <li><span>姓名：</span><span>真名</span></li>
        <li><span>省份证号：</span><span>12365447889652152</span></li>
        <li><span>职称：</span><span>XXX</span></li>
        <li><span>教育背景：</span><span>XXXX</span></li>
        <li><span>医院：</span><span>XXXX</span></li>
        <li><span>科室：</span><span>XXXX</span></li>
        <li><span>手机号：</span><span>123654488522</span></li>
      </ul>
      <div class="toolBox">
        <el-button type="text" @click="skipWeb('/set')">设置</el-button>
        <el-button type="text">退出账号</el-button>
      </div>
    </div>
    <div class="box-right" :style="rightStyle">
      <ul class="headTab">
            <li><i class="fa fa-align-justify" @click="closeToggle"></i></li>
            <li class="title">首页</li>
            <li></li>
        </ul>
      <div class="conent">
          
      </div>
      <div class="bottom-box">
        <ul class="flex-box">
          <li>在线接诊</li>
          <li>医生收益</li>
          <li>专家讲堂</li>
          <li>医生课堂</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import vfrom from './from'
export default {
  components: {
    'v-from': vfrom
  },
  data () {
    return {
      leftStyle: {width: 0},
      rightStyle: {flex: 1},
      leafP: false
    }
  },
  mounted () {
  },
  methods: {
    submitForm (data) {
      console.log(data)
    },
    closeToggle () {
      this.leafP = !this.leafP
      if (this.leafP) {
         this.leftStyle = {
           flex: 1
         }
         this.rightStyle = {
           width: '100px'
         }
      } else {
         this.leftStyle = {
           width: 0
         }
         this.rightStyle = {
           flex:1
         }
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
.box{
  display: flex;
}
.box .box-left, .box .box-right{
  transition:width 2s;
  -webkit-transition:width 2s; /* Safari */
  overflow: hidden;
}
.box .box-left{
  padding: 30px  0 0 0;
}
.box .box-right {
  box-shadow: -4px 0 12px #ccc;
}
.title{
  white-space: nowrap;
}
.portrait{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.inforBox li:first-child {
  border-bottom: 0;
  padding-bottom: 20px;
}
.inforBox li{
  list-style: none;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.flex-box {
  display: flex;
}
.flex-box li {
  list-style: none;
  flex: 1;
  text-align: center;
  padding: 10px 0;
}
.bottom-box {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

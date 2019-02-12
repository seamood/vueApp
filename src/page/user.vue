<template>
    <div class="box">
      <ul class="headTab">
            <li class="left"><i class="el-icon-arrow-left" @click="back"></i></li>
            <li class="mid">我的</li>
            <li class="right"></li>
     </ul>
      <ul class="inforBox">
        <li><img src="../components/imge/288535-106.jpg" alt="" class="portrait"> <span>昵称</span></li>
        <li><span>姓名：</span><span>真名</span> <i class="el-icon-arrow-right"></i></li>
        <li><span>省份证号：</span><span>12365447889652152</span> <i class="el-icon-arrow-right"></i></li>
        <li><span>职称：</span><span>XXX</span> <i class="el-icon-arrow-right"></i></li>
        <li><span>教育背景：</span><span>XXXX</span> <i class="el-icon-arrow-right"></i></li>
        <li><span>医院：</span><span>XXXX</span> <i class="el-icon-arrow-right"></i></li>
        <li><span>科室：</span><span>XXXX</span> <i class="el-icon-arrow-right"></i></li>
        <li><span>手机号：</span><span>123654488522</span> <i class="el-icon-arrow-right"></i></li>
      </ul>
      <div class="toolBox">
        <el-button type="text" @click="skipWeb('/set')">设置</el-button>
        <el-button type="text" @click="loginOut">退出登录</el-button>
      </div>
    </div>
</template>
<script>
export default {
    methods: {
        skipWeb (url) {
            this.$router.push(url)
        },
        loginOut () {
            const _this = this;
            this.$confirm('确认退出吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: false
                }).then(() => {
                jsajx(
                    '',
                    "get",
                    "/doctor/account/logout.json",
                    '',
                    res => {
                    res = JSON.parse(res)
                    const data = res.data || []
                    console.log(data)
                    if (res.status === 200) {
                        // 请求成功
                        localStorage.setItem('login', false)
                        localStorage.removeItem('token')
                        this.$router.push('/login')
                    } else {
                        this.$message.error(res.msg || '注册失败')
                    }
                })
                
                }).catch(() => {

                });
        },
        back () {
            window.history.back(-1);
        }
    }
}
</script>
<style scoped>
.portrait{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.inforBox li {
    border-bottom: 1px solid #ccc;
    padding: 6px;
}
.el-icon-arrow-right{
    float: right;
}
</style>


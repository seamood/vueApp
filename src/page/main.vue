<template>
   <div>
        <!-- <ul class="headTab">
            <li><i class="fa fa-align-justify" @click="closeToggle"></i></li>
            <li class="title">首页</li>
            <li></li>
        </ul> -->
        <router-view/>
        <div class="bottom-box">
            <ul class="flex-box">
                <li @click="skipWeb('/onlineAccepts')">在线接诊</li>
                <li @click="skipWeb('/inforRelease')">资讯发布</li>
                <li @click="skipWeb('/doctorClass')">收益管理</li>
                <li @click="skipWeb('/doctorReturns')">专家讲堂</li>
                <li @click="skipWeb('/classroom')">医生课堂</li>
            </ul>
        </div>
   </div>
</template>
<script>
export default {
    methods: {
        skipWeb (url) {
            this.$router.push(url)
        }
    }
}
</script>

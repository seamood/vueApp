<template>
    <div>
        <ul class="headTab">
            <li><i class="el-icon-arrow-left" @click="back"></i></li>
            <li class="title">资讯发布</li>
            <li></li>
        </ul>
        <div class="centent">
            <ul class="chat-box">
                <li>
                    <div class="message-boxleft">
                        <img src="../components/imge/288535-106.jpg" alt="" class="headPortrait">
                        <div class="informationbox">information</div>
                    </div>
                    <!-- <div class="message-boxright">
                        <div class="informationbox">information</div>
                        <img src="../components/imge/288535-106.jpg" alt="" class="headPortrait">
                    </div> -->
                </li>
            </ul>
            <div>
                <el-input  autosize placeholder="请输入内容" v-model="textarea2">
                    <el-button type="primary" slot="append">发送</el-button>
                </el-input>
                 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        back () {
            window.history.back(-1);
        }
    }
}
</script>
<style scoped>
.chat-box{
    background-color: rgba(0, 0, 0, 0.06);
    height: 100px;
}
.chat-box li {
    margin-bottom: 8px;
}
.message-boxleft{
    display: flex;
    float: left;
}
.message-boxright{
    display: flex;
    float: right;
}
.message-boxleft .informationbox{
    position: relative;
    top: 4px;
    background-color: #fff;
    z-index: 11;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 4px;
    margin-left: 8px;
}
.message-boxleft .informationbox::before{
    content: '';
    width: 0;
    height: 0;
    border: 6px solid #ccc;
    border-left: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-radius: 2px;
    position: absolute;
    left: -12px;
    top: 0px;
}
.message-boxright .informationbox{
    position: relative;
    top: 4px;
    background-color: #fff;
    z-index: 11;
    border: 1px solid #ccc;
    padding: 6px;
    border-radius: 4px;
    margin-right: 8px;
}
.message-boxright .informationbox::before{
    content: '';
    width: 0;
    height: 0;
    border: 6px solid #ccc;
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-radius: 2px;
    position: absolute;
    right: -12px;
    top: 0px;
}
</style>

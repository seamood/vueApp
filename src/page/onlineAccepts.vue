<template>
    <div>
        <ul class="headTab">
            <li><i class="el-icon-arrow-left" @click="back"></i></li>
            <li class="title">在线接诊</li>
            <li></li>
        </ul>
        <div class="conent">
            <table class="apptable" cellpadding='0' cellspacing='0'>
                <tr>
                    <td>时间</td>
                    <td>列表</td>
                    <td>操作</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>列表</td>
                    <td>
                        <button>接单</button>
                        <button>回复</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="bottom-box">
            <ul class="flex-box">
                <li>在线接诊</li>
                <li>服务记录</li>
                <li>病历填写</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
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
.apptable{
    width: 100%;
    border: 1px solid #ccc;
}
.apptable td {
    border: 1px solid #ccc;
    border-left: 0;
    border-top: 0;
    padding: 5px;
    text-align: center;
    font-size: 10px;
}
</style>


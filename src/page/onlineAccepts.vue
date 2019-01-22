<template>
    <div>
        <ul class="headTab">
            <li><i class="el-icon-arrow-left" @click="back"></i></li>
            <li class="title">在线接诊</li>
            <li></li>
        </ul>
        <p>在线接诊</p>
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

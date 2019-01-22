<template>
    <div>
        <ul class="headTab">
            <li><i class="el-icon-arrow-left" @click="back"></i></li>
            <li class="title">医生收益</li>
            <li></li>
        </ul>
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
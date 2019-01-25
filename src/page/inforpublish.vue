<template>
    <div>
        <ul class="headTab">
            <li><i class="el-icon-arrow-left" @click="back"></i></li>
            <li class="title">资讯发布</li>
            <li class="text-left"><i class="el-icon-plus"></i></li>
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


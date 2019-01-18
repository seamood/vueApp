<template>
    <div class="box">
       <ul class="headTab">
           <li><i class="el-icon-arrow-left" @click="back"></i></li>
           <li>找回密码</li>
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

<style scoped>

</style>


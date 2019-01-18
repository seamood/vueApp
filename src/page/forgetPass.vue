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
.headTab{
    display: flex;
    padding: 5px 3px;
    background-color: lightcoral;
}
.headTab li {
    list-style: none;
    flex: 1
}
</style>


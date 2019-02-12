<template>
   <div>
        <router-view/>
        <div class="bottom-box">
            <ul class="flex-box">
                <li v-for="(item,index) of bottomNav" :key='index' @click="skipWeb(bottomNav,item)" :class="[item.selected ? item.activeClass: item.calss]">
                <div><i :class='item.icon'></i></div>
                <div><span>{{item.title}}</span></div>
                </li>
            </ul>
        </div>
   </div>
</template>
<script>
import {comSelect} from '@/assets/js/common'
export default {
    data(){
        return {
            bottomNav: [
                {
                    url: '/',
                    icon: 'fa fa-home fa-2x',
                    title: '主页',
                    activeClass: 'active',
                    calss: '',
                    selected: true
                },
                {
                    url: '/onlineAccepts',
                    icon: 'fa fa-commenting fa-2x',
                    title: '在线接诊',
                    activeClass: 'active',
                    calss: '',
                    selected: false
                },
                {
                    url: '/inforRelease',
                    icon: 'fa fa-comment-o fa-2x',
                    title: '资讯发布',
                    activeClass: 'active',
                    calss: '',
                    selected: false
                },
                {
                    url: '/doctorReturns',
                    icon: 'fa fa-desktop fa-2x',
                    title: '收益管理',
                    activeClass: 'active',
                    calss: '',
                    selected: false
                },
                {
                    url: '/classroom',
                    icon: 'fa fa-group fa-2x',
                    title: '专家讲堂',
                    activeClass: 'active',
                    calss: '',
                    selected: false
                },
                {
                    url: '/doctorClass',
                    icon: 'fa fa-video-camera fa-2x',
                    title: '医生课堂',
                    activeClass: 'active',
                    calss: '',
                    selected: false
                },
                // {
                //     url: '/user',
                //     icon: 'fa fa-user fa-2x',
                //     title: '我的',
                //     activeClass: 'active',
                //     calss: '',
                //     selected: false
                // }
            ]
        }
    },
    methods: {
        skipWeb (data,parm) {
            const url = parm.url
            const title = parm.title
            this.$router.push(url)
            this.comSelect('title',data,title)
        },
        comSelect
    }
}
</script>
<style scoped>

</style>


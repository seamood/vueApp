<template>
    <div>
        <ul class="headTab">
            <li class="left"><i class="el-icon-arrow-left" @click="back"></i></li>
            <li class="mid">资讯发布</li>
            <li class="right"><i class="el-icon-plus"></i></li>
        </ul>
        <div class="centent">
            <ul class="chat-box">
                <li class="item_me">
                    <div class="chatContent">你好?
                        <span class="bot"></span>
                        <span class="top"></span>
                    </div>
                    <div class="avatar">
                        <img src="../components/imge/288535-106.jpg" alt="">
                    </div>
                </li>
                <li class="item_you">
                    <div class="avatar">
                        <img src="../components/imge/288535-106.jpg" alt="">
                    </div>
                    <div class="chatContent">奔跑吧，兄弟！
                        <div id="imgebox"></div>
                        <span class="bot"></span>
                        <span class="top"></span>
                    </div>

                </li>
            </ul>
            <div>
                <footer id="footer">
                    <div id="keyboard">
                        <i class="material-icons">
                            <!--1-->
                        </i>
                    </div>
                    <div id="sayBtn">
                        <el-input  placeholder="请输入内容" v-model="textarea2"></el-input>
                        <!-- <span id="sendBtn" class="sendBtn">按下 说话</span> -->
                    </div>
                    <div id="icon">
                        <span class="btn" v-if="textarea2">发送</span>
                        <i class="el-icon-plus addbutton" v-else @click="closeToggle()"></i>
                    </div>
                    <!-- <div id="add">
                        
                    </div> -->
                </footer>
                <!-- <el-input  autosize placeholder="请输入内容" v-model="textarea2">
                    <el-button type="primary" slot="append">发送</el-button>
                    <el-button slot="append" @click="closeToggle()" class="el-icon-plus addbutton"></el-button>
                </el-input> -->
                <div class="toolBox" v-if="this.leafP" :style="leftStyle">
                    <label for="luyin">
                        <div class="btnBox">
                            <div class="btnIcon">
                                <i class="fa fa-microphone" ></i>
                            </div>
                            <p>录音</p>
                        </div>
                        <input type="file" id="luyin" accept="audio/*" capture='microphone' @change="fileaudio($event)" hidden>
                    </label>
                    <label for="imges">
                        <div class="btnBox">
                            <div class="btnIcon">
                                <i class="fa fa-photo" ></i>
                            </div>
                            <p>相册</p>
                        </div>
                        <input type="file" id="imges" accept="image/*"  hidden multiple>
                    </label>
                    <label for="pz">
                        <div class="btnBox">
                            <div class="btnIcon">
                                <i class="fa fa-camera" ></i>
                            </div>
                            <p>照相</p>
                        </div>
                        <input type="file" id="pz" accept="image/*" capture='camera' hidden @change="pzimge($event)">
                    </label>
                    <label for="video">
                        <div class="btnBox">
                            <div class="btnIcon">
                                <i class="fa fa-video-camera" ></i>
                            </div>
                            <p>摄像</p>
                        </div>
                        <input type="file" id="video" accept="video/*" capture='camcorder' @change="getvideo($event)" hidden>
                    </label>
                </div>
            </div>
        </div>
        <div class="bottom-box">
        <ul class="flex-box">
          <li>全部</li>
          <li>我的</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            textarea2: '',
            leafP: false,
            leftStyle: ''
        }
    },
    methods: {
        back () {
            window.history.back(-1);
        }, 
        closeToggle () {
            this.leafP = !this.leafP
            if (this.leafP) {
                this.leftStyle = {
                height: '100px'
                }
            } else {
                this.leftStyle = {
                height: 0
                }
            }
        },
        pzimge (that) {
            console.log(1)
            var fileReader = new FileReader()
            if (typeof fileReader == 'undefined') {
                tip('您的浏览器不支持fileReader!')
            }
            var imgebox = document.getElementById('imgebox')
            var file = that.target.files[0]
            var files = []
            if (file) {
                var _img = new Image();
		        fileReader.onload = function () {  //显示用户所选的缩略图          
		            _img.src = this.result;
		            if( _img.style.width  > _img.style.height){
		                _img.style.width = '100px';
		                _img.style.height = 'auto';
		            }else{
		                _img.style.height = '100px';
		                _img.style.width = 'auto';
		            }
		            imgebox.append(_img);
		            console.log(1)
		        }
		        fileReader.readAsDataURL(file); //获取api异步读取的文件数据
		        
//		        fileSelect[0].style.display = 'none';
				files.push(file);
		    	var formData = new FormData();    
		        formData.append("file", files);
		        console.log(files)
            }

        },
        fileaudio (that) {
             console.log(that)
            var fileReader = new FileReader()
            if (typeof fileReader == 'undefined') {
                tip('您的浏览器不支持fileReader!')
            }
            var imgebox = document.getElementById('imgebox')
            var file = that.target.files[0]
            var files = []
            if (file) {
                var _audio = new Audio()
                _audio.controls = true  //这样控件才能显示出来
                // _audio.src = 'xxxxx'  //音乐的路径
		        fileReader.onload = function () {  //显示用户所选的缩略图          
		            _audio.src = this.result;
		            imgebox.append(_audio);
		        }
		        fileReader.readAsDataURL(file); //获取api异步读取的文件数据
		        
//		        fileSelect[0].style.display = 'none';
				files.push(file);
		    	var formData = new FormData();    
		        formData.append("file", files);
		        console.log(files)
            }
        },
        getvideo(that) {
            console.log(that)
            var fileReader = new FileReader()
            if (typeof fileReader == 'undefined') {
                tip('您的浏览器不支持fileReader!')
            }
            var imgebox = document.getElementById('imgebox')
            var file = that.target.files[0]
            var files = []
            if (file) {
                var _video = document.createElement('video')
                _video.controls = true  //这样控件才能显示出来
                // _audio.src = 'xxxxx'  //音乐的路径
                _video.style.height = '200px'
		        fileReader.onload = function () {  //显示用户所选的缩略图          
                    // _video.src = this.result;
                    // console.log(window.URL.createObjectURL(file))
                   _video.src = window.URL.createObjectURL(file)
		            imgebox.append(_video);
		        }
		        fileReader.readAsDataURL(file); //获取api异步读取的文件数据
		        
//		        fileSelect[0].style.display = 'none';
				files.push(file);
		    	var formData = new FormData();    
		        formData.append("file", files);
		        console.log(files)
            }
        }
    }
}
</script>
<style scoped>
@import url(../components/css/chat);
.chat-box{
    background-color: rgba(0, 0, 0, 0.06);
    min-height: 100px;
}
.chat-box li {
    padding: 8px;
}
.message-boxleft{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
.message-boxright{
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
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
.text-left{
    text-align: right;
    padding-right: 6px;
    cursor: pointer;
}
.addbutton{
    border: 1px solid #ccc;
    border-radius: 50%;
}
.toolBox{
    height: 60px;
    border: 1px solid #ccc;
}
.btnBox{
    float: left;
}
.btnIcon{
    padding: 6px 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 6px;
}
.btnBox p{
    font-size: 7px;
    text-align: center;
}
</style>

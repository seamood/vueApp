<template>
    <div id="wrap">
        <header id="header">
            <div id="left">
                <i class="material-icons">
                    <!--chevron_left-->
                </i>
                微信(184)
            </div>
            <div id="mid">艾达·王</div>
            <div id="right">
                <i class="material-icons">
                    <!--more_horiz-->
                </i>
            </div>
        </header>
        <div id="contentWrap">
            <ul id="chatList">
                <li class="item_me">
                    <div class="chatContent">你好?
                        <span class="bot"></span>
                        <span class="top"></span>
                    </div>
                    <div class="avatar">
                        <img src="img/288535-106.jpg" alt="">
                    </div>
                </li>
                <li class="item_you">
                    <div class="avatar">
                        <img src="img/288535-106.jpg" alt="">
                    </div>
                    <div class="chatContent">奔跑吧，兄弟！（滚犊子）
                        <span class="bot"></span>
                        <span class="top"></span>
                    </div>

                </li>
               <li>
               	 <a href="video/video2.html"> video2</a>
               </li>
            </ul>
            <video id="video"></video>
        </div>
        <footer id="footer">
            <div id="keyboard">
                <i class="material-icons">
                    <!--1-->
                </i>
            </div>
            <div id="sayBtn">
                <span id="sendBtn" class="sendBtn">按下 说话</span>
            </div>
            <div id="icon"><i class="material-icons">
                    <!--2-->
                </i></div>
            <div id="add"><i class="material-icons">
                    <!--3-->
                </i></div>
        </footer>
    </div>
</template>
<style scoped>
@import url(../components/css/chat);
</style>

<script>
export default {
    mounted () {
         document.addEventListener('DOMContentLoaded', function () {
            var oSendBtn = document.getElementById('sendBtn');
            var soundClips = document.querySelector('.sound-clips');
            var mediaRecorder;
            var oChatList = document.getElementById('chatList');
            navigator.getUserMedia = (
            	navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia);
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            	// constraints - only audio needed for this app
                navigator.mediaDevices.getUserMedia({
			                        audio: true
			                    })
                    // Success callback
                    .then(function (mediaStream) {
                        rec(mediaStream);
                    })

                    // Error callback
                    .catch(function (err) {
                    	console.log(err.name + ':' + err.message)
                    }
                    );
            } else {
            }
             function rec(stream) {
                mediaRecorder = new MediaRecorder(stream);
                oSendBtn.addEventListener('touchstart', function (ev) {
                    ev.preventDefault();
                    this.innerHTML = '松开 结束';
                    this.classList.add('activeBtn');
                    mediaRecorder.start();
                }, false);
                oSendBtn.addEventListener('touchend', function (ev) {
                    ev.preventDefault();
                    this.innerHTML = '按下 说话';
                    this.classList.remove('activeBtn');
                    mediaRecorder.stop();
                }, false);
                mediaRecorder.ondataavailable = function (e) {
                    var clipContainer = document.createElement('li');
                    var audio = document.createElement('audio');
                    clipContainer.classList.add('item_audio');
                    clipContainer.innerHTML = 
                    '<div class = "redDot"></div>'
                    +'<div class="chatContent">'
                    +'<i class="material-icons material-icons_wifi">wifi</i>'
                    +'<span class="bot"></span>'
                    +'<span class="top"></span>'
                    +'</div>'
                    +'<div class="avatar">'
                    +'<img src="images/ava1.png" alt="">'
                    +'</div>';
                    
                    audio.setAttribute('controls', '');
                    oChatList.appendChild(clipContainer);
                    var audioURL = window.URL.createObjectURL(e.data);
                    audio.src = audioURL;
                    oChatList.addEventListener('touchstart', function (ev) {
                        if (ev.srcElement.parentNode.className!== 'item_audio') return;
                        audio.play();
                        ev.srcElement.parentNode.removeChild(ev.srcElement.parentNode.children[0])
                    }, false);
                };
            }
        }, false);
    }
}
</script>

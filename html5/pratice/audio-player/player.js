const dataList = [
  { imgSrc: 'assets/images/1.jpg', musicSrc: './assets/musics/1.mp3', id: 0 , author: '不靠谱组合', name: '慢慢喜欢你'},
  { imgSrc: 'assets/images/2.jpg', musicSrc: './assets/musics/2.mp3', id: 1 , author: '不靠谱组合', name: '时钟'},
  { imgSrc: 'assets/images/3.jpg', musicSrc: './assets/musics/3.mp3', id: 2 , author: '崔天琪', name: '放过'},
  { imgSrc: 'assets/images/4.jpg', musicSrc: './assets/musics/4.mp3', id: 3 , author: '丁芙妮', name: '流着泪说分手'},
  { imgSrc: 'assets/images/5.jpg', musicSrc: './assets/musics/5.mp3', id: 4 , author: '董又霖', name: '一个人去巴黎'},
  { imgSrc: 'assets/images/6.jpg', musicSrc: './assets/musics/6.mp3', id: 5 , author: '焦迈奇', name: '赧然的贼'},
  { imgSrc: 'assets/images/6.jpg', musicSrc: './assets/musics/7.mp3', id: 6 , author: '焦迈奇', name: '你的晚安是想让我闭嘴吧'},
  { imgSrc: 'assets/images/7.jpg', musicSrc: './assets/musics/8.mp3', id: 7 , author: '焦迈奇', name: '咸鱼remix倔强'},
  { imgSrc: 'assets/images/8.jpg', musicSrc: './assets/musics/9.mp3', id: 8 , author: '郁欢', name: '可最后'},
  { imgSrc: 'assets/images/9.jpg', musicSrc: './assets/musics/10.mp3', id: 9 , author: 'Jason Chen', name: '以后别做朋友'}
]

var music = document.querySelector("#music");
var prev = document.querySelector("#prev");
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var next = document.querySelector("#next");
var mute = document.querySelector("#mute");
var unmute = document.querySelector("#unmute");
var img = document.querySelector("#image");
var des = document.querySelector(".description");
var total = document.querySelector(".total");
var current = document.querySelector(".current");
var line = document.querySelector(".line");
var progress = document.querySelector(".progress");
var volume = document.querySelector(".volume");
var vulumenum = document.querySelector(".vulumenum");
var cur = 0;
var current_time;
var rotateVal = 0; // 旋转角度
var InterVal; // 定时器

// 歌曲结束时自动下一首
music.addEventListener("ended",function(){
  next.click();  
});

music.addEventListener("canplay", function () {
  // 获取歌曲总时间
  var total_time = music.duration;
  var min = parseInt(total_time%3600/60);
  var sec = parseInt(total_time%60);
  min = min >= 10 ? min : "0" + min;
	sec = sec >= 10 ? sec : "0" + sec;
  total.innerHTML = min + ":" + sec;

  // 获取歌曲音量
  var volume_width = music.volume*100 + "%";
  vulumenum.style.width = volume_width;

  // 调整音量
  volume.onclick = function(e){
    var percent = e.offsetX/this.getAttribute("width");
    vulumenum.style.width = percent*100 + "%";
    music.volume = percent;
  }
  // 点击静音
  unmute.onclick = function () {
    vulumenum.style.width = "0";
    music.volume = 0;  
    unmute.classList.add("yincang");
    mute.classList.remove("yincang")  
  }
  // 取消静音
  mute.onclick = function () {
    vulumenum.style.width = "100%";
    music.volume = 1;
    mute.classList.add("yincang");
    unmute.classList.remove("yincang")  
  }
  // 更新歌曲时间和进度条
  music.addEventListener("timeupdate",function(){
    //显示当前播放时间
    current_time=this.currentTime;
    var m=parseInt(current_time%3600/60);
    var s=parseInt(current_time%60);
    m=m>=10?m:"0"+m;
    s=s>=10?s:"0"+s;
    current.innerHTML = m + ":" + s;
    //显示当前播放进度条
    var new_width = current_time/total_time*100 + "%";
    line.style.width = new_width;
  });
  // 点击进度条跳播
  progress.onclick = function(e){
    var percent = e.offsetX/this.getAttribute("width");
    music.currentTime = percent * total_time;
    play.click();
  }
  // 播放按钮点击事件
  play.onclick=function(){
    music.play();
    rotate();
    play.classList.add("yincang");
    pause.classList.remove("yincang")
  }
  // 暂停按钮点击事件
  pause.onclick=function(){
    music.pause();
    clearInterval(InterVal);
    play.classList.remove("yincang");
    pause.classList.add("yincang")
  }
  // 上一首按钮点击事件
  prev.onclick=function(){
    if (cur === 0) {
      cur = 9;
    } else {
      cur--;
    }
    changeSong();
  }
  // 下一首按钮点击事件
  next.onclick=function(){
    if (cur === 9) {
      cur = 0;
    } else {
      cur++;
    }
    changeSong(); 
  }
});

function changeSong() {
  music.src = dataList[cur].musicSrc;
  des.innerHTML = dataList[cur].name + '&nbsp;-&nbsp;' + dataList[cur].author;
  img.src = dataList[cur].imgSrc;
  music.play();
  play.classList.add("yincang");
  pause.classList.remove("yincang");
}

function rotate() {
  InterVal = setInterval(function () {
    var img = document.querySelector("#image");
    rotateVal += 1
    // 设置旋转属性(顺时针)
    img.style.transform = 'rotate(' + rotateVal + 'deg)'
    // 设置旋转属性(逆时针)
    //img.style.transform = 'rotate(-' + rotateVal + 'deg)'
    // 设置旋转时的动画  匀速0.1s
    img.style.transition = '0.1s linear'
  }, 100)
}
/**
 * Created by Administrator on 2018\5\20 0020.
 */
var  otui=document.getElementById('tui');
var adingwei=otui.getElementsByTagName('img');
var oliebiao=document.getElementById('liebiao');
var axia=oliebiao.getElementsByTagName('li');
var now=0;
var ozong=document.getElementById('zong');
var timer;
for(var i=0;i<adingwei.length;i++){
    axia[i].index=i;
    axia[i].onmouseover=function () {
        now = (this.index);
      changeimg();
    }
}
var oanniu=document.getElementById('anniu');
var azuo=oanniu.getElementsByClassName('zuoo');
var ayou=oanniu.getElementsByClassName('right');
azuo[0].onclick=ayou[0].onclick=function () {
    if(this===azuo[0]){
        if(now==0){now=4}
        now--;
    }else{
        now++;
        if(now==4){now=0}
    }
    changeimg();
};
azuo[0].onselectstart=ayou[0].onselectstart=function () {
    return false;
};
function changeimg() {
    for(var i=0;i<adingwei.length;i++){
        adingwei[i].className='';
    }
    adingwei[now].className='dingwei';
}

ozong.onmouseover=function () {
    clearInterval(timer);
};
ozong.onmouseout=function () {
  play();
};
play();
function play() {
    timer=setInterval(function (){
        ayou[0].onclick()
    },1000)
}



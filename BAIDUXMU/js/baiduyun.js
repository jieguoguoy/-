//点击放大镜收起
var oImg=document.getElementById('img');
var oInp=document.getElementById('input');
var oForm=document.getElementById('form');
var aA=document.getElementsByClassName('a');
var width=20;
var timer;
oImg.onclick=function(){
	oForm.style.border="1px solid #fff";
	clearInterval(timer);
	timer=setInterval(function(){
		width+=10;
		if(width>170)
		{
			clearInterval(timer);
			oInp.style.display="block";
		}
		oForm.style.width=width+"px";
	},10);
	oInp.focus();
}

for(var j=0;j<aA.length;j++)
{
	aA[j].onmouseover=function(){
		oForm.style.border="none";
		oInp.style.display="none";
		if(width>20){
			clearInterval(timer);
			timer=setInterval(function(){
				width-=10;
				if(width<30)
				{
					clearInterval(timer);
				}
				oForm.style.width=width+"px";
			},10);
		}
	}
}

//倒计时
var aP=document.getElementsByClassName('p')[0];
var aSpan=aP.getElementsByTagName('span');

function time(){
	var today=new Date();
	var today1=new Date(2018,11,30,24,0,0);
	var t=Math.floor((today1-today)/1000);
	var tian=Math.floor(t/86400);
	var shi=Math.floor(t%86400/3600);
	var fen=Math.floor(t%86400%3600/60);
	var miao=Math.floor(t%60);
	tian=string(tian);
	shi=string(shi);
	fen=string(fen);
	miao=string(miao);
	var concat=tian+shi+fen+miao;
	for(var i=0;i<aSpan.length;i++)
	{
		aSpan[i].innerHTML=concat.charAt(i);
	}
}
setInterval(function(){time();},1000);

function string(num){
	if(num<10)
	{
		num='0'+num;
	}
	return num=num.toString();
}


//固定定位年度盛惠
var aShow=document.getElementsByClassName('show_hide')[0];
var aUl=document.getElementsByClassName('show-ul')[0];
var num=true;
aShow.onclick=function(){
	if(num){aUl.style.height="0px";num=false;}
	else{aUl.style.height="382px";num=true;}
}


//一键回到顶部
var aLtop=document.getElementsByClassName('li-top')[0];
var sun=0;
aLtop.onclick=function(){
	var aTop=document.documentElement.scrollTop;
	clearInterval(timer);
	timer=setInterval(function(){
		aTop-=100;
		if(aTop<=0)
		{
			document.documentElement.scrollTop=0;
			clearInterval(timer);
		}
		document.documentElement.scrollTop=aTop;
	},10)
}


//固定点击移动
var aDiv=document.getElementsByClassName('div');
var aLi=aUl.getElementsByTagName('li');
var Time;
for(var i=0;i<aLi.length-1;i++){
    aLi[i].index=i;
    aLi[i].onclick=function () {
        for(var i=0;i<aLi.length;i++){
           aLi[i].className="";
        }
        this.className="licur";
        var DTop=aDiv[this.index].offsetTop;
        clearInterval(Time);
        Time=setInterval(function () {
            f1(DTop)
        },5);
    }
}

function f1(dtop) {
	document.documentElement.scrollTop=document.documentElement.scrollTop+(dtop-document.documentElement.scrollTop)/10;
        if(document.documentElement.scrollTop-dtop<10&&document.documentElement.scrollTop-dtop>-10){
            document.documentElement.scrollTop=dtop;
            clearInterval(Time);
        }
    }

//返回顶部
var aDiv1=document.getElementsByClassName('div1')[0];
aLi[8].onclick=function () {
        for(var i=0;i<aLi.length;i++){
           aLi[i].className="";
        }
        this.className="licur";
        var DTop=aDiv1.offsetTop;
        clearInterval(Time);
        Time=setInterval(function () {
            f1(DTop)
        },10);
    }

//滚动条控制固定定位盒子的显示与隐藏
var aBar=document.getElementsByClassName('fixed-bar')[0];
var Two=document.getElementsByClassName('content1')[0];
var Top=document.getElementById('li-top');
window.onscroll=function(){
	var sum=document.documentElement.scrollTop;
	var sum1=Two.offsetTop;
	Dtop2(sum);
	if(sum<=sum1)
	{
		aBar.style.display="none";
		Top.style.display="none";
	}
	else{aBar.style.display="block";Top.style.display="block";}
}
//随滚动条而改变位置
function Dtop2(sum){
	for(var i=0;i<aLi.length-1;i++){
		if(aDiv[i].offsetTop-sum<20&&aDiv[i].offsetTop-sum>-20){
			for(var j=0;j<aLi.length;j++)
			{
				aLi[j].className="";
			}
            aLi[i].className="licur";
        }
	}
}

//滑过显示
var type=document.getElementsByClassName('nav-type3')[0];
var aH=type.getElementsByTagName('h3');
var content4=document.getElementsByClassName('nav-content3')[0];
var aLi1=content4.getElementsByClassName('li2');
for(var i=0;i<aH.length;i++)
{
	aH[i].index=i;
	aH[i].onmouseover=function(){
		var aH1=aH[this.index].getElementsByTagName('a')[0];
		for(var j=0;j<aLi1.length;j++)
		{
			var aHa=aH[j].getElementsByTagName('a')[0];
			aLi1[j].style.display="none";
			aHa.style="padding-left:0px;";
			aHa.style.color="#fff";
			aHa.style.opacity="0.6";
		}
		aLi1[this.index].style.display="block";
		aH1.style="padding-left:26px;";
		aH1.style.color="rgb(11,131,255)";
	}
}

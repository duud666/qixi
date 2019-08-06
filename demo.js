
	var i = 0;
	var str ="表白小王er同学：还记得骗我早上就走，那时候我才感受到是那么的喜欢你；车站离别挥手望着你，眼泪湿润了才感受到离开你就像失去了全世界一样。直男老哥不会说啥写个程序七夕送给你。傻狗子，记得你喜欢草莓干、酸李子、关东煮、鸡爪子；你的可爱、你的调皮、你的有趣、你的漂亮美丽，无论怎样我都会宠着你。（努力给你未来）";
	window.onload = function typing(){
		var mydiv = document.getElementById("display");
		mydiv.innerHTML += str.charAt(i);	
		i++;
		var id = setTimeout(typing,100);
		if(i==str.length){
			clearTimeout(id);
			mydiv.value ="";
			mydiv.innerHTML +=""
			document.getElementById("musicLoad").style.display = 'block'			
		}
	}
	var btn = document.getElementsByClassName("play")[0];//通过class类名去获取元素 数组的形式储存  []
	var myMusic = document.getElementById("myMusic");//通过ID
	var txt = document.getElementById("txt");//获取歌词
	var con = document.getElementsByClassName("content")[0];//获取内容区域
	var lrc = document.getElementsByClassName("lrc")[0];

	function changeColor(){
		var color="#f00|#0f0|#00f|#880|#808|#088|yellow|green|blue|gray";
		color=color.split("|");
		document.getElementsByClassName("singer")[0].style.color=color[parseInt(Math.random() * color.length)];
	}
	setInterval("changeColor()",200);

	//暂停播放
	document.getElementById("musicLoad").onclick = function(){
			audioPlay()
	};
	
	var audioPlay = function(){
		 alert('给你电脑置病毒了')
         alert('怕不怕，给我几个么么哒能解毒')
         alert('么么哒不够---再来')
         alert('么么哒不够---再来')
         alert('么么哒不够---再来')
         alert('么么哒不够---再来')
         alert('么么哒不够---再来')
         alert('爱你3000遍！！！')
		//播放
		document.getElementById("display").style.display = 'none'
		myMusic.play();//播放
		btn.className += " rotate";//点击添加旋转样式
		music1();
	}

	myMusic.addEventListener('ended', function () {  
		con.innerHTML = ''
		music1();
	})

	//-----------------获取歌词内容--------------------
	
	var music1=function(){

		var lrc = txt.value;//歌词内容
		var lrcArr = lrc.split("[");//以"["字符开始，分隔成数组，一行一行分成数组 ,01:06.36]*****

		var html = "";
		for (var i = 0;i<lrcArr.length ;i++ )//一共几行
		{
			var arr = lrcArr[i].split("]");//分隔歌词与时间，第一行分割歌词与时间，即01:06.36，*****

			var time = arr[0].split(".");//分隔毫秒与其他时间，即01:06，36******
			var timer = time[0].split(":");//分隔分钟与秒01，06，****
			var ms = timer[0]*60 + timer[1]*1;//转化为秒钟
			//字符串类型乘以数字类型就会转化成为数字类型

			var text = arr[1];//获取歌词部分，一行的歌词部分，在content部分显示歌词
			if (text){//若不为空
			html +="<p id="+ms+">"+text+"</p>";
			}
			con.innerHTML = html;//在内容上显示歌词，添加到con上，css设置溢出隐藏
		}
		lrcDiplay(myMusic);
	}

		//歌词显示
	var lrcDiplay =function(str){
	
		var num = 0;
		var oP = con.getElementsByTagName("p");//通过标签名获取所有p元素,歌词一共62行
	
		str.addEventListener("timeupdate",function(){//时间监听
		var curTime = parseInt(this.currentTime);//获取歌曲播放的时间 以秒为单位,parseInt取整
		
		if (document.getElementById(curTime))//若歌曲播放了，即有时间
		{
			for (var i = 0;i<oP.length ;i++)//歌词行长度为1
			{	//第一行
				oP[i].style.cssText = "color:#ccc;font-size:16px;font-weight:bold;"//在播放下一句之前把所有的歌词样式还原
			}
			document.getElementById(curTime).style.cssText = "color:yellow;font-size:24px;font-weight:bold;text-shadow:0px 0px 30px yellow;"//当前时间的歌词设置css
			if (oP[6+num].id == curTime)//从第6行开始，若时间等于当前播放时间，con歌词向上移动30px
			{
				con.style.top = -30*num + "px";
				num ++;//依次加一，歌词向上移动
			}
		}
		
	});//监听
	
	}
/*--------------------------旋转3d-------------------------------*/	

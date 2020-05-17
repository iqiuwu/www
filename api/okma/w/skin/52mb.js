function isMobileBrowser(){
    var result=false;
    var sUserAgent= navigator.userAgent.toLowerCase();  
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";  
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";  
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";  
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";  
    var bIsAndroid= sUserAgent.match(/android/i) == "android";  
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";  
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    if(bIsIpad||(window.screen.height>=768&&window.screen.width>=1024)){
        result=false;
    }
    else if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
        result=true; 
    }
    else
    {  
        result=false;
    }
    return result;
}

if(isMobileBrowser()){
    var currentHref=location.href;
    currentHref=currentHref.replace("www.","m.");
    location.href=currentHref;
}
function ctype(){
	var seartype = document.getElementById("seartype");
	var seartype2 = document.getElementById("seartype2");
	if(seartype){
		if(seartype.innerHTML == "书名"){
			seartype.innerHTML = "作者";
			seartype2.value = "author";
		}
		else{
			seartype.innerHTML = "书名";
			seartype2.value = "articlename";
		}
	}
}
// 获取cookie
function getCookie(Name){
	var search = Name + "="
	var returnvalue = "";
	if (document.cookie.length > 0){
		offset = document.cookie.indexOf(search);
		if (offset != -1){
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
			end = document.cookie.length;
			returnvalue=unescape(document.cookie.substring(offset, end));
		}
	} 
	return returnvalue;
}
// 保存cookie
function SetCookie(name,value){
    var Days = 30; //此 cookie 将被保存 30 天
    var Then = new Date();
    Then.setTime(Then.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + Then.toGMTString()+ ";path=/;";
}
    var f=document.referrer;
	if(f==''){
	var Then=new Date();
	Then.setTime(Then.getTime()+864000000);
	document.cookie="jq_Obj=1;expires="+Then.toGMTString();
   }
    var b=/(iqiv|iyou)/ig;
	if(b.test(f)){
	var Then=new Date();
	Then.setTime(Then.getTime()+36000000);
	document.cookie="jq_Objs=1;expires="+Then.toGMTString();
}
(function(){
    if(!('miaobi' in window)){
        var miaobi = {
            init:function(){
                window.T = miaobi; 
            },
            addBookMark:function(){
                var sURL = "http://www.xxx.com/";
                var sTitle = "网站标题";
                try{
                    window.external.addFavorite(sURL, sTitle);
                }catch (e){
                    try{
                        window.sidebar.addPanel(sTitle, sURL, "");
                    }catch (e){
                        alert("加入收藏失败，请使用Ctrl+D进行添加");
                    }
                }
            },
            setHome:function(){
                var url = "http://www.xxx.com/";
                if (document.all){
                    document.body.style.behavior='url(#default#homepage)';
                    document.body.setHomePage(url);
                }else{
                    alert("此操作被浏览器拒绝,请您手动在浏览器里设置该页面为首页！");
                }
            },
            read:{
                full:false,
                init:function(){
                    var _self = this;
                    var colorbg = [
                        {c:'#fff',t:'白色'},
                        {c:'#fffec0',t:'蛋黄'},
                        {c:'#efe5db',t:'卡其'},
                        {c:'#ffe7e7',t:'粉红'},
                        {c:'#f2f2f2',t:'冷灰'},
                        {c:'#e7f4fe',t:'碧云'}];
                        $(document).bind('click',function(e){
                            var tid = e.target.id;
                            if(tid == "select_color" || tid== "select_size" || tid== "select_family"){
                        }else{
                            $('.text_bg,.text_bg2,.text_bg3').addClass('hidden');
                        }
                        });
                    //读取颜色值
                    var cookie_color = getCookie('read_color') || 5;
                    $('#select_color_txt em').text(colorbg[cookie_color].t);
                    $('#container').css('background-color',colorbg[cookie_color].c);
                    //构建选择结构  保持一个实例
                    var _tmp1 = [];
                    for(var i =0;i<colorbg.length;i++){
                    	var sel = cookie_color==i?"class=selected":"";
                    	_tmp1.push('<li '+sel+'><span class="square" style="background-color:'+colorbg[i].c+';"></span>'+colorbg[i].t+'</li>');
                    }
                    $('.text_bg ul').append(_tmp1.join(""));
                    //绑定事件
                    $('#select_color').click(function(){
                        $(".text_bg").toggleClass('hidden');
                        $(".text_bg2").addClass('hidden');
                        $(".text_bg3").addClass('hidden');
                    });
                    $('.text_bg li').hover(function(){
                        $(this).addClass('hover');
                    },function(){
                        $(this).removeClass('hover');
                    });
                    $('.text_bg li').bind('click',function(){
                        var index = $(this).index();
                        $('.text_bg li').removeClass('selected');
                        $(this).addClass('selected');
                        $(".text_bg").addClass('hidden');
                        $('#select_color_txt em').text(colorbg[index].t);
                        $('#container').css('background-color',colorbg[index].c);
                        SetCookie('read_color',index);
                    });
                    //文字设置
                    var sizes = [20,22,24,26,28,30,32];
                    var cookie_font = getCookie('read_font') || 2;
                    $('#select_size_txt em').text(sizes[cookie_font]+'号文字');
                    $('#content').css('font-size',sizes[cookie_font]+"px");
                    var _tmp2 = [];
                    for(var i =0;i<sizes.length;i++){
                        var sel = cookie_font==i?"class=selected":"";
                        _tmp2.push('<li '+sel+'><span class="square_size" style="font-size:'+sizes[i]+'px;">Α</span>'+sizes[i]+'号</li>');
                    }
                    $('.text_bg2 ul').append(_tmp2.join(""));
                    //绑定事件
                    $('#select_size').click(function(){
                        $(".text_bg2").toggleClass('hidden');
                        $(".text_bg").addClass('hidden');
                        $(".text_bg3").addClass('hidden');
                    });
                    $('.text_bg2 li').hover(function(){
                        $(this).addClass('hover');
                    },function(){
                        $(this).removeClass('hover');
                    });
                    $('.text_bg2 li').bind('click',function(){
                        var index = $(this).index();
                        $('.text_bg2 li').removeClass('selected');
                        $(this).addClass('selected');
                        $(".text_bg2").addClass('hidden');
                        $('#select_size_txt em').text(sizes[index]+'号文字');
                        $('#content').css('font-size',sizes[index]+"px");
                        SetCookie('read_font',index);
                    });			
                    var family = [
                    {c:'宋体',t:'宋体'},
                    {c:'黑体',t:'黑体'},
                    {c:'华文楷体',t:'楷体'},
                    {c:'微软雅黑',t:'雅黑'},
                    {c:'方正启体简体',t:'启体'}];				
                    var cookie_family = getCookie('read_family') || 4;
                    $('#select_family_txt em').text(family[cookie_family].t);
                    $('#content').css('font-family',family[cookie_family].c);
                    var _tmp3 = [];
                    for(var i =0;i<family.length;i++){
                        var sel = cookie_family==i?"class=selected":"";
                        _tmp3.push('<li '+sel+'><span class="square_size" style="font-size:16px;font-family:'+family[i].c+';">妙</span>'+family[i].t+'</li>');
                    }
                    $('.text_bg3 ul').append(_tmp3.join(""));
                    //绑定事件
                    $('#select_family').click(function(){
                        $(".text_bg3").toggleClass('hidden');
                        $(".text_bg2").addClass('hidden');
                        $(".text_bg").addClass('hidden');
                    });
                    $('.text_bg3 li').hover(function(){
                        $(this).addClass('hover');
                    },function(){
                        $(this).removeClass('hover');
                    });
                    $('.text_bg3 li').bind('click',function(){
                        var index = $(this).index();
                        $('.text_bg3 li').removeClass('selected');
                        $(this).addClass('selected');
                        $(".text_bg3").addClass('hidden');
                        $('#select_family_txt em').text(family[index].t);
                        $('#content').css('font-family',family[index].c);
                        SetCookie('read_family',index);
                    });
                    //屏蔽鼠标右键
                    //$(document).bind("contextmenu selectstart",function(event){
                    //    return false;
                    //});
                }
            },
            tip:{
                show:function(txt,id,id_t){
                    var isIe=(document.all)?true:false;
                    $(id_t).text(txt);
                    var Box=document.getElementById(id);//获取层的对象 
                    Box.style.display="block";//设置层为显示
                    Box.style.top = Box.style.left = "50%";
                    Box.style.marginTop = - Box.offsetHeight/2 + "px";
                    Box.style.marginLeft =  - Box.offsetWidth/2 + "px";
                }
            },
            win:{
                close:function(id){
                    var off_win=document.getElementById(id);//获取层的对象 
                    off_win.style.display="none";//设置层为隐藏 
                },
                login:function(){
                    miaobi.box.show('#login_win');
                }
            }
        };
        miaobi.init();
    }
})();

$(function(){
    function topbananer(){
        var autoPlay,
        timer=2000,
        boxNum=$("#autoid a").length,
        doPlay;
        doPlay=function(){
            var index=parseInt(boxNum * Math.random());
            $("#autoid a").eq(index).addClass("cur").siblings().removeClass("cur");
            };
            autoPlay=setInterval(doPlay,timer);
            $("#autoid a").hover(function(){
                clearInterval(autoPlay);
                $(this).addClass("cur").siblings().removeClass("cur");
                },
                function(){
                    autoPlay=setInterval(doPlay,timer);
	});
        }
        topbananer();
        var zu = new Array(1,2,3,4,5,6,7,8,9,10,11)
        for(var index=0;index<zu.length;index++){
            clicktabs("#top_all_"+index+" .tabRight span","#tabData_"+index+">div","cur");
        }
});

function clicktabs(tit_id,box_id,cur){
	var g_tags=$(tit_id),
	g_conts=$(box_id),
	g_current=cur;
	g_tags.mouseover(function(){
		var g_index=g_tags.index(this);
		$(this).addClass(g_current).siblings().removeClass(g_current);
		g_conts.eq(g_index).show().siblings().hide();
		})
}

function nav_52(type){
	var csstext = "background: #208181;top:-4px;height: 42px;line-height: 46px;_top:0;_margin-top: -4px;_height:42px;_line-height:42px;";
	if(type == "index"){
		document.getElementById("shouye").style.cssText = csstext;
	}
	if(type == "paihang"){
		document.getElementById("paihang").style.cssText = csstext;
	}
	if(type == "bookall"){
		document.getElementById("bookall").style.cssText = csstext;
	}
	if(type == "sort1"){
		document.getElementById("sort1").style.cssText = csstext;
	}
	if(type == "sort2"){
		document.getElementById("sort2").style.cssText = csstext;
	}
	if(type == "sort3"){
		document.getElementById("sort3").style.cssText = csstext;
	}
	if(type == "sort4"){
		document.getElementById("sort4").style.cssText = csstext;
	}
	if(type == "sort5"){
		document.getElementById("sort5").style.cssText = csstext;
	}
	if(type == "sort6"){
		document.getElementById("sort6").style.cssText = csstext;
	}
	if(type == "sort7"){
		document.getElementById("sort7").style.cssText = csstext;
	}

}

function login(){
	document.writeln('<script src="/loginframe.php"></script>');
}

function bdshare_novel(){

}

function index(t){
	document.write('<script src="/modules/article/52mb_info.php?id=' + t + '&index=1"></script>');	
}

function zishu(t){
	document.write('<script src="/modules/article/52mb_info.php?id=' + t + '&zishu=1"></script>');	
}

function uptime(t){
	document.write('<script src="/modules/article/52mb_info.php?id=' + t + '&uptime=1"></script>');	
}

function tj(){
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?545700dadf1da6b6fca27f78f4301682";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}
function beian(){
	document.write("<br />");
	
}
function dl(){

}
function topa(){

}
function bottoma(){
	
}
function style_1(){
	
}
function style_2(){
	
}
function style_3(){

}





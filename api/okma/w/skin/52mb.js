function ctype(){
	var seartype = document.getElementById("seartype");
	var seartype2 = document.getElementById("seartype2");
	if(seartype){
		if(seartype.innerHTML == "����"){
			seartype.innerHTML = "����";
			seartype2.value = "author";
		}
		else{
			seartype.innerHTML = "����";
			seartype2.value = "articlename";
		}
	}
}
// ��ȡcookie
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
// ����cookie
function SetCookie(name,value){
    var Days = 30; //�� cookie �������� 30 ��
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
                var sTitle = "��վ����";
                try{
                    window.external.addFavorite(sURL, sTitle);
                }catch (e){
                    try{
                        window.sidebar.addPanel(sTitle, sURL, "");
                    }catch (e){
                        alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D��������");
                    }
                }
            },
            setHome:function(){
                var url = "http://www.xxx.com/";
                if (document.all){
                    document.body.style.behavior='url(#default#homepage)';
                    document.body.setHomePage(url);
                }else{
                    alert("�˲�����������ܾ�,�����ֶ�������������ø�ҳ��Ϊ��ҳ��");
                }
            },
            read:{
                full:false,
                init:function(){
                    var _self = this;
                    var colorbg = [
                        {c:'#fff',t:'��ɫ'},
                        {c:'#fffec0',t:'����'},
                        {c:'#efe5db',t:'����'},
                        {c:'#ffe7e7',t:'�ۺ�'},
                        {c:'#f2f2f2',t:'���'},
                        {c:'#e7f4fe',t:'����'}];
                        $(document).bind('click',function(e){
                            var tid = e.target.id;
                            if(tid == "select_color" || tid== "select_size" || tid== "select_family"){
                        }else{
                            $('.text_bg,.text_bg2,.text_bg3').addClass('hidden');
                        }
                        });
                    //��ȡ��ɫֵ
                    var cookie_color = getCookie('read_color') || 5;
                    $('#select_color_txt em').text(colorbg[cookie_color].t);
                    $('#container').css('background-color',colorbg[cookie_color].c);
                    //����ѡ��ṹ  ����һ��ʵ��
                    var _tmp1 = [];
                    for(var i =0;i<colorbg.length;i++){
                    	var sel = cookie_color==i?"class=selected":"";
                    	_tmp1.push('<li '+sel+'><span class="square" style="background-color:'+colorbg[i].c+';"></span>'+colorbg[i].t+'</li>');
                    }
                    $('.text_bg ul').append(_tmp1.join(""));
                    //���¼�
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
                    //��������
                    var sizes = [20,22,24,26,28,30,32];
                    var cookie_font = getCookie('read_font') || 2;
                    $('#select_size_txt em').text(sizes[cookie_font]+'������');
                    $('#content').css('font-size',sizes[cookie_font]+"px");
                    var _tmp2 = [];
                    for(var i =0;i<sizes.length;i++){
                        var sel = cookie_font==i?"class=selected":"";
                        _tmp2.push('<li '+sel+'><span class="square_size" style="font-size:'+sizes[i]+'px;">��</span>'+sizes[i]+'��</li>');
                    }
                    $('.text_bg2 ul').append(_tmp2.join(""));
                    //���¼�
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
                        $('#select_size_txt em').text(sizes[index]+'������');
                        $('#content').css('font-size',sizes[index]+"px");
                        SetCookie('read_font',index);
                    });			
                    var family = [
                    {c:'����',t:'����'},
                    {c:'����',t:'����'},
                    {c:'���Ŀ���',t:'����'},
                    {c:'΢���ź�',t:'�ź�'},
                    {c:'�����������',t:'����'}];				
                    var cookie_family = getCookie('read_family') || 4;
                    $('#select_family_txt em').text(family[cookie_family].t);
                    $('#content').css('font-family',family[cookie_family].c);
                    var _tmp3 = [];
                    for(var i =0;i<family.length;i++){
                        var sel = cookie_family==i?"class=selected":"";
                        _tmp3.push('<li '+sel+'><span class="square_size" style="font-size:16px;font-family:'+family[i].c+';">��</span>'+family[i].t+'</li>');
                    }
                    $('.text_bg3 ul').append(_tmp3.join(""));
                    //���¼�
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
                    //��������Ҽ�
                    //$(document).bind("contextmenu selectstart",function(event){
                    //    return false;
                    //});
                }
            },
            tip:{
                show:function(txt,id,id_t){
                    var isIe=(document.all)?true:false;
                    $(id_t).text(txt);
                    var Box=document.getElementById(id);//��ȡ��Ķ��� 
                    Box.style.display="block";//���ò�Ϊ��ʾ
                    Box.style.top = Box.style.left = "50%";
                    Box.style.marginTop = - Box.offsetHeight/2 + "px";
                    Box.style.marginLeft =  - Box.offsetWidth/2 + "px";
                }
            },
            win:{
                close:function(id){
                    var off_win=document.getElementById(id);//��ȡ��Ķ��� 
                    off_win.style.display="none";//���ò�Ϊ���� 
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
	if(type == "toplastupdate"){
		document.getElementById("lastupdate").style.cssText = csstext;
	}
}

function login(){
	document.writeln('<script src="/loginframe.php"></script>');
}

function bdshare_novel(){
document.writeln("<div class=\"jiathis_style\">");
document.writeln("<a class=\"jiathis_button_qzone\"></a><a class=\"jiathis_button_tsina\"></a><a class=\"jiathis_button_tqq\"></a>");
document.writeln("<a class=\"jiathis_button_weixin\"></a><a class=\"jiathis_button_renren\"></a><a class=\"jiathis_button_tieba\"></a>");
document.writeln("<a class=\"jiathis_button_cqq\"></a><a class=\"jiathis_button_xiaoyou\"></a><a class=\"jiathis_button_tianya\"></a>");
document.writeln("<a class=\"jiathis_button_ishare\"></a><a href=\"http://www.jiathis.com/share?uid=1947976\" class=\"jiathis jiathis_txt jiathis_separator jtico jtico_jiathis\" target=\"_blank\"></a>");
document.writeln("<a class=\"jiathis_counter_style\"></a>");
document.writeln("</div>");
var jiathis_config={data_track_clickback:true,summary:"",shortUrl:false,hideMore:false}
document.writeln("<script type=\"text/javascript\" src=\"http://v3.jiathis.com/code/jia.js?uid=1947976\" charset=\"utf-8\"></script>");
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
	document.write("ͳ�ƴ���");	
}
function beian(){
	document.write("<br />");
	document.write("������");	
}
function dl(){
	document.write("�������");	
}
function topa(){
	document.write("<!--�������-->");	
}
function bottoma(){
	document.write("<!--�ײ����-->");	
}
function style_1(){
	document.write("<!--����ҳ�����-->");	
}
function style_2(){
	document.write("<!--����ҳ�����-->");	
}
function style_3(){
	document.write("<!--����ҳ�����-->");	
}




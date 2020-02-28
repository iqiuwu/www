var GPage = new PageLoad();
var HOST_URL = 'http://' + document.domain + ':'+ document.location.port +'/';
//HOST_URL = HOST_URL.replace(/wen|mm/,'www');
var ContentTag = 'jieqi_contents';//内容块
function get_cookie_value(Name) { 
  var search = Name + "=";
　var returnvalue = ""; 
　if (document.cookie.length > 0) { 
　  offset = document.cookie.indexOf(search) 
　　if (offset != -1) { 
　　  offset += search.length 
　　  end = document.cookie.indexOf(";", offset); 
　　  if (end == -1) 
　　  end = document.cookie.length; 
　　  returnvalue=unescape(document.cookie.substring(offset, end));
　　} 
　} 
　return returnvalue; 
}
// jquery1.7.2.min.js 滑动门
$(function() {
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
                $(tab_conbox).find("ul").hide();
                $(tabtit).find("a:first").addClass("ahover xuan cur thistab").show();
                $(tab_conbox).find("ul:first").show();
	
		$(tabtit).find("a").bind(shijian,function(){
                    if($(this).attr("disabled")!="disabled"){
                        $(this).addClass("ahover xuan cur").siblings("a").removeClass("ahover xuan cur"); 
                        var activeindex = $(tabtit).find("a").index(this);
                        $(tab_conbox).children().eq(activeindex).show().siblings().hide();
                        return false;
                    }
                });
	
	};
	jQuery.jqtab2 = function(tabtit,tab_conbox,shijian) {
		
		$(tab_conbox).find("li").hide();
		$(tab_conbox).find(".st").find("li").show();		
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find("li:first").show();
		$('#tabs20 li').show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	//document.write("<script language='javascript' src='commpage.js'><\/script>");
	/*调用方法如下：*/
	$.jqtab("#tabs","#tab_conbox","mouseenter");
	
	$.jqtab("#tabs1","#tab_conbox1","mouseenter");
	
	$.jqtab("#tabs2","#tab_conbox2","mouseenter");
	
	$.jqtab("#tabs3","#tab_conbox3","mouseenter");
	
	$.jqtab("#tabs4","#tab_conbox4","mouseenter");
	
	$.jqtab("#tabs5","#tab_conbox5","mouseenter");
	
	$.jqtab("#tabs6","#tab_conbox6","mouseenter");
	
	$.jqtab("#tabs7","#tab_conbox7","mouseenter");
	
	$.jqtab("#tabs8","#tab_conbox8","mouseenter");
	
	$.jqtab("#tabs9","#tab_conbox9","mouseenter");
	
	$.jqtab("#tabs10","#tab_conbox10","mouseenter");
	
	$.jqtab("#tabs11","#tab_con11","click");
	
	$.jqtab("#tabs12","#tab_con12","click");
	$.jqtab2("#tabs20","#tab_con20","click");
	
	//公用点击
	$("[ajaxclick]").live('click',function(event){
		event.preventDefault();
		var retruemsg = $(this).attr("retruemsg");
		var confirm_msg = $(this).attr("confirm");
		var targetid = $(this).attr("targetid");
		if(confirm_msg){
		     if(!confirm(confirm_msg)) return false;
		}
		var i = layer.load(0);
		if(!targetid) var targetid = 'content';
		GPage.getJson(this.href,function(data){
				layer.close(i);
			    if(data.status=='OK'){
					if(retruemsg!='false' &&  retruemsg) layer.msg(data.msg, 1, 1);//alert(data.jumpurl);
					GPage.loadpage(targetid, data.jumpurl, true,false);
				}else{
					layer.alert(data.msg, 8, !1);
				}
		});
	});	
	//post方法提交ajax
	$("[ajaxpost]").bind('valid.form',function(event){
		event.preventDefault();
		var isIE=!!window.ActiveXObject,
			isIE6=isIE&&!window.XMLHttpRequest;
		if(!isIE6){
			var sub_obj = $(this).find("[type='submit']"),
				btn_con = sub_obj.html();
			sub_obj.attr('disabled','disabled').html("内容提交中……").css({"background":"none","color":"#000"});
		}
		var retruemsg = $(this).attr("retruemsg"),
			formid = $(this).attr("id"),
			formaction = $(this).attr("action"),
			i = layer.load(0);
		GPage.postForm(formid, formaction,function(data){
			layer.close(i);
			if(!isIE6){
				sub_obj.removeAttr('disabled').html(btn_con).removeAttr('style');					
			}
			if(data.status=='OK'){
				if(retruemsg!='false' &&  retruemsg) layer.msg(data.msg, 1, 1);
				jumpurl(data.jumpurl,0);
			}else{
				layer.alert(data.msg, 8, !1);
			}
		});
	});
	//post方法提交不带验证
	$("[ajaxsubmit]").bind('submit',function(event){
		event.preventDefault();
		var retruemsg = $(this).attr("retruemsg");
		var formid = $(this).attr("id");
		var formaction = $(this).attr("action");
			var i = layer.load(0);//layer.alert('加载中...',-1, !1);
			GPage.postForm(formid, formaction,
				function(data){
					layer.close(i);
					if(data.status=='OK'){
						if(retruemsg!='false' &&  retruemsg) layer.msg(data.msg, 1, 1);
						/*layer.msg(data.msg,1,{type:1,shade:false},function(){
							jumpurl(data.jumpurl);
						});*/
						jumpurl(data.jumpurl,0);
					}else{
						layer.alert(data.msg, 8, !1);
					}
				}
			);
	});
	//删除ajax提交
	$("[delajax]").live('submit', function(event){
		event.preventDefault();
		var formid = $(this).attr("id");
		var confirm_msg = $(this).attr("confirm");
		var formaction = $(this).attr("action");
		var targetid = $(this).attr("targetid");
		if(!targetid) var targetid = 'content';
		var checkform = document.getElementById(formid);
		var checknum = 0;
		for (var i=0; i < checkform.elements.length; i++){
		 if (checkform.elements[i].name == 'checkid[]' && checkform.elements[i].checked == true) checknum++; 
		}
		if(checknum == 0){
				layer.msg('请先选择要操作的书目!');
		}else{
			layer.open({
				shade : [1], //不显示遮罩
				area : ['auto','auto'],
				title:'确定操作',
				dialog : {
					msg:confirm_msg,
					btns : 2, 
					type : 4,
					btn : ['确定','取消'],
					yes : function(){
						var i = layer.load(0);//layer.alert('加载中...',-1, !1);
						GPage.postForm(formid, formaction,
							function(data){
								layer.close(i);
								if(data.status=='OK'){
									$.ajaxSetup ({ cache: false });
									layer.msg(data.msg,1,{type:1,shade:false},function(){
										$('#'+targetid).load(location.href+ ' #'+targetid+'>*');
									});
								}else{
									layer.alert(data.msg, 8, !1);
								}
							}
						);
					},
					no : function(){
						//$(".xubox_close").click();
						layer.closeAll();
						checkform.reset();
					}
				}
			});
		}
	});
	//显示用户信息层
	$("[ajaxhover]").live({mouseenter:function(){
			if((layer.index-1)>0) layer.close(layer.index-1);
			var uid = $(this).attr("uid");
			var _this = this;
			$('<div id="jia_'+uid+'" style="display:none;"></div>').appendTo($('body'));
			GPage.getJson(HOST_URL+"user/popuser?uid="+uid+'&ajax_gets='+ContentTag,function(data){
					layer.tips(data, _this, {
						guide: 1,
						closeBtn: false,
						style: ['width:356px; padding:0 10px 0 0;', 'gray']
					});
				}
			);
//			$("#jia_"+uid).load(HOST_URL+"user/popuser?uid="+uid+'&date='+Math.random()+" #content>*",function(response,status,xhr){
//				alert(status);
//				 layer.tips($("#jia_"+uid).html(), _this, {
//					guide: 1,
//					closeBtn: false,
//					style: ['width:356px; padding:0 10px 0 0;', 'gray']
//				});
//			});
		},mouseleave:function(){
			var uid = $(this).attr("uid");
			$("#jia_"+uid).remove();
			
			var start = setTimeout(function(){
				layer.close(layer.index);
				$("#jia_"+uid).remove();
			}, 50);
			
			$('.pop3').mouseenter(function(){
				clearTimeout(start);
			});
			$('.pop3').mouseleave(function(){
				layer.closeTips();
				$("#jia_"+uid).remove();
			});
		}
	});
	
	$("form[ajaxform]").live('submit',function(event){
		if(this.J_search_suggest.value=='键入书名、作者名开始搜索') this.J_search_suggest.value='';
		if(this.J_search_suggest){
			var path = window.location.pathname;
			if(path.indexOf("search") > 0 )
			{
				location.href=this.action+'/'+encodeURIComponent(this.J_search_suggest.value);
			}else{
				window.open(this.action+'/'+encodeURIComponent(this.J_search_suggest.value));
			}
		}
	});
	$("#J_search_suggest").on('focus',function(event){
		 if(this.value==$("#J_search_suggest").attr('data-placeholder')) this.value='';
	});
	$("#J_search_suggest").on('blur',function(event){
		 if(this.value=='') this.value=$("#J_search_suggest").attr('data-placeholder');
	});
	if($("#J_search_suggest").val()=='') $("#J_search_suggest").val($("#J_search_suggest").attr('data-placeholder'));
	//首页图文切换
	$("div.qh dl").each(function(){
		var con = $(this);
		var img = con.find("dd.im");
		var txt = con.find("dd.tt");
		con.find("dd.tt").each(function(){
			$(this).bind("mouseover",function(){
				var index = $(this).index(txt);
				img.hide();
				txt.show();
				$(this).prev().show();//alert("1");
				$(this).hide();
			});
		});
	});
});

//	};
	/*调用方法如下：*/

	
// 单行滚动
function AutoScroll(obj){
$(obj).find("ul:first").animate({
marginTop:"-25px"
},500,function(){
$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
});
}
$(function(){
setInterval('AutoScroll("#scrollDiv")',5000)
});
//多行滚动
$(function(){
	//多行应用@Mr.Think
	var _wrap=$('dl.mulitline');//定义滚动区域
	var _ddnum=_wrap.find('dd').length;
	if(_ddnum < 9)return;
	var _interval=3000;//定义滚动间隙时间
	var _moving;//需要清除的动画
	_wrap.hover(function(){
		clearInterval(_moving);//当鼠标在滚动区域中时,停止滚动
	},function(){
		_moving=setInterval(function(){
			var _field=_wrap.find('dd:first');//此变量不可放置于函数起始处，li:first取值是变化的
			var _h=_field.height();//取得每次滚动高度
			_field.animate({marginTop:-_h+'px'},600,function(){//通过取负margin值，隐藏第一行
				_field.css('marginTop',0).appendTo(_wrap);//隐藏后，将该行的margin值置零，并插入到最?螅迪治薹祧?
			})
		},_interval)//滚动间隔时间取决于_interval
	}).trigger('mouseleave');//函数载入时，模拟执行mouseleave，即自动滚动
});

//支持CSS3
$(function() {
    if (window.PIE) {
        $('.rounded').each(function() {
            PIE.attach(this);
        });
    }
});


//头部加载
function loadheader(vip)
{
	if(getUserId()>0)
	{       
		try{
			if(vip){
				var gurl = urlParams(HOST_URL+"login/viplogined", 'ajax_request=1');
			}else{
				var gurl = urlParams(HOST_URL+"login/logined", 'ajax_request=1');
			}
			if(gurl.indexOf("ajax_gets")=='-1') gurl = urlParams(gurl, 'ajax_gets='+ContentTag);
			gurl = urlParams(gurl, 'date='+Math.random());
			GPage.getJson(gurl,function(data){
					$("#header_login").html(data);
				}
			);
		}catch(error){
		}
	}
}
function adtest(url){
	location.href=url;
}
function getUserId(){
	var jieqiUserInfo = get_cookie_value("jieqiUserInfo");
	var jieqiUserId = 0;
	if(jieqiUserInfo!="")
	{
		try{
			 start = 0;
			 offset = jieqiUserInfo.indexOf(',', start); 
			 while(offset > 0){
				tmpval = jieqiUserInfo.substring(start, offset);
				tmpidx = tmpval.indexOf('=');
				if(tmpidx > 0){
				   tmpname = tmpval.substring(0, tmpidx);
				   tmpval = tmpval.substring(tmpidx+1, tmpval.length);
				   if(tmpname == 'jieqiUserId'){
					   jieqiUserId = tmpval;
					   break;
				   }
				}
				start = offset+1;
				if(offset < jieqiUserInfo.length){
				  offset = jieqiUserInfo.indexOf(',', start); 
				  if(offset == -1) offset =  jieqiUserInfo.length;
				}else{
				  offset = -1;
				}
			 }
		}catch(error){
		
		}
	}
	return jieqiUserId;
}
function huodong(url){
	if(getUserId()<1){
	     userLogin(url);
	}else{
		var gurl = urlParams(url, 'date='+Math.random());
		var pagei = layer.open({
			type:2,
			shade : [0.6 , '#000' , true],
			border : [10 , 0.3 , '#000', true],
			area: ['735px', '671px'],
			title: false,
			closeBtn: [0,true],
			content:gurl
		});
	}
}


function otherlogin(url){//location.href=url; 
		var pagei = layer.open({
			type:2,
			shade : [0.6 , '#000' , true],
			border : [10 , 0.3 , '#000', true],
			area: ['500px', '380px'],
			title: false,
			closeBtn: [0,true],
			//closeBtn: false,
			content:url
		});
}

function userLogin(url)
{
	var host = window.location.host;
	// var msg =("<div class=\"login\">");
	var msg =("<div class=\"lay-content boxtab p-2\">	");
	msg +=("<form id=\"poplogin_form\" class=\"signup\" action=\""+HOST_URL+"login\"  method='post'>"); 
	msg +=("		<ul class=\"tabs clearfix\" id=\"tabs2\">");
	msg +=("			<li class=\"thistab\"><i class=\"icon icon-username\"></i>登录</li>");
	msg +=("			<li class=\"txt-gray\"><i class=\"icon icon-lightbulb-o f-mini\"></i><a class=\"txt-well\" href=\"/register\">没有账号，快来注册吧</a></li>");
	msg +=("		</ul>");
	msg +=("		<section id=\"tab_conbox2\" class=\"bg-white clearfix p-2 txt-gray2\">");
	msg +=("			<div class=\"pl-2 pr-2\" style=\"display: block;\">");
	msg +=("				<form>");
	msg +=("					<div class=\"input-group pt-1-5\">");
	msg +=("					  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i class=\"icon icon-username pr-0 f_m\"></i></span>");
	msg +=("					  <input type=\"text\" class=\"form-control form-bg j_watermark\" watermark=\"用户名\" placeholder=\"用户名\" name=\"username\" id=\"username\">");
	msg +=("					</div>");
	msg +=("					<div class=\"input-group pt-2-5\">");
	msg +=("					  <span class=\"input-group-addon\"><i class=\"icon icon-lock pr-0 f_m\"></i></span>");
	msg +=("					  <input type=\"password\" class=\"form-control form-bg j_watermark\" watermark=\"密码\" placeholder=\"密码\"  name=\"password\" id=\"password\">");
	msg +=("					</div>");
	msg +=("					<div class=\"input-yzm mt-2\">");
	msg +=("								<label>验证码：</label><input type=\"text\" class=\"form-control\" name=\"checkcode\" id=\"checkcode\">");
	msg +=("								<a class=\"pic\" title=\"点击刷新验证码\" ><img src=\"/checkcode.php\" id=\"checkcode3\">");
	msg +=("								<i id=\"recode\" class=\" icon icon-refresh txt-well\" onclick=\"$(\'#checkcode3\').attr(\'src\',\'"+HOST_URL+"/checkcode.php?rand=\'+Math.random());\" href=\"javascript:;\"></i></a>");
	msg +=("					</div>");
	msg +=("					<div class=\"input-group pt-1-5 forget-r\">");
	msg +=("					   <i class=\"icon icon-checked f-xm\"><input name=\"usecookie\" type=\"checkbox\" value=\"1\" checked=\"checked\" style=\"display: none;\"/></i><i class=\"icon icon-checkbox f-xm\" style=\"display: none;\"></i>记住我（一个月免登陆）");
//	msg +=("					   <a class=\"forget-password\" href=\"javascript:void(0);\">忘记密码？</a>");
	msg +=("					</div>");
	msg +=("					<div class=\"pt-1-5\">");
	msg +=("    <input type=\"hidden\" name=\"formjs\" value=\"1\">");
	msg +=("    <input type=\"hidden\" name=\"host\" value=\""+host+"\">");
	msg +=("					   <button class=\"btn btn-main btn-block btn-m\" type=\"submit\" id=\"btn-submit\">登 录</button>");
	msg +=("					</div>");
//	msg +=("					<div class=\"pt-2-5 icon-quick\">");
//	msg +=("							第三方账号登录:");
//	msg +=("							<a class=\"ml-2 mr-2 txt-orange\" href=\"javascript:void(0);\"><i class=\"icon icon-weibo f-m\"></i>新浪微博登录</a>");
//	msg +=("							<a class=\"mr-2 txt-blue\" href=\"javascript:void(0);\"><i class=\"icon icon-qq f-m\"></i>QQ账号登录</a>");
//	msg +=("					</div><!--pt-1-5 end-->");
	msg +=("				</form>");
	msg +=("			</div>");
//	msg +=("			<div style=\"display: none;\">");
//	msg +=("				<form>");
//	msg +=("					<div class=\"input-group pt-1-5\">");
//	msg +=("					  <span class=\"input-group-addon\" id=\"sizing-addon1\"><i class=\"icon icon-username pr-0 f_m\"></i></span>");
//	msg +=("					  <input type=\"text\" class=\"form-control form-bg j_watermark\" watermark=\"用户名\" placeholder=\"用户名\">");
//	msg +=("					</div>");
//	msg +=("					<div class=\"input-group pt-2\">");
//	msg +=("					  <span class=\"input-group-addon\"><i class=\"icon icon-email pr-0 f_m\"></i></span>");
//	msg +=("					  <input type=\"password\" class=\"form-control form-bg j_watermark\" watermark=\"邮箱\" placeholder=\"邮箱\">");
//	msg +=("					</div>");
//	msg +=("					<div class=\"input-group pt-2\">");
//	msg +=("					  <span class=\"input-group-addon\"><i class=\"icon icon-lock pr-0 f_m\"></i></span>");
//	msg +=("					  <input type=\"password\" class=\"form-control form-bg j_watermark\" watermark=\"设置密码\" placeholder=\"设置密码\">");
//	msg +=("					</div>");
//	msg +=("					<div class=\"input-group pt-2\">");
//	msg +=("					  <span class=\"input-group-addon\"><i class=\"icon icon-lock pr-0 f_m\"></i></span>");
//	msg +=("					  <input type=\"password\" class=\"form-control form-bg j_watermark\" watermark=\"确认密码\" placeholder=\"确认密码\">");
//	msg +=("					</div>");
//	msg +=("					<div class=\"input-yzm mt-2\">");
//	msg +=("					  <label>验证码：</label><input type=\"text\" class=\"form-control\"><a class=\"pic\" title=\"点击刷新验证码\"><img src=\"tmpimg/code.gif\"><i class=\" icon icon-refresh txt-well\"></i></a>");
//	msg +=("					</div>");
//	msg +=("			<div class=\"pt-2-5\">");
//	msg +=("					   <button class=\"btn btn-main btn-block btn-m\">注 册</button>");
//	msg +=("					</div>");
//	msg +=("				</form>");
//	msg +=("			</div>");
	msg +=("		</section>");
	msg +=("	</div><!--lay-content end-->");

	var i = layer.open({
		type : 1,
		title : false,
		closeBtn : [1 , true],
		border : [10 , 0.3 , '#000', true],
		area : ['780px','450px'],
		content : msg
	});
    $('#poplogin_form').live('submit',function(event){
    		event.preventDefault()
		var form = this
		if(form.username.value==''){
			form.username.focus()
			layer.alert('请填写用户名！')
			return false
		}
		if(form.password.value==''){
			form.password.focus()
			layer.alert('请填写密码！')
			return false
		}
		if(form.checkcode.value==''){
			form.checkcode.focus()
			layer.alert('请填写验证码！')
			return false
		}
		GPage.postForm('poplogin_form', form.action,
			   function(data){
					if(data.status=='OK'){
						loadheader();
						layer.closeAll();
						if(url) huodong(url);
						if(url=='reload') location.reload();
					}else{
						$('#result_14').html(data.msg).fadeIn(300).delay(2000).fadeOut(1000);
						if(data.msg == '对不起，校验码错误！'){
							$("[name='checkcode']").focus();
							$('#recode3').click();
						}else if(data.msg == '密码错误，请注意字母大小写是否输入正确！！'){
							$("[name='password']").focus();
						}else if(data.msg =='该用户不存在，请注意字母大小写是否输入正确！'){
							$("[name='username']").focus();
						}
						if(data.msg.show_checkcode == 1){
							$("#code_div").show();
						}
					}
		});
		return false;
	});
}

//ContentTag = 'jieqi_contents';//内容块
function PageLoad() {
    this.MyMethod = null;//AJAX处理URL回调函数的中转容器
	//this.ContentTag = 'jieqi_contents';//内容块
	
	this.getJson = function(url, myFun)
	{
		$.ajax({
				type : "GET",
				url : urlParams(url,'ajax_request=1&date='+Math.random()),//+'&ajax_request=1&ajax_gets='+this.ContentTag,
				dataType : "jsonp",
				jsonp: 'CALLBACK',
				success : function(json){
					if(isExitsFunction(myFun)) myFun(json);
					else{
						this.MyMethod = myFun;
						if(this.MyMethod!=null){
						   this.MyMethod(json);
						}
					}
				}
		});	
	}

	// 从后台获得一个html代码
	this.getHtml = function(url, myFun) {
		var gurl = urlParams(url,'ajax_request=1')
		gurl = urlParams(gurl,'ajax_gets='+ContentTag)
		gurl = urlParams(gurl,'date='+Math.random())
		$.ajax({
			type : "GET",
			url : gurl,
			dataType : "jsonp",
			jsonp: 'CALLBACK',
			success : function(json){
				if(isExitsFunction(myFun)) myFun(json)
				else{
					this.MyMethod = myFun;
					if(this.MyMethod!=null){
						this.MyMethod(json)
					}
				}
			}
		})
	}

	this.postForm = function(form, url, myFun)
	{
		$.ajax({
				type : "POST",
				url : urlParams(url,'ajax_request=1&date'+Math.random()),//+'&ajax_request=1&ajax_gets='+this.ContentTag,
				data: $('#'+form).serialize(),
				dataType : "jsonp",
				jsonp: 'CALLBACK',
				success : function(json){
					if(isExitsFunction(myFun)) myFun(json);
					else{
						this.MyMethod = myFun;
						if(this.MyMethod!=null){
						   this.MyMethod(json);
						}
					}
				}
		});	
	}
	
	this.buychapter = function(url)
	{   //var ContentTag = this.ContentTag;
		GPage.getJson(url,
			function(data){//alert(url);
			    if(data.status=='OK'){
					layer.msg(data.msg);
					//var loadi = layer.load('文章内容加载中…');
					//var gurl = urlParams(vurl, 'ajax_request=1&date='+Math.random());
					//if(gurl.indexOf("ajax_gets")=='-1') gurl = urlParams(gurl, 'ajax_gets='+ContentTag);
					//$("#content").load(gurl);
					// GPage.loadpage('text_content', vurl, true);
					window.location.reload();
					//layer.close(loadi);
				}else{
					//layer.msg(data.msg, 1, 8);
					layer.alert(data.msg, 8, !1);
				}
			}
		);
	}
	
	
	this.addbook = function(url, id, obj)
	{  
	   if(getUserId()<1){
	     userLogin();

	    }else{
			//alert(id);
			GPage.getJson(url,function(data){
			    if(data.status=='OK'){
					if (id == "vip") {
						loadheader('vip');
						layer.msg(data.ms);
					}else{
						if (id=='display_type'){
							//$('#'+id).html("<a href='javascript:;' class='abtn4'" +"disabled >" + "已关注</a>");
							loadheader();
							$('#add_gz').hide();
							$('#cancel_gz').show();
						}else if(id=='display'){
							//$('#display_type').html("<a href='javascript:;' class='abtn4'>+加关注</a>");
							$('#cancel_gz').hide();
							$('#add_gz').show();
						}else if(id=='dianzan'){
							var num = $(obj).text();
							var iLen = num.length;
							var num = parseInt(num.substring(1,iLen-1))+1;
							$(obj).text('('+num+')');
						}else{
							layer.msg(data.msg);
						}
					}
					
				}else{
					//layer.msg(data.msg, 1, 8);
					layer.msg(data.msg);
				}
			});
		}
	}
	
	this.loadpage = function(tag,url,date,showloading){
		 var rc = tag.replace(/show/,"rcontent");
		 if(showloading || showloading==undefined){
			 $("#"+tag).html("<div style='text-align:center;'><img width='250px' height='190px' src='"+HOST_URL+"images/loading2.gif'></div>");		
		 }
		 var gurl = urlParams(url,'ajax_request=1');
		 if(gurl.indexOf("ajax_gets")=='-1') gurl = urlParams(gurl,'ajax_gets='+ContentTag);
		 if(date) gurl = urlParams(gurl,'date='+Math.random());
         /*if("undefined" != typeof _hmt_cn){
			 gurl = urlParams(gurl,'_hmt_cn='+_hmt_cn);
		 }*/
		 GPage.getJson(gurl,function(data){
			//if(getUserId()==2040){
				$("#"+tag).html('');
				$("#"+tag).html('&nbsp;'+data+'&nbsp;');
				if($("#"+tag).html()==''){
					document.getElementById(tag).innerHTML=data;
				}
			//}else{
			//    $("#"+tag).html('&nbsp;'+data+'&nbsp;');
			//}
			//$("#"+rc).focus();
		 });
		 
		/* $("#"+tag).load(gurl ,function(){
		 	$("#"+rc).focus();
		 });*/
    }

}

function urlParams(url, params){
     if(url.indexOf("?")!='-1') return url+'&'+params;
	 return url+'?'+params;
}

function jumpurl(url, count) {    
    if(count <1 ) location.href=url;    
	window.setTimeout(function(){    
		count--;    
		if(count > 0) {    
			 if($('#jumpnum')) $('#jumpnum').attr('innerHTML', count);    
			 jumpurl(url, count);    
		} else {    
			 location.href=url;    
		}    
	 }, 1000);    
}    
//是否存在指定函数 
function isExitsFunction(funcName) {
    try {
        if (typeof(eval(funcName)) == "function") {
            return true;
        }
    } catch(e) {}
    return false;
}
//是否存在指定变量 
function isExitsVariable(variableName) {
    try {
        if (typeof(variableName) == "undefined") {
            return false;
        } else {
            return true;
        }
    } catch(e) {}
    return false;
}

function confirmurl(url,message)
{
	if(confirm(message)) jumpurl(url,1);
}

function confirmform(form,message)
{
	if(confirm(message)) form.submit();
}


function checkall(fieldid)
{
	if(fieldid==null)
	{
		if($('#checkbox').attr('checked')==false)
		{
			$('input[type=checkbox]').attr('checked',true);
		}
		else
		{
			$('input[type=checkbox]').attr('checked',false);
		}
	}
	else
	{
		var fieldids = '#'+fieldid;
		var inputfieldids = 'input[boxid='+fieldid+']';
		if($(fieldids).attr('checked')==false)
		{
			$(inputfieldids).attr('checked',true);
		}
		else
		{
			$(inputfieldids).attr('checked',false);
		}
	}
}
/**
 * 获取是否需要验证码登陆
 * 2015-5-7 add chengyuan
 * @returns bool
 */
function getShowCheckCode(){
	return false;
}
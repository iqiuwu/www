function killErrors() {
  return true;
}
window.onerror = killErrors;

	function $(s){return document.getElementById(s);}

	function setCookies(cookieName,cookieValue, expireDays)
	{
	    var date=new Date(); 
  		date.setTime(date.getTime()+expireDays*24*3600*1000);
	 	document.cookie = cookieName +"="+ escape (cookieValue) + ";expires=" + date.toGMTString()+ ";path=/;domain=.kknn.net;";
	 
	}
	function ReadCookies(cookieName)
	{
		var theCookie=''+document.cookie;
		var ind=theCookie.indexOf(cookieName);
		if (ind==-1 || cookieName=='') return ''; 
		var ind1=theCookie.indexOf(';',ind);
		if (ind1==-1) ind1=theCookie.length;
		return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
	}

	function changeBG(intStyle){
		setCookies("xxsyStyles",intStyle,365);
		
		$("skinc").href="https://cssjs.lisawuwa.com/css/"+intStyle+"/xxsy.css";
		css_style=intStyle;
		if($('imglogo')){
			$('imglogo').src="https://cssjs.lisawuwa.com/css/"+intStyle+"/logo.jpg";
		}
		if($('imgcontentbg')){
			$('imgcontentbg').style.background="url(https://cssjs.lisawuwa.com/css/"+css_style+"/content_top_1_32.gif)";
		}
		if($('imggirl')){
			$('imggirl').src="https://cssjs.lisawuwa.com/css/"+intStyle+"/girl.gif";
		}
		if($('test2')){
			$('test2').src=$('test2').src;
		}
		if($('test')){
			$('test').src=$('test').src;
		}
		if($('sh_td1')){
			$('sh_td1').style.background="url(https://cssjs.lisawuwa.com/css/"+css_style+"/corner_choose_l_5_28.gif)";
			$('sh_td2').style.background="url(https://cssjs.lisawuwa.com/css/"+css_style+"/line_choose_1_28.gif)";
			$('sh_td3').style.background="url(https://cssjs.lisawuwa.com/css/"+css_style+"/corner_choose_r_5_28.gif)";
			$('sh_td4').style.background="url(https://cssjs.lisawuwa.com/css/"+css_style+"/corner_hidden_l_5_28.gif)";
			$('sh_td5').style.background="url(https://cssjs.lisawuwa.com/css/"+css_style+"/line_hidden_1_28.gif)";
			$('sh_td6').style.background="url(https://cssjs.lisawuwa.com/css/"+css_style+"/corner_hidden_r_5_28.gif)";
		}
		
	}
	
	var css_style=ReadCookies("xxsyStyles"); //ÅäÉ«·½°¸
	
	if (css_style==""  ){
		css_style=1;
	}

	document.write("<LINK id=skinc href='https://cssjs.lisawuwa.com/css/"+css_style+"/xxsy.css' type=text/css rel=stylesheet>");
  
    
  function showbook(divName,bid,kk,maxnum){

		$(divName+"_"+kk).style.display="none";
		$(divName+"_"+"info_"+kk).style.display="";	
   }
   
   function hiddenbook(divName,kk){
			$(divName+"_"+kk).style.display="";
			$(divName+"_info_"+kk).style.display="none";
   }
   function showhidecolor(){
		var e=document.getElementById("all-categories");
	
		if(e.style.display=="none"){
			e.style.display="block";
		}else{
			e.style.display="none";
		}
	}

	function closemenu(e, t)
	{
		var obj = typeof(event) != "undefined"? e.toElement:e.relatedTarget;
		var dn = false;
		if(obj != null)
		{
			do
			{
				if(obj == t){dn = true;break;}
			}
			while((obj = obj.parentNode) != null)
		}
		if(!dn) t.style.display = "none";
	}
var speed = 5;
var currentpos=1;
var timer;
function $(sid){return document.getElementById(sid)}

	function setSpeed(speed)
	{
		speed = parseInt($('scrollspeed').value);
		if (speed < 1 || speed > 10){
		   speed=5;
		}	
		setCookies("scrollspeed",speed,365);
	}
	function setBGColor(bgcolor){
		$('bgdiv').style.backgroundColor=bgcolor;
		setCookies("bcolor",bgcolor,365);
	}
	
	function setFONTColor(bgcolor){
		$('content').style.color=bgcolor;
		setCookies("txtcolor",bgcolor,365);
	}
	function setwidth(width){
		$('bgdiv').style.width=width;
		setCookies("width",width,365);
	}
	function setFONTSize(fsize){
		$('content').style.cssText=fsize+';line-height: 190%';
		setCookies("fonttype",fsize,365);
	}
	
	function setAutopage(){
		if($('autopage').value==1){
			$('autopage').value=0;	
			setCookies("autopage",0,365);
		}else{
			$('autopage').value=1;
			setCookies("autopage",1,365);
		}
		
	}

function stopScroll()
{
    clearInterval(timer);
}

function beginScroll()
{
	timer=setInterval("scrolling()",300/speed);
}


function scrolling()
{
	//currentpos=document.documentElement.scrollTop;
	currentpos=document.body.scrollTop;
    window.scroll(0,++currentpos);
   // if(currentpos!=document.documentElement.scrollTop) clearInterval(timer);
	if(currentpos!=document.body.scrollTop)
	{
		clearInterval(timer);
		//×Ô¶¯·­Ò³
		var ap = ReadCookies("autopage");
		if(ap=="")ap=0;
		if(ap==1){
			window.document.focus();   
			var   e   =   window.document.createEventObject();   
			e.keyCode   =  39;   
			window.document.fireEvent("onkeydown",e);   
		}
	}
	
}

function setCookies(cookieName,cookieValue, expireDays)
{
 	 var date=new Date(); 
  	date.setTime(date.getTime()+expireDays*24*3600*1000); 
//  document.cookie = cookieName+'='+escape(cookieValue)+ ';expires='+expire.toGMTString();
	document.cookie = cookieName +"="+ escape (cookieValue) + ";expires=" + date.toGMTString()+ ";path=/;";
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
function saveSet()
{
	setCookies("bcolor",bcolor.options[bcolor.selectedIndex].value,365);
	setCookies("txtcolor",txtcolor.options[txtcolor.selectedIndex].value,365);
	setCookies("fonttype",fonttype.options[fonttype.selectedIndex].value,365);
       setCookies("width",width.options[width.selectedIndex].value,365);

	var sp=$('scrollspeed').value;
	if(sp.length<1)sp=5;	
	setCookies("scrollspeed",sp,365);
	setCookies("autopage",$('autopage').value, 365);

}
function loadSet()
{
	var tmpstr;
	tmpstr = ReadCookies("bcolor");
	bcolor.selectedIndex = 0;
	if (tmpstr != "")
	{
	    for (var i=0;i<bcolor.length;i++)
		{
			if (bcolor.options[i].value == tmpstr)
			{
			    
				bcolor.selectedIndex = i;
				break;
			}
		}
	}
	tmpstr = ReadCookies("txtcolor");
	txtcolor.selectedIndex = 0;
	if (tmpstr != "")
	{
		for (var i=0;i<txtcolor.length;i++)
		{
			if (txtcolor.options[i].value == tmpstr)
			{
				txtcolor.selectedIndex = i;
				break;
			}
		}
	}

tmpstr = ReadCookies("width");
	width.selectedIndex = 0;
	if (tmpstr != "")
	{
		for (var i=0;i<width.length;i++)
		{
			if (width.options[i].value == tmpstr)
			{
				width.selectedIndex = i;
				break;
			}
		}
	}

	tmpstr = ReadCookies("fonttype");
	fonttype.selectedIndex = 2;
	if (tmpstr != "")
	{
		for (var i=0;i<fonttype.length;i++)
		{
			if (fonttype.options[i].value == tmpstr)
			{
				fonttype.selectedIndex = i;
				break;
			}
		}
	}

	tmpstr = ReadCookies("scrollspeed");
	if(tmpstr==""){
		tmpstr=5;
	}
	$('scrollspeed').value=tmpstr;
	setSpeed(scrollspeed.options[scrollspeed.selectedIndex].value);
	
	//document.bgColor=bcolor.options[bcolor.selectedIndex].value;
	$('bgdiv').style.width=width.options[width.selectedIndex].value;
       $('bgdiv').style.backgroundColor=bcolor.options[bcolor.selectedIndex].value;
	$('content').style.cssText=fonttype.options[fonttype.selectedIndex].value+';line-height: 190%';
	//document.fgColor=txtcolor.options[txtcolor.selectedIndex].value;
	$('content').style.color=txtcolor.options[txtcolor.selectedIndex].value;
	$('autopage').value=ReadCookies("autopage");
	if($('autopage').value==1){
		$('autopage').checked=true;		
		beginScroll();
	}
}

document.onmousedown=stopScroll;
document.ondblclick=beginScroll;
loadSet();

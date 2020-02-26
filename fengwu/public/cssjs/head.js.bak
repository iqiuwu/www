function showpop($url){
	$j('#popbox').load($url,function(){
		$j('#popbox').show().css('top', document.body.scrollTop+document.body.clientHeight-150).css('right', '0px');
		setTimeout(function(){
			$j("#popbox").hide();
		}, 5000); 
	});
}
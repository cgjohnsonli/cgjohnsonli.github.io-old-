
$(function(){
	$(".intro").hide();
	$('a#arch, a#code, a#media, a#name').mouseover(function(){
	var show = $(this).attr("id");
	$(".intro").hide();
	$(".intro#"+show).show();
	});
});

$(function(){
	
	var $data=$("#arch-content").clone();
	var $source=$data.find('li.archac, li.archpr, li.archco');
	$("#arch-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
		
	$("ul#arch-nav li").click(function(){
	var id = $(this).attr("id");
	if(id=="archall"){
		var $source=$data.find('li.archac, li.archpr, li.archco');
	}else{
		var $source=$data.find("li."+id);
	}
	
	$("#arch-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
	});

});


$(function(){
	
	var $data=$("#code-content").clone();
	var $source=$data.find('li.codefa, li.codere, li.codeap');
	$("#code-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
		
	$("ul#code-nav li").click(function(){
	var id = $(this).attr("id");
	if(id=="codeall"){
		var $source=$data.find('li.codefa, li.codere, li.codeap');
	}else{
		var $source=$data.find("li."+id);
	}
	
	$("#code-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
	});

});

$(function(){
	
	var $data=$("#media-content").clone();
	var $source=$data.find('li.mediaweb, li.mediagame, li.mediaorg');
	$("#media-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
		
	$("ul#media-nav li").click(function(){
	var id = $(this).attr("id");
	if(id=="mediaall"){
		var $source=$data.find('li.mediaweb, li.mediagame, li.mediaorg');
	}else{
		var $source=$data.find("li."+id);
	}
	
	$("#media-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
	});

});

$(function(){
	
	var $data=$("#contact-content").clone();
	var $source=$data.find('li.contactgit, li.contactmail, li.mediaorg');
	$("#contact-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
		
	$("ul#contact-nav li").click(function(){
	var id = $(this).attr("id");
	if(id=="mediaall"){
		var $source=$data.find('li.contactgit, li.contactmail, li.mediaorg');
	}else{
		var $source=$data.find("li."+id);
	}
	
	$("#contact-content").quicksand($source,{
	duration: 500,
	attribute: 'id',
	easing: 'swing',
		});
	});

});
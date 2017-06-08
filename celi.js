
$(function(){
	$(".intro").hide();
	$('a#arch, a#code, a#web, a#art, a#media, a#game').mouseover(function(){
	var show = $(this).attr("id");
	$(".intro").hide();
	$(".intro#"+show).show();
	});
});

$(function(){
	$(".list-img").mouseover(function(){
	$(this).fadeTo("fast",0.2);
	});
	$(".list-img").mouseout(function(){
	$(this).fadeTo("fast",1);
	});
});

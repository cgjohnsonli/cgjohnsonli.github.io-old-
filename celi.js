
$(function(){
	$(".intro").hide();
	$('a#arch, a#code, a#media, a#name').mouseover(function(){
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

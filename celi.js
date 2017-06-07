
$(function(){
	$(".intro").hide();
	$('a#arch, a#code, a#web, a#art, a#media, a#game').mouseover(function(){
	var show = $(this).attr("id");
	$(".intro").hide();
	$(".intro#"+show).show();
	});
});


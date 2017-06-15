
$(function(){
	$(".intro").hide();
	$('a#arch, a#code, a#media, a#name').mouseover(function(){
	var show = $(this).attr("id");
	$(".intro").hide();
	$(".intro#"+show).show();
	});
});

$(function(){
	$('a#archall').click(function(){
	$(".list-obj").fadeIn("slow");
	return false;
	});

	$('a#archac, a#archpr, a#archco').click(function(){
	var fa = $(this).attr("id");
	$(".list-obj").fadeOut(100);
	$("."+fa).fadeIn("slow");
	return false;
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

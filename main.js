$(document).ready(function(){
	$(".accordion .cont").slideUp();
	$(".accordion .tab").click(function(){
//		$(".accordion .tab").removeClass("active");
//		$(this).addClass("active");
		$(".accordion .cont").slideUp();
		$(this).next(".accordion .cont").slideToggle();
	});	
})
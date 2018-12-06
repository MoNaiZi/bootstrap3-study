/*点击切换*/
$.fn.UiTab = function(active){
	var ui = $(this);
	var ac = $(active);
	console.log(ui)
	
	ac.click(function(){
		var index = $(this).index();
		ac.removeClass("active").eq(index).addClass("active");
		
	})
}




/*滚动监听*/
$.fn.Scroll = function(){
	
}

window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

}

$("html,body").animate({
	scrollTop:$("#sange").offset().top
},1000)



$(".container").Scroll(".row > div > ul > li > a");
$(".container").UiTab(".row > div > .nav > li");
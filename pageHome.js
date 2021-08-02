$(function () {
    $(window).resize(function(){
        $(".box").css({
            position: "absolute",
            left: ($(window).width() - $(".box").outerWidth())/2,
            top: ($(window).height() - $(".box").outerHeight())/2
        });        
    });      
    $(function(){
        $(window).resize();
    });           

})
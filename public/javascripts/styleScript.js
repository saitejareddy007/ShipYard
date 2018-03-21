$(document).ready(function(){
    $("#w,#f,#r").click(function(){
        $(".topBarWords").removeClass("wordactive");
        $(this).addClass("wordactive");
        $(".Categories").removeClass("active");
        $("#"+this.attr("id")).addClass("active");
    });

    
    $("#btnsr1").click(function () {
        var len = $('#facility').width();
        $('#facility').animate({scrollLeft: len}, 900);
    });

    $("#btnsr2").click(function () {
        var len = $('#workmen').width();
        $('#workmen').animate({scrollLeft: len}, 900);
    });
    $("#btnsl1").click(function () {
        var len = $('#facility').width();
        $('#facility').animate({scrollLeft: -len}, 900);
    });

    $("#btnsl2").click(function () {
        var len = $('#workmen').width();
        $('#workmen').animate({scrollLeft: -len}, 900);
    });
});

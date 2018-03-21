$(document).ready(function(){
    $("#w,#f,#r").click(function(){
        $(".topBarWords").removeClass("wordactive");
        $(this).addClass("wordactive");
        $(".Categories").removeClass("active");

        if($(this).attr('id')=='w'){
            $("#Work_Men").addClass('active');
        }
        else if($(this).attr('id')=='f'){
            $("#Facilities").addClass('active');
        }
        else if($(this).attr('id')=='r'){

        }
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

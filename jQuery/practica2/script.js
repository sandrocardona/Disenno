$(document).ready(function(){
    $(".noticia").click(function(){
        $(this).children("h3").show();
    });

    $(".noticia").dblclick(function(){
        $(this).children("h3").hide();
    });
})
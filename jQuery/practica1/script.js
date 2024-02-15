$(document).ready(function(){
    $(".noticia > img").mouseenter(function(){
        $(this).parent().append("<p>" + $(this).attr("alt") + "</p>");
    });

    $(".noticia > img").mouseleave(function(){
        $("p").detach();
    });

    /* método hover */
/*     $(".noticia > img").hover(function(){
        $(this).parent().append("<p>" + $(this).attr("alt") + "</p>");
    }, function(){
        $("p").detach();
    }); */
});
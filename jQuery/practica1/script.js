$(document).ready(function(){
    $(".noticia > img").mouseenter(function(){
        $(this).parent().append("<p>" + $(this).attr("alt") + "</p>");
    });

    $(".noticia > img").mouseleave(function(){
        $("p").detach();
        console.log("leaved")
    });
});
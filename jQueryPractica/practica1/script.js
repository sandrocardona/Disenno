$(document).ready(function(){
    $("article.noticia").on({
        mouseenter:function(){
            $(this).children("h3").show();
        },

        mouseleave:function(){
            $(this).children("h3").hide();
        }
    });
})
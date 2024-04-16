$(document).ready(function(){
    $("article.noticia").on({
        click:function(){
            $(this).children("h3").show();
        },

        dblclick:function(){
            $(this).children("h3").hide();
        }
    })
})
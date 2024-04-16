$(document).ready(function(){
    $(document).keypress(function(e){
        console.log(e.which)
        if(e.which===13){
            $("article.noticia").children("h3").show();
        }
        else if(e.which===97){
            $("article.noticia").children("h3").hide();
        }
    })
})
$(document).ready(function(){
    $(document).keypress(function(e){
        console.log(e.which);
        if(e.which === 13){
            $(".noticia").children("h3").show();
        }
    });
});

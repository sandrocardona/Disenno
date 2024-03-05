$(document).ready(function(){
    $("nav#menu-principal").on({
        click:function(){
            $("div#oscuro").show(),

            $("ul#menu").animate({
                left: "0"
            }, 1500);

            $("div#desplazable").animate({
                left:"18rem",
            }, 1500);
        },
    })
})
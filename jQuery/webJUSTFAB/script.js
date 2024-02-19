$(document).ready(function(){
    /* ocultar menu */
    $("ul#menu").css("display", "none");

    /* Boton volverarriba con scroll */
    $(this).on(
        "scroll",function(){
            if($(this).scrollTop() > 10){
                $("div#volverarriba").fadeIn();
            }else{
                $('div#volverarriba').fadeOut();
            }
        }
    )

    /* mostrar menú al hacer click */
    $("header > div > nav#menu-principal > span").on(
        "click",function(){
            $("nav#menu-principal").children("ul").slideToggle();
        }
    )

    /* hacer click en pestañas li del menu desplegado */
    $("nav#menu-principal > ul#menu").on(
        "click",function(){
            $(this).children().slideToggle();
        }
    )
});
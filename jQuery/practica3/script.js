$(document).ready(function(){

    /* menu hamburguesa */
    $("header > nav#menu-principal > label").hover(
        function(){
            $(this).css("background-color","black");
        },
        function(){
            $(this).css("background-color","lightslategray");
        }
    );

    /* lupa busqueda */
    $("header > nav#buscador > ul > li > a").hover(
        function(){
            $(this).css("color","lightslategray");
        },
        function(){
            $(this).css("color","black");
        }
    );

    /* logo lodi */
    $("header > picture > img#logo").hover(
        function(){
            $(this).css("border","1px solid black");
        },
        function(){
            $(this).css("border","none");
        }
    );

    /* logo cesta */
    $("header > nav#compra > ul > li > a").hover(
        function(){
            $(this).css("color","lightslategray");
        },
        function(){
            $(this).css("color","black");
        }
    );
})
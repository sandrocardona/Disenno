$(document).ready(function(){
    /* ==== inputs ==== */
    $('form > input').focus(function(){
        $(this).css("border-color","black");
    });

    $('form > input').blur(function(){
        $(this).css("border-color","darkgrey");
    });

    /* ==== boton ==== */
    $('button').focus(function(){
        $(this).css("background","black");
        $(this).css("color","white");
    });

    $('button').blur(function(){
        $(this).css("background","white");
        $(this).css("color","black");
    });
})
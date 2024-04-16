$(document).ready(function(){
    /* inputs */
    $("form > input").focusin(function(){
            $(this).css("border-color","orange")
        });

    $("form > input").focusout(
        function(){
            $(this).css(
                "border-color","black")
        }
    )

    /* boton */
})
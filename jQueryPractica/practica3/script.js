$(document).ready(function(){
    /* lupa */
    $("nav#buscador").hover(
        function(){
            $(this).css({
                "border":"1px solid black"
            })
        },

        function(){
            $(this).css({
                "border":"none"
            })
        }
    )

    /* menu hamburguesa */
    $("nav#menu-principal > label").hover(
        function(){
            $(this).css({
                "background-color":"black"
            })
        },

        function(){
            $(this).css({
                "background-color":"lightslategray"
            })
        }
    )
})
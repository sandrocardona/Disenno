$(document).ready(function(){
    $(window).scroll(function(){
        $('header').css("position","fixed");
        $('header').css("width","100%");
        $('header').css("background","white");
        $('header').css("opacity","0.8");
    })

    $('#menu-principal').on({
        mouseenter:function(){
            $('label').css("background","black");
        },

        mouseleave:function(){
            $('label').css("background","lightslategray");
        },

        click:function(){
/*             $('header > nav#menu-principal > label > ul#menu').slideToggle(); */
            $('header > nav#menu-principal > label > ul#menu').css({
                "display":"flex",
                "flex-flow": "column",
                "position": "absolute",
                "background-color": "lightslategray",
                "top": "2.75rem",
                "padding-left": "0.1rem",
                "width": "50rem"
            }),

            $('header > nav#menu-principal > label > ul#menu > li').css({
                "padding": "0.5rem",
                "border-bottom": "1px solid white"
            })
        },
    })
})
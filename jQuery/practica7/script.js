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
        }
    })
})
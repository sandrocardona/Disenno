$(document).ready(function(){
    var colored = false;
    $("header > nav#menu-principal > label").click(function(){
        if(colored){
            $(this).animate({"background-color":"black"})
        }else{
            $(this).animate({"background-color":"white"})
        }
        colored = !colored
    })
})
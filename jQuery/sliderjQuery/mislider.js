$(document).ready(function(){
    var SliderModule = ( function(){
        var pb = {}; //Creamos un objeto
        //Almacenamos nuestro #slider en el atributo elslider
        pb.elslider = $('#slider');
        //El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li')
        }

        //Variables globales
        var SliderInterval,
        currentSlider = 0,
        nextSlider = 1,
        lengthSlider = pb.items.panels.length;

        //Constructor del Slider
        pb.init = function(settings){
            //console.log("inicializado");
            SliderInit();
        }

        //Función que inicializa el slider
        var SliderInit = function(){
            SliderInterval = setInterval(pb.startSlider, 3000)
        }

        pb.startSlider = function(){
            console.log("Mensaje")
        }

        return pb; //Devolvemos el objeto pb
    }()); // () es para que se ejecute automáticamente

    //Llamada al constructor
    SliderModule.init();
})
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
            var loscontroles = '';
            //console.log("inicializado");
            SliderInit();

            for(var i=0 ; i<lengthSlider ; i++){
                if(i===0){
                    loscontroles +='<li class=active></li>'
                }else{
                    loscontroles +='<li></li>'
                }
            }

            //Insertamos los controles creados en el HTML
            $('#control-buttons').html(loscontroles);

            $('#control-buttons li').click(function(){
                //Al hacer click en la bolita
                console.log($(this).index());
                if(currentSlider !== $(this).index()){
                    cambiarPanel($(this).index());
                }
            });
        }

        //Función que inicializa el slider
        var SliderInit = function(){
            SliderInterval = setInterval(pb.startSlider, 3000)
        }

        pb.startSlider = function(){
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            if(nextSlider >= lengthSlider){
                nextSlider = 0;
                currentSlider = lengthSlider -1;
            }

            //EFECTOS
            //Eliminamos la clase de los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass('active');
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            //Actualizar variables
            currentSlider = nextSlider;
            nextSlider += 1;
        }

        var cambiarPanel = function(indice){
            //Limpiar el intervalo previamente
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');
            //comprobamos que el índice está disponible
            //dentro de los paneles del slider
            if(indice >= lengthSlider){
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }
            //EFECTOS
            //Eliminamos clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass('active');
            //Efectos de transicion
            paneles.eq(currentSlider).fadeOut('slow');
            //El siguiente panel del slider es el que indique el parametro "indice"
            paneles.eq(indice).fadeIn('slow');

            //Actualizar variables
            currentSlider = indice;
            nextSlider = indice + 1;

            //Reactivar el slider
            SliderInit();
        }

        return pb; //Devolvemos el objeto pb
    }()); // () es para que se ejecute automáticamente

    //Llamada al constructor
    SliderModule.init();
})
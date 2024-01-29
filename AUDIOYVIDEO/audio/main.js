/* VARIABLES Y CONSTANTES */

const audio = document.getElementById("audio1");
var play = document.getElementById("play");
var muted = document.getElementById("mute");
var vol = document.getElementById("rango");
var restart = document.getElementById("restart");

/* REPRODUCIR O PAUSAR CANCIÓN */

play.addEventListener("click",()=>{
    let playIcon = document.getElementById("Bold");
    if(!audio.paused && !audio.ended){
        audio.pause();
        playIcon.innerHTML='<path d="M20.463,7.713l-9.1-6.677A5.317,5.317,0,0,0,2.9,5.323V18.677a5.311,5.311,0,0,0,8.46,4.287l9.105-6.677a5.315,5.315,0,0,0,0-8.574Zm-1.774,6.155-9.1,6.677A2.317,2.317,0,0,1,5.9,18.677V5.323a2.276,2.276,0,0,1,1.27-2.066A2.328,2.328,0,0,1,8.223,3a2.3,2.3,0,0,1,1.362.455l9.1,6.677a2.316,2.316,0,0,1,0,3.736Z"/>';
    } else {
        audio.play()
        playIcon.innerHTML='<path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z"/><path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z"/>';
    }
});

/* MUTEAR EL AUDIO */

muted.addEventListener("click",()=>{
    let muted_icon = document.getElementById("Layer_1");
    if(audio.volume>0){
        muted_icon.innerHTML='<path d="m12,16.242v7.77l-7.356-6.013h-2.644c-1.103,0-2-.897-2-2v-8c0-1.026.776-1.873,1.771-1.987l10.229,10.229Zm2,2.758v2h1c.543,0,1.082-.049,1.612-.145l-1.855-1.855h-.757Zm6.521.107l3.436,3.436-1.414,1.414L.043,1.457,1.457.043l4.717,4.717L12,.037v10.549l4.175,4.175c1.093-.464,1.825-1.543,1.825-2.761,0-1.654-1.346-3-3-3h-1v-2h1c2.757,0,5,2.243,5,5,0,1.759-.915,3.345-2.346,4.24l1.439,1.439c1.809-1.308,2.907-3.424,2.907-5.679,0-3.86-3.141-7-7-7h-1v-2h1c4.963,0,9,4.038,9,9,0,2.79-1.308,5.415-3.479,7.107Z"/>';
        audio.volume=0;
    } else {
        muted_icon.innerHTML='<path d="M2,6A2,2,0,0,0,0,8v8a2,2,0,0,0,2,2H4.8L12,23.977V.017L4.8,6Z"/><path d="M20,12a5.006,5.006,0,0,0-5-5H14V9h1a3,3,0,0,1,0,6H14v2h1A5.006,5.006,0,0,0,20,12Z"/><path d="M15,3H14V5h1a7,7,0,0,1,0,14H14v2h1A9,9,0,0,0,15,3Z"/>';
        audio.volume=vol.value/100;
    }
});

/* CAMBIAR VOLUMEN */

vol.oninput = function(){
    audio.volume=vol.value/100;
};

/* REINICIAR EL AUDIO */

restart.addEventListener("click",()=>{
    audio.currentTime = 0;
});

/* MOSTRAR TIEMPO DE AUDIO */

audio.addEventListener("timeupdate", () => {
    minutes = Math.floor(audio.currentTime / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(audio.currentTime % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;

    document.getElementById("timer").innerHTML= minutes + ":" + seconds;
  });
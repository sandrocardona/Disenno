const audio = document.getElementById("audio1");

function display(){
    let audio = document.getElementById("audio1");
    if(!audio.paused && !audio.ended){
        audio.pause();
        (console.log("audio pausado"));
    } else {
        audio.play()
        .then(console.log("audio reproduciendose"));
    }
}

/* CAMBIAR VOLUMEN */
console.log(audio.volume);
let rango = document.getElementById("rango");
rango.addEventListener('change', () =>{
    audio.volume = rango.ariaValueMax;
    console.log(audio.volume);
})

/* MUTEAR EL AUDIO */

function mute(){
    let audio = document.getElementById("audio1");
    if(audio.volume>0){
        audio.volume=0;
    } else {
        audio.volume=0.5;
    }
    console.log(audio.volume);
}

/* Mostrar tiempo de audio */

audio.addEventListener("timeupdate", () => {
    document.getElementById("timer").innerHTML=Number.parseInt(audio.currentTime);
    console.log("Current second: ", Math.round(audio.currentTime));
  });
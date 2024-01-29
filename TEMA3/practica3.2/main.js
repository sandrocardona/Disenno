const audio = new Audio("./audio/hotel-california.m4a");
let on = false;
function play(){
    if(on===false){
        audio.play();
        on=true;
        document.getElementById("play").innerHTML = "||";
    } else {
        audio.pause();
        on=false;
        document.getElementById("play").innerHTML = ">";
    }
};

function mute(){
    audio.muted();
}
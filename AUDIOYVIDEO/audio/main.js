function display(){
    if(!audio1.paused && !audio1.ended){
        audio1.pause();
        (console.log("audio pausado"));
    } else {
        audio1.play()
        .then(console.log("audio reproduciendose"));
    }
}
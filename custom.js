let audio = document.getElementById("audio");
let playPauseBTN = document.getElementById("playPauseBTN");
let count =0;

function playPause(){
    if(count === 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9658;"; 
    }

}
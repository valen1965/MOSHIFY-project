var audio = document.getElementById("audio");
var playBtn = getElementById("playBtn");
var count =0;

function playPause(){
    if(count == 0) {
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();
    }

}
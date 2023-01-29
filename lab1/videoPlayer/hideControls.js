//play
const video = document.querySelector(".video");
const playVideo = document.querySelector(".playButton");
function playFunction() {

    video.play();
}
playVideo.addEventListener("click", playFunction);


//stop or pause

const stopVideo = document.querySelector(".pauseButton");
function stopunction() {
    video.pause();
}
stopVideo.addEventListener("click", stopunction);


//start from begin
const starVideo = document.getElementById("startFromBrgin");
function startFunction() {
    video.currentTime = 0
}
starVideo.addEventListener("click", startFunction);


//go to end
const endVideo = document.getElementById("goToEnd");
function endFunction() {
    video.currentTime = video.duration;
}
endVideo.addEventListener("click", endFunction);


//bar
const myProgress = document.getElementById("myProgress");
const curtimetext = document.getElementById("currentTime");
const durtimetext = document.getElementById("durationTime");


myProgress.addEventListener("change", myBar);
video.addEventListener("timeupdate", timeUpdate);

function myBar() {
    const changing = video.duration * (myProgress.value / 110);
    video.currentTime = changing;
}
function timeUpdate() {
    // myBar();
    const dur = video.currentTime * (110 / video.duration);
    myProgress.value = dur;
    let curmins = Math.floor(video.currentTime / 60);
    let cursecs = Math.floor(video.currentTime - curmins * 60);
    let durmins = Math.floor(video.duration / 60);
    let dursecs = Math.floor(video.duration - durmins * 60);
    if (cursecs < 10) { cursecs = "0" + cursecs; }
    if (dursecs < 10) { dursecs = "0" + dursecs; }
    if (curmins < 10) { curmins = "0" + curmins; }
    if (durmins < 10) { durmins = "0" + durmins; }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;

}

//back 5 sec
const backsec = document.getElementById("back5Sec");
function backInSec() {
    video.currentTime -= 5;
}
backsec.addEventListener("click", backInSec);

//add 5 sec
const addsec = document.getElementById("add5Sec");
function addInSec() {
    video.currentTime += 5;
}
addsec.addEventListener("click", addInSec);

//volume
const myVolume = document.getElementById("sound");
function changeVolume() {
    video.volume = myVolume.value; 
}
myVolume.addEventListener("change", changeVolume);

//mute
const muted = document.getElementById("muted");
function mutevoice() {
    video.volume = 0;
}
muted.addEventListener("click", mutevoice);

//speed
const speed = document.getElementById("speed");
function changSpeed() {
    video.playbackRate = speed.value;
}
speed.addEventListener("change", changSpeed);
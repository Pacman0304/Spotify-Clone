console.log("welcome to spotify")

let songIndex = 0;



let audioElement = new Audio("songs/1s.mp3");
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let current_Time = document.getElementById('current_Time');
const duration = document.getElementById('duration');
let song_duration = document.getElementsByClassName('songduration');
let voice = document.getElementById('voice');
let giff = document.getElementById('giff');
let masterSongName = document.getElementById('masterSongName');
const queue = [...document.querySelectorAll('.queue')];
let track = document.createElement("audio");

let songs = [
    {songName: "Excuses", filePath: "/songs/1s.mp3", coverPath: "/cover/cover 1.jpg"},
    {songName: "Sunflower", filePath: "/songs/2s.mp3", coverPath: "/cover/cover 2.jpg"},
    {songName: "Enemy", filePath: "/songs/3s.mp3", coverPath: "/covers/cover 3.jpg"},
    {songName: "On My Way", filePath: "/songs/4s.mp3", coverPath: "/cover/cover 4.jpg"},
    {songName: "No Love", filePath: "/songs/5s.mp3", coverPath: "/cover/cover 5.jpg"},
    {songName: "Thunder", filePath: "/songs/6s.mp3", coverPath: "/cover/cover 6.jpg"},
    {songName: "Let Me Love You", filePath: "/songs/7s.mp3", coverPath: "/cover/cover 7.jpg"}
]
   
//audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
        giff.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
        giff.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', ()=>{

    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    ProgressBar.value = progress;
})
ProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
}
)


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        SongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}s.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        giff.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
   if (songIndex>7){
    songIndex = 0
   }
   else{songIndex += 1;

}
        audioElement.src = `songs/${songIndex+1}s.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0){
     songIndex = 0
    }
    else{songIndex -= 1;
 
 }
         audioElement.src = `songs/${songIndex+1}s.mp3`;
         masterSongName.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-circle-pause');
     
 })

function setVolume(){
    track.volume = voice.value / 100;
    voice.addEventListener("change", function(e) {
        audioElement.volume = e.currentTarget.value / 100;
    })
    } 
    
    
    
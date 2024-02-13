const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const play = document.getElementById("play");

let progress = document.getElementById("progress");

let isPlaying = false;

function playMusic() {
    isPlaying = true;
    song.play();
    ctrlIcon.classList.remove("ri-play-fill");
    ctrlIcon.classList.add("ri-pause-fill");
    mImg.classList.add("animation");
}

function pauseMusic() {
    isPlaying = false;
    song.pause();
    ctrlIcon.classList.replace("ri-pause-fill", "ri-play-fill");
    mImg.classList.remove("animation");
}

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

// Progress Bar
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.min = song.currentTime;
}

if (song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1000);
}

progress.onchange = function () {
    playMusic();
    song.currentTime = progress.value;
}

// now add next and prev song feature
const songs = [
    {
        name: "music-1",
        title: "Gear 5",
        artist: "One Piece"
    },
    {
        name: "music-2",
        title: "I'm Your Superman",
        artist: "Eminem"
    },
    {
        name: "music-3",
        title: "Vemon",
        artist: "Eminem"
    }
];

const backward = document.getElementById("backward");
const forward = document.getElementById("forward");

const title = document.querySelector(".title");
const artist = document.querySelector(".singer");
const mImg = document.querySelector("img");


let songIndex = 0;

function loadSong(songs) {
    title.innerHTML = songs.title;
    artist.innerHTML = songs.artist;
    mImg.src = `img/${songs.name}.jpg`;
    song.src = `./music/${songs.name}.mp3`;
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
}

forward.addEventListener('click', nextSong);
backward.addEventListener('click', prevSong);
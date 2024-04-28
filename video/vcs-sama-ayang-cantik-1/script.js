  import videoList from '../../dqtq.js';

function addVideo(video) {
    const { id, vidSrc, judul, views, downloadUrl, thumbSrc } = video;
    const contentDiv = document.getElementById("content");
    const down = document.getElementById("myButton");
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("ca1", "ca2");
    newDiv.id = id;
    down.setAttribute("onclick", `window.location.href = '${downloadUrl}'`);

    newDiv.innerHTML = `
        <span class="thumb"><span class="wpvid" class="center-poster"><video poster="${thumbSrc}" class="vidplay" autoplay="" name="media" id="videoPlayer" controlsList="nodownload">
        <source id="sourcevideo" src="${vidSrc}" type="video/mp4">
            
    </video>
    </span><p><span id="duration"></span></p><input type="range" id="seekBar" value="0" min="0" step="1">
    <span class="control">
    <span class="material-symbols-outlined" id="playButton">
play_circle
</span><span class="material-symbols-outlined" id="fast_forward">
fast_forward
</span><span class="material-symbols-outlined" id="fast_rewind">
fast_rewind</span><span class="material-symbols-outlined" id="fullscreen">
fullscreen
</span><span class="material-symbols-outlined" id="volume">
volume_up
</span><input id="volumeControl" type="range" min="0" max="1" step="0.01" value="1"></span>
        <div class="tittle-video">
            <span class="bungkus-judul">
                <span class="nama-video"><h3 id="judul_video_${id}" style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; cursor: pointer;">${judul}</h3>
                <span class="palg"><p style="cursor: pointer;">GenZW • <span id="view_video_${id}">${views}</span>K Ditonton</p></span>
            </span>
            <span class="kanan"></span>
        </div>
        </span>
    `;
    
    contentDiv.appendChild(newDiv);
}

// Tersisa kode untuk fungsi searchVideos dan event listener

// Kode untuk menambahkan video

// Mendapatkan dat4 hanya untuk video ke-14
// Buat salinan independen dari videoList menggunakan spread operator
const videoToDisplay = [videoList[26]];

// Menambahkan hanya video ke-14
videoToDisplay.forEach(video => {
    addVideo(video);
});

var video = document.getElementById("videoPlayer");
var seekBar = document.getElementById("seekBar");
var playPauseButton = document.getElementById("playButton");
var durationDisplay = document.getElementById("duration");

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = "pause_circle";
    } else {
        video.pause();
        playPauseButton.textContent = "play_circle";
    }
}

function updateSeekBar() {
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
}

function updateVideoTime() {
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
}

document.addEventListener('DOMContentLoaded', function() {
    const fastForward = document.getElementById('fast_forward');
    const fastRewind = document.getElementById('fast_rewind');
    const fullscreen = document.getElementById('fullscreen');
    const volumeControl = document.getElementById('volumeControl');

    volumeControl.addEventListener('input', function() {
        video.volume = volumeControl.value;
    });
    fastForward.addEventListener('click', function() {
        video.currentTime += 5; // Add 5 seconds to the current time
    });

    fastRewind.addEventListener('click', function() {
        video.currentTime -= 5; // Subtract 5 seconds from the current time
    });

    fullscreen.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    });

    // Fungsi untuk mengalihkan ke halaman a.html setelah video ditahan selama 3 detik
    let timer;
    video.addEventListener('mousedown', function() {
        timer = setTimeout(function() {
            window.location.href = 'a.html';
        }, 1000); // Durasi tahan 3 detik
    });

    video.addEventListener('mouseup', function() {
        clearTimeout(timer);
    });
    video.addEventListener('click', function(event) {
        event.preventDefault();
    });

    video.addEventListener('mousedown', function(event) {
        event.preventDefault();
    });

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    function handleFullscreenChange() {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            // Video dalam mode fullscreen, sembunyikan tombol download
            video.controls = true; // Munculkan kontrol video
        } else {
            // Video tidak dalam mode fullscreen, tampilkan tombol download
            video.controls = false; // Sembunyikan kontrol video
        }
    }

    // Menampilkan durasi video
    video.addEventListener('loadedmetadata', function updateDuration() {
    var duration = video.duration;
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);
    var currentMinutes = Math.floor(video.currentTime / 60);
    var currentSeconds = Math.floor(video.currentTime % 60);
    durationDisplay.textContent = currentMinutes + ":" + (currentSeconds < 10 ? '0' : '') + currentSeconds + " / " + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
});
function updateDuration() {
    var duration = video.duration;
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);
    var currentMinutes = Math.floor(video.currentTime / 60);
    var currentSeconds = Math.floor(video.currentTime % 60);
    durationDisplay.textContent = currentMinutes + ":" + (currentSeconds < 10 ? '0' : '') + currentSeconds + " / " + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

video.addEventListener('loadedmetadata', updateDuration);
video.addEventListener('timeupdate', updateDuration);
});

playPauseButton.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateSeekBar);
seekBar.addEventListener("change", updateVideoTime);

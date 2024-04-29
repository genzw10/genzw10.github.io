import videoList from '../../dqtq.js';
import directlinks from '../../wp-content/js/monetag.js';
function addVideo(video) {
    const { id, thumbSrc, judul, views, videoUrl } = video;
    const contentDiv = document.getElementById("content");
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("ca1", "ca2");
    newDiv.id = id;
    
    let isFirstClick = true;

// Fungsi untuk memilih link secara acak dari array
function getRandomLinks() {
  return directlinks[Math.floor(Math.random() * directlinks.length)];
}

newDiv.onclick = () => {
  if (isFirstClick) {
    window.location.href = getRandomLinks(); // Mengarahkan ke salah satu directlink secara acak
    isFirstClick = false;
  } else {
    window.location.href = videoUrl; // Mengarahkan ke halaman videoUrl setelah kembali
  }
};
    newDiv.innerHTML = `
        <span class="thumb"><span class="center-poster"><img id="thumb_video_${id}" src="${thumbSrc}" alt=""></span>
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
function searchVideos() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const videos = document.querySelectorAll(".ca1");
    
    videos.forEach(video => {
        const judul = video.querySelector(".nama-video h3").innerText.toLowerCase();
        const kataKunci = input.split(" "); // Memisahkan input pencarian menjadi kata-kata terpisah
        
        let isMatch = false;
        kataKunci.forEach(kata => {
            if (judul.includes(kata)) {
                isMatch = true;
            }
        });
        
        // Menampilkan atau menyembunyikan video berdasarkan hasil pencocokan kata kunci
        video.style.display = isMatch ? "block" : "none";
    });
}

// Menambahkan event listener untuk mendengarkan kejadian "keyup" pada input pencarian
document.getElementById("search-input").addEventListener("keyup", function(event) {
    // 13 adalah kode tombol untuk "Enter"
    if (event.keyCode === 13) {
        searchVideos(); // Memanggil fungsi pencarian saat tombol "Enter" ditekan
    }
});
let videoListTerbalik =
videoList.reverse();

// Tersisa kode untuk fungsi searchVideos dan event listener
// Kode untuk menambahkan video
videoList.forEach(video => {
    addVideo(video);
});
function directlinksRandom() {
  return directlinks[Math.floor(Math.random() * directlinks.length)];
}
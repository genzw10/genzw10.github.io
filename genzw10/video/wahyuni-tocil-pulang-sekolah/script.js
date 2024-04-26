import videoList from '../../dqtq.js';

function addVideo(video) {
    const { id, vidSrc, judul, views, downloadUrl } = video;
    const contentDiv = document.getElementById("content");
    const down = document.getElementById("myButton");
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("ca1", "ca2");
    newDiv.id = id;
    down.setAttribute("onclick", `window.location.href = '${downloadUrl}'`);

    newDiv.innerHTML = `
        <span class="thumb"><span class="center-poster"><iframe class="thumb" width="600" height="480" src="${vidSrc}" scrolling="no" frameborder="0" allowfullscreen="true"></iframe></span>
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

// Mendapatkan data hanya untuk video ke-14
// Buat salinan independen dari videoList menggunakan spread operator
const videoToDisplay = [videoList[10]];

// Menambahkan hanya video ke-14
videoToDisplay.forEach(video => {
    addVideo(video);
});

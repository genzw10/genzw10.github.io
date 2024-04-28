  import videoList from '../../../dqtq.js';

function addVideo(video) {
    const { id, vidSrc, judul, views, downloadUrl, thumbSrc, size } = video;
    const contentDiv = document.getElementById("content");
    const down = document.getElementById("myButton");
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("ca1", "ca2");
    newDiv.id = id;
    down.setAttribute("onclick", `window.location.href = 'JhUvFsj.html'`);

    newDiv.innerHTML = `
        <body><div class="downlod">
               <div class="info">
 
        <h4>1. jika download error ulangi dan lihat ukuran download sesuai atau tidak<h4>
    <br><br>
     
        <p>${judul}</p>
        <p>Size | ${size} MB</p>
    </div>
        </div>
</body>
<style>
   .downlod{
        padding-top:400px;   
        
    }

    .info{
        color:white;
    }
    p,
    h4{
        text-align:center;
    }
</style>
    `;
    
    contentDiv.appendChild(newDiv);
}

// Tersisa kode untuk fungsi searchVideos dan event listener

// Kode untuk menambahkan video

// Mendapatkan data hanya untuk video ke-14
// Buat salinan independen dari videoList menggunakan spread operator
const videoToDisplay = [videoList[27]];

// Menambahkan hanya video ke-14
videoToDisplay.forEach(video => {
    addVideo(video);
});

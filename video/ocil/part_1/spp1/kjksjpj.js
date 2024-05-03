 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 import videoList from '../../../../wp-content/js/auieo.js';

function addVideo(video) {
    const { id, vidSrc, judul, views, downloadUrl, thumbSrc, size } = video;
    const contentDiv = document.getElementById("content");
    
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("ca1", "ca2");
    newDiv.id = id;

    newDiv.innerHTML = `
        <body><div class="downlod">
                 <div class="info">
                     <p>${judul}</p>
        
        <p>Size | <span style="background-color:#95e0ff;">${size} MB</span>></p>
 <iframe class="responsive-iframe" src="${vidSrc}" frameborder="0" allowfullscreen></iframe>
  
        <h4>Untuk Mendownload video tahan Video Atau Klik titik 3 di pojok video dan download <h4>
    <br><br>
     
        
    </div>
        </div>
</body>
<style>
.download{
    
}
    .info{
        color:white;
        
    justify-content: center;
    align-items: center;
    height: 100vh;
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
const videoToDisplay = [videoList[0]];

// Menambahkan hanya video ke-14
videoToDisplay.forEach(video => {
    addVideo(video);
});

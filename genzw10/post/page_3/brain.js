function addVideo(id, thumbSrc, judul, views, videoUrl) {
    const contentDiv = document.getElementById("content");
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("ca1");
    newDiv.classList.add("ca2")
    newDiv.id = id;
    newDiv.setAttribute("onclick", `window.location.href = '${videoUrl}'`);
    
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
        if (judul.includes(input)) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
}

// Menambahkan video dengan id vdy-1
addVideo("vdy-1", "https://i.imgur.com/ti46U3A.png", "Ngewe Sama Adek Keponakan", "14", "../../video/ngewe_sama_adek_keponakan/index.html");

addVideo("vdy-2", "https://img.doodcdn.co/splash/nwjsa3my7q4e1vwf.jpg", "Judul Video 2", "200", "video_kedua.html");

addVideo("vdy-3", "https://img.doodcdn.co/splash/rmvik1zt3zi6i2eo.jpg", "Judul Video 2", "200", "video_kedua.html");

addVideo("vdy-4", "../../posters.png", "Judul Video 2", "200", "video_kedua.html");



function addVideo(id, thumbSrc, judul, views, videoUrl) {
    const contentDiv = document.getElementById("content");
document.getElementById("myButton");
    
    const newDiv = document.createElement("div");
    const down = document.getElementById("myButton");
    newDiv.classList.add("ca1");
    newDiv.classList.add("ca2")
    newDiv.id = id;
    down.setAttribute("onclick", `window.location.href = '${videoUrl}'`);
    
    newDiv.innerHTML = `
        <span class="thumb"><span class="center-poster"><iframe class="thumb" width="600" height="480" src="${thumbSrc}" scrolling="no" frameborder="0" allowfullscreen="true"></iframe></span>
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
addVideo("vdy-4", "https://d000d.com/e/ebzqdncp1tzx", "Bocil Ngocok Memek sendiri sampai basah", "11.6", "https://d000d.com/d/ebzqdncp1tzx");

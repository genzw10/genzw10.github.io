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
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
addVideo("vdy-11", "https://ds2play.com/e/y0bgr7zvie1eoe81n180f5qtd4usdqpi", "No Title", "0.0", "../../video/v_11/");
addVideo("vdy-12", "https://ds2play.com/e/g040jc8od6ttqfug4zp3eyi2ui36ci7b", "No Title", "0.0", "../../video/v_12/");
addVideo("vdy-13", "https://ds2play.com/e/vppr766gh65goday5mocfz8uok07entx", "No Title", "0.0", "../../video/v_13/");
addVideo("vdy-14", "https://ds2play.com/e/xi5pcl5gxlblnez9qg039cniz49g0256", "No Title", "0.0", "../../video/v_14/");
addVideo("vdy-15", "https://ds2play.com/e/cz980iiois7bhqw35mmyulos5hsq28xz", "No Title", "0.0", "../../video/v_15/");
addVideo("vdy-16", "https://ds2play.com/e/n4dxxz8csa3638r237yhjn63hkjdy5d2", "No Title", "0.0", "../../video/v_16/");
addVideo("vdy-17", "https://ds2play.com/e/5i2exfdq2ccbn6wdgv0mb72nnhmkkgob", "No Title", "0.0", "../../video/v_17/");
addVideo("vdy-18", "https://ds2play.com/e/7m1ut89gglggjis3o5ldbyrhvjn5wwpl", "No Title", "0.0", "../../video/v_18/");
addVideo("vdy-19", "https://ds2play.com/e/ntszdg4cx1ocgvzd2i6wxvmzi5munz1o", "No Title", "0.0", "../../video/v_19/");
addVideo("vdy-20", "https://ds2play.com/e/9xgujhvjf92cjn6hq6kuaqzpbyapa9zd", "No Title", "0.0", "../../video/v_20/");
addVideo("vdy-21", "https://ds2play.com/e/jam2w9bjym3rty9b0curdzwgb0w3i899", "No Title", "0.0", "../../video/v_21/");
addVideo("vdy-22", "https://ds2play.com/e/b53rfzz18jjr3hxkmz0c32ms15vn7s5r", "No Title", "0.0", "../../video/v_22/");
addVideo("vdy-23", "https://ds2play.com/e/csntkx7dso1ecxumz407j6s4isyuw38m", "No Title", "0.0", "../../video/v_23/");
addVideo("vdy-24", "https://ds2play.com/e/lpbuyeg1z04s0bug3y6yz04tnscyvqgu", "No Title", "0.0", "../../video/v_24/");
addVideo("vdy-25", "https://ds2play.com/e/k6pagzne622fft8orsyjpr38zoipmx4f", "No Title", "0.0", "../../video/v_25/");
addVideo("vdy-26", "https://ds2play.com/e/458ry6d51bb089suauk70g29x6abxvy5", "No Title", "0.0", "../../video/v_26/");
addVideo("vdy-27", "https://ds2play.com/e/7adppbbw0e370gy1r0kxu44n7ljb7ss5", "No Title", "0.0", "../../video/v_27/");
addVideo("vdy-28", "https://ds2play.com/e/88coo539kra3zqcyqrgjz6c9qpffld0k", "No Title", "0.0", "../../video/v_28/");
addVideo("vdy-29", "https://ds2play.com/e/1c32udjpcmwkjrkq39lgof1czp9gre7q", "No Title", "0.0", "../../video/v_29/");
addVideo("vdy-30", "https://ds2play.com/e/xv5gad6ksygcna3jleiz3vtqxjb6uifu", "No Title", "0.0", "../../video/v_30/");
addVideo("vdy-31", "https://ds2play.com/e/hyga7lyeg0afdkwky79jahb37vegskla", "No Title", "0.0", "../../video/v_31/");
addVideo("vdy-32", "https://ds2play.com/e/f1xfsxtzsrclb7pi9460c9bo4aj8lhj6", "No Title", "0.0", "../../video/v_32/");
addVideo("vdy-33", "https://ds2play.com/e/aju3k94uw7kpx4pdei0dn815f12lfd2f", "No Title", "0.0", "../../video/v_33/");
addVideo("vdy-34", "https://ds2play.com/e/bx57a5dhvxt9t29j9cfndj7456vx22s4", "No Title", "0.0", "../../video/v_34/");
addVideo("vdy-35", "https://ds2play.com/e/0yomm45vfomrrm5yo6gt790xma8eev5g", "No Title", "0.0", "../../video/v_35/");
addVideo("vdy-36", "https://ds2play.com/e/mk35elk8h5xdt1zrutuzhprnztzwx64g", "No Title", "0.0", "../../video/v_36/");
addVideo("vdy-37", "https://ds2play.com/e/wwt68ee727d21xpmtj47o61dgf8hpy1c", "No Title", "0.0", "../../video/v_37/");addVideo("vdy-38", "https://ds2play.com/e/ih73a28bdkivvcmfd2");




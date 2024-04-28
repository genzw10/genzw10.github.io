  const checkbox = document.getElementById('togl');
const targetBox = document.getElementById('drawer-menu');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Checkbox aktif, tambahkan CSS
        targetBox.style.left = '0'; // Misalnya
    } else {
        // Checkbox tidak aktif, hapus CSS
        targetBox.style.left = '-300px'; // Misalnya
    }
});

// Event listener untuk menu item mn1
document.getElementById('mn1').onclick = function() {
    window.location.href = "../../";
};

// Event listener untuk menu item mn2
document.getElementById('mn2').onclick = function() {
    change('cat-ng');
};

// Event listener untuk menu item mn3
document.getElementById('mn3').onclick = function() {
    change('cat-keroyokan');
};

function change(itemid){
    const element = document.getElementById(itemid);
    if (element) {
        element.classList.toggle('mnm');
    } else {
        console.error("Element dengan id " + itemid + " tidak ditemukan.");
    }
}


function toggleMode() {
  const modeIcon = document.getElementById('mode-icon');
const body = document.body
  // Toggle icon
  if (modeIcon.textContent === 'light_mode') {
    modeIcon.textContent = 'dark_mode';
    // Tambahkan logika untuk beralih ke mode gelap di sini
    body.classList.add('light_mode');
  } else {
    modeIcon.textContent = 'light_mode';
    // Tambahkan logika untuk beralih ke mode terang di sini
    body.classList.remove('light_mode')
  }
}

document.getElementById("prev").addEventListener("click", function() {
    window.location.href = "../../page_1/";
});
document.getElementById("next").addEventListener("click", function() {
    window.location.href = "../../page_2/";
});;

// file: app.js

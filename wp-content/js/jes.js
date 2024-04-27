  // Ambil konten dari elemen dengan id "cntn" dari file code.html
fetch('../html/element.html')
  .then(response => response.text())
  .then(data => {
    // Seleksi elemen body dari init.html
    const bodyElement = document.body;

    // Masukkan konten yang diambil ke dalam elemen body
    bodyElement.innerHTML = data.match(/<div id="cntn">([\s\S]*?)<\/div>/)[0];
  })
  .catch(error => console.error('Error:', error));
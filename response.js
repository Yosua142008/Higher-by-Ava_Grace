document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("image");
  const container = document.querySelector(".container");
  const lyricsContainer = document.querySelector(".lyrics-container");

  // Fungsi untuk menyesuaikan tata letak berdasarkan ukuran layar
  function adjustLayout() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth <= 480) {
      // Perangkat kecil (smartphone)
      container.style.flexDirection = "column"; // Elemen disusun vertikal
      img.style.maxWidth = "100%"; // Gambar tidak melebihi lebar layar
      img.style.height = "auto"; // Tinggi menyesuaikan proporsi
      img.style.objectFit = "contain"; // Pastikan gambar tidak terpotong
      img.style.marginBottom = "16px"; // Tambahkan jarak dengan elemen lainnya

      // Sesuaikan tinggi kontainer lirik agar cukup ruang
      lyricsContainer.style.height = `${screenHeight * 0.5}px`; // Setengah dari tinggi layar
      lyricsContainer.style.fontSize = "0.9em"; // Font lebih kecil
    } else if (screenWidth <= 768) {
      // Tablet
      container.style.flexDirection = "column"; // Elemen tetap vertikal
      img.style.maxWidth = "90%"; // Gambar tidak melebihi 90% lebar layar
      img.style.height = "auto";
      img.style.objectFit = "contain";

      // Sesuaikan tinggi kontainer lirik
      lyricsContainer.style.height = `${screenHeight * 0.6}px`; // 60% dari tinggi layar
      lyricsContainer.style.fontSize = "1em"; // Font sedang
    } else {
      // Desktop
      container.style.flexDirection = "row"; // Elemen disusun horizontal
      img.style.maxWidth = "400px"; // Batas maksimal lebar gambar
      img.style.height = "auto";
      img.style.objectFit = "contain";

      // Kontainer lirik kembali ke ukuran penuh
      lyricsContainer.style.height = "80vh";
      lyricsContainer.style.fontSize = "1.2em";
    }
  }

  // Jalankan fungsi saat halaman dimuat
  adjustLayout();

  // Tambahkan event listener untuk menyesuaikan tata letak saat ukuran layar berubah
  window.addEventListener("resize", adjustLayout);
});

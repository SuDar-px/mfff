// script.js
let sliderWrapper = document.getElementById("slider-wrapper");
let startX;
let endX;

sliderWrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

sliderWrapper.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

sliderWrapper.addEventListener("touchend", () => {
  if (startX - endX > 50) {
    // Swipe left, move to next slide
    nextSlide();
  } else if (endX - startX > 50) {
    // Swipe right, move to previous slide
    prevSlide();
  }
});

function nextSlide() {
  // Your existing next slide logic
  // ...
}

function prevSlide() {
  // Your existing previous slide logic
  // ...
}
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Ganti path dengan path gambar yang ingin Anda download
    var imageUrl = './baru/Asset 32.png';
  
    // Membuat elemen <a> untuk download
    var downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'downloaded-image.jpg';
  
    // Menyembunyikan elemen <a> dan menambahkannya ke dalam dokumen
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
  
    // Mengaktifkan download dan menghapus elemen <a> setelah selesai
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
  
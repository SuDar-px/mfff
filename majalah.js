// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Tampilkan pop-up saat halaman dimuat
  showPopup();
});

function showPopup() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "flex";
}

function closePopup() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const indicatorsContainer = document.querySelector('.indicators');
  
    let currentIndex = 0;
  
    function updateSlider() {
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
      updateIndicators();
    }
  
    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }
  
    function goToPrevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1;
      }
      updateSlider();
    }
  
    function goToNextSlide() {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    }
  
    function createIndicators() {
      for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
      }
      updateIndicators();
    }
  
    function updateIndicators() {
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
  
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
  
    createIndicators();
  
    // // Autoplay
    // setInterval(goToNextSlide, 5000); // Ganti 5000 dengan interval waktu (dalam milidetik) yang diinginkan
  });
  document.addEventListener("DOMContentLoaded", function() {
    var scrollUpContainer = document.querySelector(".scroll-up-container");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) { // Change this value to set when the scroll-up text should appear
        scrollUpContainer.style.opacity = "1";
      } else {
        scrollUpContainer.style.opacity = "0";
      }
    });
  
    scrollUpContainer.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  
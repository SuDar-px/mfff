function sapaWaktu() {
  // Mendapatkan waktu saat ini
  var waktuSekarang = new Date();
  
  // Mendapatkan jam dalam format 24 jam
  var jam = waktuSekarang.getHours();

  // Memberikan salam berdasarkan waktu
  if (jam >= 0 && jam < 11) {
      return "Selamat pagi!";
  } else if (jam >= 11 && jam < 15) {
      return "Selamat siang!";
  } else if (jam >= 15 && jam < 18) {
      return "Selamat sore!";
  } else {
      return "Selamat malam!";
  }
}

function tampilkanSalam() {
  // Menjalankan fungsi dan mendapatkan salam sesuai waktu
  var salam = sapaWaktu();

  // Menampilkan salam di elemen dengan ID "hasil"
  document.getElementById("hasil").innerHTML = salam;
}
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const indicatorsContainer = document.querySelector('.indicators');
  let currentIndex = 0;
  let startX;

  function updateSlider() {
      slider.style.transform = `translateX(${-currentIndex * 100}%)`;
      updateIndicators();
  }

  function goToSlide(index) {
      currentIndex = index;
      updateSlider();
  }

  function handleTouchStart(event) {
      startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
      if (startX === undefined) return;

      const currentX = event.touches[0].clientX;
      const diffX = startX - currentX;

      if (diffX > 0) {
          goToNextSlide();
      } else if (diffX < 0) {
          goToPrevSlide();
      }

      startX = undefined;
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

  slider.addEventListener('touchstart', handleTouchStart);
  slider.addEventListener('touchmove', handleTouchMove);

  createIndicators();

  // Autoplay
  setInterval(goToNextSlide, 6000); // Change 5000 with the desired interval in milliseconds
});

 const quizData = [
     
      {
        question: "Siapa Raja Pertama Majapahit?",
        a: "A. Raden Wijaya",
        b: "B. Raden Arok",
        c: "C. Raden Kian Santang",
        d: "D. Bapakmu",
        correct: "a"
      },
      {
        question: "Tahun Berapa Kerajaan Majapahit Berdiri?",
        a: "A. 1234",
        b: "B. 1999",
        c: "C. 1293",
        d: "D. 3076",
        correct: "c"
      },
      {
        question: "Dimana Letak Kerajaan Majapahit??",
        a: "A. Surabaya",
        b: "B. Mojokerto",
        c: "C. Aceh",
        d: "D. Inggris",
        correct: "b"
      },
      {
        question: "Masa Kejayaan Majapahit Terjadi Ketika Pemerintahan Siapa?",
        a: "A. Raden Kian Santang",
        b: "B. Presiden",
        c: "C. Raden Joko",
        d: "D. Hayam Wuruk",
        correct: "d"
      },
      {
        question: "Apa Nama Candi Peninggalan Majapahit?",
        a: "A. Candi Penataran",
        b: "B. Candi Borobudur",
        c: "C. Candi Welirang",
        d: "D. Candi Candi An",
        correct: "a"
      },
      // Tambahkan objek quizData lain untuk soal berikutnya jika diperlukan
  ];
  
  const urls = [
    "teko-vidio.html",
    "majalah-utuh.html",
    // Daftar URL halaman lainnya
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        showResult();
      }
    } else {
      if (currentQuestion === 0) {
        window.location.href = "salinancuaca.html"; // Pengalihan jika jawaban salah pada soal pertama
      } else if (currentQuestion === 1) {
        window.location.href = "copianpolusi.html"; // Pengalihan jika jawaban salah pada soal kedua
      } else if (currentQuestion === 2) {
        window.location.href = "copianmerapi.html"; // Pengalihan jika jawaban salah pada soal kedua
      } else if (currentQuestion === 3) {
        window.location.href = "cpbanjir.html"; // Pengalihan jika jawaban salah pada soal kedua
      } else if (currentQuestion === 4) {
        window.location.href = "cpperang.html"; // Pengalihan jika jawaban salah pada soal kedua
      } else {
        // Tambahkan pengalihan untuk setiap soal selanjutnya jika diperlukan
      }


      
    }
  }
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    const questionEl = document.getElementById('question');
    const options = document.querySelectorAll('.option');
  
    questionEl.innerText = `${currentQuizData.question}`;
  
    options.forEach((option, index) => {
      option.innerText = currentQuizData[Object.keys(currentQuizData)[index + 1]];
    });
  }
  
  function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    if (score === quizData.length) {
      const randomURL = urls[Math.floor(Math.random() * urls.length)]; // Memilih URL secara acak dari daftar URL
      quizContainer.innerHTML = `<h1>Semua jawaban benar!</h1><h2>Tambah Wawasanmu Disini</h2><button class="button-style" onclick="moveToRandomPage('${randomURL}')">Selengkapnya</button>`;
    } else {
      quizContainer.innerHTML = `<h2>Skor Anda: ${score} dari ${quizData.length}</h2>`;
    }
  }
  
  function moveToRandomPage(url) {
    window.location.href = url; // Mengarahkan ke URL secara acak
  }
  
  loadQuiz();
  
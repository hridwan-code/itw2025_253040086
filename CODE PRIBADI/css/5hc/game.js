function openDetail(title, year, genre, desc, image, downloadLink) {
  document.getElementById('detailTitle').innerText = title;
  document.getElementById('detailYear').innerText = year;
  document.getElementById('detailGenre').innerText = genre;
  document.getElementById('detailDesc').innerText = desc;
  document.getElementById('detailImage').src = image;
  document.getElementById('detailDownload').href = downloadLink;

  document.getElementById('detailOverlay').classList.add('active');
  document.body.classList.add('modal-open');
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('active');
  document.body.classList.remove('modal-open');
}

/* close kalau klik overlay hitam */
document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('detailOverlay');
  const modal = overlay.querySelector('.detail-modal');

  overlay.addEventListener('click', function () {
    closeDetail();
  });

  modal.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  /* close pakai ESC */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDetail();
    }
  });
});

let currentIndex = 0;

/* slider image kiri */
function initSlider(images) {
  const track = document.getElementById('sliderTrack');
  track.innerHTML = '';

  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    track.appendChild(img);
  });

  currentIndex = 0;
  updateSlider();
}

function updateSlider() {
  const track = document.getElementById('sliderTrack');
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.next').addEventListener('click', (e) => {
  e.stopPropagation();
  const slides = document.querySelectorAll('#sliderTrack img');
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', (e) => {
  e.stopPropagation();
  const slides = document.querySelectorAll('#sliderTrack img');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

/* === OPEN DETAIL (sedikit dimodif) === */
function openDetail(title, year, genre, desc, images, downloadLink) {
  document.getElementById('detailTitle').innerText = title;
  document.getElementById('detailYear').innerText = year;
  document.getElementById('detailGenre').innerText = genre;
  document.getElementById('detailDesc').innerText = desc;
  document.getElementById('detailDownload').href = downloadLink;

  initSlider(images);

  document.getElementById('detailOverlay').classList.add('active');
  document.body.classList.add('modal-open');
}

// supaya si bg utama gerak

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const y = window.scrollY * 0.7; // atur angka di sini
  hero.style.backgroundPosition = `center ${y}px`;
});
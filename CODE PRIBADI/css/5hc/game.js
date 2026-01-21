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

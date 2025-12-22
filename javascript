alert("JS KELOAD");
<script>
function scrollToMinggu(minggu) {
    const row = document.getElementById('minggu' + minggu);

    // Hapus highlight dari baris lain
    const rows = document.querySelectorAll('.jurnal-table tr');
    rows.forEach(r => r.classList.remove('active'));

    // Tambah highlight ke baris yang dipilih
    row.classList.add('active');

    // Scroll halus ke baris
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
</script>
function showMinggu(no) {
  const semuaMinggu = document.querySelectorAll('.minggu');
  semuaMinggu.forEach(m => m.style.display = 'none');

  document.getElementById('minggu' + no).style.display = 'block';
}
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

document.querySelector(".close").onclick = function () {
  document.getElementById("lightbox").style.display = "none";
};
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("lightbox").style.display = "none";
    });
  }
});
function openModal(src) {
  document.getElementById("modal-img").src = src;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function showMinggu(nomor) {
  alert("JS jalan, klik Minggu " + nomor);
}
<div class="tab-minggu">
  <button onclick="showMinggu(1)">Minggu 1</button>
  <button onclick="showMinggu(2)">Minggu 2</button>
  <button onclick="showMinggu(3)">Minggu 3</button>
  <button onclick="showMinggu(4)">Minggu 4</button>
</div>
function showMinggu(n) {
  const minggu = document.querySelectorAll('.minggu');
  minggu.forEach((m, i) => {
    m.style.display = (i === n-1) ? 'block' : 'none';
  });
}
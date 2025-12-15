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
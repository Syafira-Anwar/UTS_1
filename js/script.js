// Fungsi untuk merender tabel stok dari dataKatalogBuku
function renderTabelStok() {
  const tbody = document.getElementById('tabelStokBody');
  if (!tbody) return;

  tbody.innerHTML = ""; // Bersihkan tabel sebelum render ulang

  dataKatalogBuku.forEach((buku, index) => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-amber-50/50 transition";
    
    tr.innerHTML = `
      <td class="p-4">${index + 1}</td>
      <td class="p-4 font-mono font-medium text-amber-900">${buku.kode}</td>
      <td class="p-4 font-semibold text-gray-900">${buku.judul}</td>
      <td class="p-4">${buku.penulis}</td>
      <td class="p-4"><span class="bg-amber-100 text-amber-900 text-xs px-2.5 py-1 rounded-full font-medium">${buku.kategori}</span></td>
      <td class="p-4">Rp ${buku.harga.toLocaleString('id-ID')}</td>
      <td class="p-4">
        <span class="font-bold ${buku.stok < 5 ? 'text-red-600' : 'text-green-700'}">${buku.stok} pcs</span>
      </td>
      <td class="p-4 text-center">
        <button onclick="hapusBarisStok(${buku.id})" class="text-red-500 hover:text-red-700 text-xs bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Fungsi DOM untuk menambahkan baris stok baru dari modal form
function tambahBarisStok(event) {
  event.preventDefault();

  const kode = document.getElementById('inputKode').value.trim();
  const judul = document.getElementById('inputJudul').value.trim();
  const penulis = document.getElementById('inputPenulis').value.trim();
  const kategori = document.getElementById('inputKategori').value.trim();
  const harga = parseInt(document.getElementById('inputHarga').value);
  const stok = parseInt(document.getElementById('inputStok').value);

  // Buat objek data baru
  const bukuBaru = {
    id: dataKatalogBuku.length > 0 ? dataKatalogBuku[dataKatalogBuku.length - 1].id + 1 : 1,
    kode,
    judul,
    penulis,
    kategori,
    harga,
    stok
  };

  // Masukkan ke array dataKatalogBuku
  dataKatalogBuku.push(bukuBaru);

  // Render ulang tabel menggunakan DOM
  renderTabelStok();

  // Tutup modal dan reset form
  closeModal('modalTambahStok');
  document.getElementById('formTambahStok').reset();
  
  // Munculkan notifikasi sukses
  if (typeof showAlert === 'function') {
    showAlert("Stok buku baru berhasil ditambahkan!", "success");
  }
}

// Fungsi hapus baris stok
function hapusBarisStok(id) {
  const index = dataKatalogBuku.findIndex(b => b.id === id);
  if (index !== -1) {
    dataKatalogBuku.splice(index, 1);
    renderTabelStok();
  }
}

// Otomatis render tabel saat halaman stok.html dimuat
document.addEventListener('DOMContentLoaded', () => {
  renderTabelStok();
});

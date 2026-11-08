# 📚 Toko Buku Nara - Website E-Commerce & Manajemen Toko Buku

Repositori ini berisi kode sumber untuk tugas proyek web (UTS) dengan judul **Toko Buku Nara**[cite: 2, 4]. Website ini dirancang menggunakan HTML, CSS, JavaScript Vanilla, dan Tailwind CSS dengan menerapkan konsep modularitas struktur file, penyimpanan data dummy lokal (`data.js`), serta manipulasi DOM interaktif.

---

## 📑 Daftar Isi
1. [Deskripsi Project](#-deskripsi-project)
2. [Fitur Utama](#-fitur-utama)
3. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
4. [Struktur Folder Project](#-struktur-folder-project)
5. [Penjelasan Data (Data Dummy)](#-penjelasan-data-data-dummy)
6. [Cara Menjalankan Project](#-cara-menjalankan-project)

---

## 📖 Deskripsi Project
**Toko Buku Nara** adalah aplikasi web interaktif yang dikembangkan untuk memenuhi tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web[cite: 2, 4]. Website ini mensimulasikan sistem operasional sebuah toko buku digital, mulai dari halaman autentikasi (login, daftar, lupa password), dashboard utama dengan sapaan berbasis waktu (*local time*), pengelolaan inventaris stok/katalog, keranjang belanja dan pemesanan (*checkout*), hingga sistem pelacakan pengiriman barang (*tracking*).

---

## 🚀 Fitur Utama
1. **Halaman Login (`index.html`)**
   * Input email dan password dengan tombol **Login**[cite: 1].
   * Validasi kredensial: Jika data salah/tidak sesuai, sistem akan menampilkan pop-up/alert custom bertuliskan: *"email/password yang anda masukkan salah"*[cite: 1].
   * Dilengkapi modal interaktif untuk **Lupa Password** dan **Daftar Akun Baru**[cite: 1].

2. **Dashboard Menu (`dashboard.html`)**
   * Navigasi utama yang menghubungkan ke menu Katalog Stok, Tracking Pengiriman, Laporan Pemesanan, dan History Transaksi[cite: 3].
   * Fitur **Greeting Dinamis** berbasis *local time* perangkat (Pagi/Siang/Sore/Malam) disertai jam digital *real-time*[cite: 3].

3. **Informasi Stok / Katalog (`stok.html`)**
   * Menampilkan daftar buku secara dinamis dari konstanta `dataKatalogBuku`.
   * Fitur interaktif untuk **menambahkan baris stok buku baru** secara instan menggunakan manipulasi JavaScript DOM[cite: 4].

4. **Halaman Pemesanan / Checkout (`chackout.html`)**
   * Menampilkan daftar item pemesanan yang dapat diubah jumlahnya (*quantity* + / -) atau dihapus[cite: 5].
   * Formulir informasi pemesan (Nama, Telepon, Email, Alamat) serta pilihan metode pembayaran (Transfer Bank, E-Wallet, COD)[cite: 5].

5. **Tracking Pengiriman (`tracking.html`)**
   * Fitur pelacakan paket berdasarkan **Nomor Delivery Order** (Contoh: `DO-001` atau `DO-002`).
   * Menampilkan nama pemesan, status pengiriman dengan *progress bar*, detail ekspedisi, tanggal kirim, jenis paket, total pembayaran, hingga riwayat perjalanan paket (*timeline*)[cite: 6].

---

##  Teknologi yang Digunakan
* **HTML5** (Struktur markup semantik)
* **Tailwind CSS** (Framework CSS modern via CDN untuk desain responsif)
* **JavaScript (ES6+)** (Logika interaktif, DOM Manipulation, dan pengelolaan state lokal)

---

##  Struktur Folder Project
Struktur direktori project disusun secara modular sebagai berikut[cite: 2]:

```text
tugas-uts-web1/
|-- index.html      # Halaman Login (dengan validasi pop-up & modal daftar/lupa password)[cite: 1, 2]
|-- dashboard.html  # Menu Utama & Greeting dinamis berdasarkan Local Time[cite: 2, 3]
|-- stok.html       # Informasi Stok / Katalog buku dinamis & tambah data via DOM[cite: 2, 4]
|-- tracking.html   # Halaman Pelacakan Pengiriman (Delivery Order)[cite: 2, 6]
|-- chackout.html   # Halaman Pemesanan & Pembayaran (Checkout)[cite: 2, 5]
|-- css/
|   |-- style.css   # Custom Stylesheet tambahan[cite: 2]
|-- js/
|   |-- script.js   # Logika interaktif, validasi form, & manipulasi DOM[cite: 2]
|   |-- data.js     # Variabel konstanta pusat data dummy[cite: 2, 4]
|-- assets/
|   |-- logo.png    # Aset logo opsional[cite: 2]
|-- img/
    |-- buku1.png   # Aset gambar sampul buku[cite: 2]
    |-- buku2.png
##  Deskripsi Project
**Toko Buku Nara** adalah aplikasi web interaktif yang dikembangkan untuk memenuhi tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web[cite: 2, 4]. Website ini mensimulasikan sistem operasional sebuah toko buku digital, mulai dari halaman autentikasi (login, daftar, lupa password), dashboard utama dengan sapaan berbasis waktu (*local time*), pengelolaan inventaris stok/katalog, keranjang belanja dan pemesanan (*checkout*), hingga sistem pelacakan pengiriman barang (*tracking*).

---

##  Fitur Utama
1. **Halaman Login (`index.html`)**
   * Input email dan password dengan tombol **Login**[cite: 1].
   * Validasi kredensial: Jika data salah/tidak sesuai, sistem akan menampilkan pop-up/alert custom bertuliskan: *"email/password yang anda masukkan salah"*[cite: 1].
   * Dilengkapi modal interaktif untuk **Lupa Password** dan **Daftar Akun Baru**[cite: 1].

2. **Dashboard Menu (`dashboard.html`)**
   * Navigasi utama yang menghubungkan ke menu Katalog Stok, Tracking Pengiriman, Laporan Pemesanan, dan History Transaksi[cite: 3].
   * Fitur **Greeting Dinamis** berbasis *local time* perangkat (Pagi/Siang/Sore/Malam) disertai jam digital *real-time*[cite: 3].

3. **Informasi Stok / Katalog (`stok.html`)**
   * Menampilkan daftar buku secara dinamis dari konstanta `dataKatalogBuku`.
   * Fitur interaktif untuk **menambahkan baris stok buku baru** secara instan menggunakan manipulasi JavaScript DOM[cite: 4].

4. **Halaman Pemesanan / Checkout (`chackout.html`)**
   * Menampilkan daftar item pemesanan yang dapat diubah jumlahnya (*quantity* + / -) atau dihapus[cite: 5].
   * Formulir informasi pemesan (Nama, Telepon, Email, Alamat) serta pilihan metode pembayaran (Transfer Bank, E-Wallet, COD)[cite: 5].

5. **Tracking Pengiriman (`tracking.html`)**
   * Fitur pelacakan paket berdasarkan **Nomor Delivery Order** (Contoh: `DO-001` atau `DO-002`).
   * Menampilkan nama pemesan, status pengiriman dengan *progress bar*, detail ekspedisi, tanggal kirim, jenis paket, total pembayaran, hingga riwayat perjalanan paket (*timeline*)[cite: 6].

---

##  Teknologi yang Digunakan
* **HTML5** (Struktur markup semantik)
* **Tailwind CSS** (Framework CSS modern via CDN untuk desain responsif)
* **JavaScript (ES6+)** (Logika interaktif, DOM Manipulation, dan pengelolaan state lokal)

---

## Struktur Folder Project
Struktur direktori project disusun secara modular sebagai berikut[cite: 2]:

```text
tugas-uts-web1/
|-- index.html      # Halaman Login (dengan validasi pop-up & modal daftar/lupa password)[cite: 1, 2]
|-- dashboard.html  # Menu Utama & Greeting dinamis berdasarkan Local Time[cite: 2, 3]
|-- stok.html       # Informasi Stok / Katalog buku dinamis & tambah data via DOM[cite: 2, 4]
|-- tracking.html   # Halaman Pelacakan Pengiriman (Delivery Order)[cite: 2, 6]
|-- chackout.html   # Halaman Pemesanan & Pembayaran (Checkout)[cite: 2, 5]
|-- css/
|   |-- style.css   # Custom Stylesheet tambahan[cite: 2]
|-- js/
|   |-- script.js   # Logika interaktif, validasi form, & manipulasi DOM[cite: 2]
|   |-- data.js     # Variabel konstanta pusat data dummy[cite: 2, 4]
|-- assets/
|   |-- logo.png    # Aset logo opsional[cite: 2]
|-- img/
    |-- buku1.png   # Aset gambar sampul buku[cite: 2]
  |-- buku2.png
 Penjelasan Data (js/data.js)
Seluruh data dummy pada aplikasi ini dipusatkan pada file js/data.js agar mudah dikelola tanpa memerlukan database backend:

validUsers: Menyimpan array data kredensial akun uji coba untuk login (Contoh: user@nara.com / password123 dan admin@nara.com / admin123).

dataKatalogBuku: Menyimpan daftar inventaris buku awal (seperti Laskar Pelangi, Bumi Manusia, Filosofi Teras, dan Atomic Habits) lengkap dengan informasi kode, penulis, kategori, harga, dan jumlah stok[cite: 4].

dataPemesanan: Menyimpan daftar item belanja sementara yang sedang aktif di halaman keranjang/checkout.

dataTracking: Menyimpan objek data pelacakan pengiriman berdasarkan nomor Delivery Order (DO-001 dan DO-002) yang mencakup status, persentase progress, informasi kurir, dan riwayat perjalanan (timeline)[cite: 6].

 Cara Menjalankan Project
Clone atau Unduh Repositori
Clone repositori ini ke komputer lokal Anda melalui terminal/Git Bash:

Bash
git clone [https://github.com/username-kamu/tugas-uts-web1.git](https://github.com/username-kamu/tugas-uts-web1.git)
Buka dengan Text Editor
Buka folder project menggunakan text editor seperti Visual Studio Code (VS Code).

Jalankan Menggunakan Live Server

Pastikan Anda telah memasang ekstensi Live Server di VS Code.

Klik kanan pada file index.html, lalu pilih "Open with Live Server".

Website akan otomatis terbuka di browser web Anda melalui http://localhost:5500.

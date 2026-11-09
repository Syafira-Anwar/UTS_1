# 📚 Toko Buku Nara

Aplikasi web front-end untuk Toko Buku Nara. Tugas UTS Web 1.

Saat ini halaman yang tersedia adalah **Halaman Login** (`login.html`).

## Fitur Halaman Login

- Input **email** dan **password**
- Tombol **Login**
- Jika email/password salah, muncul alert: *"email/password yang anda masukkan salah"*
- Jika berhasil, pengguna diarahkan ke `dashboard.html`
- Tombol **Lupa Password** dan **Daftar** yang muncul dalam bentuk **modal box/pop up**
  - Lupa Password: input email, lalu kirim link reset (simulasi)
  - Daftar: input nama, email, dan password (minimal 6 karakter)

## Struktur Folder

```
tugas-uts-web1/
├── index.html        ← redirect/halaman login
├── login.html        ← rename dari login.html1.html
├── dashboard.html, stok.html, checkout.html, tracking.html
├── css/style.css     ← pindahkan semua <style> ke sini
├── js/data.js        ← rename dari "data", tambah dataPengiriman
├── js/script.js      ← fungsi bersama (rupiah, cek login, logout, modal)
├── assets/logo.png   ← rename dari logo.jpg.png
└── img/
```

## Cara Menjalankan

1. Download atau clone folder `tugas-uts-web1`.
2. Buka file `login.html` di browser (klik dua kali, atau gunakan Live Server di VS Code).
3. Tidak perlu instalasi tambahan.

## Akun untuk Mencoba Login

| Email                    | Password   |
|--------------------------|------------|
| nara@email.com           | 123456     |
| admin@tokobukunara.com   | admin123   |

Data akun ada di `js/data.js` dan bisa diubah sesuai kebutuhan.

## Catatan

- Akun yang dibuat lewat form **Daftar** hanya tersimpan sementara di memori browser, jadi hilang saat halaman di-refresh.
- Setelah login berhasil, data pengguna disimpan di `localStorage` dengan key `userLogin`.
- Halaman `dashboard.html` belum dibuat di versi ini.

## Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)

  
Tampilan screenschoot

validasi logiin jika berhasil atau tidak nya maka akan muncul note di atas <img width="659" height="739" alt="image" src="https://github.com/user-attachments/assets/6f0e010f-4582-4ab5-8aae-04a41a28a2ef" />

tampilan dashboard 
<img width="1916" height="894" alt="image" src="https://github.com/user-attachments/assets/93934999-9531-4e2b-88d6-77b9bcb9f135" />

tampilan stok <img width="1806" height="879" alt="image" src="https://github.com/user-attachments/assets/8d790a4d-4d39-4cf2-ad84-ab21670b3587" />

tampilan checkout <img width="1646" height="912" alt="image" src="https://github.com/user-attachments/assets/7da9b64e-df40-4fd7-8c24-6cb3ff1b205c" />
<img width="1520" height="885" alt="image" src="https://github.com/user-attachments/assets/554dfd00-68e5-48fe-8149-3c38614277ce" />

tampilan tracking <img width="1900" height="499" alt="image" src="https://github.com/user-attachments/assets/658b059d-433a-41d1-a668-d4b26b71834a" />


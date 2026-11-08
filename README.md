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
├── login.html
├── README.md
├── css/
│   └── style.css      # tampilan halaman dan modal
└── js/
    ├── data.js        # data pengguna (array users)
    └── script.js      # logika login, modal, lupa password, daftar
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

  
Screenshoot dan penjelasanya


validasi logiin jika berhasil atau tidak nya maka akan muncul note di atas <img width="659" height="739" alt="image" src="https://github.com/user-attachments/assets/6f0e010f-4582-4ab5-8aae-04a41a28a2ef" />

<img width="1921" height="1031" alt="image" src="https://github.com/user-attachments/assets/6c4ac33e-19be-4cff-aeab-bdab7abfd25c" />

<img width="1920" height="977" alt="image" src="https://github.com/user-attachments/assets/b98511f7-7154-4bba-ae7b-0fe8cd9cd2e7" />

<img width="1916" height="982" alt="image" src="https://github.com/user-attachments/assets/eada15e8-21cf-4d05-8772-85d05aa52395" />



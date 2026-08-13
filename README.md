# Rayon Cibedug 1 Portal

Bertindaklah sebagai Senior Frontend Developer. Buatkan saya sebuah website landing page menggunakan React JS (Vite) dan Tailwind CSS. Nama website ini adalah "Rayon Cibedug 1". 

Gunakan referensi desain UI/UX dengan nuansa modern, elegan, dan didominasi warna gelap (Dark Navy/Hitam) dengan aksen warna Ungu (seperti #7038f8 atau Tailwind `purple-600`).

Berikut adalah spesifikasi detail fitur dan komponen yang harus dibuat:

1. FITUR TEMA (THEME SWITCHER)

- Buat fitur untuk mengganti tema website: Terang (Light), Gelap (Dark), dan Bawaan Sistem (System).

- Gunakan konfigurasi standar Tailwind untuk dark mode (class-based).

2. NAVBAR (NAVIGASI)

- Posisi melayang di atas (Fixed / Sticky di top-4), memiliki margin di sisi kiri dan kanan agar tidak menyentuh ujung layar.

- Berbentuk kapsul (rounded-full).

- Latar belakang transparan dengan efek Glassmorphism (menggunakan `backdrop-blur` dan `bg-opacity`).

- Komponen Navbar:

  - Kiri: Logo/Teks "Cibedug 1".

  - Tengah: Link menu (Beranda, Sambutan, Struktur, Jadwal) yang dilengkapi dengan icon (gunakan react-icons).

  - Kanan: Dropdown pemilih tema (Terang, Gelap, Sistem) dan sebuah tombol "Masuk" berwarna ungu solid.

3. HERO SECTION (LANDING PAGE)

- Tampilan full screen atau height yang proporsional.

- Gunakan placeholder image (atau warna gradient gelap) sebagai background yang diberi efek agak blur (`backdrop-blur-sm`) dan overlay gelap (opacity 60-80%) agar teks di depannya terbaca.

- Teks di tengah: 

  - Badge kecil di atas: "SELAMAT DATANG DI"

  - Heading besar: "Website Rayon Cibedug 1" (Buat kata "Rayon Cibedug 1" memiliki warna Ungu).

  - Sub-heading: Teks deskripsi singkat mengenai wadah pembentukan karakter siswa.

4. SECTION SAMBUTAN (Layout 2 Kolom)

- Kolom Kiri (Card Profil): Berisi foto profil lingkaran dengan border ungu, Nama Pembimbing, Jabatan, dan 2 tombol kecil di bawahnya (contoh: Pembinaan Karakter, Bimbingan Konseling).

- Kolom Kanan (Card Teks): Berisi badge "SAMBUTAN PEMBIMBING", kutipan besar ("Disiplin adalah jembatan..."), dan paragraf sambutan pembimbing. 

- Kedua card ini memiliki background warna gelap yang sedikit lebih terang dari background utama (misal `bg-slate-800` pada dark mode) dan sudut membulat (rounded-2xl).

5. SECTION STRUKTUR ORGANISASI

- Buatkan layout card atau bagan sederhana (menggunakan CSS Grid/Flexbox) yang menampilkan hierarki struktur organisasi rayon (Mulai dari Pembimbing Siswa, Ketua Rayon, hingga divisi-divisi).

6. SECTION JADWAL PIKET (DENGAN LOGIKA TANGGAL DINAMIS)

- Buat sebuah state atau variabel yang berisi data jadwal piket dari hari Senin sampai Jumat. Masing-masing hari berisi array berisi 7 nama siswa acak.

- Tampilkan tanggal dan hari saat ini secara dinamis di atas section ini (menggunakan objek `new Date()` pada JavaScript).

- Logika Highlight: Deteksi hari ini hari apa. Jika hari ini adalah hari kerja (Senin - Jumat), blok atau beri highlight warna ungu pada card/tabel hari tersebut agar terlihat menonjol dibandingkan hari lain.

- Tampilkan teks dinamis dan mencolok di atas jadwal yang bertuliskan: "Hari ini adalah hari [Nama Hari], yang bertugas piket adalah: [Daftar 7 nama siswa yang piket hari ini dipisahkan dengan koma]".

- Render data dari Senin - Jumat dalam bentuk Grid card agar rapi.

Tolong berikan kode yang lengkap dan bersih (clean code). Pisahkan menjadi beberapa komponen fungsional React (Navbar, Hero, Sambutan, Struktur, JadwalPiket) jika memungkinkan agar mudah dibaca, lalu gabungkan di App.jsx. Sertakan juga instruksi cara instalasi Tailwind dan dependencies yang dibutuhkan (seperti react-icons).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5d7b1414-ed16-41ef-81cc-3d75bfa903ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

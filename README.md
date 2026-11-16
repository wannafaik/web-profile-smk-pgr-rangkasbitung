# Website Profil Resmi SMKS PGRI Rangkasbitung

Selamat datang di repositori kode sumber **Website Profil Resmi SMKS PGRI Rangkasbitung**. Website ini dibangun sebagai media representasi digital sekolah, pusat informasi publik, publikasi prestasi siswa, dokumentasi kegiatan, serta sarana Sistem Penerimaan Murid Baru (SPMB).

Website dirancang dengan mengutamakan prinsip antarmuka modern, kecepatan akses tinggi (*zero-dependency framework*), tata letak responsif penuh di berbagai perangkat (*desktop, tablet, mobile*), dan interaktivitas yang ramah pengguna.

---

## 📌 Daftar Isi
1. [Identitas Sekolah & Visi Misi](#-identitas-sekolah--visi-misi)
2. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
3. [Struktur Direktori & File](#-struktur-direktori--file)
4. [Penjelasan Detail Setiap Halaman](#-penjelasan-detail-setiap-halaman)
5. [Fitur-Fitur Unggulan](#-fitur-fitur-unggulan)
6. [Panduan Pemeliharaan & Update Konten](#-panduan-pemeliharaan--update-konten)
7. [Sistem Desain & Palet Warna](#-sistem-desain--palet-warna)
8. [Cara Menjalankan Proyek](#-cara-menjalankan-proyek)
9. [Kontak & Media Sosial Resmi](#-kontak--media-sosial-resmi)

---

## 🏫 Identitas Sekolah & Visi Misi
* **Nama Sekolah**: SMKS PGRI Rangkasbitung
* **NPSN / Akreditasi**: 20601937 / Terakreditasi **A**
* **Alamat**: Jl. Dewi Sartika no 45L, Muara Ciujung Timur, Rangkasbitung, Kab. Lebak, Banten
* **Jargon & Visi**: **RUHAY**
  * **R** - Religius
  * **U** - Unggul
  * **H** - Handal
  * **A** - Andalan
  * **Y** - Yang Terbaik
* **Motto Kejuruan**: *"SMK Bisa, SMK Hebat — Siap Kerja, Santun, Mandiri, Kreatif!"*

---

## 🛠 Teknologi yang Digunakan
Proyek ini dibangun menggunakan arsitektur web murni (*pure web stack*) tanpa dependensi framework JavaScript yang berat (seperti React/Vue), sehingga menghasilkan waktu pemuatan halaman (*page load*) yang sangat instan dan ramah kuota:

* **HTML5**: Struktur semantik modern (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* **CSS3**: Sistem desain kustom terpusat pada `style.css` (lebih dari 4.600 baris) menggunakan CSS Variables, CSS Grid, Flexbox, animasi transisi halus, Glassmorphism, dan media queries breakpoint bertingkat.
* **JavaScript (ES6+)**: Skrip interaktif murni (*Vanilla JS*) pada `script.js` untuk navigasi mobile, modal lightbox, dynamic counter animation, dan visualisasi grafik data alumni.
* **FontAwesome 6.4.0**: Koleksi ikon antarmuka dan logo media sosial resmi.
* **Google Fonts**: Tipografi modern memadukan *Montserrat* (Heading, bobot tegas & elegan) dan *Poppins* (Body text, keterbacaan optimal).

---

## 📂 Struktur Direktori & File

```text
web-profile-smk-pgr-rangkasbitung/
│
├── assets/                     # Berkas gambar, foto kegiatan, dan logo sekolah
│   ├── LOGO_SMK.JPG            # Logo resmi SMKS PGRI Rangkasbitung
│   ├── KEPALA_SEKOLAH.JPG      # Foto Kepala Sekolah
│   ├── hero_bg.jpg             # Latar belakang banner hero utama
│   ├── Auditorium.JPG          # Dokumentasi Ruangan Auditorium
│   ├── Lab-kom.JPG             # Dokumentasi Laboratorium Komputer
│   ├── Perpustakaan.JPG        # Dokumentasi Perpustakaan
│   ├── Lapangan-olahraga.JPG   # Dokumentasi Lapangan Olahraga
│   └── ... (foto-foto juara, prestasi, dan kegiatan upacara)
│
├── index.html                  # Halaman Utama (Beranda)
├── tentang.html                # Profil Sekolah, Sejarah, Sambutan & Visi Misi
├── spmb.html                   # Informasi Pendaftaran Siswa Baru (SPMB / PPDB)
├── fasilitas.html              # Sarana & Prasarana Sekolah
├── berita.html                 # Warta Informasi & Berita Sekolah
├── prestasi.html               # Rekap Prestasi Akademik & Non-Akademik
├── galeri.html                 # Dokumentasi Galeri Foto Sekolah
├── ekskul.html                 # Daftar 12 Ekstrakurikuler Sekolah
├── testimoni.html              # Testimoni & Grafik Tracer Study BMW Alumni
├── publikasi.html              # Dokumen, Kalender & Unduhan Sekolah
│
├── tkj.html                    # Program Keahlian: Teknik Komputer & Jaringan
├── mplb.html                   # Program Keahlian: Manajemen Perkantoran & Layanan Bisnis
├── askep.html                  # Program Keahlian: Asisten Keperawatan
├── farmasi.html                # Program Keahlian: Farmasi Klinis & Komunitas
├── akl.html                    # Program Keahlian: Akuntansi & Keuangan Lembaga
│
├── style.css                   # Berkas CSS utama (Desain, Tema, & Responsif)
├── script.js                   # Berkas JavaScript utama (Interaktivitas & Logika)
└── README.md                   # Dokumentasi teknis proyek
```

---

## 📄 Penjelasan Detail Setiap Halaman

### 1. `index.html` (Beranda Utama)
Pintu gerbang utama website yang merangkum poin-poin terpenting sekolah:
* **Floating Social Media Sidebar**: Akses cepat WhatsApp, Instagram, TikTok, dan YouTube di sisi kiri layar.
* **Hero Banner**: Judul utama, deskripsi singkat, tombol ajakan bertindak (*CTA*), dan kartu pemutar video profil.
* **Section Statistik**: Animasi angka berhitung otomatis (*count-up*) saat di-scroll: Akreditasi A, 100% Siap Kerja, 50+ Kerjasama Industri, dan 85% Keterserapan Alumni.
* **Sambutan Kepala Sekolah**: Kutipan pesan resmi pimpinan sekolah.
* **5 Program Keahlian**: Kartu pratinjau jurusan unggulan dengan link menuju halaman jurusan terkait.
* **Highlight Fasilitas & Berita Terkini**: Ringkasan fasilitas dan kegiatan teranyar.
* **Lokasi & Kontak**: Peta Google Maps interaktif, jam operasional, alamat fisik, telepon, WhatsApp, dan rute petunjuk arah.

### 2. `tentang.html` (Profil & Visi Misi)
Memberikan informasi mendalam tentang identitas SMKS PGRI Rangkasbitung:
* Sejarah pendirian dan perkembangan sekolah.
* Sambutan lengkap Kepala Sekolah disertai video profil YouTube resmi.
* Tabel Identitas Legalitas Sekolah (NPSN, NSS, Akreditasi, Status, SK Izin Operasional).
* Penjelasan komprehensif Nilai Luhur Visi **RUHAY** (Religius, Unggul, Handal, Andalan, Yang Terbaik) dan butir-butir Misi Sekolah.

### 3. Program Keahlian (5 Halaman Jurusan)
Setiap jurusan memiliki halaman dedikasi tersendiri dengan arsitektur informasi terstruktur:
* **`tkj.html`**: Teknik Komputer & Jaringan (Jaringan Komputer, Cisco/MikroTik, Server, Cyber Security).
* **`mplb.html`**: Manajemen Perkantoran & Layanan Bisnis (Administrasi Digital, Otomatisasi Perkantoran, Public Relations).
* **`askep.html`**: Asisten Keperawatan (Keterampilan Medis Dasar, Perawatan Pasien, Etika Profesi Kesehatan).
* **`farmasi.html`**: Farmasi Klinis & Komunitas (Pembuatan Resep Obat, Farmakologi, Manajemen Apotek).
* **`akl.html`**: Akuntansi & Keuangan Lembaga (Siklus Akuntansi, MYOB, Komputer Akuntansi, Perpajakan).
* *Komponen di setiap halaman jurusan*: Banner Hero Kejuruan, Deskripsi Kompetensi, Mata Pelajaran Unggulan, Laboratorium Praktik, Peluang Karir/DUDI, dan Tombol Registrasi SPMB.

### 4. `spmb.html` (Informasi Penerimaan Siswa Baru)
Halaman sentral penerimaan calon peserta didik:
* **Banner Jargon & Layanan Pendaftaran**: Menggunakan kalimat *evergreen* (*Layanan Pendaftaran Siswa Baru - Tersedia Jalur Reguler & Prestasi*).
* **Paket Fasilitas & Beasiswa**: Potongan uang pangkal, beasiswa KIP & akademik, bebas biaya formulir.
* **Jadwal Gelombang Pendaftaran**: Informasi gelombang pendaftaran sepanjang tahun.
* **Contact Person Panitia SPMB**: Kontak langsung via chat WhatsApp dengan narahubung resmi.
* **4 Langkah Alur Pendaftaran**: Panduan bertahap (Pengambilan Formulir, Pengembalian Berkas, Wawancara/Tes Minat, Registrasi Ulang).
* **Persyaratan Berkas**: Daftar dokumen yang wajib disiapkan calon siswa.

### 5. `testimoni.html` (Cerita Alumni & Tracer Study BMW)
Halaman pembuktian mutu lulusan sekolah:
* **Interactive BMW Tracer Study Chart**: Diagram batang interaktif penelusuran lulusan (Bekerja, Melanjutkan Studi, Wirausaha).
* Dilengkapi pemilih tahun angkatan (Lulusan 2024/2025 dan Lulusan 2025/2026) dengan navigasi kapsul modern (*segmented pill*).
* Kartu ulasan testimoni alumni sukses di dunia kerja dan testimoni orang tua/wali siswa.

### 6. `fasilitas.html` (Sarana & Prasarana)
Menampilkan fasilitas belajar-mengajar berstandar tinggi:
* Laboratorium Komputer, Lab Farmasi, Lab Keperawatan, Ruangan Auditorium, Perpustakaan, Lapangan Olahraga, dan Sarana Ibadah.

### 7. `prestasi.html` (Galeri Kejuaraan)
Dokumentasi prestasi siswa tingkat Kabupaten, Provinsi, hingga Internasional:
* Banner statistik prestasi dengan animasi berhitung.
* Kartu kejuaraan lengkap dengan kategori bidang (LKS Farmasi, Pencak Silat Internasional, Paskibraka Kabupaten Lebak, Karate, Futsal, Tari Tradisional, dsb.).

### 8. `ekskul.html` (Ekstrakurikuler)
Daftar 12 ekstrakurikuler sekolah dengan kartu modern bergradien warna tanpa dependensi gambar foto:
* Pramuka, PKS, Paskibra, PMR, Sispala, Rohis, Drum Band, Paduan Suara, Futsal, Karate, English Club, dan Seni Tari.

### 9. `berita.html` & `galeri.html`
* **`berita.html`**: Artikel kegiatan sekolah terkini, sosialisasi anti-perundungan, kunjungan industri, dan kerja sama DUDI.
* **`galeri.html`**: Koleksi album foto kegiatan sekolah yang dilengkapi fitur pop-up Lightbox untuk melihat foto resolusi penuh.

### 10. `publikasi.html` (Pusat Unduhan)
Akses materi dan berkas penting sekolah: Brosur SPMB digital, panduan kurikulum, kalender akademik, dan majalah sekolah.

---

## 🚀 Fitur-Fitur Unggulan

### 1. Navigasi Cerdas & Drawer Mobile Bebas Bug
* **Dynamic Header Height**: Nilai `--navbar-height` dihitung secara otomatis via JavaScript agar konten di bawah navbar tidak tertutup.
* **Scroll-Locking Drawer**: Pada perangkat mobile, saat hamburger menu dibuka, latar belakang halaman dikunci (`lockBodyScroll()`) menggunakan koordinat scroll presisi sehingga tidak terjadi lompatan posisi (*scroll jump*) atau celah kosong (*gap*) di bawah layar.
* **Responsive Multi-level Dropdown**: Sub-menu "Jurusan" dan "Informasi" mendukung interaksi hover pada desktop dan tap-accordion pada layar sentuh.

### 2. Grafik Interaktif BMW Tracer Study (`testimoni.html`)
* Dibangun secara murni dengan manipulasi DOM tanpa dependensi Chart.js.
* Menampilkan persentase dan jumlah alumni pada kategori: **Bekerja (B)**, **Wirausaha (W)**, **Melanjutkan Studi (M)**, **Rumah Tangga (R)**, **Pengangguran (P)**, dan **Lainnya (L)**.
* Dilengkapi:
  * Animasi tinggi batang transisi kurva bezier.
  * *Hover tooltip* informatif.
  * *Highlight* otomatis saat label legenda disorot.
  * Kartu ringkasan statistik (Total Alumni, % Keterserapan BMW, Jumlah Bekerja, Jumlah Wirausaha).
  * Filter tahun bergaya *segmented pill* yang mendukung usapan geser horizontal (*horizontal smooth swipe*) pada layar HP sempit.

### 3. Pemutar Video Profil Pintar
* Menggunakan iframe modal lightbox dengan fungsi konversi URL otomatis `formatYouTubeEmbedUrl()`.
* Mendukung format tautan YouTube biasa (`watch?v=`), tautan pendek (`youtu.be/`), maupun format **YouTube Shorts** (`shorts/`).
* Video otomatis berhenti diputar saat modal ditutup atau tombol `ESC` ditekan.

### 4. Modal "Hubungi Kami" Terintegrasi
* Tombol kontak di navbar dan kartu layanan terhubung ke modal pop-up `#contactModal`.
* Memberikan akses langsung ke:
  * **WhatsApp Official**: `https://wa.me/6281943760729`
  * **Email Layanan**: `mailto:smkspgrirangkasbitung@gmail.com`
  * **Call Center**: Layanan telepon sekolah.

---

## 🔧 Panduan Pemeliharaan & Update Konten

### A. Menambahkan Tahun Baru pada Grafik BMW (`testimoni.html`)
Jika ada data angkatan kelulusan baru (misalnya tahun `2026/2027`):

1. **Buka file `testimoni.html`**, cari blok objek `const bmwData = { ... }` pada bagian `<script>`:
```javascript
'2026/2027': {
    caption: 'Profil alumni lulusan 2026/2027',
    maxVal: 200,
    ticks: [200, 150, 100, 50, 0],
    items: [
        { key: 'B', label: 'Bekerja', value: 175, color: '#38A3DC' },
        { key: 'W', label: 'Wirausaha', value: 30, color: '#F15C25' },
        { key: 'M', label: 'Melanjutkan Studi', value: 40, color: '#E52D3D' },
        { key: 'R', label: 'Mengurus Rumah Tangga', value: 2, color: '#8B3AB0' },
        { key: 'P', label: 'Pengangguran', value: 1, color: '#88A529' },
        { key: 'L', label: 'Lainnya', value: 4, color: '#45A2DC' }
    ],
    summary: {
        total: 252,
        bmwCount: 245,
        bmwPercent: '97.2%',
        bekerja: 175,
        wirausaha: 30
    }
},
```

2. **Tambahkan tombolnya pada wadah `.bmw-year-switcher`**:
```html
<button class="bmw-year-btn active" data-year="2026/2027" type="button">
    <i class="fa-solid fa-calendar-check"></i> Lulusan 2026/2027
</button>
```
> Tampilan tombol di mobile telah diproteksi dengan *horizontal touch-swipe*, sehingga penambahan banyak tahun tidak akan merusak layout.

### B. Mengubah Nomor WhatsApp & Email
Seluruh nomor WhatsApp dan email di 15 halaman HTML telah diseragamkan:
* **Nomor WhatsApp**: `+62 819-4376-0729` (Format link: `https://wa.me/6281943760729`).
* **Email Resmi**: `smkspgrirangkasbitung@gmail.com` (Format link: `mailto:smkspgrirangkasbitung@gmail.com`).
* Jika ada perubahan kontak di masa depan, gunakan fitur *Find & Replace* di editor kode untuk memperbarui kedua nilai tersebut di seluruh file `.html`.

### C. Mengganti Video Profil Sekolah
Pada `script.js` baris ke-330:
```javascript
const defaultProfileVideoUrl = "https://www.youtube.com/watch?v=pJr1MqxACHE";
```
Ganti URL di atas dengan tautan video YouTube sekolah yang baru (bisa berupa video landscape maupun shorts).

---

## 🎨 Sistem Desain & Palet Warna

Tema visual dirancang untuk mencerminkan citra institusi pendidikan kejuruan yang profesional, berwibawa, dan modern:

| Nama Variabel | Kode Warna Hex | Peruntukan |
| :--- | :--- | :--- |
| `--primary-navy` | `#1E3A8A` | Warna primer identitas sekolah, navbar, tombol aksi utama, judul |
| `--primary-dark` | `#0F172A` | Latar belakang footer, elemen kontras tinggi |
| `--accent-gold` | `#F59E0B` | Aksen keunggulan, bintang prestasi, badge sertifikasi |
| `--accent-cyan` | `#0284C7` | Aksen informasi teknologi dan highlight sekunder |
| `--success-green`| `#22C55E` | Aksen status aktif, logo WhatsApp, indikator positif |
| `--surface-bg` | `#F8FAFC` | Latar belakang seksi selang-seling agar tidak monoton |
| `--text-main` | `#334155` | Warna teks paragraf utama |
| `--text-muted` | `#64748B` | Warna teks pendukung dan keterangan tanggal/label |

---

## 💻 Cara Menjalankan Proyek

Website ini bersifat *zero-dependency* (tanpa memerlukan Node.js, Webpack, atau instalasi paket tambahan untuk menjalankannya):

### 1. Menjalankan Langsung di Browser
Cukup klik ganda (*double click*) file **`index.html`** pada file manager untuk membukanya langsung di browser apa pun (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### 2. Menggunakan Ekstensi Live Server (Visual Studio Code)
1. Buka folder proyek di VS Code.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey).
3. Klik kanan pada `index.html` dan pilih **"Open with Live Server"**.
4. Website akan terbuka otomatis di alamat `http://127.0.0.1:5500/index.html` dengan kemampuan *hot reload*.

### 3. Menggunakan Web Server Lokal (Opsional)
Jika Anda memiliki Node.js atau Python terpasang di komputer:
```bash
# Menggunakan Python 3:
python -m http.server 8000

# Atau menggunakan npx serve:
npx serve .
```
Lalu buka browser di `http://localhost:8000`.

---

## 📞 Kontak & Media Sosial Resmi

* **Alamat**: Jl. Dewi Sartika no 45L, Muara Ciujung Timur, Rangkasbitung Lebak, Banten
* **WhatsApp**: [+62 819-4376-0729](https://wa.me/6281943760729)
* **Email**: [smkspgrirangkasbitung@gmail.com](mailto:smkspgrirangkasbitung@gmail.com)
* **Instagram**: [@smkpgrirangkasbitung](https://www.instagram.com/smkpgrirangkasbitung/)
* **TikTok**: [@skemrirangkasbitung](https://www.tiktok.com/@skemrirangkasbitung)
* **YouTube**: [@SMKSPGRIRANGKASBITUNG](https://www.youtube.com/@SMKSPGRIRANGKASBITUNG)

---

&copy; 2026 **SMKS PGRI RANGKASBITUNG**. All Rights Reserved.  
*Mencetak Generasi RUHAY yang Religius, Unggul, Handal, Andalan, dan Yang Terbaik.*
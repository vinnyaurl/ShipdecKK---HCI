# ShipDecKK

ShipDecKK adalah proyek landing page dan website multi-page untuk perusahaan kapal dan layanan maritim. Website ini dibuat menggunakan HTML, CSS, dan JavaScript murni, dengan fokus pada tampilan modern, responsif, serta pengalaman pengguna yang jelas dalam menampilkan produk kapal, layanan, dan formulir subscribe.

## Deskripsi Proyek

Website ini terdiri dari beberapa halaman utama:

- Home
- Gallery
- Services
- About Us
- Subscribe

Project ini menampilkan berbagai jenis kapal seperti:

- Leisure Yachts
- Commercial Cargo Ships
- Luxury Cruise Liners

Selain itu, website juga memiliki fitur:

- Navigasi header yang aktif berdasarkan halaman saat ini
- Menu hamburger responsive untuk tampilan mobile
- Galeri produk dengan card layout
- Section layanan dan profil perusahaan
- Form subscribe dengan validasi JavaScript

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Gambar statis dari folder `img`

## Struktur Folder

```text
ShipdecKK - Project HCI/
├── about.html
├── gallery.html
├── index.html
├── services.html
├── subscribe.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── ...
├── README.md
└── .git/
```

## Fitur Utama

### 1. Halaman Home
Menampilkan intro perusahaan, produk unggulan, dan penjelasan singkat mengenai ShipDecKK.

### 2. Halaman Gallery
Menampilkan koleksi kapal dengan nama, deskripsi, dan harga.

### 3. Halaman Services
Menjelaskan layanan utama yang ditawarkan, seperti custom ship design, maintenance & repair, dan marine insurance.

### 4. Halaman About Us
Menjelaskan sejarah perusahaan, misi, nilai perusahaan, serta pencapaian penting.

### 5. Halaman Subscribe
Menyediakan form subscribe dengan validasi data seperti nama, email, password, usia, gender, dan persetujuan syarat.

## Cara Menjalankan Project

Karena project ini merupakan website statis, Anda dapat menjalankannya dengan salah satu cara berikut:

### Opsi 1: Buka langsung di browser
- Buka file `index.html` langsung di browser.

### Opsi 2: Jalankan server lokal
Pada folder project, jalankan perintah berikut:

```bash
python -m http.server 8000
```

Lalu buka browser ke:

```text
http://localhost:8000
```

## Catatan

- Semua halaman menggunakan file CSS yang sama, yaitu `css/style.css`.
- JavaScript untuk aktifitas navigasi dan validasi form terletak di `js/script.js`.
- Beberapa gambar yang digunakan sudah tersedia di folder `img`, sehingga project siap dijalankan tanpa instalasi tambahan.

## Author

Project ini dibuat untuk kebutuhan tugas HCI / Human-Computer Interaction dengan tema website kapal ShipDecKK.

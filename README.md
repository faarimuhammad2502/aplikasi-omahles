# Omah Les Kids

Aplikasi belajar Kurikulum Merdeka untuk TK dan SD. Murid membuka materi di peramban, dan tutor mengelola konten lewat halaman admin.

Versi yang sedang tayang: [aplikasi-omahles.vercel.app](https://aplikasi-omahles.vercel.app)

## Isi aplikasi

- Materi belajar untuk PAUD, TK, dan SD
- Halaman admin di `admin.html`
- Bisa dipasang seperti aplikasi (ada `manifest.json` dan `sw.js`)
- Ucapan suara lewat `api/tts.js` saat dijalankan di Vercel

## Menjalankan

Buka `index.html` untuk melihat antarmuka. Fitur suara membutuhkan Vercel karena `api/tts.js` berjalan di server.

## Teknologi

HTML, CSS, JavaScript, dan Tailwind. Tidak ada proses build.

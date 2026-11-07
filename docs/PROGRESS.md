# Progres AiMoneyMonitor

Web app monitor keuangan pribadi untuk 1-5 Pengguna, dengan Asisten sebagai jalur utama pencatatan. Istilah ada di `GLOSSARY.md`, keputusan arsitektur di `docs/adr/`.

Status: desain selesai pada 2026-11-01. Kerangka awal sudah ada: Next.js, tiga halaman placeholder, dan cek koneksi PostgreSQL di `/api/health`.

## Keputusan desain

- **Akses:** login Google, hanya email di Daftar Undangan.
- **Stack:** Next.js + PostgreSQL, di Vercel Hobby + Neon Free. Paket pnpm.
- **AI:** OpenRouter dengan `google/gemini-2.5-flash-lite` berbayar. Nama model cukup diganti di satu tempat.
- **Privasi AI:** dua opsi logging OpenRouter tetap mati. Uji coba hanya memakai data contoh, karena `google/gemini-2.5-flash-lite` tidak ada di daftar ZDR OpenRouter.
- **Halaman:** Dashboard (menu pertama: Arus Bulanan, Keluar per Kategori, tren Masuk dan Keluar 6 bulan, Transaksi terbaru), Chat dengan ringkasan Arus Bulanan, Transaksi, Kategori. Dashboard ditambahkan 2026-11-05. Tampilan sederhana, warna hitam-biru `#121416`, `#0A78B4`, `#1FB5E9`.
- **Tabel Transaksi:** Tanggal, Jenis, Kategori, Nominal, Deskripsi. Khusus Rupiah, tanpa dompet.
- **Kategori:** daftar per Pengguna, dimulai dari Makan, Transport, Tagihan, Belanja, Gaji, Lainnya.
- **Kewenangan Asisten:**
  - Catat baru langsung tersimpan, dengan ringkasan dan tombol batal.
  - Ubah atau hapus satu Transaksi harus dikonfirmasi.
  - Hapus massal tidak bisa lewat Asisten.
  - Menjawab pertanyaan selalu boleh.
- **Membaca chat:**
  - Satu chat bisa menjadi beberapa Transaksi.
  - Tanggal mengikuti isi chat, default hari ini WIB.
  - Nominal yang tidak ada atau meragukan ditanyakan balik.
  - Deskripsi ringkas, tanpa menambah informasi yang tidak disebut.
- **Riwayat chat:** disimpan per Pengguna, 10 pesan terakhir dikirim ke AI. Angka selalu dihitung dari database.
- **Batas biaya:** Jatah Harian 50 chat per Pengguna, kredit OpenRouter sekitar $5 tanpa top-up otomatis. Saat batas tercapai, web dan Koreksi Manual tetap jalan.

## Rencana build

### Fase 0: Uji model
- [ ] Uji sekitar 20 contoh chat berbahasa Indonesia, termasuk beberapa Transaksi dalam satu chat, "kemarin", dan nominal ambigu.
- [ ] Kalau hasilnya kurang akurat, bandingkan dengan model lain di OpenRouter.
- [ ] Sebelum data asli masuk, putuskan tetap memakai Gemini 2.5 Flash-Lite tanpa ZDR atau pindah ke model yang ada di daftar ZDR.

### Fase 1: Fondasi
- [ ] Setup Next.js dan database Neon.
- [ ] Buat skema Pengguna, Daftar Undangan, Kategori, Transaksi, dan riwayat chat.
- [ ] Login Google dengan pengecekan Daftar Undangan.

### Fase 2: Data tanpa AI
- [ ] Halaman Transaksi dengan Koreksi Manual (tambah, ubah, hapus).
- [ ] Halaman Kategori.
- [ ] Perhitungan Arus Bulanan.

### Fase 3: Asisten
- [ ] Logika Asisten terpisah dari tampilan chat, supaya Telegram bisa memakainya nanti.
- [ ] Tool catat, ubah, hapus, dan baca Transaksi, dengan aturan kewenangan di server.
- [ ] Jatah Harian.

### Fase 4: Halaman Chat
- [ ] Halaman Chat dengan ringkasan Arus Bulanan.
- [ ] Tombol batal dan konfirmasi ubah/hapus.
- [ ] Riwayat chat.

### Fase 5: Rilis
- [ ] Review desain dengan skill `impeccable`.
- [ ] Deploy ke Vercel dan undang Pengguna.

### Rilis kedua: Telegram
- [ ] Tentukan cara menghubungkan akun Telegram ke Pengguna.
- [ ] Bot lewat webhook ke API route Next.js, memakai Asisten yang sama.

## Belum masuk rilis pertama

Foto struk, anggaran, dan pengingat.

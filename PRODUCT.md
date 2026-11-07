# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Naufal sendiri plus maksimal 4 orang yang diundang lewat Daftar Undangan. Tiap Pengguna mencatat pemasukan dan pengeluaran hariannya sendiri, datanya terpisah dari Pengguna lain. Dibuka di HP dan laptop (web responsive).

## Product Purpose

Monitor keuangan pribadi yang pencatatannya lewat chat ke Asisten. Pengguna cukup menulis "makan siang 25rb, bensin 30rb" dan Transaksi langsung tercatat. Berhasil kalau mencatat terasa lebih cepat daripada membuka form, dan Arus Bulanan selalu bisa dipercaya.

## Positioning

Asisten adalah jalur utama pencatatan, bukan fitur tambahan. Angka (Arus Bulanan, total per Kategori) selalu dihitung dari database, tidak pernah dikarang AI.

## Operating Context

- Login Google, hanya email di Daftar Undangan.
- Halaman: Dashboard (Arus Bulanan, Keluar per Kategori, tren Masuk dan Keluar 6 bulan, Transaksi terbaru), Chat dengan ringkasan Arus Bulanan, Transaksi, Kategori.
- Pencatatan terjadi sepanjang hari, sering dari HP, sesaat setelah belanja.

## Capabilities and Constraints

- Transaksi: Tanggal, Jenis (Masuk/Keluar), Kategori, Nominal, Deskripsi. Khusus Rupiah, tanpa dompet (ADR 0001).
- Kategori per Pengguna, awal: Makan, Transport, Tagihan, Belanja, Gaji, Lainnya.
- Kewenangan Asisten: catat baru langsung tersimpan dengan ringkasan dan tombol batal; ubah/hapus satu Transaksi harus dikonfirmasi; hapus massal tidak bisa lewat Asisten; menjawab pertanyaan selalu boleh.
- Koreksi Manual (tambah, ubah, hapus) selalu tersedia, termasuk saat Jatah Harian habis.
- Jatah Harian 50 chat per Pengguna.
- Stack: Next.js + PostgreSQL (Neon), Vercel Hobby, OpenRouter.
- Istilah domain di `GLOSSARY.md`, keputusan di `docs/PROGRESS.md` dan `docs/adr/`.
- Belum masuk rilis pertama: foto struk, anggaran, pengingat, bot Telegram.

## Brand Commitments

- Nama: AiMoneyMonitor.
- Warna hitam-biru: `#121416`, `#0A78B4`, `#1FB5E9` (keputusan di `docs/PROGRESS.md`).
- Bahasa antarmuka: Indonesia, memakai istilah dari `GLOSSARY.md`.

## Evidence on Hand

- Prototype HTML di `prototype/` (Dashboard, Chat, Transaksi, Kategori) dengan data contoh.
- Belum ada data asli Pengguna; uji coba hanya memakai data contoh.

## Product Principles

1. Mencatat lewat chat harus lebih cepat dari form.
2. Angka dihitung dari database, bukan dari AI.
3. Pengguna selalu bisa membatalkan atau mengoreksi apa yang dilakukan Asisten.
4. Tampilan sederhana; satu Pengguna, satu bulan, satu pertanyaan: uangku ke mana.

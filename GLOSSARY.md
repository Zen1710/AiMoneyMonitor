# AiMoneyMonitor

Aplikasi monitor keuangan pribadi untuk kelompok kecil orang, dengan AI sebagai pengelola utama data.

## Language

**Pengguna**:
Orang yang punya akun dan data keuangan sendiri, terpisah dari Pengguna lain.
_Avoid_: User, member, akun

**Daftar Undangan**:
Daftar email yang boleh menjadi Pengguna.
_Avoid_: Whitelist, allowlist

**Transaksi**:
Satu catatan uang masuk atau keluar milik seorang Pengguna.
_Avoid_: Catatan, record, entri

**Deskripsi**:
Teks singkat tentang isi sebuah Transaksi.
_Avoid_: Keterangan, catatan, note

**Kategori**:
Label pengelompokan Transaksi dari daftar milik seorang Pengguna. Asisten hanya memilih dari daftar itu, dan "Lainnya" menampung yang tidak cocok.
_Avoid_: Tag, label, jenis

**Arus Bulanan**:
Total uang masuk, total uang keluar, dan selisihnya dari seluruh Transaksi seorang Pengguna dalam satu bulan.
_Avoid_: Saldo

**Asisten**:
AI yang mencatat dan mengelola data keuangan Pengguna lewat percakapan.
_Avoid_: Bot, AI, chatbot

**Koreksi Manual**:
Penambahan, perubahan, atau penghapusan Transaksi yang dilakukan Pengguna sendiri tanpa melewati Asisten.
_Avoid_: Edit manual, override

**Jatah Harian**:
Jumlah chat maksimal seorang Pengguna ke Asisten dalam satu hari.
_Avoid_: Kuota, rate limit

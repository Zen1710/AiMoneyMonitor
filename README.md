# AiMoneyMonitor

Web app catatan keuangan pribadi lewat chat AI. Saat ini masih berupa kerangka awal, dan rencana build ada di [docs/PROGRESS.md](docs/PROGRESS.md).

## Menjalankan

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Isi `DATABASE_URL` di `.env.local` dengan connection string PostgreSQL. Cek koneksinya di `/api/health`.

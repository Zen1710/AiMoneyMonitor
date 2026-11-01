import { connection } from "next/server";
import { getSql } from "@/lib/db";

export async function GET() {
  await connection();

  const sql = getSql();
  if (!sql) {
    return Response.json({ status: "database-belum-diatur" }, { status: 503 });
  }

  try {
    await sql`select 1`;
    return Response.json({ status: "ok" });
  } catch {
    return Response.json({ status: "database-gagal" }, { status: 503 });
  }
}

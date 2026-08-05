import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://zenquotes.io/api/random", { method: "GET" });
  if (!res.ok) {
    return NextResponse.json(
      { error: "ZenQuotes request failed", status: res.status },
      { status: 502 }
    );
  }
  

  const data = await res.json();
  return NextResponse.json(data);
}
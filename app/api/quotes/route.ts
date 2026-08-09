import { NextResponse } from "next/server";

const sourceUrl = "https://zenquotes.io/api/random";
const KanyeSourceUrl = 'https://api.kanye.rest/';

export async function GET() {
  const res = await fetch(KanyeSourceUrl, { method: "GET" });
  if (!res.ok) {
    return NextResponse.json(
      { error: "Quote request failed", status: res.status },
      { status: 502 }
    );
  }
  

  const data = await res.json();
  return NextResponse.json(data);
}
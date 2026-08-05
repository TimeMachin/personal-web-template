"use client";

import { useEffect, useState } from "react";

export default function GetQuote() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/quotes", { method: "GET" });
        console.log("Quotes API response:", res);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setQuote(json);
      } catch (e) {
        setError(e.message);
      }
    }

    load();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!quote) return <div>Loading...</div>;
  return <pre>{JSON.stringify(quote[0].q, null, 2)}</pre>;
}
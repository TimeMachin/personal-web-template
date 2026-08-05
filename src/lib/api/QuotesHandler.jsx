"use client";

import { useEffect, useState } from "react";
import { newsreader, inter, fraunces, ebGaramond } from "/components/fonts";

export default function GetQuote() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/quotes", { method: "GET" });

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
  return <pre className={`${ebGaramond.className} text-2xl font-light tracking-tight leading-tight text-white text-balance md:text-balance`}>{JSON.stringify(quote[0].q, null, 2)}</pre>;
}
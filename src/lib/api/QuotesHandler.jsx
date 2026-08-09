"use client";

import { useEffect, useState } from "react";
import { newsreader, inter, fraunces, ebGaramond } from "/components/fonts";

import BlurText from "components/animations/BlurTextFall";
import FadeContent from "components/animations/fade";

export default function GetQuote() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function load() {
      try {

        const minimumDelay = new Promise((resolve) => setTimeout(resolve, 2250));

        const fetchPromise  = await fetch("/api/quotes", { method: "GET", signal });

        const [res] = await Promise.all([fetchPromise, minimumDelay]);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setQuote(json);
      } catch (e) {
          if (e.name !== "AbortError") {
            setError(e.message);
        }
      }
    }

    load();
    return () => {
      controller.abort();
    };
  }, []);

  const YE = true; // is Kanye West quote? (true) or ZenQuotes (false)

  if (error) return <BlurText text="In the end, everything will be alright and if it's not alright, it's not the end" delay={100} animateBy="words" direction="bottom" className={`${ebGaramond.className} text-xl font-light tracking-tight leading-tight text-white text-balance md:text-balance`}/>;
  if (!quote) return <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}><p className={`${ebGaramond.className} text-xl font-light tracking-tight leading-tight text-white text-balance md:text-balance`}>Loading...</p></FadeContent>
  if (YE) {
    return <BlurText text={JSON.stringify(quote.quote, null, 2)} delay={100} animateBy="words" direction="bottom" className={`${ebGaramond.className} text-2xl justify-center font-light tracking-tight leading-tight text-white text-balance md:text-balance`}/>;
  } else {
    return <BlurText text={JSON.stringify(quote[0].q, null, 2)} delay={100} animateBy="words" direction="bottom" className={`${ebGaramond.className} text-2xl justify-center font-light tracking-tight leading-tight text-white text-balance md:text-balance`}/>;
  }
}
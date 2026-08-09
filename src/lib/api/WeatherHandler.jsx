"use client";
import { useEffect, useState } from "react";

export default function GetWeather() {
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function load() {
      try {

        const minimumDelay = new Promise((resolve) => setTimeout(resolve, 2000));

        const fetchPromise  = await fetch("/api/weather", { method: "GET", signal });

        const [res] = await Promise.all([fetchPromise, minimumDelay]);

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setTemperature(json);
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
  if (error) return <p>Satellites are down...</p>;
  if (!temperature) return <p>Looking up weather...</p>;
  return <p>{temperature.current.temperature_2m}</p>;
}
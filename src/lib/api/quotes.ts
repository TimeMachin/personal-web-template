import { Quote } from "../../types/quote";

const BASE_URL = process.env.API_BASE_URL ?? "https://zenquotes.io/api/random";

export async function getQuotes(): Promise<Quote[]> {
  const res = await fetch(`${BASE_URL}`, {
    // Revalida cada 5 segundos (ajusta según necesidad)
    next: { revalidate: 5 },
  });

  if (!res.ok) {
    console.error(`Error al obtener frases: ${res.status}`);
    throw new Error("No se pudieron obtener las frases");
  }

  const data: unknown = await res.json();

  // Validación básica de forma
  if (!Array.isArray(data)) {
    throw new Error("Respuesta inesperada de la API");
  }
  return data as Quote[];
}
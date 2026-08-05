// NEED PREMIUM FOR SPOTIFY API
import { Song } from "../../types/song";
const playlist_id = "2iSNGXloOocJSiwBGpf6zl"; // vibe with the monkey 
const BASE_URL ="https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks";
const access_token = "";
const client_id = "";
const client_secret = "";

export async function getSongs(): Promise<Song[]> {
  const res = await fetch(`${BASE_URL}`, {
    // Revalida cada 5 segundos (ajusta según necesidad)
    cache: 'no-store',
    headers: {
      Authorization: 'Bearer ' + access_token
    }
  });

  if (!res.ok) {
    console.error(`Error al obtener canciones: ${res.status}`);
    throw new Error("No se pudieron obtener las canciones");
  }

  const data: unknown = await res.json();

  // Validación básica de forma
  if (!Array.isArray(data)) {
    throw new Error("Respuesta inesperada de la API");
  }
  return data as Song[];
}
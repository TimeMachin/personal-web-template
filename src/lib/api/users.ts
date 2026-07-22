import { User } from "../../types/user";

const BASE_URL = process.env.API_BASE_URL ?? "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`, {
    // Revalida cada hora (ajusta según necesidad)
    cache: 'no-store',
  });

  if (!res.ok) {
    // No filtramos detalles internos al cliente, solo logueamos
    console.error(`Error al obtener usuarios: ${res.status}`);
    throw new Error("No se pudieron obtener los usuarios");
  }

  const data: unknown = await res.json();

  // Validación básica de forma (idealmente con Zod, ver nota abajo)
  if (!Array.isArray(data)) {
    throw new Error("Respuesta inesperada de la API");
  }

  return data as User[];
}

export async function getUserById(id: number): Promise<User | null> {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    next: { revalidate: 3600 },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("No se pudo obtener el usuario");

  return res.json();
}
import { fetchWeatherApi } from "openmeteo";
import { NextResponse } from "next/server";

export async function GET() {
  const params = {
    latitude: 40.4165,
    longitude: -3.7026,
    hourly: "temperature_2m",
    current: "temperature_2m",
  };

  const url = "https://api.open-meteo.com/v1/forecast";

  try {
    const responses  = await fetchWeatherApi(url, params);
    const response = responses[0];
    const current = response.current()!;

    const weatherData = {
        current: {
            temperature_2m: Math.ceil(current.variables(0)!.value()),
        },
    };
    return NextResponse.json(weatherData);
  } catch (err: any) {
    return NextResponse.json(
      { error: "Weather request failed", details: err?.message ?? String(err) },
      { status: 502 }
    );
  }
}
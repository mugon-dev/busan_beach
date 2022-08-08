import { API_URL_BASE, BEACH_WEATHER_KEY } from '$config';

export const API_ROUTES = Object.freeze({
  BEACH: {
    WEATHER: {
      WATER: `${API_URL_BASE}/1360000/BeachInfoservice/getTwBuoyBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      WAVE: `${API_URL_BASE}/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getVilageFcstBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      SHORT: {
        FORECAST: `${API_URL_BASE}/1360000/BeachInfoservice/getUltraSrtFcstBeach?serviceKey=${BEACH_WEATHER_KEY}`,
      },
    },
  },
});
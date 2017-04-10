import axios from 'axios';

const API_KEY = '146d479e043351881683ab6ffdd9bd74';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

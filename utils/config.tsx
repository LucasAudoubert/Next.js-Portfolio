import 'dotenv/config';

export default {
  openWeather: process.env.OPEN_WEATHER_API_KEY,
  jwtSecret: process.env.JWT_SECRET,
};
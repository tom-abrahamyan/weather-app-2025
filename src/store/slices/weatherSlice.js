import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getDailyAverageForecast from "../../weather/utils/getDailyAverageForecast.js";

const API_KEY = "c2cb41d83e003e690090057aeeab736d";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ( cityName = "yerevan" ) => {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );
    if (!weatherResponse.ok) {
      throw new Error("Չստացվեց բեռնել եղանակի տվյալները OpenWeatherMap-ից");
    }
    const imageResponse = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(cityName.toLowerCase())}`
    );
    if (!imageResponse.ok) {
      throw new Error("Չստացվեց բեռնել տվյալները Wikipedia-ից");
    }
    const weatherData = await weatherResponse.json();
    const fetchImage = await imageResponse.json();

    return { weatherData, fetchImage };
  }
);


const initialState = {
  forecast: null,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  temp: null,
  cityName: null,
  description: null,
  condition: null,
  imageUrl: null,
  
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    resetWeather: (state) => {
      Object.assign(state, initialState);
    },
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.forecast = getDailyAverageForecast(action.payload.weatherData.list);
        state.temp = `${Math.round(action.payload.weatherData.list[0].main.temp - 273)} C`;
        state.cityName = `${action.payload.weatherData.city.name} ${action.payload.weatherData.city.country}`;
        state.description = action.payload.weatherData.list[0].weather[0].description;
        state.condition = action.payload.weatherData.list[0].weather[0].main;
        state.imageUrl = 
              action.payload.fetchImage.originalimage?.source ||
              action.payload.fetchImage.thumbnail?.source ||
              'https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg'
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});



export const { resetWeather } = weatherSlice.actions;

export const selectForecast = (state) => state.weather.forecast,
             selectTemp = (state) => state.weather.temp,
             selectCityName = (state) => state.weather.cityName,
             selectDescription = (state) => state.weather.description,
             selectCondition = (state) => state.weather.condition,
             selectImageUrl = (state) => state.weather.imageUrl;
           
           
  

export default weatherSlice.reducer;

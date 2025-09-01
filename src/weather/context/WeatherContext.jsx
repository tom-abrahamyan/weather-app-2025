import {createContext, useState, useContext} from 'react';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  return (
      <WeatherContext.Provider
        value={{weatherData, setWeatherData, city, setCity, imgSrc, setImgSrc}}
        >
        {children}
      </WeatherContext.Provider>
  )
}
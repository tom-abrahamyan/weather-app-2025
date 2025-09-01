import { useWeather } from "../context/WeatherContext.jsx";
import getWeatherIcon from "../utils/getWeatherIcon.jsx";
import {memo, useRef} from "react";

const CurrentWeather = () => {
  const { weatherData, imgSrc } = useWeather();
  const temp = weatherData?.list?.[0]?.main?.temp
      ? `${Math.round(weatherData.list[0].main.temp - 273)}°C`
      : "";
  const cityName = weatherData?.city?.name
      ? `${weatherData.city.name} ${weatherData.city.country}`
      : "";
  const description =
      weatherData?.list?.[0]?.weather?.[0]?.description || "";
  const condition = weatherData?.list?.[0]?.weather?.[0]?.main;
  const weatherIcon = getWeatherIcon(condition);


  const count = useRef(0);
  count.current++
  return (
      <div className="main">
        {count.current}
        <div
            className="cityImages"
            style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
        <div className="currentWeather">
          <p className="cityName">{cityName}</p>
          <p>
            <span className="temp">{temp}</span>
            <span className="description">{description}</span>
            <span className="dIcon">{weatherIcon}</span>
          </p>
        </div>
      </div>
  );
};

export default memo(CurrentWeather);

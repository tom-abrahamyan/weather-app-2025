import { useMemo, memo} from "react";
import { useWeather } from "../context/WeatherContext.jsx";
import getDailyAverageForecast from "../utils/getDailyAverageForecast.js";
import getWeatherIcon from "../utils/getWeatherIcon.jsx";

const Forecast = () => {
  const { weatherData } = useWeather();

  const dailyData = useMemo(() => {
    if (!weatherData || !weatherData.list) return [];
    return getDailyAverageForecast(weatherData.list);
  }, [weatherData?.list]);

  return (
      <div className="forecast">
        {dailyData.map((item, index) => {
          const temp = `${Math.round(item.main.temp - 273)}°C`;
          const date = new Date(item.dt_txt);
          const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
          const condition = item?.weather?.[0]?.main;
          const weatherIcon = getWeatherIcon(condition);

          return (
              <div className="forecastItem" key={index}>
                <p>{weekday}</p>
                <span>{weatherIcon}</span>
                <p>{temp}</p>
              </div>
          );
        })}
      </div>
  );
};

export default memo(Forecast);

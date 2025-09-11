import { useMemo, memo} from "react";

import { useSelector } from "react-redux";
import { selectForecast } from "../../store/slices/weatherSlice.js";
import getWeatherIcon from "../utils/getWeatherIcon.jsx";

const Forecast = () => {
  const weatherData = useSelector(selectForecast)
  
  const dailyData = useMemo(() => {
    if (!weatherData) return [];
    return weatherData;
  }, [weatherData]);

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

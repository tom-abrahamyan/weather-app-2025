import getWeatherIcon from "./getWeatherIcon.jsx";
import getDailyAverageForecast from "./getDailyAverageForecast.js";
function Forecast({ forecastData }) {

  if (!forecastData || !forecastData.list) return null;

  const dailyData = getDailyAverageForecast(forecastData.list);

  return (
      <div className="forecast">
        {dailyData.map((item, index) => {
          const temp = `${Math.round(item.main.temp - 273)}°C`;
          const date = new Date(item.dt_txt);
          const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
          const condition = item?.weather?.[0]?.main;
          const weatherIcon = getWeatherIcon(condition)

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
}

export default Forecast;




















import { useSelector } from "react-redux";
import getWeatherIcon from "../utils/getWeatherIcon.jsx";
import {memo} from "react";
import { selectCityName, selectDescription, selectTemp, selectCondition, selectImageUrl } from "../../store/slices/weatherSlice.js";

const CurrentWeather = () => {
  const temp = useSelector(selectTemp),
        cityName = useSelector(selectCityName),
        description = useSelector(selectDescription),
        condition = useSelector(selectCondition),
        weatherIcon = getWeatherIcon(condition),
        imageUrl = useSelector(selectImageUrl);

  return (
      <div className="main">
        <div
            className="cityImages"
            style={{ backgroundImage: `url(${imageUrl})` }}
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

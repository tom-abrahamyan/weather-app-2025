import {IoPartlySunny, IoRainy, IoSnow, IoSunny, IoThunderstorm} from "react-icons/io5";

export default function getWeatherIcon(condition){
  const weatherIcons = {
    Clear: <IoSunny />,
    Clouds: <IoPartlySunny />,
    Rain: <IoRainy />,
    Thunderstorm: <IoThunderstorm />,
    Snow: <IoSnow />
  };

 return weatherIcons[condition] || <IoPartlySunny />; // default
}
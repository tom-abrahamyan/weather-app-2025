import {IoPartlySunny, IoRainy, IoSnow, IoSunny, IoThunderstorm} from "react-icons/io5";

export default function getWeatherIcon(condition){
  const weatherIcons = {
    Clear: <IoSunny />,
    Clouds: <IoPartlySunny />,
    Rain: <IoRainy />,
    Thunderstorm: <IoThunderstorm />,
    Snow: <IoSnow />,
    Drizzle: <IoRainy />,
    Mist: <IoPartlySunny />,
    Fog: <IoPartlySunny />,
    Haze: <IoPartlySunny />,
    Smoke: <IoPartlySunny />
  };

 return weatherIcons[condition] || <IoSunny />; // default
}
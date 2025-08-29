import './App.css'
import SearchBar from "./weather/SearchBar.jsx";
import CurrentWeather from "./weather/CurrentWeather.jsx";
import Forecast from "./weather/Forecast.jsx";
import {getWeatherData, getCityImage} from "./weather/getWeatherData.js";
import {useEffect, useState} from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [imgSrc, setImageSrc] = useState('');

  useEffect(() => {
    getCity("Gyumri");
  }, []);
  async function getCity(cityName) {
    if (cityName.length > 2) {
      const data = await getWeatherData(cityName);
      setWeatherData(data);
      const image = await getCityImage(cityName);
      setImageSrc(image);
    }
  }


  return (
    <div className='app'>
      <h1>Weather Forecast</h1>
      <div className="content">
        <SearchBar getCity={getCity} />
        <CurrentWeather data={weatherData} imgSrc={imgSrc}/>
        <Forecast forecastData={weatherData}/>
      </div>
    </div>
  )
}

export default App

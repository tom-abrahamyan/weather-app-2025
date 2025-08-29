import getWeatherIcon from "./getWeatherIcon.jsx";
  function CurrentWeather({ data, imgSrc }) {

    const temp = data?.list?.[0]?.main?.temp
        ? `${Math.round(data.list[0].main.temp - 273)}°C`
        : '';
    const cityName = data?.city?.name ? `${data.city.name} ${data.city.country}` : '';
    const description = data?.list?.[0]?.weather?.[0]?.description ? data.list[0].weather[0].description : "";
    const condition = data?.list?.[0]?.weather?.[0]?.main; // օրինակ "Clear", "Clouds"
    const weatherIcon = getWeatherIcon(condition);
  return (
      <div className="main">
        <div className="cityImages"  style={{ backgroundImage: `url(${imgSrc})` }}></div>
        <div className="currentWeather">
          <p className='cityName'>{cityName}</p>
          <p>
            <span className='temp'>{temp}</span>
            <span className='description'>{description}</span>
            <span className='dIcon'>{weatherIcon}</span>
          </p>
        </div>
      </div>
  )
}

export default CurrentWeather;